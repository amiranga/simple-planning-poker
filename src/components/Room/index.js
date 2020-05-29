import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Col, Row } from 'react-bootstrap';

import CardDeck from '../CardDeck';
import UserList from '../UserList';

import { getRoom } from '../../services/database-service';
import { loadRoom } from '../../store/actions';

class Room extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    getRoom(this.props.roomId, (room) => {
      this.props.loadRoom(room);
    })
  }

  render() {
    return (
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
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadRoom: (room) => {
      dispatch(loadRoom(room))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    roomId: state.roomId,
    room: state.room,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);
