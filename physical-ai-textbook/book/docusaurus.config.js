// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'AI Systems in the Physical World',
  favicon: 'img/favicon.ico',

  url: 'https://physical-ai-textbook.vercel.app',  // Update to your actual Vercel URL once deployed
  baseUrl: '/',                                    // Root for Vercel

  // Remove or ignore these for Vercel (they're only for GitHub Pages deploy command)
  // organizationName: 'sanarehan123',
  // projectName: 'physical-ai-textbook',

  trailingSlash: false,
  onBrokenLinks: 'warn',        // ← Critical: Change to 'warn' to allow build on minor link issues
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/sanarehan123/physical-ai-textbook/edit/main/',  // Updated to your repo
          routeBasePath: '/',  // Docs at root
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Physical AI & Humanoid Robotics Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'textbookSidebar',  // Ensure this matches your sidebars.js
          position: 'left',
          label: 'Textbook',
        },
        {
          href: 'https://github.com/sanarehan123/physical-ai-textbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // Update these 'to:' paths to match your actual doc IDs/slugs
        {
          title: 'Textbook',
          items: [
            { label: 'Module 1 - Foundations', to: '/module-1' },  // Verify these exist
            { label: 'Module 2 - ROS 2', to: '/module-2' },
            { label: 'Module 3 - Simulation', to: '/module-3' },
            { label: 'Module 4 - VLA & Capstone', to: '/module-4' },
          ],
        },
        // ... keep Resources and More as-is
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
