import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

import userMock from '../mock/users';

export const setupProdMockServer = () => {
  createProdMockServer([...userMock]);
};
