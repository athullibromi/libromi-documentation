# Assign Staff API

Assign and manage staff assignments through Libromi Connect.

## Base URL

```text
https://wa-api.cloud/api/v1/staff
```

## Send Message

Send a message to a contact.

```http
POST /messages
```

### Request Body

```json
{
  "contact_id": "contact_123",
  "message": "Hello! How can we help you today?",
  "type": "text"
}
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_id` | string | Yes | ID of the contact to send message to |
| `message` | string | Yes | Message content |
| `type` | string | Yes | Message type: `text`, `image`, `file` |
| `media_url` | string | No | URL for media messages (image/file) |
| `scheduled_at` | string | No | ISO 8601 timestamp for scheduled messages |

### Response

```json
{
  "id": "msg_789",
  "contact_id": "contact_123",
  "message": "Hello! How can we help you today?",
  "type": "text",
  "status": "sent",
  "sent_at": "2024-01-15T12:00:00Z",
  "delivered_at": null,
  "read_at": null
}
```

## Send Media Message

Send an image or file message.

```http
POST /messages
```

### Request Body

```json
{
  "contact_id": "contact_123",
  "message": "Check out this image!",
  "type": "image",
  "media_url": "https://example.com/image.jpg"
}
```

## Get Message History

Retrieve message history for a contact.

```http
GET /messages/{contact_id}
```

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | integer | Page number (default: 1) |
| `per_page` | integer | Items per page (default: 50, max: 100) |
| `before` | string | Get messages before this timestamp |
| `after` | string | Get messages after this timestamp |

### Response

```json
{
  "data": [
    {
      "id": "msg_789",
      "contact_id": "contact_123",
      "message": "Hello! How can we help you today?",
      "type": "text",
      "direction": "outbound",
      "status": "delivered",
      "sent_at": "2024-01-15T12:00:00Z",
      "delivered_at": "2024-01-15T12:00:05Z",
      "read_at": "2024-01-15T12:01:00Z"
    },
    {
      "id": "msg_790",
      "contact_id": "contact_123",
      "message": "I need help with my order",
      "type": "text",
      "direction": "inbound",
      "status": "received",
      "received_at": "2024-01-15T12:02:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 50,
    "total": 25,
    "total_pages": 1
  }
}
```

## Get Message by ID

Retrieve a specific message.

```http
GET /messages/single/{message_id}
```

### Response

```json
{
  "id": "msg_789",
  "contact_id": "contact_123",
  "message": "Hello! How can we help you today?",
  "type": "text",
  "direction": "outbound",
  "status": "delivered",
  "sent_at": "2024-01-15T12:00:00Z",
  "delivered_at": "2024-01-15T12:00:05Z",
  "read_at": "2024-01-15T12:01:00Z"
}
```

## Schedule Message

Schedule a message to be sent later.

```http
POST /messages
```

### Request Body

```json
{
  "contact_id": "contact_123",
  "message": "Don't forget about your appointment tomorrow!",
  "type": "text",
  "scheduled_at": "2024-01-16T09:00:00Z"
}
```

## Message Status

Messages can have the following statuses:

| Status | Description |
|--------|-------------|
| `queued` | Message is queued for sending |
| `sent` | Message has been sent |
| `delivered` | Message was delivered to recipient |
| `read` | Message was read by recipient |
| `failed` | Message failed to send |

## Message Types

| Type | Description |
|------|-------------|
| `text` | Plain text message |
| `image` | Image message with media_url |
| `file` | File attachment with media_url |
| `template` | Template message (requires template_id) |

## Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Invalid API key |
| 404 | Not Found - Contact or message not found |
| 422 | Validation Error - Invalid message data |
| 429 | Rate Limited - Too many requests |

### Example Error Response

```json
{
  "error": {
    "code": "contact_not_found",
    "message": "Contact with ID 'contact_123' not found",
    "details": {
      "contact_id": "contact_123"
    }
  }
}
```