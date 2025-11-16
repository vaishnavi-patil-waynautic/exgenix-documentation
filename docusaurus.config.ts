import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
  title: 'Exgenix',
  tagline: 'Test Exchange APIs Functionally & Performantly',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://vaishnavi-patil-waynautic.github.io',
  baseUrl: '/exgenix-documentation/',
  organizationName: 'vaishnavi-patil-waynautic',
  projectName: 'exgenix-documentation',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // onBrokenMarkdownLinks: 'warn',

  // New format for Docusaurus v2.x
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn', // or 'throw'
    },
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
          sidebarPath: './sidebars.ts',
          editUrl: undefined, 

        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/exgenix/docs/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
  },
    ],
  ],


  plugins: [
  [
    require.resolve('@cmfcmf/docusaurus-search-local'),
    {
      indexDocs: true,
      indexBlog: true,
      indexPages: true,
      language: 'en',
    },
  ],
],

scripts: [
  '/js/imageExpand.js'
],

  themeConfig: {
    image: 'img/exgenix.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Exgenix',
      logo: {
        alt: 'Exgenix Logo',
        src: 'img/exgenix.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/videos', label: 'Video References', position: 'left'},
        {
          href: 'https://app.exgenix.waynautic.com/',
          label: 'Exgenix Platform',
          position: 'right',
        },
      ],
    },
    hideTableOfContents: true,
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
            {
              label: 'Getting Started',
              to: '/docs/quick-start-guide',
            },
            {
              label: 'Video References',
              to: '/videos',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Contact Us',
              to: '/docs/contact-us',
            },
            {
              label: 'Exgenix Platform',
              href: 'https://app.exgenix.waynautic.com/',
            },
          ],
        },
      ],
      copyright: '© 2025 Exgenix Technologies.<br/>Empowering intelligent QA for the world’s financial systems.',

    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
