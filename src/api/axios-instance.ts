import axios, { AxiosResponse } from 'axios';
import { parseAxiosError } from '../utils/axios-utils';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    Accept: 'application/json',
  },
});

/**
 * Handle Axios response errors
 */
export const handleAxiosErrors = () => {
  api.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse | Promise<AxiosResponse> => {
      return response;
      // tslint:disable-next-line: align
    },
    error => {
      return Promise.reject(parseAxiosError(error));
    }
  );
};
