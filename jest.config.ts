/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/src/config',
    '<rootDir>/src/exceptions',
    '<rootDir>/src/repositories',
    '<rootDir>/src/types',
    '<rootDir>/src/services/index.ts',
  ],
};
