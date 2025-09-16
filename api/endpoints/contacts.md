# Contact API Documentation

This document describes the REST endpoints for managing contacts by phone number.

## Table of Contents

1. Overview
2. Authentication
3. Endpoints
   - GET /api/v1/contact/\{phone_number\}
   - PUT /api/v1/contact/\{phone_number\}/attributes
4. Examples
5. Error Responses
6. Rate Limiting & Best Practices

---

## 1. Overview

The Contact API lets you:

- Retrieve (or create) a contact by phone number, including all related data (conversations, groups, tags, attributes, etc.).
- Update multiple contact attributes in a single request.

The API automatically **normalises phone numbers** by stripping non-numeric characters, so all of the following resolve to the same contact:

```
+1-234-567-890
(123) 456-7890
123.456.7890
123 456 7890
1234567890
```

If the contact does not exist for the authenticated company it will be **created on-the-fly** using the supplied phone number.

---

## 2. Authentication

The endpoints are protected by **Laravel Sanctum**. Pass a bearer token in the `Authorization` header of every request:

```
Authorization: Bearer {token}
```

All responses will return **401 Unauthenticated** if the token is missing or invalid.

---

## 3. Endpoints

### 3.1 GET `/api/v1/contact/\{phone_number\}`

Retrieve a contact and all related data.

| Parameter    | In   | Type   | Description                         |
| ------------ | ---- | ------ | ----------------------------------- |
| phone_number | path | string | Phone number to lookup (any format) |

**Response 200**

```json
{
  "status": "SUCCESS",
  "message": "Operation completed successfully",
  "contact": {
    "id": 1,
    "name": "John Doe",
    "phone_number": "1234567890",
    "dnd_enabled": false,
    "created_at": "2025-07-08T10:00:00.000000Z",
    "updated_at": "2025-07-08T10:00:00.000000Z",
    "conversations": [
      {
        "id": 42,
        "state": "open",
        "created_at": "2025-07-08T09:58:00.000000Z",
        "assigned_staff": {
          "id": 7,
          "name": "Alice Smith",
          "email": "alice@example.com"
        }
      }
    ],
    "contact_attributes": [
      {
        "attribute_name": "age",
        "attribute_value": 30,
        "display_value": "30",
        "attribute_field": {
          "attribute_label": "Age",
          "field_type": "number",
          "is_read_only": false,
          "visibility": "visible_to_all"
        }
      },
      {
        "attribute_name": "is_vip",
        "attribute_value": true,
        "display_value": "Yes",
        "attribute_field": {
          "attribute_label": "VIP Status",
          "field_type": "checkbox",
          "is_read_only": false,
          "visibility": "visible_to_all"
        }
      },
      {
        "attribute_name": "preferred_languages",
        "attribute_value": ["english", "spanish"],
        "display_value": "english, spanish",
        "attribute_field": {
          "attribute_label": "Preferred Languages",
          "field_type": "multiselect",
          "is_read_only": false,
          "visibility": "visible_to_all"
        }
      }
    ],
    "contact_attributes_map": {
      "age": 30,
      "city": "New York",
      "nickname": "Johnny",
      "is_vip": true,
      "preferred_languages": ["english", "spanish"]
    },
    "contact_groups": [{ "id": 3, "name": "VIP" }],
    "tags": [{ "id": 5, "name": "Important" }]
  }
}
```

### 3.2 PUT `/api/v1/contact/\{phone_number\}/attributes`

Update (or remove) one or more contact attributes.

| Parameter    | In   | Type   | Description                          |
| ------------ | ---- | ------ | ------------------------------------ |
| phone_number | path | string | Phone number identifying the contact |

**Request Body**

```json
{
  "age": 31,
  "city": "New York",
  "email": "john.doe@example.com",
  "website": "https://example.com",
  "is_vip": true,
  "preferred_languages": ["english", "spanish"],
  "date_of_birth": "1990-01-15",
  "last_contact": "2025-01-25T10:30:00Z",
  "nickname": null
}
```

_Provide `null` or an empty string to **remove** an attribute._

**Supported Attribute Types:**

- `text`, `textarea`, `email`, `url`, `phone`: String values
- `number`: Integer or float values
- `checkbox`: Boolean values (true/false)
- `select`, `radio`: String values from predefined options
- `multiselect`: Array of string values from predefined options
- `date`: ISO date string (YYYY-MM-DD)
- `datetime`: ISO datetime string (YYYY-MM-DDTHH:MM:SSZ)

**Response 200**

```json
{
  "status": "SUCCESS",
  "message": "Contact attributes updated successfully",
  "contact": {
    /* same structure as GET */
  }
}
```

---

## 4. Examples (cURL)

### Get Contact

```bash
curl -X GET "https://wa-api.cloud/api/v1/contact/1234567890" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/json"
```

### Update Attributes

```bash
curl -X PUT "https://wa-api.cloud/api/v1/contact/1234567890/attributes" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "age": 31,
    "city": "New York",
    "email": "john.doe@example.com",
    "is_vip": true,
    "preferred_languages": ["english", "spanish"],
    "date_of_birth": "1990-01-15"
  }'
```

---

## 5. Error Responses

| Status | When                                                                 | Example                                                                                                                                                                                  |
| ------ | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 401    | Missing/invalid token                                                | `{ "message": "Unauthenticated." }`                                                                                                                                                      |
| 404    | Contact not found (should not occur because contact is auto-created) | `{ "status": "FAILED", "message": "Contact not found" }`                                                                                                                                 |
| 422    | Validation error                                                     | `{ "status": "FAILED", "message": "Validation failed", "errors": { "age": ["The number field must be a valid number."], "email": ["The email field must be a valid email address."] } }` |

**Common Validation Errors:**

- **Number fields**: Must be numeric values
- **Email fields**: Must be valid email addresses
- **URL fields**: Must be valid URLs
- **Checkbox fields**: Must be boolean values (true/false)
- **Select/Radio fields**: Must be valid option values
- **Multiselect fields**: Must be arrays of valid option values
- **Date fields**: Must be valid date strings
- **DateTime fields**: Must be valid datetime strings
- **Read-only fields**: Cannot be modified
- **Manager-only fields**: Require manager role to edit

---

## 6. Rate Limiting & Best Practices

- Endpoints are protected by the standard API throttle middleware (`60 req/min` by default).
- Batch attribute updates instead of making multiple requests.
- Always store phone numbers in a consistent, numeric-only format in your systems.
- Use the Bruno tests in `bruno/api/contact` to automate manual testing.
