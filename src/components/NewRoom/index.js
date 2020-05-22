import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Modal, Form, Col, Row, Button } from 'react-bootstrap';

import { GAME_FORMATS } from '../../constants';

export class NewRoom extends Component {

  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.state = {}
  }

  startGame() {

  }


  render() {
    return (
      <div>
        <Modal show={true} size="lg" centered>
          <Modal.Header>
            <Modal.Title>Create New Game</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form onSubmit={this.startGame}>
              <Form.Group as={Row} controlId="formHorizontalName">
                <Form.Label column sm={4}>
                  Game Name
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="text" placeholder="Name" />
                </Col>
              </Form.Group>
              <fieldset>
                <Form.Group as={Row}>
                  <Form.Label as="legend" column sm={4}>
                    Game Format
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Check
                      type="radio"
                      label={GAME_FORMATS.scrum.label}
                      name="gameFormat"
                      id={GAME_FORMATS.scrum.id}
                    />
                    <Form.Check
                      type="radio"
                      label={GAME_FORMATS.fibonacci.label}
                      name="gameFormat"
                      id={GAME_FORMATS.fibonacci.id}
                    />
                    <Form.Check
                      type="radio"
                      label={GAME_FORMATS.sequential.label}
                      name="gameFormat"
                      id={GAME_FORMATS.fibonacci.id}
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

          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NewRoom)
