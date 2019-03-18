export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESSFUL = 'LOGIN_REQUEST_SUCCESSFUL';
export const LOGIN_REQUEST_FAILURE = 'LOGIN_REQUEST_FAILURE';

import {login} from '../../api/user';

export function loginUser(name) {
    return dispatch => {
        dispatch(loginRequest());
        login(name)
            .then(result => {
                dispatch(loginRequestSuccessful(result.data.user));
            })
            .catch(error => {
                dispatch(loginRequestFailure(error));
            });
    };
}

const loginRequest = () => {
    return {
        type: LOGIN_REQUEST,
        data: {}
    };
};

const loginRequestSuccessful = user => {
    return {
        type: LOGIN_REQUEST_SUCCESSFUL,
        data: {
            user
        }
    };
};

const loginRequestFailure = error => {
    return {
        type: LOGIN_REQUEST_FAILURE,
        data: {
            error
        }
    };
};

export const UPDATE_STATUS_REQUEST = 'UPDATE_STATUS_REQUEST';
export const UPDATE_STATUS_REQUEST_SUCCESSFUL = 'UPDATE_STATUS_REQUEST_SUCCESSFUL';
export const UPDATE_STATUS_REQUEST_FAILURE = 'UPDATE_STATUS_REQUEST_FAILURE';

import {updateStatus} from '../../api/user';

export function updateStatus(id, status) {
    return dispatch => {
        dispatch(updateStatusRequest());
        updateStatus(id, status)
            .then(result => {
                dispatch(updateStatusRequestSuccess(status));
            })
            .catch(error => {
                dispatch(updateStatusRequestFailure(error));
            });
    };
}

const updateStatusRequest = () => {
    return {
        type: UPDATE_STATUS_REQUEST,
        data: {}
    };
};

const updateStatusRequestSuccess = status => {
    return {
        type: UPDATE_STATUS_REQUEST_SUCCESSFUL,
        data: {
            status
        }
    };
};

const updateStatusRequestFailure = error => {
    return {
        type: UPDATE_STATUS_REQUEST_FAILURE,
        data: {
            error
        }
    };
};