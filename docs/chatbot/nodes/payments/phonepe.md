# PhonePe Integration

Follow the steps below to integrate PhonePe payment gateway with your chatbot.

## Step 1: Get Your PhonePe API Credentials

1. Log in to your [PhonePe Business Dashboard](https://business.phonepe.com/).
2. Navigate to **Settings > API Keys** in the left sidebar.
3. Generate your **Merchant ID** and **Salt Key**.
4. Copy your credentials and store them securely. Do not share them publicly.

## Step 2: Add a Webhook Endpoint

1. In your [PhonePe Business Dashboard](https://business.phonepe.com/), go to **Settings > Webhooks**.
2. Click **Add New Webhook** and enter your webhook URL:

```
https://wacbot.libromi.cloud/payment-webhooks/phonepe
```

3. Select the following events:
   - `PAYMENT_SUCCESS`
   - `PAYMENT_FAILED`
   - `PAYMENT_PENDING`
   - `PAYMENT_CANCELLED`

4. Click **Save Webhook** to create the endpoint.

---

> **Note:** The callback URL during configuration will be a WhatsApp redirecting link to the chatbot number.
>
> Sample: [https://wa.me/919876543210](https://wa.me/919876543210)

---