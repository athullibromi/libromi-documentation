# Troubleshooting Webhook Issues

This guide helps you diagnose and resolve common issues when setting up and using webhook scenarios in Libromi Connect.

## Common Setup Issues

### 1. Scenario Not Triggering

**Symptoms:**
- External system sends data but scenario doesn't execute
- No WhatsApp messages are sent despite successful webhook calls

**Possible Causes & Solutions:**

#### Check Scenario Status
- Ensure your scenario is saved and activated
- Look for the green "Save" confirmation in the scenario builder
- Verify the scenario appears in your active webhooks list

#### Verify Webhook URL
- Double-check that your external system is sending requests to the correct webhook URL
- Copy the URL directly from the Trigger node settings
- Ensure there are no extra characters or spaces in the URL

#### Test with Sample Data
```bash
# Test your webhook URL with curl
curl -X POST "YOUR_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "phone_number": "919876543210"
  }'
```

Expected response: `{"status": "success"}`

### 2. Data Structure Issues

**Symptoms:**
- Variables not appearing in the Variables panel
- Template parameters showing as empty
- "Data structure not determined" error

**Solutions:**

#### Redetermine Data Structure
1. Click on the Trigger node
2. Click "Redetermine data structure"
3. Send a new sample request with all required fields
4. Wait for "Successfully determined" confirmation

#### Check JSON Format
Ensure your sample data is valid JSON:

```json
// ✅ Correct format
{
  "name": "John Doe",
  "phone_number": "919876543210",
  "order_id": "ORD-123"
}

// ❌ Incorrect format (missing quotes)
{
  name: "John Doe",
  phone_number: 919876543210
}
```

#### Include All Required Fields
Send sample data that includes every field you plan to use:

```json
{
  "customer_name": "John Doe",
  "phone_number": "919876543210",
  "order_id": "ORD-123",
  "order_total": "₹1,299",
  "delivery_date": "2024-01-20"
}
```

### 3. WhatsApp Message Not Sending

**Symptoms:**
- Scenario triggers but WhatsApp message fails to send
- Error messages in scenario execution logs

**Common Causes & Solutions:**

#### Phone Number Format Issues
```json
// ✅ Correct format (with country code, no spaces)
"phone_number": "919876543210"

// ❌ Incorrect formats
"phone_number": "+91 98765 43210"  // Has spaces and +
"phone_number": "98765-43210"      // Missing country code, has dash
"phone_number": "9876543210"       // Missing country code
```

#### Template Variable Mapping
- Ensure all template variables are mapped to data fields
- Check that variable names match exactly (case-sensitive)
- Verify template is approved and active

#### WhatsApp Template Issues
- Confirm the selected template is approved by WhatsApp
- Check that template parameters match your data structure
- Ensure template is not expired or suspended

## External System Issues

### 4. Request Format Problems

**Symptoms:**
- Webhook receives data but scenario fails
- Inconsistent behavior between test and production

**Solutions:**

#### Content-Type Header
Ensure your external system sends the correct header:

```javascript
// Correct request format
fetch(webhookUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});
```

#### Data Consistency
Ensure your external system always sends data in the same structure:

```javascript
// Always include required fields
function sendWebhookData(customer) {
  const webhookData = {
    name: customer.name || 'Unknown',
    phone_number: customer.phone || '',
    // Include all expected fields
  };
  
  // Validate before sending
  if (!webhookData.phone_number) {
    console.error('Phone number is required');
    return;
  }
  
  sendToWebhook(webhookData);
}
```

### 5. Network and Connectivity Issues

**Symptoms:**
- Intermittent failures
- Timeouts or connection errors

**Solutions:**

#### Implement Retry Logic
```javascript
async function sendWebhookWithRetry(data, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        timeout: 10000 // 10 second timeout
      });
      
      if (response.ok) {
        console.log('Webhook sent successfully');
        return;
      }
      
      throw new Error(`HTTP ${response.status}`);
    } catch (error) {
      console.log(`Attempt ${attempt} failed:`, error.message);
      
      if (attempt < maxRetries) {
        // Wait before retry (exponential backoff)
        await new Promise(resolve => 
          setTimeout(resolve, 1000 * Math.pow(2, attempt))
        );
      }
    }
  }
  
  console.error('All webhook attempts failed');
}
```

