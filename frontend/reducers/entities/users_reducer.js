import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../../actions/user_actions';

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;

        case RECEIVE_ALL_USERS:
            return Object.assign({}, newState, action.users);

        default: 
            return state;
    }
}

export default UsersReducer;