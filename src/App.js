import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import Home from './components/Home';
import Room from './components/Room';
import CreateRoom from './components/CreateRoom';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            Simple Planning Poker
          </Navbar.Brand>
        </Navbar>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/createroom" component={CreateRoom} />
            <Route path="/room" component={Room} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default connect()(App);
