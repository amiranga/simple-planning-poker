import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Room from './components/Room';
import NewRoom from './components/NewRoom';
import NameInput from './components/NameInput';

import { validateSession } from './store/actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.validateSession();
  }

  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/newroom" component={NewRoom} />
              <Route path="/room" component={Room} />
            </Switch>
          </Router>
        ) : (
            <NameInput />
          )}

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.loggedIn,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    validateSession: () => dispatch(validateSession()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
