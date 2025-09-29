# Creating Your Webhook Scenario

This guide will walk you through creating a webhook scenario in Libromi Connect to automate WhatsApp messages when external systems send data to your webhook URL.

## Part 1: Creating Your Webhook Scenario

First, you need to create a new webhook and get its unique URL.

### Step 1: Navigate to Webhooks

1. From the main dashboard, click the **Flows** icon (a branching diagram) in the left-side navigation menu
2. Select **Webhooks** from the menu

### Step 2: Create a New Webhook

1. Click the button to create a new webhook
2. A pop-up will appear with your new Webhook URL
3. For general use, click **Skip and create Scenario**

This will take you to the visual flow builder where you'll see a **Trigger** node already in place. This Trigger node contains your unique Webhook URL.

## Part 2: Defining the Incoming Data Structure

Before you can use data from an external app, you must teach Libromi Connect what kind of data to expect by sending a sample request.

### Step 1: Copy the Webhook URL

1. Click on the **Trigger** node to open its settings
2. Click the **Copy address to clipboard** button to copy your unique URL

### Step 2: Start Listening Mode

1. Click the **Redetermine data structure** button
2. The button will change to a "Stop" state, indicating the webhook is actively listening for incoming requests

### Step 3: Send a Sample Request

You need to send a sample `POST` request from your external application or an API tool like Postman.

**Request Configuration:**
- **Method:** `POST`
- **URL:** Paste the Webhook URL you copied
- **Body:** Select `raw` and `JSON`

**Example JSON Body:**
```json
{
  "name": "John Doe",
  "phone_number": "919876543210"
}
```

*Note: Include the country code in the phone number.*

### Step 4: Send and Confirm

1. Send the request from your API tool (e.g., click "Send" in Postman)
2. You should receive a `{"status": "success"}` response
3. Switch back to your Libromi Connect Scenario
4. The "Redetermine data structure" button will show "Successfully determined"

Libromi Connect now knows to expect `name` and `phone_number` variables from this webhook.

## Part 3: Building the Automation

Now configure what happens when the webhook receives data.

### Step 1: Add a WhatsApp Node

1. From the panel of available nodes, drag a **WhatsApp** node onto the canvas
2. Click and drag the connector dot from the right side of the **Trigger** node
3. Connect it to the left side of the new **WhatsApp** node

### Step 2: Configure the WhatsApp Node

Click the **WhatsApp** node to open its settings:

1. **Action:** Ensure this is set to `SEND_TEMPLATE`
2. **Send to:** Click inside this field to map the recipient dynamically
   - The "Variables" panel will appear showing your data fields (`name`, `phone_number`)
   - Click on the **phone_number** variable to insert `\{\{phone_number\}\}`
3. **WhatsApp Message Template:** Select your pre-approved message template from the dropdown
4. **Map Template Variables:** If your template includes variables (e.g., "Hello, \{\{1\}\}!"):
   - New fields will appear for each template parameter
   - Map the corresponding data from the "Variables" panel
   - For example, drag the `name` variable into the field for parameter 1

### Step 3: Save and Activate

1. Click the green **Save** button at the top of the canvas
2. Your webhook is now active and ready to receive requests

## Testing Your Webhook

Once saved, your webhook will automatically trigger whenever your external application sends a `POST` request with the correct JSON structure to the webhook URL. The Scenario will:

1. Receive the incoming data
2. Extract the phone number and other variables
3. Send the configured WhatsApp template message to the specified recipient

## Requirements for External Systems

When integrating with external systems, ensure they:

- Send POST requests to your webhook URL
- Include proper JSON content-type headers
- Send data in the structure you defined during setup
- Include phone numbers with country codes

## Next Steps

- [Understanding Data Structure and Variables](./events.md)
- [Security Best Practices](./security.md)
- [Troubleshooting Common Issues](./troubleshooting.md)