import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';

import CardDeck from '../CardDeck';
import UserList from '../UserList';
import NameInput from '../NameInput';

import User from '../../dto/user';
import { getRoom, saveUser } from '../../services/database-service';
import { loadRoom, validateSession } from '../../store/actions';

class Room extends Component {

  constructor(props) {
    super(props);
    this._getRoomId = this._getRoomId.bind(this);
    this._registerUserForRoom = this._registerUserForRoom.bind(this);
  }

  componentDidMount() {
    this.props.validateSession();
    const roomId = this._getRoomId();
    getRoom(roomId, (room) => {
      this.props.loadRoom(room);
      if(this.props.isLoggedIn) {
        this._registerUserForRoom(roomId)
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.isLoggedIn && this.props.isLoggedIn) {
      const roomId = this._getRoomId();
      this._registerUserForRoom(roomId);
    }
  }

  _getRoomId() {
    return this.props.roomId || (this.props.location.pathname || window.location.pathname).split("/")[2];
  }

  _registerUserForRoom(roomId) {
    const user = new User(this.props.userName, this.props.userId);
    saveUser(roomId, user);
  }

  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <Container>
            {this.props.room && (
              <Row>
                <Col sm={8}>
                  <CardDeck gameFormat={this.props.room.gameFormat} />
                </Col>
                <Col sm={4}>
                  <UserList roomId={this._getRoomId()} />
                </Col>
              </Row>
            )}
          </Container>
        ) : (
            <NameInput />
          )}

      </div>

    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadRoom: (room) => {
      dispatch(loadRoom(room))
    },
    validateSession: () => dispatch(validateSession()),
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    roomId: state.roomId,
    room: state.room,
    isLoggedIn: state.loggedIn,
    userName: state.userName,
    userId: state.userId,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Room));
