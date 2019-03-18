import {
    LIST_USERS_REQUEST,
    LIST_USERS_REQUEST_SUCCESSFUL,
    LIST_USERS_REQUEST_FAILURE
} from '../actions/users';
import {REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE} from '../actions/request_status';

const users = (state = [], action) => {
    switch (action.type) {
        case LIST_USERS_REQUEST:
            return state;
        case LIST_USERS_REQUEST_SUCCESSFUL:
            return action.data.users;
        case LIST_USERS_REQUEST_FAILURE:
            return state;
        default:
            return state;
    }
};

export default users;