import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Col, Row } from 'react-bootstrap';

import CardDeck from '../CardDeck';
import UserList from '../UserList';

class Room extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}

export default connect()(Room);
