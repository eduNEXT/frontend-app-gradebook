const { createConfig } = require('@openedx/frontend-build');

module.exports = createConfig('jest', {
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTest.js',
  ],
  modulePaths: ['<rootDir>/src/'],
  coveragePathIgnorePatterns: [
    'src/segment.js',
    'src/postcss.config.js',
    'testUtils', // don't unit test jest mocking tools
  ],
  // see https://github.com/axios/axios/issues/5026
  moduleNameMapper: {
    '^axios$': 'axios/dist/axios.js',
  },
});
