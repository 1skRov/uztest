import axios from 'axios';

const api = axios.create({
    baseURL: 'https://uzbek.kz/api',
});

export default api;
