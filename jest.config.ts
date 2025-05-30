import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {}]
  },
  coverageProvider: 'v8',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '@api': '<rootDir>/src/utils/burger-api.ts',
    '@auth': '<rootDir>/src/utils/auth.ts',
    '@slices': '<rootDir>/src/services/slices'
  }
};

export default config;