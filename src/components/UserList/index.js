import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../User'

import { getUsers } from '../../services/database-service';
import { Container } from 'react-bootstrap';

class UserList extends Component {

  componentDidMount() {
    getUsers((newUser) => {
      if (newUser) {
        this.setState({ users: this.state.users.concat(newUser) })
      }
    })
  }

  constructor(props) {
    super(props);
    this.state = { users: [] }
  }

  render() {
    return (
      <Container className="user-holder">
        {this.state.users.map(usr => <User name={usr.fullname} />)}
      </Container>
    );
  }
}


export default connect()(UserList);
