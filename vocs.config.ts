import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Tenderly Fullstack',
  logoUrl: {
    light: "/tenderly-logo-light.svg",
    dark: "/tenderly-logo-light.svg",
  },
  editLink: {
    pattern:
      "https://github.com/kingzamzon/tenderly-fullstack/blob/main/docs/pages/:path",
    text: "Suggest changes to this page",
  },
  iconUrl: "/favicon.png",
  socials: [
    {
      icon: "github",
      link: "https://github.com/kingzamzon/tenderly-fullstack",
    },
  ],
  markdown: {
    remarkPlugins: [
      remarkParse,
      remarkRehype,
      rehypeStringify,
    ],
  },
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
        {
          text: 'Supported Chains',
          link: '/overview/supported-chains',
        },
        {
          text: 'Projects Using Tenderly',
          link: '/overview/project-tenderly',
        },
        {
          text: 'How Tenderly Works',
          link: '/overview/how-tenderly-work',
        },
        {
          text: 'Why Tenderly',
          link: '/overview/why-tenderly',
        },
      ]
    },
    {
      text: 'Transaction',
      link: '/transaction',
    },
    {
      text: 'Explorer',
      link: '/explorer',
    },
    {
      text: 'Alert',
      link: '/alert',
    },
    {
      text: 'Sandbox',
      link: '/sandbox',
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
