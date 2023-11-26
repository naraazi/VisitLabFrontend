import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL //Endereço da API
});

//Adiciona o token no cabeçalho antes de qualquer requisição
api.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  config.headers.Accept = 'application/json';

  config.headers['ngrok-skip-browser-warning'] = '69420';

  config.headers['X-Application-Key'] = process.env.REACT_APP_KEY;

  return config;
});

export default api;