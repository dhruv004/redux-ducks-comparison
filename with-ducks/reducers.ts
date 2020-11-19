import { combineReducers } from 'redux';
import { todoReducer } from './ducks/todo';
import { userReducer } from './ducks/user';

export const reducers = combineReducers({
    "user": userReducer,
    "todo": todoReducer
});
