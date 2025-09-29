# API Endpoints

Complete reference for all Libromi Connect API endpoints.

## Base URL

```text
https://api.libromi.com/v1
```

## Contacts

### Get All Contacts

```http
GET /contacts
```

Retrieve a list of all contacts.

**Response:**

```json
{
  "data": [
    {
      "id": "contact_123",
      "name": "John Doe",
      "phone": "+1234567890",
      "email": "john@example.com",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 50,
    "total": 100
  }
}
```

### Create Contact

```http
POST /contacts
```

Create a new contact.

**Request Body:**

```json
{
  "name": "Jane Doe",
  "phone": "+1234567891",
  "email": "jane@example.com"
}
```

## Messages

### Send Message

```http
POST /messages
```

Send a message to a contact.

**Request Body:**

```json
{
  "contact_id": "contact_123",
  "message": "Hello, this is a test message!",
  "type": "text"
}
```

### Get Message History

```http
GET /messages/{contact_id}
```

Retrieve message history for a specific contact.

## Chatbots

### Get Chatbot Status

```http
GET /chatbots/{chatbot_id}/status
```

Get the current status of a chatbot.

### Update Chatbot

```http
PUT /chatbots/{chatbot_id}
```

Update chatbot configuration.

## Webhooks

### Create Webhook

```http
POST /webhooks
```

Create a new webhook endpoint.

**Request Body:**

```json
{
  "url": "https://your-app.com/webhook",
  "events": ["message.received", "contact.created"]
}
```
