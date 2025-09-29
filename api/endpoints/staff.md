# Conversation Assignment API

## Change Conversation Assigned Staff

### Endpoint
```
PUT /api/conversation/assign-staff
```

### Description
This endpoint allows you to change the assigned staff for a conversation by providing a phone number (to identify the conversation) and a username (to identify the staff member).

### Authentication
Requires Bearer token authentication via `Authorization: Bearer {token}` header.

### Request Body
```json
{
    "phone_number": "string (required) - Phone number of the contact",
    "username": "string (required) - Email address of the staff member"
}
```

### Example Request
```bash
curl -X PUT \
  {{api_base}}/conversation/assign-staff \
  -H 'Authorization: Bearer {your_token}' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "phone_number": "1234567890",
    "username": "staff@company.com"
  }'
```

### Success Response
**Status Code:** `200 OK`

```json
{
    "status": "success",
    "message": "Conversation assigned staff changed successfully",
    "conversation": {
        "id": 123,
        "contact": {
            "name": "John Doe",
            "phone_number": "1234567890"
        },
        "assigned_staff": {
            "id": 456,
            "name": "Jane Smith",
            "email": "staff@company.com"
        },
        "assigned_at": "2023-12-01T10:30:00Z"
    }
}
```

### Error Responses

#### Contact Not Found
**Status Code:** `404 Not Found`
```json
{
    "status": "failed",
    "message": "Contact not found for the given phone number"
}
```

#### Conversation Not Found
**Status Code:** `404 Not Found`
```json
{
    "status": "failed",
    "message": "Conversation not found for the given phone number"
}
```

#### Staff Not Found
**Status Code:** `404 Not Found`
```json
{
    "status": "failed",
    "message": "Staff not found for the given username"
}
```

#### Validation Error
**Status Code:** `422 Unprocessable Entity`
```json
{
    "message": "The given data was invalid.",
    "errors": {
        "phone_number": ["The phone number field is required."],
        "username": ["The username field is required."]
    }
}
```

#### Server Error
**Status Code:** `500 Internal Server Error`
```json
{
    "status": "failed",
    "message": "An error occurred while changing conversation assigned staff",
    "error": "Error details..."
}
```

### Notes

1. **Phone Number Matching**: The phone number is sanitized (non-numeric characters removed) before lookup.
2. **Username**: The system uses the staff's email address as their username.
3. **Conversation Lookup**: The system finds the most recent conversation for the given contact.
4. **Company Scoped**: All lookups are scoped to the authenticated user's company.
5. **Permissions**: The action respects the same permission policies as the GraphQL mutation.

### Related GraphQL Mutation
This REST endpoint corresponds to the GraphQL mutation:
```graphql
mutation ChangeConversationAssignedStaff($conversation_id: ID!, $staff_id: ID!) {
    changeConversationAssignedStaff(conversation_id: $conversation_id, staff_id: $staff_id) {
        conversation {
            id
            # ... other fields
        }
    }
}
```

The key difference is that this REST API accepts `phone_number` and `username` instead of direct IDs.
