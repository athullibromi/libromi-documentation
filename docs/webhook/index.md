# How to Automate WhatsApp Messages with Webhooks

Webhooks allow you to create powerful automations by connecting external applications and services directly to Libromi Connect. When an event occurs in a third-party system (like a new user signup, a form submission, or a new order), that system can send data to a unique Libromi Connect URL. This triggers a flow, or "Scenario," allowing you to automatically send a WhatsApp message.

## What are Webhooks?

Webhooks are HTTP callbacks that enable real-time communication between different systems. In Libromi Connect, webhooks act as triggers that start automated workflows (Scenarios) when they receive data from external applications.

## How It Works

1. **External Event**: Something happens in your external system (new order, form submission, etc.)
2. **Data Sent**: Your system sends a POST request with relevant data to your Libromi Connect webhook URL
3. **Scenario Triggered**: The webhook receives the data and triggers your configured Scenario
4. **WhatsApp Message Sent**: The Scenario automatically sends a WhatsApp template message using the received data

## Common Use Cases

- **Welcome Messages**: Send automated welcome messages to new users
- **Order Confirmations**: Notify customers when they place an order
- **Appointment Reminders**: Send reminders based on booking systems
- **Lead Notifications**: Alert your team when new leads are captured
- **Status Updates**: Keep customers informed about service updates
- **Form Submissions**: Follow up on contact form submissions

## Getting Started

This guide will walk you through setting up a Webhook Scenario to send a WhatsApp template message when data is received from an external system.

## Next Steps

- [Creating Your First Webhook](./setup.md)
- [Understanding Data Structure](./events.md)
- [Security Best Practices](./security.md)
- [Troubleshooting Common Issues](./troubleshooting.md)