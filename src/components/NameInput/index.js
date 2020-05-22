import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Modal, Form, Col, Row, Button } from 'react-bootstrap';

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
      <Modal show={true} size="md" centered>
        <Modal.Header>
          <Modal.Title>Please Enter Your Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalName">
              <Col sm={8}>
                <Form.Control type="text" placeholder="Name" onChange={this.handleChange} />
              </Col>
              <Col sm={4}>
                <Button onClick={this.handleSubmit}>Save</Button>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
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