import axios from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080/v1";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: SetApiRequestHeader()
});

export function SetApiRequestHeader(customHeader = {}) {
    const defaultHeaders = {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...customHeader
    };
    return defaultHeaders;
}

// Add a request interceptor
instance.interceptors.request.use(
    config => {
        config.withCredentials = true;
        // const token = getToken();
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    error => Promise.reject(error)
);

instance.interceptors.response.use(
    response => {
        // if (response.headers['access-token']) {
        //     const token = response.headers['access-token'];
        //     setToken(token);
        // }
        return response.data;
    },
    error => {
        const err = error?.response?.data?.msg || error?.response?.data?.message || error?.message || error.message || JSON.stringify(error);
        console.log("error===> ", error);

        // TODO: Handle error with some UI pop-ups
        return Promise.reject(err);
    },
);
const _getApiVersion = (params = {}) => params.apiVersion || "";

export function get(url, params) {
    return instance.get(`${_getApiVersion(params)}/${url}`, params);
}

export function post(url, body, params) {
    return instance.post(`${_getApiVersion(params)}/${url}`, body, params);
}

export function put(url, body, params) {
    return instance.put(`${_getApiVersion(params)}/${url}`, body, params);
}

export function patch(url, params, body) {
    return instance.patch(`${_getApiVersion(params)}/${url}`, body || {}, params);
}

export function remove(url, params, body) {
    return instance.delete(`${_getApiVersion(params)}/${url}`, body || {}, params);
}
