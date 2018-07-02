import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, deleteTodo} from "../actions/todo-list-action";
import {DisplayTodoListItem} from "./DisplayTodoListItem"

export class TodoList extends Component {

    render() {
        return(
            <div className="col-6">
                <DisplayTodoListItem />
                <button className="btn btn-primary" onClick={() => this.props.addTodo()}>Add TODO</button>
                <button className="btn btn-danger" onClick={() => this.props.deleteTodo()}>Delete TODO</button>
            </div>
        )}
}


const mapStateToProps = state => {return {todoList: state.todoList}};

const mapDispatchToProps = dispatch => ({
    addTodo: () => dispatch(addTodo()),
    deleteTodo: () => dispatch(deleteTodo())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);