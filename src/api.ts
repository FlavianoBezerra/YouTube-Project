import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export default api;