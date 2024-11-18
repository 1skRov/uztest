import axios from 'axios';

const api = axios.create({
    baseURL: 'https://uzbek.kz',
});

export default api;
