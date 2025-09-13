# Tap Integration

Follow the steps below to integrate Tap payment gateway with your chatbot.

## Step 1: Get Your Tap API Credentials

1. Log in to your [Tap Dashboard](https://dashboard.tap.company/).
2. Navigate to **Settings > API Keys** in the left sidebar.
3. Generate your **Public Key** and **Secret Key**.
4. Copy your API credentials and store them securely. Do not share them publicly.

## Step 2: Add a Webhook Endpoint

1. In your [Tap Dashboard](https://dashboard.tap.company/), go to **Settings > Webhooks**.
2. Click **Add New Webhook** and enter your webhook URL:

```
https://wacbot.libromi.cloud/payment-webhooks/tap
```

3. Select the following events:
   - `charge.created`
   - `charge.updated`
   - `charge.failed`
   - `charge.captured`

4. Click **Save** to create the webhook endpoint.

---

> **Note:** The callback URL during configuration will be a WhatsApp redirecting link to the chatbot number.
>
> Sample: [https://wa.me/919876543210](https://wa.me/919876543210)

---