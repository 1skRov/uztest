import axios from 'axios';

const api = axios.create({
    baseURL: 'https://89fa-91-185-26-183.ngrok-free.app',
});

export default api;
