import axios from 'axios';

// Функция для получения CSRF токена из cookie
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
// Создаём экземпляр Axios
const axiosInstance = axios.create({
    baseURL: 'https://2fdb-37-150-163-252.ngrok-free.app',  // Ваш ngrok URL
    withCredentials: true,  // Включаем отправку cookie с запросами
});

// Добавляем interceptor для установки CSRF-токена в заголовки
axiosInstance.interceptors.request.use(
    (config) => {
        const csrftoken = getCookie('csrftoken');
        console.log('CSRF-токен:', csrftoken);
        if (csrftoken) {
            config.headers['X-CSRFToken'] = csrftoken;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
