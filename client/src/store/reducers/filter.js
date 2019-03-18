import {
    SET_STATUS_FILTER,
    SET_TEXT_FILTER
} from '../actions/filter';

const user = (state = {}, action) => {
    switch (action.type) {
        case SET_STATUS_FILTER:
            return {
                ...state,
                status: action.data.status
            };
        case SET_TEXT_FILTER:
            return {
                ...state,
                text: action.data.text
            };
        default:
            return state;
    }
};

export default user;