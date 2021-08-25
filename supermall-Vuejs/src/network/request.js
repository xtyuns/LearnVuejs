import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5'
    });

    instance.interceptors.response.use(resp => resp.data, error => error);

    return instance(config)
}