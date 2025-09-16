# Quick Start

Get up and running with Libromi Connect in just a few minutes.

## Step 1: Initialize the Client

```js
const { LibromiConnect } = require("@libromi/connect");

const client = new LibromiConnect({
  apiKey: "your_api_key_here",
});
```

## Step 2: Create a Contact

```js
const contact = await client.contacts.create({
  name: "John Doe",
  phone: "+1234567890",
  email: "john@example.com",
});

console.log("Contact created:", contact.id);
```

## Step 3: Send a Message

```js
const message = await client.messages.send({
  contactId: contact.id,
  message: "Hello from Libromi Connect!",
  type: "text",
});

console.log("Message sent:", message.id);
```

## Step 4: Set up a Webhook (Optional)

```js
const webhook = await client.webhooks.create({
  url: "https://your-app.com/webhook",
  events: ["message.received", "contact.created"],
});

console.log("Webhook created:", webhook.id);
```

## Complete Example

Here's a complete working example:

```js title="app.js"
const { LibromiConnect } = require("@libromi/connect");

async function main() {
  const client = new LibromiConnect({
    apiKey: process.env.LIBROMI_API_KEY,
  });

  try {
    // Create a contact
    const contact = await client.contacts.create({
      name: "Jane Smith",
      phone: "+1987654321",
      email: "jane@example.com",
    });

    // Send a welcome message
    await client.messages.send({
      contactId: contact.id,
      message: "Welcome to our service!",
      type: "text",
    });

    console.log("Setup complete!");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
```

## What's Next?

- Explore the [Contacts API](../endpoints/contacts) for managing contacts
- Learn about [Assign Staff API](../endpoints/staff) for staff assignments
- Set up [Messages Reports](../endpoints/reports) for analytics and reporting
- Check out [Integration Examples](../advanced/integrations)
