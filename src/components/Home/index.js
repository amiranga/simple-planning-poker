import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { validateSession } from '../../store/actions';
import NameInput from '../NameInput';
import NewRoom from '../NewRoom';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    const roomId = this.props.roomId;
    if (roomId) {
      this.props.history.push(`/room/${roomId}`)
    }
  }

  componentDidMount() {
    this.props.validateSession();
  }

  render() {
    return (
      <div>
        {this.props.isLoggedIn ?
          <NewRoom />
          : <NameInput />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.loggedIn,
    userName: state.userName,
    roomId: state.roomId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    validateSession: () => dispatch(validateSession()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));