import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manual sidebar configuration with all sections
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Account Setup',
      items: [
        'prerequisites/system-requirements',
        'prerequisites/meta-facebook-verification',
        'prerequisites/display-name-approval',
        'prerequisites/onboarding',
      ],
    },
    {
      type: 'category',
      label: 'Team Inbox',
      items: [
        'team-inbox/introduction',
        'team-inbox/start-new-chat',
        'team-inbox/manage-customer-conversation',
        'team-inbox/customer-notes',
        'team-inbox/tags',
        'team-inbox/assign-chats',
        'team-inbox/block-unblock-customers',
      ],
    },
    {
      type: 'category',
      label: 'Contact',
      items: [
        'contact/introduction',
        'contact/how-to-import-contacts',
        'contact/how-to-export-contacts',
      ],
    },
    {
      type: 'category',
      label: 'Broadcast',
      items: [
        'broadcasting/import-customer-data',
        'broadcasting/broadcast-summary',
        'broadcasting/send-schedule-messages',
      ],
    },
    {
      type: 'category',
      label: 'Meta (Channel)',
      items: [
        'meta/introduction',
      ],
    },
    {
      type: 'category',
      label: 'Team (Staffs)',
      items: [
        'team/introduction',
      ],
    },
    {
      type: 'category',
      label: 'Chatbots',
      items: [
        'chatbot/introduction',
        {
          type: 'category',
          label: 'Nodes',
          items: [
            'chatbot/nodes/message-nodes',
            'chatbot/nodes/choices',
            'chatbot/nodes/inputs',
            'chatbot/nodes/logic',
            {
              type: 'category',
              label: 'Payment Gateway',
              items: [
                'chatbot/nodes/payments/stripe',
                'chatbot/nodes/payments/razorpay',
                'chatbot/nodes/payments/instamojo',
                'chatbot/nodes/payments/paypal',
                'chatbot/nodes/payments/phonepe',
                'chatbot/nodes/payments/tap',
              ],
            },
            'chatbot/nodes/ecommerce',
            'chatbot/nodes/ecommerce-advanced',
            'chatbot/nodes/integrations',
            'chatbot/nodes/ai',
            'chatbot/nodes/meta',
            'chatbot/nodes/speech',
            'chatbot/nodes/speech-advanced',
            'chatbot/nodes/dynamic-choices',
          ],
        },
        'chatbot/creating-chatbot',
      ],
    },
    {
      type: 'category',
      label: 'Webhooks',
      items: [
        'webhook/index',
        'webhook/setup',
        'webhook/events',
        'webhook/security',
        'webhook/troubleshooting',
      ],
    },
  ],
};

export default sidebars;