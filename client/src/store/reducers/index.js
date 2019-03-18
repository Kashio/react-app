import { combineReducers } from 'redux';
import user from './user';
import filter from './filter';
import users from './users';

export default combineReducers({
    user,
    filter,
    users
});