import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';

import CardDeck from '../CardDeck';
import UserList from '../UserList';
import NameInput from '../NameInput';

import { getRoom } from '../../services/database-service';
import { loadRoom, validateSession } from '../../store/actions';

class Room extends Component {

  constructor(props) {
    super(props);
    this.getRoomIdFromUrl = this.getRoomIdFromUrl.bind(this);
  }

  componentDidMount() {
    this.props.validateSession();
  }

  componentDidMount() {
    const roomId = this.props.roomId || this.getRoomIdFromUrl();
    getRoom(roomId, (room) => {
      this.props.loadRoom(room);
    })
  }

  getRoomIdFromUrl() {
    return (this.props.location.pathname || window.location.pathname).split("/")[2];
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
                  <UserList />
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
    isLoggedIn: state.loggedIn
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Room));
