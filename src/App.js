import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Homescreen from './Homescreen/Homescreen'
import {Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Route path = "/homescreen" component = {Homescreen}/>
        <Route exact path = "/" component = {Login}/>
      </div>
    );
  }
}

export default App;
