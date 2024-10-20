import axios from 'axios';

// Создаём экземпляр Axios с общими настройками
const instance = axios.create({
    baseURL: 'https://ee14-146-158-66-224.ngrok-free.app', // Ваш ngrok URL
});

// Добавляем interceptor, который будет автоматически добавлять заголовок
instance.interceptors.request.use(config => {
    config.headers['ngrok-skip-browser-warning'] = 'true';  // Добавляем заголовок
    return config;
}, error => {
    return Promise.reject(error);
});

export default instance;
