import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {INCREMENT, DECREMENT, SETVALUE} from "../actions/topic-action";
import {todoList} from './TodoList';

export default combineReducers({
    routing: routerReducer,
    counter: counter,
    todoList: todoList,
    fake: () => []
});

function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case SETVALUE:
            return Number(action.val);
        default:
            return state;
    }
}