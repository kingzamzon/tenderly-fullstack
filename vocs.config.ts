import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Tenderly Fullstack',
  sidebar: [
    {
      text: 'Overview',
      link: '/overview',
      collapsed: true,
      items: [
        {
          text: "Services",
          collapsed: true,
          items: [
            {
              text: 'Monitoring',
              link: '/overview/services/monitoring',
            },
            {
              text: 'Alerting',
              link: '/overview/services/alerting',
            },
            {
              text: 'Web3 Gateway',
              link: '/overview/services/web3-gateway',
            },
            {
              text: 'Web3 Actions',
              link: '/overview/services/web3-actions',
            },
            {
              text: 'Simulator',
              link: '/overview/services/simulator',
            },
            {
              text: 'War Rooms',
              link: '/overview/services/war-rooms',
            },
            {
              text: 'Analytics',
              link: '/overview/services/analytics',
            }
    
          ]
        },
        {
          text: 'Pricing',
          link: '/overview/pricing',
        },
      ]
    },
    
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    }
   
  ],
})
