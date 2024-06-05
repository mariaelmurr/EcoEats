import axios from 'axios';

export class AxiosMiddleware {
  static boot() {
    axios.defaults.baseURL = ''; // put the base url here
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';

    axios.defaults.headers.post['Content-Type'] = 'application/json';

    axios.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        console.log('errorr', error);
        return Promise.reject(error);
      },
    );
  }
}
