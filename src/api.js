import axios from 'axios';

const api = axios.create({
  baseURL: 'https://418c-200-139-13-108.ngrok-free.app/api/' //Endereço da API
});

//Adiciona o token no cabeçalho antes de qualquer requisição
api.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  config.headers.Accept = 'application/json';

  //Remover isso depois, so precisa por causa do ngrok
  config.headers['ngrok-skip-browser-warning'] = '69420';

  return config;
});

export default api;