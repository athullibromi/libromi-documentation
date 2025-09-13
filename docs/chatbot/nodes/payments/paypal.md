# PayPal Integration

Follow the steps below to integrate PayPal payment gateway with your chatbot.

## Step 1: Get Your PayPal API Credentials

1. Log in to your [PayPal Developer Dashboard](https://developer.paypal.com/).
2. Navigate to **My Apps & Credentials** in the left sidebar.
3. Click **Create App** to create a new application.
4. Copy your **Client ID** and **Client Secret**. Store them securely and do not share them publicly.

## Step 2: Add a Webhook Endpoint

1. In your [PayPal Developer Dashboard](https://developer.paypal.com/), go to **My Apps & Credentials**.
2. Select your application and scroll down to **Webhooks**.
3. Click **Add Webhook** and enter your webhook URL:

```
https://wacbot.libromi.cloud/payment-webhooks/paypal
```

4. Select the following events:
   - `PAYMENT.CAPTURE.COMPLETED`
   - `PAYMENT.CAPTURE.DENIED`
   - `CHECKOUT.ORDER.APPROVED`
   - `CHECKOUT.ORDER.COMPLETED`

5. Click **Save** to create the webhook.

---

> **Note:** The callback URL during configuration will be a WhatsApp redirecting link to the chatbot number.
>
> Sample: [https://wa.me/919876543210](https://wa.me/919876543210)

---