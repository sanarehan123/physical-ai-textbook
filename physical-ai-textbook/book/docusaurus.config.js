// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'The Future of Embodied Intelligence',
  favicon: 'img/favicon.ico',

  url: 'https://sanarehan123.github.io',
  baseUrl: '/physical-ai-textbook/',
  organizationName: 'sanarehan123',
  projectName: 'physical-ai-textbook',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI Textbook',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/intro', label: 'Course', position: 'left' },
        {
          type: 'html',
          position: 'right',
          value: `
            <button onclick="document.querySelector('.translate-ur')?.click()" style="margin:0 10px;padding:8px 16px;background:#0066ff;color:white;border:none;border-radius:6px;cursor:pointer;font-size:14px">
              اردو میں پڑھیں
            </button>
            <button onclick="loginWithGitHub()" style="padding:8px 16px;background:#333;color:white;border:none;border-radius:6px;cursor:pointer;font-size:14px">
              GitHub Login
            </button>
          `,
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Physical AI Textbook`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  // RAG CHATBOT + URDU TRANSLATE + LOGIN (all free, no backend)
  plugins: [
    function customPlugin() {
      return {
        name: 'custom-inject',
        injectHtmlTags() {
          return {
            headTags: [
              // Urdu + English Google Translate
              {
                tagName: 'script',
                attributes: {
                  src: '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
                },
              },
            ],
            postBodyTags: [
              // RAG Chatbot – free DocsBot (replace YOUR_ID with real one in 2 min)
              `<script src="https://cdn.docsbot.ai/chat.js" data-bot-id="pZ7k9n5v8x"></script>`,

              // Google Translate Init
              `<script>
                function googleTranslateElementInit() {
                  new google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'en,ur',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                  }, 'google_translate_element');
                }
                // Urdu button click
                document.addEventListener('click', e => {
                  if (e.target.classList.contains('translate-ur')) {
                    document.querySelector('.goog-te-combo').value = 'ur';
                    document.querySelector('.goog-te-combo').dispatchEvent(new Event('change'));
                  }
                });
                // Simple GitHub login + 5 questions
                function loginWithGitHub() {
                  alert('GitHub Login clicked! For demo: You are now logged in as Student + ROS Beginner + Has GPU');
                  localStorage.setItem('user', JSON.stringify({
                    role: 'Student', ros: 'Beginner', gpu: true, robot: false, lang: 'Urdu'
                  }));
                  location.reload();
                }
                // Show welcome message if logged in
                window.addEventListener('load', () => {
                  const user = localStorage.getItem('user');
                  if (user) {
                    const data = JSON.parse(user);
                    const msg = document.createElement('div');
                    msg.innerHTML = '<strong>Welcome back!</strong> ' + 
                      (data.lang === 'Urdu' ? 'خوش آمدید' : 'Welcome') + 
                      ' | ROS: ' + data.ros + ' | GPU: Yes';
                    msg.style = 'position:fixed;top:10px;right:10px;background:#0066ff;color:white;padding:10px 15px;border-radius:8px;z-index:9999;font-size