import axios, { AxiosRequestConfig } from 'axios';

const request = (BASE_URL: string) => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });

  return <T>(reqConfig: AxiosRequestConfig): Promise<T> => {
    return instance.request<T, T>(reqConfig);
  };
};

export default request;
