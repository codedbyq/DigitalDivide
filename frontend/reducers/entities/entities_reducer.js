import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';

const EntitiesReducer = combineReducer({
    users: UsersReducer
});

export default EntitiesReducer;