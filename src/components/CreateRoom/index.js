import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Modal, Form, Col, Row, Button } from 'react-bootstrap';

import NameInput from '../NameInput';
import { GAME_FORMATS } from '../../constants';
import { createRoom, validateSession } from '../../store/actions';

import './styles.css';

export class CreateRoom extends Component {

  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = { validated: false }
  }

  componentDidMount() {
    this.props.validateSession();
  }

  componentDidUpdate(prevProps, prevState) {
    const roomId = this.props.roomId;
    if (roomId) {
      this.props.history.push(`/room/${roomId}`)
    }
  }

  startGame(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      this.setState({ validated: true })
      return false;
    }

    const roomName = e.target.elements['roomName'].value;
    let gameFormat;
    e.target.elements['gameFormat'].forEach(ele => {
      if (ele.checked) {
        gameFormat = ele.value;
      }
    })
    this.props.createRoom(roomName, gameFormat, this.props.userId);
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <Modal show={true} size="lg" centered>
            <Modal.Header>
              <Modal.Title>Create New Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <Form noValidate validated={this.state.validated} onSubmit={this.startGame} onKeyDown={this.handleKeyDown}>
                <Form.Group as={Row} controlId="formHorizontalName">
                  <Form.Label column sm={4}>
                    Room Name
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="text" name="roomName" placeholder="Name" required />
                    <Form.Control.Feedback type="invalid">
                      Please enter valid room name!
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <fieldset>
                  <Form.Group as={Row} className="game-formats">
                    <Form.Label as="legend" column sm={4}>
                      Game Format
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Check
                        type="radio"
                        defaultChecked
                        label={`${GAME_FORMATS.scrum.label} (${GAME_FORMATS.scrum.cards.join(', ')})`}
                        name="gameFormat"
                        value={GAME_FORMATS.scrum.id}
                        id={GAME_FORMATS.scrum.id}
                        isValid={false}
                      />
                      <Form.Check
                        type="radio"
                        label={`${GAME_FORMATS.fibonacci.label} (${GAME_FORMATS.fibonacci.cards.join(', ')})`}
                        name="gameFormat"
                        value={GAME_FORMATS.fibonacci.id}
                        id={GAME_FORMATS.fibonacci.id}
                        isValid={false}
                      />
                      <Form.Check
                        type="radio"
                        label={`${GAME_FORMATS.sequential.label} (${GAME_FORMATS.sequential.cards.join(', ')})`}
                        name="gameFormat"
                        value={GAME_FORMATS.sequential.id}
                        id={GAME_FORMATS.sequential.id}
                        isValid={false}
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
                <Form.Group as={Row}>
                  <Col sm={{ span: 4, offset: 4 }}>
                    <Button type="submit">Create New Game</Button>
                  </Col>
                </Form.Group>
              </Form>
              <span className="invite-message">
                Create New Room and Invite a teammates by sharing URL
              </span>

            </Modal.Body>
          </Modal>)
          : <NameInput />}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.userId,
    isLoggedIn: state.loggedIn,
    roomId: state.roomId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createRoom: (roomName, gameFormat, adminUserId) => {
      dispatch(createRoom(roomName, gameFormat, adminUserId))
    },
    validateSession: () => dispatch(validateSession()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateRoom));
