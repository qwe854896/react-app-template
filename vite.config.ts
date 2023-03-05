import path from 'path';
import { defineConfig } from 'vite';

import { PORT } from './config/constant';
import { createProxy } from './config/vite/proxy';
import { createVitePlugins } from './config/vite/plugins';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),
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
