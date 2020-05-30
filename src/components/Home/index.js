import React from 'react';
import { connect } from 'react-redux';

import { Card, Button } from 'react-bootstrap';

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
      <div>
        <Card>
          <Card.Body>
            <Card.Title>{this.props.userName && (<span>Hi {this.props.userName} !!! </span>)} Welcome to Simple Planning Poker</Card.Title>
            <Card.Text>
              Planning poker app for Estimating Agile Projects. No sign in required. Have Fun !
            </Card.Text>
            <Button variant="primary" onClick={this.createRoom}>Create New Room</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userName: state.userName
  }
}

export default connect(mapStateToProps, null)(Home);