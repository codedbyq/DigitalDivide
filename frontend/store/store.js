import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer'

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    const { logger } = require("redux-logger");
    middlewares.concat(logger);
}

const configureStore = (preloadedstate = {}) => 
    createStore(RootReducer, preloadedstate, applyMiddleware(...middlewares));

export default configureStore;