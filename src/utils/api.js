// Modules
import axios from 'axios';

// Constants
import { BASE_URL } from './constants';

axios.interceptors.request.use(
    config => {
        // Don't IE request cache
        config.headers['Pragma'] = 'no-cache';

        return config;
    },
    error => Promise.reject(error)
);

class Api {
    constructor() {
        // Don't IE request cache
        axios.defaults.headers.common['Pragma'] = 'no-cache';
    }

    static get(uri) {
        return axios.get(`${BASE_URL}${uri}`);
    }

    static post(uri, data) {
        return axios.post(`${BASE_URL}${uri}`, data);
    }

    static put(uri, data) {
        return axios.put(`${BASE_URL}${uri}`, data);
    }

    static patch(uri, data) {
        return axios.patch(`${BASE_URL}${uri}`, data);
    }

    static delete(uri) {
        return axios.delete(`${BASE_URL}${uri}`);
    }

    static getPDF(uri) {
        return axios.get(uri, {responseType:"blob"});
    }
}

class ApiMultipartData extends Api {
    constructor() {
        super()
        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    }
}

export {
    ApiMultipartData,
};

export default Api;