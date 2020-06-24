import React, { Component } from 'react';

import { Navbar } from 'react-bootstrap';


class Footer extends Component {

  render() {
    return (
      <Navbar bg="primary" variant="dark" fixed="bottom">
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text >
            Copyright © 2020 (<a href="http://amiranga.github.io" target="_blank">Amila Eranga</a>). All rights reserved.
            </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Footer;