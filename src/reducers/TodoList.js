
import {ADD_TODO, DELETE_TODO} from "../actions/todo-list-action";
import _ from "lodash";

export function todoList(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            const addObj = {index: state.length, text: '', status: 'PENDING'};
            const newState = _.cloneDeep(state);
            newState.push(addObj);
            return newState;
        case DELETE_TODO:
            Object.assign({}, state.todoList.push({index: state.todoList.length || 1, text: '', status: 'PENDING'}));
            return Object.assign({}, state.todoList.splice(state.todoList.findIndex(item => item.index === action.item.index)));
        default:
            return state;
    }
}