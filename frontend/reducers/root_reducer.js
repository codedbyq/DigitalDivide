import { combineReducers } from 'redux';
import EntitiesReducer from './entities/entities_reducer';
import SessionReducer from './session/session_reducer';

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer
});

export default RootReducer;