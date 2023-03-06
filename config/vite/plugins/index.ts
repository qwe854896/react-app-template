import type { PluginOption } from 'vite';
import react from '@vitejs/plugin-react';

import configMockPlugin from './mock';

export function createVitePlugins(mode: string, isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [react(), configMockPlugin(isBuild)];

  return vitePlugins;
}
