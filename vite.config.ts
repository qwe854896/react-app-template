import path from 'path';
import { defineConfig, mergeConfig } from 'vite';

import { PORT } from './config/constant';
import { createProxy } from './config/vite/proxy';
import { createVitePlugins } from './config/vite/plugins';

export const commonConfig = defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@c', replacement: path.resolve(__dirname, 'config') },
    ],
  },
  server: {
    host: true,
    port: PORT,
    proxy: createProxy(),
  },
});

export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build';

  console.log(command, mode);

  return mergeConfig(
    commonConfig,
    defineConfig({
      plugins: createVitePlugins(isBuild),
    }),
  );
});
