import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Col, Row, Button } from 'react-bootstrap';

import CardDeck from '../CardDeck';
import UserList from '../UserList';
import NameInput from '../NameInput';
import VoteGraph from '../VoteGraph';

import User from '../../dto/user';
import { getRoom, saveUser, saveRoomStatus, watchRoomStatus, getVotes } from '../../services/database-service';
import { loadRoom, validateSession, revealVotes } from '../../store/actions';

class Room extends Component {

  constructor(props) {
    super(props);
    this._getRoomId = this._getRoomId.bind(this);
    this._registerUserForRoom = this._registerUserForRoom.bind(this);
    this._revealVotes = this._revealVotes.bind(this);
  }

  componentDidMount() {
    this.props.validateSession();
    const roomId = this._getRoomId();
    getRoom(roomId, (room) => {
      this.props.loadRoom(room);
      if (this.props.isLoggedIn) {
        this._registerUserForRoom(roomId)
      }
    });
    watchRoomStatus(this._getRoomId(), roomStatus => {
      if (roomStatus && roomStatus.status === 'END') {
        getVotes(this._getRoomId(), (votes) => {
          this.props.revealVotes(votes);
        });
      }
    })
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

  _revealVotes() {
    saveRoomStatus(this._getRoomId(), 'END');
  }

  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <Container>
            {this.props.room && (
              <Row>
                <Col sm={8}>
                  {this.props.finalVotes ?
                    <VoteGraph /> :
                    <CardDeck gameFormat={this.props.room.gameFormat} />
                  }

                </Col>
                <Col sm={4}>
                  <UserList roomId={this._getRoomId()} />
                  {this.props.room.adminUserId == this.props.userId && (
                    <>
                      <Button variant="primary">Rest Votes</Button>
                      <Button variant="primary" onClick={this._revealVotes}>End Votes</Button>
                    </>
                  )}
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
    revealVotes: (votes) => dispatch(revealVotes(votes))
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    roomId: state.roomId,
    room: state.room,
    isLoggedIn: state.loggedIn,
    userName: state.userName,
    userId: state.userId,
    finalVotes: state.finalVotes,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Room));
