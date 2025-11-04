// import {themes as prismThemes} from 'prism-react-renderer';
// import type {Config} from '@docusaurus/types';
// import type * as Preset from '@docusaurus/preset-classic';

// // This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// const config: Config = {
//   title: 'Exgenix',
//   tagline: 'Test Exchange APIs Functionally & Performantly',
//   favicon: 'img/favicon.ico',

//   // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
//   future: {
//     v4: true, // Improve compatibility with the upcoming Docusaurus v4
//   },

//   // Set the production url of your site here
//   url: 'https://exgenix.com',
//   // Set the /<baseUrl>/ pathname under which your site is served
//   // For GitHub pages deployment, it is often '/<projectName>/'
//   baseUrl: '/',

//   // GitHub pages deployment config.
//   // If you aren't using GitHub pages, you don't need these.
//   organizationName: 'exgenix', // Usually your GitHub org/user name.
//   projectName: 'docs', // Usually your repo name.

//   onBrokenLinks: 'throw',

//   // Even if you don't use internationalization, you can use this field to set
//   // useful metadata like html lang. For example, if your site is Chinese, you
//   // may want to replace "en" with "zh-Hans".
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },

//   presets: [
//     [
//       'classic',
//       {
//         docs: {
//           sidebarPath: './sidebars.ts',
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           editUrl:
//             'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//         },
//         blog: {
//           showReadingTime: true,
//           feedOptions: {
//             type: ['rss', 'atom'],
//             xslt: true,
//           },
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           editUrl:
//             'https://github.com/exgenix/docs/edit/main/',
//           // Useful options to enforce blogging best practices
//           onInlineTags: 'warn',
//           onInlineAuthors: 'warn',
//           onUntruncatedBlogPosts: 'warn',
//         },
//         theme: {
//           customCss: './src/css/custom.css',
//         },
//       } satisfies Preset.Options,
//     ],
//   ],

//   themeConfig: {
//     // Replace with your project's social card
//     image: 'img/docusaurus-social-card.jpg',
//     colorMode: {
//       respectPrefersColorScheme: true,
//     },
//     navbar: {
//       title: 'Exgenix',
//       logo: {
//         alt: 'Exgenix Logo',
//         src: 'img/logo.svg',
//       },
//       items: [
//         {
//           type: 'docSidebar',
//           sidebarId: 'tutorialSidebar',
//           position: 'left',
//           label: 'Documentation',
//         },
//         {to: '/blog', label: 'Blog', position: 'left'},
//         {
//           href: 'https://github.com/exgenix/docs',
//           label: 'GitHub',
//           position: 'right',
//         },
//         {
//           href: 'https://exgenix.com',
//           label: 'Exgenix Platform',
//           position: 'right',
//         },
//       ],
//     },
//     footer: {
//       style: 'dark',
//       links: [
//         {
//           title: 'Documentation',
//           items: [
//             {
//               label: 'Getting Started',
//               to: '/docs/intro',
//             },
//             {
//               label: 'API Testing Guide',
//               to: '/docs/sample-template',
//             },
//             {
//               label: 'Performance Testing',
//               to: '/docs/tutorial-extras/manage-docs-versions',
//             },
//           ],
//         },
//         {
//           title: 'Community',
//           items: [
//             {
//               label: 'GitHub Discussions',
//               href: 'https://github.com/exgenix/docs/discussions',
//             },
//             {
//               label: 'Discord',
//               href: 'https://discord.gg/exgenix',
//             },
//             {
//               label: 'Twitter',
//               href: 'https://twitter.com/exgenix',
//             },
//           ],
//         },
//         {
//           title: 'Company',
//           items: [
//             {
//               label: 'Blog',
//               to: '/blog',
//             },
//             {
//               label: 'Exgenix Platform',
//               href: 'https://exgenix.com',
//             },
//             {
//               label: 'Support',
//               href: 'https://support.exgenix.com',
//             },
//           ],
//         },
//       ],
//       copyright: `Copyright © ${new Date().getFullYear()} Exgenix. Built with Docusaurus.`,
//     },
//     prism: {
//       theme: prismThemes.github,
//       darkTheme: prismThemes.dracula,
//     },
//   } satisfies Preset.ThemeConfig,
// };

// export default config;


import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Exgenix',
  tagline: 'Test Exchange APIs Functionally & Performantly',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

   url: 'https://vaishnavi-patil-waynautic.github.io',
  baseUrl: '/exgenix-documentation/',
  organizationName: 'vaishnavi-patil-waynautic',
  projectName: 'exgenix-documentation',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          editUrl: undefined, 

        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/exgenix/docs/edit/main/',
          // Useful options to enforce blogging best practices
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



  // themes: [
  //   [
  //     require.resolve('@easyops-cn/docusaurus-search-local'),
  //     {
  //       hashed: true,
  //       language: ['en'],
  //       indexDocs: true,
  //       indexBlog: true,
  //       indexPages: false,
  //       docsRouteBasePath: ['docs'],
  //       blogRouteBasePath: ['blog'],
  //       searchResultLimits: 8,
  //       searchBarShortcutHint: true,
  //     },
  //   ],
  // ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
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
        {to: '/videos', label: 'Videos', position: 'left'},
        {
          href: 'https://exgenix.com',
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
              label: 'Getting Started',
              to: '/docs/introduction',
            },
            {
              label: 'API Testing Guide',
              to: '/docs/sample-template',
            },
            {
              label: 'Performance Testing',
              to: '/docs/tutorial-extras/manage-docs-versions',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/exgenix/docs/discussions',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/exgenix',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/exgenix',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Exgenix Platform',
              href: 'https://exgenix.com',
            },
            {
              label: 'Support',
              href: 'https://support.exgenix.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Exgenix. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
