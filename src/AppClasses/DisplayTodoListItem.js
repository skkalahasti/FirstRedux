import React, {Component} from 'react';


export class DisplayTodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItem: props.todoItem
        }
    }
    render() {
        return (
                <tr>
                    <td>{this.state.todoItem.index}</td>
                    <td>{this.state.todoItem.name}</td>
                    <td>{this.state.todoItem.status}</td>

                </tr>
        );
    }
}
