import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bfdb-91-185-26-183.ngrok-free.app',
});

export default api;
