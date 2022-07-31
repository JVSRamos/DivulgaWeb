const { resolve } = require('path');
const root = resolve(__dirname, '../../');
const rootConfig = require(`${root}/jest.config.js`);

module.exports = {
    ...rootConfig, ...{
        rootDir: root,
        displayName: "domain-tests",
        testMatch: ["<rootDir>/test/domain/**/*.test.ts"],
    }
}