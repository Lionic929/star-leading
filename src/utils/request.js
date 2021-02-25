import axios from 'axios';

export const httpRequest = axios.create({
  baseURL: `${process.env.API}`,
  timeout: 100000,
});

const onResponseSuccess = (response) => response;

const onResponseError = (error) => {
  if (error.response.status === 500) {
    error.response.data.message = 'INTERNAL_SERVER_ERROR';
  }

  return Promise.reject(error);
};

httpRequest.interceptors.response.use(onResponseSuccess, onResponseError);

export default httpRequest;