## Debugging Tools and Techniques

### 1. Scenario Execution Logs

Check execution logs in Libromi Connect:
1. Go to Flows > Webhooks
2. Find your webhook scenario
3. Click to view execution history
4. Look for error messages or failed steps

### 2. Test with Webhook Testing Tools

#### Using webhook.site
1. Go to https://webhook.site
2. Copy the unique URL
3. Replace your webhook URL temporarily
4. Send test requests and inspect the data format

#### Using Postman
1. Create a new POST request
2. Set URL to your webhook URL
3. Set headers: `Content-Type: application/json`
4. Add your JSON body
5. Send and check response

### 3. External System Logging

Add logging to your external system:

```javascript
function sendToWebhook(data) {
  console.log('Sending webhook data:', JSON.stringify(data, null, 2));
  
  fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => {
    console.log('Webhook response status:', response.status);
    return response.text();
  })
  .then(text => {
    console.log('Webhook response body:', text);
  })
  .catch(error => {
    console.error('Webhook error:', error);
  });
}
```

## Performance Issues

### 1. Slow Scenario Execution

**Symptoms:**
- Long delays between webhook trigger and message delivery
- Timeouts in external systems

**Solutions:**

#### Optimize Scenario Design
- Remove unnecessary nodes or conditions
- Simplify complex logic
- Use efficient template designs

#### Check System Load
- Monitor your Libromi Connect account usage
- Ensure you're within rate limits
- Consider upgrading if hitting limits

### 2. High Volume Issues

**Symptoms:**
- Some webhooks not processing during peak times
- Inconsistent delivery rates

**Solutions:**

#### Implement Queuing
In your external system, implement a queue for webhook requests:

```javascript
const webhookQueue = [];
let processing = false;

function addToQueue(data) {
  webhookQueue.push(data);
  processQueue();
}

async function processQueue() {
  if (processing || webhookQueue.length === 0) return;
  
  processing = true;
  
  while (webhookQueue.length > 0) {
    const data = webhookQueue.shift();
    try {
      await sendWebhook(data);
      // Add delay between requests
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error('Queue processing error:', error);
    }
  }
  
  processing = false;
}
```

## Getting Help

### Information to Gather

When reporting issues, include:

1. **Scenario Details:**
   - Webhook URL (without sensitive parts)
   - Scenario configuration screenshots
   - Error messages from execution logs

2. **External System Details:**
   - Sample request data (anonymized)
   - Response codes and messages
   - System logs showing webhook attempts

3. **Expected vs Actual Behavior:**
   - What should happen
   - What actually happens
   - When the issue started

### Testing Checklist

Before reporting issues, verify:

- [ ] Scenario is saved and active
- [ ] Data structure is properly determined
- [ ] Phone numbers include country codes
- [ ] WhatsApp template is approved and active
- [ ] External system sends valid JSON
- [ ] Content-Type header is set correctly
- [ ] All required fields are included in requests
- [ ] Test requests work with tools like Postman

### Contact Support

If issues persist after troubleshooting:

1. Document all troubleshooting steps taken
2. Gather the information listed above
3. Contact Libromi Connect support with detailed information
4. Include scenario IDs and webhook execution logs when possible

## Prevention Tips

1. **Test Thoroughly:** Always test scenarios with sample data before going live
2. **Monitor Regularly:** Check execution logs periodically for errors
3. **Validate Data:** Implement validation in external systems before sending
4. **Use Consistent Formats:** Maintain consistent data structures across all requests
5. **Plan for Scale:** Consider volume and implement appropriate queuing/throttling
6. **Keep Templates Updated:** Ensure WhatsApp templates remain approved and active
7. **Document Integration:** Maintain documentation of your webhook integrations

## Next Steps

- [Understanding Data Structure](./events.md)
- [Security Best Practices](./security.md)