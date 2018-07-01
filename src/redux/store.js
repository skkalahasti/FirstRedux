import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index.js';

const enhancers = compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension(): f=>f
);

export const storeVal = createStore(
    rootReducer,
    {},
    enhancers
);