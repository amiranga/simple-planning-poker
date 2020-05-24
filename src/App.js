import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Col, Row } from 'react-bootstrap';

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
          <Container>
            <Row>
              <Col sm={8}>
                <CardDeck gameFormat='scrum' />
              </Col>
              <Col sm={4}>
                <UserList />
              </Col>
            </Row>
          </Container>
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
