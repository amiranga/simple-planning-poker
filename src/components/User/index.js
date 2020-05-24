import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './styles.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  displayVoted(voted) {
    return voted? '\u2714' : 'X';
  }

  render() {
    return (
      <Row className="user-data">
        <Col sm={8}>
          <div className="user-name">{this.props.name}</div>
        </Col>
        <Col sm={4}>
          <div className="action">{this.displayVoted(true)}</div>
        </Col>
      </Row>
    );
  }
}

export default User;