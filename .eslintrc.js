/**
 * Copyright (c) OneKey, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    jest: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:mdx/recommended'],
  settings: {
    'mdx/code-blocks': true,
    // optional, if you want to disable language mapper, set it to `false`
    // if you want to override the default language mapper inside, you can provide your own
    'mdx/language-mapper': {},
  },
  plugins: ['react-hooks', 'header'],
  overrides: [
    {
      files: ['*.md'],
      rules: {
        'prettier/prettier': [
          2,
          {
            // unnecessary if you're not using `eslint-plugin-prettier`, but required if you are
            parser: 'markdown',
          },
        ],
      },
    },
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/overrides'],
    },
    {
      files: '**/*.{md,mdx}/**',
      extends: 'plugin:mdx/code-blocks',
    },
  ],
  rules: {
    // Impossible to have return type in no typed-javascript
    'consistent-return': OFF,
    // Ignore certain webpack alias because it can't be resolved
    'import/no-unresolved': [
      ERROR,
      {ignore: ['^@theme', '^@docusaurus', '^@generated']},
    ],
    'import/extensions': OFF,
    'header/header': [
      ERROR,
      'block',
      [
        '*',
        ' * Copyright (c) OneKey, Inc. and its affiliates.',
        ' *',
        ' * This source code is licensed under the MIT license found in the',
        ' * LICENSE file in the root directory of this source tree.',
        ' ',
      ],
    ],
    'react/jsx-closing-bracket-location': OFF, // Conflicts with Prettier.
    'react/jsx-filename-extension': OFF,
    'react-hooks/rules-of-hooks': ERROR,
    'react/prop-types': OFF, // PropTypes aren't used much these days.
  },
};
