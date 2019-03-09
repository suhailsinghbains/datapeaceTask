import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import User from './User';
import { HashRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Table} />
          <Route path='/user/:id' component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
