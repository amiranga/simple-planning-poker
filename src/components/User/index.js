import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className="user-name">{this.props.name}</div>
        <div className="action">{this.props.vote}</div>
      </div>
    );
  }
}

export default User;