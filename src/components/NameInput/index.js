import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Form, Col, Row, Button } from 'react-bootstrap';
import { createSession } from '../../store/actions';

class NameInput extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', validated: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.username || !this.state.username.trim()) {
      event.stopPropagation();
      this.setState({ validated: true });
      return false;
    }
    this.props.createSession(this.state.username);
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <Modal show={true} size="md" centered>
        <Modal.Header>
          <Modal.Title>Please Enter Your Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={this.state.validated} onKeyDown={this.handleKeyDown}>
            <Form.Group as={Row} controlId="formHorizontalName">
              <Col sm={8}>
                <Form.Control type="text" placeholder="Name" onChange={this.handleChange} required />
                <Form.Control.Feedback type="invalid">Please enter valid user name!</Form.Control.Feedback>
              </Col>
              <Col sm={4}>
                <Button onClick={this.handleSubmit}>Save</Button>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createSession: userName => {
      dispatch(createSession(userName));
    },
  };
};

export default connect(null, mapDispatchToProps)(NameInput);
