import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-dev.letslink.digital/api/admin/'
});

export default api;