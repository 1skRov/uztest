import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import './assets/index.css';
import axiosInstance from '@/assets/axiosConfig';

// При инициализации приложения получаем CSRF-токен
axiosInstance.get('get-csrf-token/')
    .then(response => {
        console.log('CSRF-токен получен и установлен в cookie');
    })
    .catch(error => {
        console.error('Ошибка при получении CSRF-токена:', error);
    });

createApp(App).use(store).use(router).use(autoAnimatePlugin).mount('#app')
