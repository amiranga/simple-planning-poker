import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Room from './components/Room';
import CreateRoom from './components/CreateRoom';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createroom" component={CreateRoom} />
          <Route path="/room" component={Room} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default connect()(App);
