import { viteMockServe } from 'vite-plugin-mock';

const configMockPlugin = () => {
  return viteMockServe({
    mockPath: 'mock',
  });
};

export default configMockPlugin;
