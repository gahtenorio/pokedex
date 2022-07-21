import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pokedex-back-production.up.railway.app',
});
