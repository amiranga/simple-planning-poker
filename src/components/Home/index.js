import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import './styles.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.createRoom = this.createRoom.bind(this);
  }

  createRoom() {
    this.props.history.push('/createroom');
  }

  render() {
    return (
      <Card className="text-center into-card">
        <Card.Body>
          <Card.Title>{this.props.userName && <span>Hi {this.props.userName} !!! </span>} Welcome to Simple Planning Poker</Card.Title>
          <Card.Text>Simplest Planning poker application for Estimating Agile Projects. Free and No sign in required. Enjoy !</Card.Text>
          <Button variant="primary" onClick={this.createRoom}>
            Create New Room
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    userName: state.userName,
  };
}

export default connect(mapStateToProps, null)(Home);
