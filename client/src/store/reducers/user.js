import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESSFUL,
    LOGIN_REQUEST_FAILURE,
    UPDATE_STATUS_REQUEST,
    UPDATE_STATUS_REQUEST_SUCCESSFUL,
    UPDATE_STATUS_REQUEST_FAILURE
} from '../actions/user';
import {REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE} from '../actions/request_status';

const user = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                request: {
                    ...state.request,
                    status: REQUEST
                }
            };
        case LOGIN_REQUEST_SUCCESSFUL:
            return {
                ...state,
                user: action.data.user,
                request: {
                    ...state.request,
                    status: REQUEST_SUCCESS
                }
            };
        case LOGIN_REQUEST_FAILURE:
            return {
                ...state,
                request: {
                    ...state.request,
                    status: REQUEST_FAILURE,
                    error: action.data.error
                }
            };
        case UPDATE_STATUS_REQUEST:
            return {
                ...state,
                request: {
                    ...state.request,
                    status: REQUEST
                }
            };
        case UPDATE_STATUS_REQUEST_SUCCESSFUL:
            return {
                ...state,
                user: {
                    ...state.user,
                    status: action.data.status
                }
            };
        case UPDATE_STATUS_REQUEST_FAILURE:
            return {
                ...state,
                request: {
                    ...state.request,
                    status: REQUEST_FAILURE,
                    error: action.data.error
                }
            };
        default:
            return state;
    }
};

export default user;