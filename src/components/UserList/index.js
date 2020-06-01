import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../User'

import { getUsers } from '../../services/database-service';
import { Container } from 'react-bootstrap';

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = { users: {} }
  }

  componentDidMount() {
    getUsers(this.props.roomId, (newUser) => {
      if (newUser) {
        const oldSet = this.state.users;
        oldSet[newUser.userId] = newUser
        this.setState({ users: oldSet })
      }
    })
  }

  render() {
    const userMap = this.state.users;
    return (
      <Container className="user-holder">
        {Object.keys(userMap).map(uid => <User key={uid} name={userMap[uid].userName} vote={userMap[uid].vote} />)}
      </Container>
    );
  }
}

export default connect(null, null)(UserList);
