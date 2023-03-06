import { MockMethod } from 'vite-plugin-mock';
import data from './data.json';

export default [
  {
    // Respond to GET /api/users with the mocked user data
    url: '/mock/user',
    method: 'get',
    response: () => {
      return data.user;
    },
  },
] as MockMethod[];
