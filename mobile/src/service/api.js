import axios from 'axios';

const api = axios.create({
    //10.0.3.2
    baseURL: 'http://192.168.1.19:3030'
})

export default api;