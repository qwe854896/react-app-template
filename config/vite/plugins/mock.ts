import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock';

const configMockPlugin = (isBuild: boolean) => {
  return viteMockServe({
    ignore: /^_/,
    mockPath: 'mock',
    localEnabled: !isBuild,
    prodEnabled: isBuild,
    injectCode: `
import { setupProdMockServer } from '../mock/_mock-prod-server';
setupProdMockServer();
    `,
    injectFile: resolve('src/main.tsx'),
  });
};

export default configMockPlugin;
