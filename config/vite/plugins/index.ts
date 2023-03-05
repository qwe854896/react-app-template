import type { PluginOption } from 'vite';
import react from '@vitejs/plugin-react';

import configMockPlugin from './mock';

export function createVitePlugins() {
  const vitePlugins: (PluginOption | PluginOption[])[] = [react(), configMockPlugin()];

  return vitePlugins;
}
