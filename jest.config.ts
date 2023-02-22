export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/jest/mock/fileMock.tsx',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
};
