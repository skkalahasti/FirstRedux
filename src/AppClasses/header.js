import React, { Component } from 'react';
import logo from '../logo.svg';

export class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg">
                <img src={logo} className="App-logo" alt="logo" />
                This is a Header on my app
            </div>
        )
    }
}