import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSession } from '../../store/actions';

class NameInput extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createSession(this.state.username);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>Please Enter User Name</div>
        <input
          type="text"
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createSession: (userName) => {
      dispatch(createSession(userName))
    }
  }
}

export default connect(null, mapDispatchToProps)(NameInput)