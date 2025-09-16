import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  apiSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/authentication',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'API Endpoints',
      items: [
        'endpoints/contacts',
        'endpoints/staff',
        'endpoints/reports',
      ],
    },
    'advanced/support',
  ],
};

export default sidebars;