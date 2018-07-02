
import {ADD_TODO, DELETE_TODO} from "../actions/todo-list-action";

const initialState = {todoList: []};
export function todoList(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state.todoList.push({index: state.todoList.length || 1, text: '', status: 'PENDING'}));
        case DELETE_TODO:
            return Object.assign({}, state.todoList.splice(state.todoList.findIndex(item => item.index === action.item.index)));
        default:
            return state;
    }
}