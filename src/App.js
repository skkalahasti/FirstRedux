import React, { Component } from 'react';
import  {Header} from './AppClasses/header';
import {incrementCounter, setCounter} from './actions/topic-action';
import './App.css';
import {connect} from 'react-redux';
import TodoList from "./AppClasses/TodoList";

export class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <TodoList/>
                <TodoItem/>
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