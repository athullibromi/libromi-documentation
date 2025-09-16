# Authentication

Learn how to authenticate your requests to the Libromi Connect API.

## API Tokens

All API requests require authentication using API tokens. API tokens in Libromi Connect allow you to integrate your account with external services and applications by providing secure, authenticated access. These personal access tokens function like a combination of a username and password for API calls.

**Important**: The tokens generated in Libromi Connect do not expire and will remain active until you manually revoke them.

## How to Generate an API Authentication Token

### Step 1: Navigate to the API Tokens Page

1. From the main dashboard, click on the **Settings icon (⚙️)** in the bottom-left navigation menu
2. In the "Settings" menu, under the **"Developer"** section, select **API Tokens**

### Step 2: Generate a New Token

1. On the "API Tokens" page, click the **+ Generate Token** button located in the top-right corner
2. A "Generate New API Token" pop-up window will appear

### Step 3: Configure Your Token

1. **Token Name**: Enter a descriptive name for your token in this field. This will help you identify the token's purpose later (e.g., "Zapier Integration," "Custom CRM Link")
2. **Token Permissions**: Click the dropdown menu to select the access level for this token:
   - **Read Only**: Grants permission to fetch data from your Libromi Connect account but not to modify it
   - **Admin (Full Access)**: Grants full permission to read, create, update, and delete data through the API
3. Click the **Generate** button to create the token

### Step 4: Save Your Token Securely

1. After generation, a pop-up window will display your new API token
2. **Important**: For security reasons, the full token is only shown once. You must copy and store it in a secure location immediately. You will not be able to retrieve the full token again after closing this window
3. Click the **Copy** icon to copy the token to your clipboard
4. Once you have saved your token, click the **I've Saved My Token** button
5. You will now see your new token listed on the "API Tokens" page, where you can manage it or revoke it at any time by clicking the delete icon

## Using API Tokens

Include your API token in the request headers:

```http
Authorization: Bearer YOUR_API_TOKEN
Content-Type: application/json
```

## Authentication Examples

### cURL Example

```bash
curl -X GET "https://wa-api.cloud/api/v1/contacts" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json"
```

### JavaScript Example

```js
const response = await fetch('https://wa-api.cloud/api/v1/contacts', {
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  }
});
```

### Node.js with SDK

```js
const { LibromiConnect } = require('@libromi/connect');

const client = new LibromiConnect({
  apiToken: process.env.LIBROMI_API_TOKEN
});
```

## Security Best Practices

- Keep your API tokens secure and never expose them in client-side code
- Store tokens in a secure location immediately after generation (they are only shown once)
- Use environment variables to store API tokens
- Monitor API token usage in your dashboard
- Revoke tokens that are no longer needed from the API Tokens page
- Use "Read Only" permissions when full access is not required
- Implement proper error handling for authentication failures

## Rate Limits

The API has the following rate limits:
- 1000 requests per hour for free accounts
- 10000 requests per hour for paid accounts
- Burst limit of 100 requests per minute

## Next Steps

- [Quick Start Guide](quick-start)
- [Contacts API](../endpoints/contacts)
- [Assign Staff API](../endpoints/staff)