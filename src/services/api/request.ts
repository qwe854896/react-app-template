import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = '/api';

const instance = axios.create({
  baseURL: BASE_URL,
});

const request = <T>(reqConfig: AxiosRequestConfig): Promise<T> => {
  return instance.request<T, T>(reqConfig);
};

export default request;
