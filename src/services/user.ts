import request from '@/utils/request';

const req = request('/mock');

enum Api {
  USER = '/user',
}

export interface UserData {
  id: number;
  name: string;
}

interface UserResponse {
  code: 0 | -1;
  data: UserData[];
}

export const getUser = (): Promise<UserResponse> => req({ url: Api.USER, method: 'GET' });
