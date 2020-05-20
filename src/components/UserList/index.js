import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../User'

import { getUsers } from '../../services/database-service';

class UserList extends Component {

  componentDidMount() {
    getUsers((newUser) => {
      if (newUser) {
        console.log("users", newUser);
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
      <div>
        {this.state.users.map(usr => <User name={usr.fullname} />)}
      </div>
    );
  }
}


export default connect()(UserList);
