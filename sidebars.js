/**
 * Copyright (c) OneKey, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {join} = require('path');

const EXTENSION_MAP = Object.entries({
  Guide: [
    'introduction',
    'getting-started',
    'common-terms',
    'initializing-dapps',
    'accessing-accounts',
    'sending-transactions',
  ],
  'API Reference': [
    'ethereum-provider',
    'provider-migration',
    'rpc-api',
    'signing-data',
  ],
  'Best Practices': [
    'registering-function-names',
    'registering-your-token',
    'defining-your-icon',
    'onboarding-library',
    'metamask-extension-provider',
  ],
  Mobile: [
    'mobile-getting-started',
    'site-compatibility-checklist',
    'mobile-best-practices',
  ],
  Resources: ['create-dapp', 'contributors'],
}).map(([path, items]) => ({
  type: 'category',
  label: path,
  items: items.map((str) => join('Extension', path, str)),
}));

module.exports = {
  extension: [...EXTENSION_MAP, 'syntax'],
};
