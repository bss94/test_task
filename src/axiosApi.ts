import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default axiosApi;
