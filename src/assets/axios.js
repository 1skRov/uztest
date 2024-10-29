import axios from 'axios';

const api = axios.create({
    baseURL: 'https://53ea-91-185-26-183.ngrok-free.app', // Твой домен ngrok
});

export default api;
