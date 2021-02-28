import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const composeEnhancers = compose;
export type AppState = ReturnType<typeof rootReducer>;

export default process.env.NODE_ENV === 'development'
    ? createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    : createStore(rootReducer, applyMiddleware(thunk));
