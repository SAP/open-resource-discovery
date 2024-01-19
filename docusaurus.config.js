// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Resource Discovery',
  tagline: 'An aligned protocol for publishing and discovering metadata about systems.',
  url: 'https://sap.github.io',
  baseUrl: '/open-resource-discovery',
  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',
  onBrokenMarkdownLinks: 'throw',
  staticDirectories: ['static'],
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SAP', // Usually your GitHub org/user name.
  projectName: 'open-resource-discovery', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          routeBasePath: '/', // Serve the docs at the site's root
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/SAP/open-resource-discovery/tree/main/',
        },
        blog: false, // disable the blog plugin
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        },
      }),
    ],
  ],

  scripts: ['/open-resource-discovery/js/custom.js'],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        searchResultLimits: 10,
        hashed: true,
        indexBlog: false,
        indexPages: false,
        language: ['en'],
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: prismThemes.oceanicNext,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Open Resource Discovery',
          src: 'img/open-resource-discovery-logo.png',
        },
        items: [
          {
            label: 'Overview',
            to: '/',
          },
          {
            label: 'Introduction',
            to: 'introduction',
          },
          {
            label: 'Details',
            to: 'details/',
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Specification',
            to: 'spec-v1/',
            items: [
              {
                label: 'ORD Specification',
                to: '/spec-v1/',
              },
              {
                label: 'ORD Configuration Interface',
                to: 'spec-v1/interfaces/configuration',
              },
              {
                label: 'ORD Document Interface',
                to: 'spec-v1/interfaces/document',
              },
              {
                label: 'ORD Document API',
                to: 'spec-v1/interfaces/document-api',
              },
              {
                label: 'Example Files',
                to: 'spec-v1/examples',
              },
              {
                label: 'Changelog',
                to: 'https://github.com/SAP/open-resource-discovery/blob/main/CHANGELOG.md',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Spec Extensions',
            to: 'spec-extensions',
            items: [
              {
                label: 'Access Strategies',
                to: 'spec-extensions/access-strategies/',
              },
              {
                label: 'Policy Levels',
                to: 'spec-extensions/policy-levels/',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Ecosystem',
            to: 'ecosystem/',
            items: [
              {
                label: 'ORD Reference Application',
                href: 'https://ord-reference-application.cfapps.sap.hana.ondemand.com/',
              },
            ],
          },
          {
            href: 'https://github.com/SAP/open-resource-discovery',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Disclaimer',
            to: 'disclaimer',
          },
          {
            label: 'Legal Disclosure',
            to: 'https://www.sap.com/corporate/en/legal/impressum.html',
          },
          {
            label: 'Terms of Use',
            to: 'https://www.sap.com/corporate/en/legal/terms-of-use.html',
          },
          {
            label: 'GitHub Repository',
            to: 'https://github.com/SAP/open-resource-discovery',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SAP SE. Made available under Apache License 2.0.\n\n This site is hosted by GitHub Pages. Please see the GitHub Privacy Statement for any information how GitHub processes your personal data.`,
      }
    }),
}

module.exports = config
