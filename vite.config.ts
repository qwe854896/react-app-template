import path from 'path';
import type { ConfigEnv, UserConfig } from 'vite';

import { PORT } from './config/constant';
import { createProxy } from './config/vite/proxy';
import { createVitePlugins } from './config/vite/plugins';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';

  return {
    plugins: createVitePlugins(mode, isBuild),
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
    preview: {
      host: true,
      port: PORT,
      proxy: createProxy(),
    },
  };
};
