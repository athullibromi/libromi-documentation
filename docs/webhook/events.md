# Understanding Data Structure and Variables

This page explains how to work with data in your webhook scenarios and the structure of data you can send to trigger your automations.

## How Data Structure Works

When you create a webhook scenario in Libromi Connect, you need to define what data structure to expect. This is done by sending a sample request during the setup process, which teaches the system what variables will be available for use in your scenario.

## Defining Your Data Structure

### Sample Request Format

Your external system should send data as a JSON POST request. Here's the basic structure:

```json
{
  "field1": "value1",
  "field2": "value2",
  "field3": "value3"
}
```

### Common Data Structures

#### Customer Information
```json
{
  "name": "John Doe",
  "phone_number": "919876543210",
  "email": "john@example.com"
}
```

#### Order Information
```json
{
  "customer_name": "Jane Smith",
  "phone_number": "919876543210",
  "order_id": "ORD-12345",
  "order_total": "₹1,299",
  "order_status": "confirmed"
}
```

#### Appointment Booking
```json
{
  "client_name": "Mike Johnson",
  "phone_number": "919876543210",
  "appointment_date": "2024-01-20",
  "appointment_time": "2:00 PM",
  "service_type": "Consultation"
}
```

#### Lead Capture
```json
{
  "lead_name": "Sarah Wilson",
  "phone_number": "919876543210",
  "email": "sarah@example.com",
  "interest": "Product Demo",
  "source": "Website Form"
}
```

## Using Variables in Your Scenario

Once you've defined your data structure, the variables become available throughout your scenario.

### In WhatsApp Templates

When configuring your WhatsApp node, you can map variables to template parameters:

- **Template**: "Hello \{\{1\}\}, your order \{\{2\}\} has been confirmed!"
- **Parameter 1**: Map to `\{\{customer_name\}\}`
- **Parameter 2**: Map to `\{\{order_id\}\}`

### Variable Mapping

Variables appear in the Variables panel and can be inserted by:
1. Clicking on the variable name
2. Dragging and dropping into fields
3. Typing `\{\{variable_name\}\}` directly

## Phone Number Requirements

### Format Requirements
- Always include the country code
- Remove any spaces, dashes, or special characters
- Examples:
  - ✅ Correct: `"919876543210"`
  - ❌ Incorrect: `"+91 98765 43210"`
  - ❌ Incorrect: `"98765-43210"`

### Country Code Examples
- India: `919876543210`
- USA: `15551234567`
- UK: `447911123456`
- UAE: `971501234567`

## Advanced Data Structures

### Nested Objects
```json
{
  "customer": {
    "name": "John Doe",
    "phone": "919876543210",
    "address": {
      "city": "Mumbai",
      "state": "Maharashtra"
    }
  },
  "order": {
    "id": "ORD-12345",
    "total": "₹1,299"
  }
}
```

Access nested values using dot notation: `\{\{customer.name\}\}`, `\{\{customer.address.city\}\}`

### Arrays
```json
{
  "customer_name": "John Doe",
  "phone_number": "919876543210",
  "items": ["Product A", "Product B", "Product C"]
}
```

## Data Validation

### Required Fields
Ensure your external system always sends:
- `phone_number` (with country code)
- Any fields used in your WhatsApp template variables

### Optional Fields
Additional fields can be included for:
- Conditional logic in scenarios
- Future use in expanded automations
- Logging and tracking purposes

## Testing Your Data Structure

### Using Postman
1. Set method to `POST`
2. Enter your webhook URL
3. Set headers: `Content-Type: application/json`
4. Add your JSON body
5. Send the request

### Using cURL
```bash
curl -X POST https://your-webhook-url \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "phone_number": "919876543210"
  }'
```

### Expected Response
A successful request should return:
```json
{"status": "success"}
```

## Best Practices

1. **Consistent Structure**: Always send the same data structure from your external system
2. **Required Fields**: Ensure critical fields like phone numbers are always included
3. **Data Types**: Keep data types consistent (strings, numbers, booleans)
4. **Testing**: Test with sample data before connecting your live system
5. **Documentation**: Document your data structure for team members

## Common Issues

- **Missing Variables**: Ensure all template variables have corresponding data fields
- **Phone Format**: Double-check phone number format includes country code
- **Data Types**: Ensure numbers are sent as strings if used in templates
- **Special Characters**: Avoid special characters that might break JSON parsing

## Next Steps

- [Security Best Practices](./security.md)
- [Troubleshooting Common Issues](./troubleshooting.md)