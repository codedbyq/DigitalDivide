import { combineReducers } from 'redux';
import EntitiesReducer from './entities/entities_reducer';

const RootReducer = combineReducer({
    entities: EntitiesReducer
});

export default RootReducer;