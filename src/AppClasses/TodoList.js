import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, deleteTodo} from "../actions/todo-list-action";
import {DisplayTodoListItem} from "./DisplayTodoListItem"

export class TodoList extends Component {

    render() {
        return(
            <div className="col-3 my-1">
                <button className="btn btn-primary" onClick={() => this.props.addTodo()}>Add TODO</button>
                {this.props.todoList.length === 0 ?
                    <p>No Notes yet.Please add a note to see one</p> : <ListTable todoList={this.props.todoList} /> }
            </div>
        )}
}

function ListTable(props) {
    console.log(props)
    return <table className="table table-active">
        <thead>
        <tr>
            <th>Index</th>
            <th>Text</th>
            <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {props.todoList.map(item =>
            <DisplayTodoListItem todoItem={item} key={item.index}/>
        )}
        </tbody>
    </table>
}

const mapStateToProps = state => {return {todoList: state.todoList}};

const mapDispatchToProps = dispatch => ({
    addTodo: () => dispatch(addTodo()),
    deleteTodo: () => dispatch(deleteTodo())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);