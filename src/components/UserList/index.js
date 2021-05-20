import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import User from '../User';
import { getUsers } from '../../services/database-service';
import { populateUsers } from '../../store/actions';
import './styles.css';

class UserList extends Component {
  componentDidMount() {
    getUsers(this.props.roomId, newUser => {
      if (newUser) {
        this.props.populateUsers(newUser);
      }
    });
  }

  render() {
    const userMap = this.props.users;
    return (
      <Container className="user-holder">
        {Object.keys(userMap).map(uid => (
          <User key={uid} name={userMap[uid].userName} vote={userMap[uid].vote} voteEnded={this.props.voteEnded} />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    voteEnded: state.voteEnded,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    populateUsers: newUser => {
      dispatch(populateUsers(newUser));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
