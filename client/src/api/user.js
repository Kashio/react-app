import axios from 'axios';
import config from 'config';

const resource = 'user';

export const login = (username) => {
    return axios.post(config.api.url + resource + '/login', {
        username
    });
};

export const updateStatus = (_id, status) => {
    return axios.put(config.api.url + resource + '/status', {
        _id,
        status
    });
};

export const list = (_id) => {
    return axios.get(config.api.url + resource + '/list', {
        params: {
            _id
        }
    });
};