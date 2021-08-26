/**
 * Copyright (c) OneKey, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {join} = require('path');
const fs = require('fs');

const IGNORE_FILES = ['node_modules', '.docusaurus', '.git'];

const hasTypo = (str) => str.toLowerCase().includes('metamask');

const checkFileSpelling = (fileName, parentPath) => {
  if (IGNORE_FILES.includes(fileName)) {
    return;
  }
  const filePath = join(parentPath, fileName);
  if (hasTypo(fileName)) {
    console.log(`"${filePath}" has spell error`);
  }
  if (fs.statSync(filePath).isDirectory()) {
    const children = fs.readdirSync(filePath);
    // eslint-disable-next-line no-use-before-define
    return checkFilesSpelling(children, filePath);
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  if (hasTypo(content)) {
    console.log(`"${filePath}" has spell error`);
  }
};

const checkFilesSpelling = (fileNames, parentPath = '') => {
  // eslint-disable-next-line no-restricted-syntax
  for (const fileName of fileNames) {
    checkFileSpelling(fileName, parentPath);
  }
};

(async () => {
  try {
    const fileNames = fs.readdirSync('.');
    console.log(fileNames);
    checkFilesSpelling(fileNames);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
