export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESSFUL = 'LOGIN_REQUEST_SUCCESSFUL';
export const LOGIN_REQUEST_FAILURE = 'LOGIN_REQUEST_FAILURE';

import {login} from '../../api/user';
import {listUsers} from './users';

export function loginUser(username) {
    return dispatch => {
        dispatch(loginRequest());
        login(username)
            .then(result => {
                dispatch(loginRequestSuccessful(result.data));
                dispatch(listUsers(result.data._id));
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

export const UPDATE_USER_STATUS_REQUEST = 'UPDATE_USER_STATUS_REQUEST';
export const UPDATE_USER_STATUS_REQUEST_SUCCESSFUL = 'UPDATE_USER_STATUS_REQUEST_SUCCESSFUL';
export const UPDATE_USER_STATUS_REQUEST_FAILURE = 'UPDATE_USER_STATUS_REQUEST_FAILURE';

import {updateStatus} from '../../api/user';

export function updateUserStatus(_id, status) {
    return dispatch => {
        dispatch(updateUserStatusRequest());
        updateStatus(_id, status)
            .then(result => {
                dispatch(updateUserStatusRequestSuccess(status));
            })
            .catch(error => {
                dispatch(updateUserStatusRequestFailure(error));
            });
    };
}

const updateUserStatusRequest = () => {
    return {
        type: UPDATE_USER_STATUS_REQUEST,
        data: {}
    };
};

const updateUserStatusRequestSuccess = status => {
    return {
        type: UPDATE_USER_STATUS_REQUEST_SUCCESSFUL,
        data: {
            status
        }
    };
};

const updateUserStatusRequestFailure = error => {
    return {
        type: UPDATE_USER_STATUS_REQUEST_FAILURE,
        data: {
            error
        }
    };
};