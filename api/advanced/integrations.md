# Third-party Integrations

Learn how to integrate Libromi Connect with popular third-party services and platforms.

## CRM Integrations

### Salesforce Integration

Connect Libromi with Salesforce to sync contacts and activities:

```js
const salesforce = require('salesforce-api');
const { LibromiConnect } = require('@libromi/connect');

class SalesforceIntegration {
  constructor(salesforceConfig, libromiConfig) {
    this.sf = new salesforce(salesforceConfig);
    this.libromi = new LibromiConnect(libromiConfig);
  }

  async syncContact(libromiContact) {
    // Create or update contact in Salesforce
    const sfContact = await this.sf.sobject('Contact').create({
      FirstName: libromiContact.firstName,
      LastName: libromiContact.lastName,
      Phone: libromiContact.phone,
      Email: libromiContact.email,
      Libromi_Contact_ID__c: libromiContact.id
    });

    return sfContact;
  }
}
```

### HubSpot Integration

Sync contacts and track interactions with HubSpot:

```js
const hubspot = require('@hubspot/api-client');

class HubSpotIntegration {
  constructor(hubspotApiKey, libromiConfig) {
    this.hubspot = new hubspot.Client({ apiKey: hubspotApiKey });
    this.libromi = new LibromiConnect(libromiConfig);
  }

  async createContact(libromiContact) {
    const properties = {
      firstname: libromiContact.firstName,
      lastname: libromiContact.lastName,
      phone: libromiContact.phone,
      email: libromiContact.email,
      libromi_contact_id: libromiContact.id
    };

    const response = await this.hubspot.crm.contacts.basicApi.create({
      properties
    });

    return response;
  }
}
```

## E-commerce Integrations

### Shopify Integration

Connect with Shopify to send order updates and marketing messages:

```js
const Shopify = require('shopify-api-node');

class ShopifyIntegration {
  constructor(shopifyConfig, libromiConfig) {
    this.shopify = new Shopify(shopifyConfig);
    this.libromi = new LibromiConnect(libromiConfig);
  }

  async sendOrderConfirmation(order) {
    const customer = await this.shopify.customer.get(order.customer.id);
    
    // Find or create contact in Libromi
    let contact = await this.libromi.contacts.findByPhone(customer.phone);
    if (!contact) {
      contact = await this.libromi.contacts.create({
        name: `${customer.first_name} ${customer.last_name}`,
        phone: customer.phone,
        email: customer.email
      });
    }

    // Send order confirmation message
    await this.libromi.messages.send({
      contactId: contact.id,
      message: `Hi ${customer.first_name}! Your order #${order.order_number} has been confirmed. Total: $${order.total_price}`,
      type: 'text'
    });
  }
}
```

## Marketing Automation

### Mailchimp Integration

Sync contacts between Libromi and Mailchimp:

```js
const mailchimp = require('@mailchimp/mailchimp_marketing');

class MailchimpIntegration {
  constructor(mailchimpConfig, libromiConfig) {
    mailchimp.setConfig(mailchimpConfig);
    this.libromi = new LibromiConnect(libromiConfig);
  }

  async syncToMailchimp(libromiContact, listId) {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: libromiContact.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: libromiContact.firstName,
        LNAME: libromiContact.lastName,
        PHONE: libromiContact.phone
      },
      tags: ['libromi-contact']
    });

    return response;
  }
}
```

## Webhook Integration Examples

### Slack Notifications

Send notifications to Slack when events occur:

```js
const { WebClient } = require('@slack/web-api');

class SlackIntegration {
  constructor(slackToken) {
    this.slack = new WebClient(slackToken);
  }

  async handleWebhook(event) {
    switch (event.type) {
      case 'message.received':
        await this.notifyNewMessage(event.data);
        break;
      case 'contact.created':
        await this.notifyNewContact(event.data);
        break;
    }
  }

  async notifyNewMessage(data) {
    await this.slack.chat.postMessage({
      channel: '#customer-support',
      text: `New message from ${data.contact.name}: "${data.message.content}"`
    });
  }

  async notifyNewContact(data) {
    await this.slack.chat.postMessage({
      channel: '#sales',
      text: `New contact created: ${data.contact.name} (${data.contact.phone})`
    });
  }
}
```

## Database Integrations

### MongoDB Integration

Store and sync data with MongoDB:

```js
const { MongoClient } = require('mongodb');

class MongoDBIntegration {
  constructor(mongoUrl, libromiConfig) {
    this.client = new MongoClient(mongoUrl);
    this.libromi = new LibromiConnect(libromiConfig);
  }

  async syncContact(libromiContact) {
    await this.client.connect();
    const db = this.client.db('libromi');
    const collection = db.collection('contacts');

    await collection.updateOne(
      { libromi_id: libromiContact.id },
      { 
        $set: {
          ...libromiContact,
          last_synced: new Date()
        }
      },
      { upsert: true }
    );
  }
}
```

## Best Practices

1. **Use environment variables** for API keys and secrets
2. **Implement proper error handling** and retry logic
3. **Rate limit your API calls** to avoid hitting limits
4. **Use webhooks** instead of polling when possible
5. **Log integration activities** for debugging
6. **Test integrations thoroughly** before production deployment

## Getting Help

If you need help with a specific integration:

1. Check our [API Reference](/api) for detailed documentation
2. Look at our [GitHub examples repository](https://github.com/libromi/examples)
3. Contact our support team for custom integration assistance