import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { users } from './users';
import { isLoading } from './isLoading';

const reducers = combineReducers({ users, isLoading });
export type AppState = ReturnType<typeof reducers>;
const store = createStore(reducers, applyMiddleware(thunk));
export default store;
