export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo() {
    return {
        type: ADD_TODO
    }
}

export function deleteTodo(item) {
    return {
        type: DELETE_TODO,
        item: item
    }
}