import React from 'react';
import { connect } from 'react-redux';

import { validateSession } from '../../store/actions';

import NameInput from '../NameInput';
import NewRoom from '../NewRoom';

class Home extends React.Component {

  constructor(props) {
    super(props);
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
    userName: state.userName
  }
}

function mapDispatchToProps(dispatch) {
  return {
    validateSession: () => dispatch(validateSession()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)