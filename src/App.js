import React, { Component } from 'react';
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
            </div>
        );
    }
}

const mapStateToProps = state => {return {counter: state.counter}};

const mapDispatchToProps = dispatch => ({
    incrementCounter: () => dispatch(incrementCounter()),
    setCounter : (val) => dispatch(setCounter(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);