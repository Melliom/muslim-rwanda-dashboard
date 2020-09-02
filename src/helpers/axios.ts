import axios from 'axios';
import getToken from 'helpers/getToken';
import { INVALID_TOKEN } from 'constants/statusErrorCode';

const token = getToken();

const responseHandler = (response: any) => response.data;
const errorHandler = (error: any) => {
  if (error?.response?.data?.code === INVALID_TOKEN) {
    console.error('here error', error.response);
    localStorage.removeItem('rma-token');
    window.location.href = '/';
  }
  const errorResponse: any = error.response ? error.response.data : error.message;
  return Promise.reject(errorResponse);
};

const rmaApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_STAGING_URL,
  headers: {
    Authorization: token,
  },
});

export default rmaApi;

rmaApi.interceptors.response.use(responseHandler, errorHandler);
