// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'The Future of Embodied Intelligence',
  favicon: 'img/favicon.ico',

  // Vercel deployment – replace with your actual Vercel URL if desired
  url: 'https://physical-ai-textbook.vercel.app', // Change this to your real Vercel project URL
  baseUrl: '/',

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
          routeBasePath: '/', // ← Critical: Serves docs at root (no /docs/ prefix)
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
        {
          to: '/intro', // ← Updated: now goes directly to your intro page
          label: 'Course',
          position: 'left',
        },
        {
          type: 'html',
          position: 'right',
          value: `
            <button class="translate-ur" style="margin:0 10px;padding:8px 16px;background:#0066ff;color:white;border:none;border-radius:6px;cursor:pointer;font-size:14px">
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

    // Google Translate + Urdu button + Demo Login
    postBodyTags: [
      `<div id="google_translate_element" style="display:none;"></div>`,

      `<script>
        function googleTranslateElementInit() {
          new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,ur',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
          }, 'google_translate_element');
        }

        // Urdu button click handler
        document.addEventListener('click', (e) => {
          if (e.target && e.target.classList.contains('translate-ur')) {
            const select = document.querySelector('.goog-te-combo');
            if (select) {
              select.value = 'ur';
              select.dispatchEvent(new Event('change'));
            }
          }
        });

        // Demo GitHub login
        function loginWithGitHub() {
          alert('GitHub Login clicked! For demo: You are now logged in as Student + ROS Beginner + Has GPU');
          localStorage.setItem('user', JSON.stringify({
            role: 'Student',
            ros: 'Beginner',
            gpu: true,
            robot: false,
            lang: 'Urdu'
          }));
          location.reload();
        }

        // Welcome banner for logged-in user
        window.addEventListener('load', () => {
          const userData = localStorage.getItem('user');
          if (userData) {
            const user = JSON.parse(userData);
            const msg = document.createElement('div');
            msg.innerHTML = '<strong>Welcome back!</strong> ' +
              (user.lang === 'Urdu' ? 'خوش آمدید' : 'Welcome') +
              ' | ROS: ' + user.ros + ' | GPU: Yes';
            msg.style.cssText = 'position:fixed;top:10px;right:10px;background:#0066ff;color:white;padding:10px 15px;border-radius:8px;z-index:9999;font-size:14px;box-shadow:0 2px 10px rgba(0,0,0,0.3);';
            document.body.appendChild(msg);
          }
        });
      </script>`,

      `<script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async></script>`,
    ],
  },
};

export default config;
