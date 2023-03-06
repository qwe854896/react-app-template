import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import { commonConfig } from './vite.config';

export default mergeConfig(
  commonConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './vitest/setup.ts',
    },
  }),
);
