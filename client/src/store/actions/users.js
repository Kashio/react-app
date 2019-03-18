export const LIST_USERS_REQUEST = 'LIST_USERS_REQUEST';
export const LIST_USERS_REQUEST_SUCCESSFUL = 'LIST_USERS_REQUEST_SUCCESSFUL';
export const LIST_USERS_REQUEST_FAILURE = 'LIST_USERS_REQUEST_FAILURE';

import {list} from '../../api/user';

export function listUsers(_id) {
    return dispatch => {
        dispatch(listUsersRequest());
        list(_id)
            .then(result => {
                dispatch(listUsersRequestSuccessful(result.data));
            })
            .catch(error => {
                dispatch(listUsersRequestFailure(error));
            });
    };
}

const listUsersRequest = () => {
    return {
        type: LIST_USERS_REQUEST,
        data: {}
    };
};

const listUsersRequestSuccessful = users => {
    return {
        type: LIST_USERS_REQUEST_SUCCESSFUL,
        data: {
            users
        }
    };
};

const listUsersRequestFailure = error => {
    return {
        type: LIST_USERS_REQUEST_FAILURE,
        data: {
            error
        }
    };
};
