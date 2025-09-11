---
sidebar_position: 1
---
# Broadcasting Requirements

Before you can start sending broadcast messages in Libromi Connect, ensure you have completed these essential setup requirements.

## Prerequisites Overview

To successfully create and send broadcast campaigns, you need to complete the following three key requirements. Each step is crucial for the broadcasting functionality to work properly.

## Required Setup Steps

### 1. Set Contact Groups in Libromi Panel

Contact groups allow you to organize and target specific audiences for your broadcast campaigns.

**Steps to create contact groups:**
1. Navigate to the Contacts section in your Libromi panel
2. Click on "Create Group" or "Manage Groups"
3. Enter a descriptive name for your contact group (e.g., "VIP Customers", "Newsletter Subscribers")
4. Add contacts to the group by:
   - Importing from a CSV file
   - Manually selecting existing contacts
   - Setting up automatic group assignment rules
5. Save the contact group
6. Repeat for additional groups as needed

**Best practices for contact groups:**
- Use clear, descriptive names for easy identification
- Create groups based on customer behavior, demographics, or preferences
- Regularly update group memberships to maintain accuracy
- Consider creating nested groups for more granular targeting

### 2. Add Payment Method in Meta Business Suite WhatsApp Section

A valid payment method is required for sending broadcast messages through WhatsApp Business API.

**Steps to add payment method:**
1. Log into your Meta Business Suite account
2. Navigate to the WhatsApp section
3. Go to "Settings" > "Payment Methods"
4. Click "Add Payment Method"
5. Choose your preferred payment option:
   - Credit/Debit Card
   - PayPal
   - Bank Account (where available)
6. Enter your payment details
7. Verify the payment method through the confirmation process
8. Set it as your default payment method for WhatsApp messaging

**Important notes:**
- Ensure your payment method has sufficient funds for broadcast campaigns
- Keep payment information up to date to avoid service interruptions
- Monitor your billing dashboard for usage and costs
- Set up billing alerts to track spending

### 3. Prepare Template Messages

WhatsApp requires pre-approved message templates for broadcast communications.

**Steps to create template messages:**
1. Access the WhatsApp Business API dashboard
2. Navigate to "Message Templates"
3. Click "Create Template"
4. Fill in the template details:
   - **Template Name**: Unique identifier for internal use
   - **Category**: Choose appropriate category (Marketing, Utility, Authentication)
   - **Language**: Select the language for your template
   - **Header** (optional): Add header text, image, or video
   - **Body**: Write your main message content
   - **Footer** (optional): Add footer text
   - **Buttons** (optional): Add call-to-action or quick reply buttons
5. Submit the template for Meta's approval
6. Wait for approval (typically 24-48 hours)
7. Once approved, the template will be available for broadcasts

**Template best practices:**
- Keep messages clear, concise, and valuable to recipients
- Follow WhatsApp's content policies and guidelines
- Use variables (`{{1}}`, `{{2}}`) for personalization
- Test templates with different variable content
- Create multiple templates for different campaign types

## Verification Checklist

Before proceeding with your first broadcast campaign, ensure:

- ☑️ Contact groups are created and populated with relevant contacts
- ☑️ Payment method is added and verified in Meta Business Suite
- ☑️ At least one message template is approved and available
- ☑️ WhatsApp Business API is properly connected to Libromi
- ☑️ All necessary permissions and access rights are configured

## Next Steps

Once all requirements are met, you can proceed to:
1. Create your first broadcast campaign
2. Select your target audience from the contact groups
3. Choose an approved message template
4. Schedule and send your broadcast message

Refer to the other sections in this Broadcasting guide for detailed instructions on creating and managing broadcast campaigns.
