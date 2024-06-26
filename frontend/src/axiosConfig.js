import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true, // This ensures cookies are included
});

export default instance;
