import axios from 'axios';

const baseURL = 'http://192.168.15.2:3333';

const api = axios.create({
  baseURL,
  /* my adress */
});

export { api, baseURL };
