import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Navbar } from 'react-bootstrap';

import './styles.css';

class Header extends Component {

  render() {
    return (
      <Navbar bg="primary" variant="dark" className="app-header">
        <Navbar.Brand href="/" >
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

export default connect(mapStateToProps, null)(Header);