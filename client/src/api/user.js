import axios from 'axios';
import config from 'config';

const resource = 'user';

export const login = (name) => {
    return axios.post(config.api.url + resource + '/login', {
        name
    });
};

export const updateStatus = (id, status) => {
    return axios.put(config.api.url + resource + '/updateStatus', {
        id,
        status
    });
};