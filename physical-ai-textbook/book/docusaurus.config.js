// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'AI Systems in the Physical World',
  favicon: 'img/favicon.ico',

  url: 'https://physical-ai-textbook.vercel.app', // Your Vercel deployment URL
  baseUrl: '/',                                    // Root path for Vercel

  trailingSlash: false,
  onBrokenLinks: 'warn',          // Allows build to succeed even with minor link issues
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
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/sanarehan123/physical-ai-textbook/edit/main/',
          routeBasePath: '/',     // Docs served at root (no /docs/ prefix)
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
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
          sidebarId: 'tutorialSidebar',  // ← FIXED: Changed from 'textbookSidebar' to the real one
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
        {
          title: 'Textbook',
          items: [
            { label: 'Module 1 - Foundations', to: '/module-1' },
            { label: 'Module 2 - ROS 2', to: '/module-2' },
            { label: 'Module 3 - Simulation', to: '/module-3' },
            { label: 'Module 4 - VLA & Capstone', to: '/module-4' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Docusaurus', href: 'https://docusaurus.io' },
            { label: 'ROS 2', href: 'https://docs.ros.org/en/humble/' },
            { label: 'Gazebo', href: 'https://gazebosim.org/' },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sanarehan123/physical-ai-textbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
