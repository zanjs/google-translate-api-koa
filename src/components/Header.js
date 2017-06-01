import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Header extends Component {
    render() {
        return (
        <div className="App">
            <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>皮皮球翻译</h2>
            </div>
            
        </div>
        )
  }
}