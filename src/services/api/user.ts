import request from './request';

enum Api {
  USER = '/api/user',
}

export interface UserData {
  id: number;
  name: string;
}

interface UserResponse {
  code: 0 | -1;
  data: UserData[];
}

export const getUser = (): Promise<UserResponse> => request({ url: Api.USER, method: 'GET' });
