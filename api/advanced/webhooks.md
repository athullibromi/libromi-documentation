# Webhooks

Learn how to set up and use webhooks to receive real-time notifications from Libromi Connect.

## What are Webhooks?

Webhooks allow your application to receive real-time notifications when events occur in Libromi Connect. Instead of polling our API, we'll send HTTP POST requests to your specified endpoint.

## Setting up Webhooks

### 1. Create a Webhook Endpoint

First, create an endpoint in your application to receive webhook events:

```js title="webhook-handler.js"
const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
  const event = req.body;
  
  console.log('Received webhook:', event.type);
  
  switch (event.type) {
    case 'message.received':
      handleMessageReceived(event.data);
      break;
    case 'contact.created':
      handleContactCreated(event.data);
      break;
    default:
      console.log('Unknown event type:', event.type);
  }
  
  res.status(200).send('OK');
});

function handleMessageReceived(data) {
  console.log('New message from:', data.contact.name);
  console.log('Message:', data.message.content);
}

function handleContactCreated(data) {
  console.log('New contact created:', data.contact.name);
}

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});
```

### 2. Register the Webhook

Use the API to register your webhook endpoint:

```js
const webhook = await client.webhooks.create({
  url: 'https://your-app.com/webhook',
  events: [
    'message.received',
    'message.sent',
    'contact.created',
    'contact.updated'
  ]
});
```

## Available Events

| Event | Description |
|-------|-------------|
| `message.received` | A new message was received from a contact |
| `message.sent` | A message was sent to a contact |
| `contact.created` | A new contact was created |
| `contact.updated` | A contact's information was updated |
| `chatbot.triggered` | A chatbot was triggered |

## Webhook Security

### Verify Webhook Signatures

Always verify that webhooks are coming from Libromi Connect:

```js
const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
    
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

app.post('/webhook', (req, res) => {
  const signature = req.headers['x-libromi-signature'];
  const payload = JSON.stringify(req.body);
  
  if (!verifyWebhookSignature(payload, signature, process.env.WEBHOOK_SECRET)) {
    return res.status(401).send('Unauthorized');
  }
  
  // Process the webhook...
});
```

## Best Practices

1. **Always respond with 200**: Return a 200 status code to acknowledge receipt
2. **Process asynchronously**: Handle webhook processing in background jobs
3. **Implement idempotency**: Use event IDs to prevent duplicate processing
4. **Set timeouts**: We'll timeout requests after 30 seconds
5. **Handle retries**: We'll retry failed webhooks up to 3 times

## Testing Webhooks

Use tools like ngrok to test webhooks locally:

```bash
# Install ngrok
npm install -g ngrok

# Expose your local server
ngrok http 3000
```

Then use the ngrok URL when registering your webhook.