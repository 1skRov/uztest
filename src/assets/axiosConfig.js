import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://2fdb-37-150-163-252.ngrok-free.app',
    withCredentials: true,
});

axiosInstance.defaults.xsrfCookieName = 'csrftoken';
axiosInstance.defaults.xsrfHeaderName = 'X-CSRFToken';

export default axiosInstance;
