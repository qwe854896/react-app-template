import type { PluginOption } from 'vite';
import react from '@vitejs/plugin-react';

export function createVitePlugins() {
  const vitePlugins: (PluginOption | PluginOption[])[] = [react()];
  return vitePlugins;
}
