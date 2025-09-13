---
title: Razorpay Integration
description: Step-by-step guide to integrate Razorpay payment gateway with your chatbot.
---

# Razorpay Integration

Follow the steps below to integrate Razorpay payment gateway with your chatbot.

## Step 1: Get Your Razorpay API Key

1. Log in to your [Razorpay Dashboard](https://dashboard.razorpay.com/).
2. Navigate to **Settings > API Keys** in the left sidebar.
3. Click **Generate Key** to create a new key pair.
4. Copy your **Key ID** and **Key Secret**. Store them securely and do not share them publicly.

## Step 2: Add a Webhook Endpoint

1. In your [Razorpay Dashboard Webhooks](https://dashboard.razorpay.com/app/webhooks) section, click **Add New Webhook**.
2. Enter your webhook URL:

```
https://wacbot.libromi.cloud/payment-webhooks/razorpay
```

3. Select the following events under **Payment_link Events**:
   - `payment_link.paid`
   - `payment_link.partially_paid`
   - `payment_link.expired`
   - `payment_link.cancelled`

![Razorpay Webhook Events Screenshot](/razorpay webhook events.png)

_Example: Selecting Payment_link Events in Razorpay Webhook Setup_

4. Click **Create Webhook** to save.

> **Note:** The callback URL during configuration will be a WhatsApp redirecting link to the chatbot number.
>
> Sample: [https://wa.me/919876543210](https://wa.me/919876543210)

---

_Built from `razorpay.md`_
