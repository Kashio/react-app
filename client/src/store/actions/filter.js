export const SET_STATUS_FILTER = 'SET_STATUS_FILTER';
export const SET_TEXT_FILTER = 'SET_TEXT_FILTER';

export const setStatusFilter = (status) => {
    return {
        type: SET_STATUS_FILTER,
        data: {
            status
        }
    };
};

export const setTextFilter = (text) => {
    return {
        type: SET_TEXT_FILTER,
        data: {
            text
        }
    };
};
