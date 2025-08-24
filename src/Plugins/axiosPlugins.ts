import axios from "axios";
export const Api = axios .create({
    baseURL: 'https://khaoniewback-production.up.railway.app',
    headers:{
        "Content-Type":"applicaion/json"
    },
});
Api.interceptors.request.use(
    (config) => {
        const token = localStorage
        if (token){
            config.headers.Authorization = `Bearer`
        }
    return config ;
    },
(error) => {
    return Promise.reject(error);
}
);