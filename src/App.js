import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Room from './components/Room';
import CreateRoom from './components/CreateRoom';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/createroom" component={CreateRoom} />
            <Route path="/room" component={Room} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
