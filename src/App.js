import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import {incrementCounter, setCounter} from './actions/topic-action';
import './App.css';
import {connect} from 'react-redux';

export class App extends Component {

    render() {
        return (
            <div className="App">
              <img src={logo} className="App-logo" alt="logo" />
                <input value={this.props.counter} onChange={(event) => this.props.setCounter(event.target.value)} />
                <button onClick={() => {console.log(this.props);this.props.incrementCounter()}}>Click me to increment</button>
                <span>Value of Counter {this.props.counter}</span>
              <p> Hello this is now my app</p>
              <ul>
                <li><Link to="/topic">Click on this to move to a Topic</Link></li>
                <li><Link to="/conversation">Click on this to make a conversation</Link></li>
              </ul>
              <Route exact path='/' component={App} />
              <Route path={'/topic'} component={Topic} />
              <Route path={'/conversation'} component={Conversation} />
            </div>
        );
    }
}

const Topic = (props) => { return <div>Hello This is a Topic</div>};

const Conversation = () => <div>Hello This is a Conversation</div>

const mapStateToProps = state => {return {counter: state.counter}};

const mapDispatchToProps = dispatch => ({
    incrementCounter: () => dispatch(incrementCounter()),
    setCounter : (val) => dispatch(setCounter(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);