import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { Navbar } from 'react-bootstrap';


class Header extends Component {

  _goToHome() {
    this.props.history.push(`/`);
  }

  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="javascript:void(0)" onClick={this._goToHome.bind(this)}>
          Simple Planning Poker
        </Navbar.Brand>
        {this.props.userName &&
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text >
              Welcome: {this.props.userName} !
            </Navbar.Text>
          </Navbar.Collapse>
        }
      </Navbar>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userName: state.userName
  }
}

export default withRouter(connect(mapStateToProps, null)(Header));