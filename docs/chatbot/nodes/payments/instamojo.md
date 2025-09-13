# Instamojo Integration

Follow the steps below to integrate Instamojo payment gateway with your chatbot.

## Step 1: Get Your Instamojo API Credentials

1. Log in to your [Instamojo Dashboard](https://www.instamojo.com/).
2. Navigate to **Account > Settings > API & Plugins** in the left sidebar.
3. Generate your **Client ID** and **Client Secret**.
4. Copy your **API Key** and **Auth Token**. Store them securely and do not share them publicly.

## Step 2: Add a Webhook Endpoint

1. In your [Instamojo Dashboard](https://www.instamojo.com/), go to **Account > Settings > Webhooks**.
2. Click **Add New Webhook** and enter your webhook URL:

```
https://wacbot.libromi.cloud/payment-webhooks/instamojo
```

3. Select the following events:
   - `Payment successful`
   - `Payment failed`
   - `Refund initiated`
   - `Refund completed`

4. Click **Create Webhook** to save the configuration.

---

> **Note:** The callback URL during configuration will be a WhatsApp redirecting link to the chatbot number.
>
> Sample: [https://wa.me/919876543210](https://wa.me/919876543210)

---