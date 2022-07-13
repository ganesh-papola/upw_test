// eslint-disable-next-line import/no-commonjs
module.exports = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.js',
      '!*.spec.*',
      '!*.test.*',
    ],

    setupFiles: [
      'react-app-polyfill/jsdom',
      "jest-canvas-mock"
    ],
    setupFilesAfterEnv: [],
    testMatch: [
      '<rootDir>/__tests__/**/**/*.{js,jsx,ts,tsx}',
      '<rootDir>/__tests__/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': [
        '<rootDir>/node_modules/babel-jest',
      ],
      '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)':
        '<rootDir>/config/fileTransform.js',
    },
    transformIgnorePatterns: [
      '^.+\\.module\\.(css|sass|scss)$',
    ],
    modulePaths: ['<rootDir>', 'src'],
    moduleNameMapper: {
      '^react-native$': 'react-native-web',
      "^.+\\.(scss|sass|css|less)$": "identity-obj-proxy",
      "\\.(sass)$": "identity-obj-proxy",
    },
    moduleFileExtensions: [
      'web.js',
      'js',
      'web.ts',
      'ts',
      'web.tsx',
      'tsx',
      'json',
      'web.jsx',
      'jsx',
      'node',
    ],
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname',
    ],
    globals: {
      Granite: true,
    },
  };
  