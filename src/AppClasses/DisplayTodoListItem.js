import React, {Component} from 'react';


export class DisplayTodoListItem extends Component {
    render() {
        return (
           <div className="row">
               <p> Hello Darkness my old friend </p>
               {/*<p>Serial: {this.state.index}</p>*/}
               {/*<p>Name: {this.state.name}</p>*/}
               {/*<p>Status: {this.status.status}</p>*/}
           </div>
        );
    }
}
