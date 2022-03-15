import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 60000,
  withCredentials: true
})

instance.interceptors.response.use((value) => {
  return value.data
});

export default instance;