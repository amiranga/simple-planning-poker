import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../User'

import { getUsers } from '../../services/database-service';
import { Container } from 'react-bootstrap';

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = { users: [] }
  }

  componentDidMount() {
    getUsers(this.props.roomId, (newUser) => {
      if (newUser) {
        this.setState({ users: this.state.users.concat(newUser) })
      }
    })
  }

  render() {
    return (
      <Container className="user-holder">
        {this.state.users.map(usr => <User key={usr.userId} name={usr.userName} />)}
      </Container>
    );
  }
}

export default connect(null, null)(UserList);
