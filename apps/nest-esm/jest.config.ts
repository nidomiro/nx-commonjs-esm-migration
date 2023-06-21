/* eslint-disable */
import type { JestConfigWithTsJest } from 'ts-jest';

export default {
  displayName: 'nest-esm',
  preset: '../../jest.preset.mjs',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      { tsconfig: '<rootDir>/tsconfig.spec.json', useESM: true },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'mjs', 'js', 'cjs', 'html'],
  extensionsToTreatAsEsm: ['.ts'],
  coverageDirectory: '../../coverage/apps/nest-esm',
} satisfies JestConfigWithTsJest;
