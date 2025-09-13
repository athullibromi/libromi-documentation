# Stripe Integration

Watch the tutorial video below to learn how to integrate Stripe payment gateway.

[![Stripe Integration Tutorial](https://img.youtube.com/vi/fN_GIgCUFu0/0.jpg)](https://www.youtube.com/watch?v=fN_GIgCUFu0)

---

## Step 1: Get Your Stripe API Key

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com/).
2. Navigate to **Developers > API keys** in the left sidebar.
3. Copy your **Secret Key** (starts with `sk_live_` or `sk_test_`).
4. Keep your secret key safe and do not share it publicly.

---

## Step 2: Add a Webhook Endpoint

1. In your [Stripe Dashboard Webhooks](https://dashboard.stripe.com/webhooks) section, click **Add endpoint**.
2. Enter your webhook URL: 

```
https://wacbot.libromi.cloud/payment-webhooks/stripe
```

3. Select the following events:
   - `payment_intent.canceled`  
   - `payment_intent.succeeded`

4. Click **Add endpoint** to save.

---

> **Note:** The callback URL during configuration will be a WhatsApp redirecting link to the chatbot number.  
> Example: [https://wa.me/919876543210](https://wa.me/919876543210)

---