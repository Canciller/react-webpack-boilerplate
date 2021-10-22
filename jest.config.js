const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.paths');

module.exports = {
  testEnvironment: "jsdom",
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    '\\.s[ac]ss$': 'identity-obj-proxy'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/cypress'
  ]
}