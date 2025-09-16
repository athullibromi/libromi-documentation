# Messages Report API Documentation

## Overview

The Messages Report API provides filtering and reporting capabilities for sent messages within the system. It allows filtering by various status fields, date ranges, phone numbers, WhatsApp message IDs, and source.

**Base Query Filters:**

- Only messages with non-null `source`
- Only sent messages (`is_sent = true`)
- Only non-bot messages (`is_bot = false`)
- Scoped to authenticated user's company

## Authentication

All endpoints require authentication using Laravel Sanctum. Include the bearer token in the Authorization header:

```
Authorization: Bearer {token}
```

## Endpoint

### Get Messages Report

- **GET** `https://wa-api.cloud/api/v1/messages/report`
- **Description**: Retrieves a filtered list of messages with pagination
- **Authentication**: Required (Sanctum)

## Query Parameters

### Date Filters

- `date_from` (string, optional): Start date in ISO format (e.g., "2025-01-01")
- `date_to` (string, optional): End date in ISO format (e.g., "2025-01-31")

### Status Filters

- `is_sent` (boolean, optional): Filter by sent status
- `is_delivered` (boolean, optional): Filter by delivered status
- `is_failed` (boolean, optional): Filter by failed status
- `is_seen` (boolean, optional): Filter by seen status
- `has_errors` (boolean, optional): Filter by error presence
- `has_validation_errors` (boolean, optional): Filter by validation error presence

### Additional Filters

- `phone_number` (string, optional): Filter by contact phone number (partial match)
- `wa_message_id` (string, optional): Filter by WhatsApp message ID (exact match)
- `source` (string, optional): Filter by message source

### Pagination

- `per_page` (int, optional): Number of results per page (default: 50, max: 100)
- `page` (int, optional): Page number (default: 1)

## Example Requests

### Basic Date Range Filter

```bash
curl -X GET "https://wa-api.cloud/api/v1/messages/report?date_from=2025-01-01&date_to=2025-01-31" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json"
```

### Filter Failed Messages

```bash
curl -X GET "https://wa-api.cloud/api/v1/messages/report?is_failed=true&has_errors=true" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json"
```

### Filter by Phone Number

```bash
curl -X GET "https://wa-api.cloud/api/v1/messages/report?phone_number=1234567890" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json"
```

### Filter by WhatsApp Message ID

```bash
curl -X GET "https://wa-api.cloud/api/v1/messages/report?wa_message_id=wamid.xxx" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json"
```

### Combined Filters

```bash
curl -X GET "https://wa-api.cloud/api/v1/messages/report?date_from=2025-01-01&is_sent=true&is_delivered=true&per_page=25" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json"
```

## Response Format

### Success Response

```json
{
  "status": "SUCCESS",
  "message": "operation executed successfully",
  "data": {
    "summary": {
      "total_messages": 1500,
      "sent_messages": 1400,
      "delivered_messages": 1350,
      "failed_messages": 50,
      "seen_messages": 1200,
      "error_messages": 25
    },
    "current_page": 1,
    "data": [
      {
        "id": 12345,
        "wa_message_id": "wamid.xxx",
        "message_type": "TEXT",
        "errors": null,
        "validation_errors": null,
        "is_delivered": true,
        "is_sent": true,
        "is_failed": false,
        "is_seen": true,
        "has_errors": false,
        "has_validation_errors": false,
        "contact": {
          "id": 50,
          "name": "John Doe",
          "phone_number": "+1234567890"
        }
      }
    ],
    "first_page_url": "https://wa-api.cloud/api/v1/messages/report?page=1",
    "from": 1,
    "last_page": 20,
    "last_page_url": "https://wa-api.cloud/api/v1/messages/report?page=20",
    "next_page_url": "https://wa-api.cloud/api/v1/messages/report?page=2",
    "path": "https://wa-api.cloud/api/v1/messages/report",
    "per_page": 50,
    "prev_page_url": null,
    "to": 50,
    "total": 1000
  }
}
```

## Response Fields

### Summary Fields

The response includes a summary object with aggregate statistics:

- **total_messages**: Total number of messages matching the filters
- **sent_messages**: Number of sent messages (same as total due to base filter)
- **delivered_messages**: Number of delivered messages
- **failed_messages**: Number of failed messages (failed_at, errors, or validation_errors)
- **seen_messages**: Number of messages seen by recipients
- **error_messages**: Number of messages with errors

### Message Fields

Each message in the response contains the following fields:

- **id**: Unique message identifier
- **wa_message_id**: WhatsApp message identifier
- **message_type**: Type of message (TEXT, IMAGE, DOCUMENT, etc.)
- **errors**: Any error details (null if no errors)
- **validation_errors**: Validation error details (null if no validation errors)
- **is_delivered**: Boolean indicating if message was delivered
- **is_sent**: Boolean indicating if message was sent
- **is_failed**: Boolean indicating if message failed
- **is_seen**: Boolean indicating if message was seen by recipient
- **has_errors**: Boolean indicating presence of errors
- **has_validation_errors**: Boolean indicating presence of validation errors
- **contact**: Contact information object containing:
  - **id**: Contact unique identifier
  - **name**: Contact name
  - **phone_number**: Contact phone number

## Notes

- **Base Query**: Only messages with non-null `source`, `is_sent = true`, and `is_bot = false` are included in results
- **Authorization**: Users can only access messages from their own company
- **Ordering**: Results are ordered by `created_at` in descending order (newest first)
- **Performance**: For large datasets, consider using smaller page sizes and date range filters

## Error Responses

### Unauthorized (401)

```json
{
  "message": "Unauthenticated."
}
```

### Validation Error (422)

```json
{
  "status": "ERROR",
  "message": "Validation failed",
  "errors": {
    "date_from": ["The date from field must be a valid date."]
  }
}
```
