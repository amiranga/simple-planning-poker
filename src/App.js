import React, { Component } from 'react';
import { connect } from 'react-redux';

import { validateSession } from './store/actions';

import CardDeck from './components/CardDeck';
import UserList from './components/UserList';
import NameInput from './components/NameInput';

import NewRoom from './components/NewRoom';

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
        {this.props.isLoggedIn ?
          <div>
            <CardDeck gameFormat='scrum' />
            <UserList />
          </div>
          : <NameInput />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.loggedIn,
    userName: state.userName
  }
}

function mapDispatchToProps(dispatch) {
  return {
    validateSession: () => dispatch(validateSession()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
