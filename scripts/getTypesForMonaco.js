/**
 * Copyright (c) OneKey, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {join} = require('path');
const fs = require('fs');
const basePath = 'node_modules/@onekeyfe/connect/lib/typescript/';
const outputPath = 'src/hooks/types.txt';

const typeFiles = [
    {
        path: 'api.d.ts'
    }, {
        path: 'constants.d.ts',
        get: str => `declare namespace CONSTANTS {\n${str}\n}`
    }, {
        path: 'params.d.ts',
        get: str => `declare namespace P {\n${str}\n}`
    }, {
        path: 'misc.d.ts',
        get: str => `declare namespace Misc {\n${str}\n}`
    },
]

try {
    fs.writeFileSync(outputPath, '');
    for (const file of typeFiles) {
        const data = fs.readFileSync(join(basePath, file.path), 'utf8');
        const libSource = data
            .replace(/^import.*$/mg, '')
            .replace('export', 'declare')
            .replace('TrezorConnect', 'OneKeyConnect')
            .replace(/(^[ \t]*\n)/gm, '')
        fs.appendFileSync(outputPath, file.get ? file.get(libSource) : libSource);
    }
} catch (err) {
    console.error(err)
}
