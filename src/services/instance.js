import axios from "axios"
import gettoken from "../utils/authutils";

const baseurl='https://taskmanagement-backend-b0qs.onrender.com/api';
const authInstance = axios.create({
    baseURL: baseurl,
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
    }
});

const protectedInstance = axios.create({
    baseURL: baseurl,
    timeout: 50000
});

protectedInstance.interceptors.request.use(
    config => {
        const token = gettoken();
        if (token) {
            config.headers['Authorization'] = ''+token;
        }
        return config;
    },
    error => {
        return Promise.reject(error); // Return the rejected promise
    }
);

export default{
    authInstance,
    protectedInstance
};
