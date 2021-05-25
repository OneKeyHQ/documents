/**
 * Copyright (c) OneKey, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'OneKey Documents',
  tagline: 'The tagline of OneKey Docs',
  url: 'https://docs.onekey.so',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'onekeyhq', // Usually your GitHub org/user name.
  projectName: 'onekey', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  },
  themeConfig: {
    navbar: {
      title: 'OneKey',
      logo: {
        alt: '',
        src: 'img/logo_green_vector.png',
      },
      items: [
        {
          to: '/',
          activeBaseRegex: '^(?!/Onekey Connect)',
          label: 'Onekey Ext',
          position: 'left',
        },
        {
          to: 'Onekey Connect/Index',
          activeBasePath: 'Onekey Connect',
          label: 'Onekey Connect',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/onekeyhq/document',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'PRODUCT',
          items: [
            {label: 'Mobile Wallet', href: 'https://onekey.so/download'},
            {label: 'Hardware Device', href: 'https://onekey.so/hardware'},
            {label: 'Browser Extension', href: 'https://onekey.so/plugin'},
          ],
        },
        {
          title: 'RESOURCE',
          items: [
            {label: 'Team', href: 'https://onekey.so/team'},
            {
              label: 'System Status',
              href: 'https://onekeyhq.github.io/upptime',
            },
            {
              label: 'Open Source Community',
              href: 'https://github.com/OneKeyHQ/OneKey-Wallet',
            },
            {
              label: 'Media Kits',
              href: 'https://help.onekey.so/hc/en-us/articles/360002200956',
            },
            {
              label: 'Privacy Agreement',
              href: 'https://help.onekey.so/hc/en-us/articles/360002014776',
            },
            {
              label: 'User Agreement',
              href: 'https://help.onekey.so/hc/en-us/articles/360002003315',
            },
          ],
        },
        {
          title: 'BUSINESS COOPERATION',
          items: [
            {label: 'Submit Dapp', href: 'https://jp.mikecrm.com/6lD8P5t'},
            {label: 'Submit Token', href: 'https://jp.mikecrm.com/J3Z4FMg'},
            {label: 'Venture Capital', href: 'https://onekey.so/ventures'},
            {
              label: 'Sales Alliance',
              href: 'https://help.onekey.so/hc/en-us/articles/360002658076',
            },
            {
              label: 'Advertising',
              href: 'https://help.onekey.so/hc/en-us/articles/360002658096',
            },
            {label: 'Investor Relations', href: 'https://onekey.so/invest'},
          ],
        },
        {
          title: 'CRYPTO ASSETS',
          items: [
            {label: 'Bitcoin (BTC)', href: 'https://onekey.so/coins/btc'},
            {label: 'Ethereum (ETH)', href: 'https://onekey.so/coins/eth'},
            {label: 'Litecoin (LTC)', href: 'https://onekey.so/coins/ltc'},
          ],
        },
      ],
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} OneKey, Inc. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/onekeyhq/document/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
      require.resolve('./src/plugins/monaco-editor'),
      require.resolve('./src/plugins/tsconfig-paths-webpack-plugin'),
  ],
};
