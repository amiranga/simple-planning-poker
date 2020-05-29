import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { validateSession } from '../../store/actions';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.createRoom = this.createRoom.bind(this);
  }

  createRoom() {
    this.props.history.push('/newroom');
  }

  render() {
    return (
      <div>
        <div>Welcome to Simple Planning Poker</div>
        <button onClick={this.createRoom}></button>
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