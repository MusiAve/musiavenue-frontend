import axios from 'axios';
import { API_URL } from 'configs';
import { Toast } from 'helpers';

axios.defaults.baseURL = API_URL;
axios.interceptors.response.use(
  (resp) => {
    if ((resp.data.status === 200 || resp.data.status === 201) && resp.data.message) {
      Toast.success(resp.data.message);
    }
    return resp;
  },
  (error) => {
    if (error && error.response) {
      const { data } = error.response;
      if (data.status === 500) {
        Toast.error(data.message);
      } else if (data.status === 422 && data.message) {
        Toast.warning(data.message);
      } else if (data.status === 401 && data.message) {
        Toast.warning(data.message);
      } else if (data.status === 403 && data.message) {
        Toast.warning(data.message);
      } else if (data.status === 404 && data.message) {
        Toast.warning(data.message);
      } else if (data.status === 400 && data.message) {
        Toast.warning(data.message);
      }
      return Promise.reject(data);
    }
  }
);
export const Http = axios;
export const FixedHttp = axios.create();
