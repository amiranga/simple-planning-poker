import React, { Component } from 'react';
import { Navbar, Nav, Modal, Container, Col, Row } from 'react-bootstrap';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import './styles.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false,
      showCS: false,
    };
  }

  render() {
    return (
      <>
        <Modal size="lg" show={this.state.showAbout} onHide={() => this.setState({ showAbout: false })} className="about-modal">
          <Modal.Header closeButton>
            <Modal.Title>About</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col md={6} className="spp-logo">
                  <img src="/logo.png" alt="image" />
                </Col>
                <Col md={6}>
                  <ul className="about-bullets">
                    <li>Simplest Planning Poker application for Estimating Agile Projects.</li>
                    <li>No sign in required and Free to use</li>
                    <li>
                      Development in Progress. Currently, only includes basic functionalities. Following features will be added soon..
                      <ul className="about-comingsoon-bullets">
                        <li>Customize Cards</li>
                        <li>Customize Room Settings</li>
                        <li>Edit User Settings</li>
                        <li>Remove/Mute Users</li>
                        <li>...</li>
                      </ul>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>

        <Navbar bg="primary" variant="dark" fixed="bottom">
          <Nav className="mr-auto">
            <Nav.Link href="#" onClick={() => this.setState({ showAbout: true })}>
              About
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Item>
              <div className="social-links text-right">
                <SocialMediaIconsReact
                  icon="linkedin"
                  url="http://linkedin.com/in/amilaamunugama"
                  borderColor="rgba(255,255,255,0.25)"
                  borderWidth="0"
                  borderStyle="solid"
                  iconColor="rgba(0,123,255,1)"
                  backgroundColor="rgba(255,255,255,1)"
                  iconSize="5"
                  roundness="20%"
                  size="25"
                />
                <SocialMediaIconsReact
                  icon="github"
                  url="https://github.com/amiranga"
                  borderColor="rgba(255,255,255,0.25)"
                  borderWidth="0"
                  borderStyle="solid"
                  iconColor="rgba(0,123,255,1)"
                  backgroundColor="rgba(255,255,255,1)"
                  iconSize="5"
                  roundness="20%"
                  size="25"
                />
                <SocialMediaIconsReact
                  icon="medium"
                  url="https://medium.com/@ae.amunugama"
                  borderColor="rgba(255,255,255,0.25)"
                  borderWidth="0"
                  borderStyle="solid"
                  iconColor="rgba(0,123,255,1)"
                  backgroundColor="rgba(255,255,255,1)"
                  iconSize="5"
                  roundness="20%"
                  size="25"
                />
                <SocialMediaIconsReact
                  icon="mail"
                  url="mailto:ae.amunugama@gmail.com"
                  borderColor="rgba(255,255,255,0.25)"
                  borderWidth="0"
                  borderStyle="solid"
                  iconColor="rgba(0,123,255,1)"
                  backgroundColor="rgba(255,255,255,1)"
                  iconSize="5"
                  roundness="20%"
                  size="25"
                />
                <SocialMediaIconsReact
                  icon="web"
                  url="http://amiranga.github.io/"
                  borderColor="rgba(255,255,255,0.25)"
                  borderWidth="0"
                  borderStyle="solid"
                  iconColor="rgba(0,123,255,1)"
                  backgroundColor="rgba(255,255,255,1)"
                  iconSize="5"
                  roundness="20%"
                  size="25"
                />
              </div>
              <div className="copyright">
                Copyright © 2020{' '}
                <a href="http://amiranga.github.io" target="_blank">
                  Amila Eranga
                </a>
                . All rights reserved.
              </div>
            </Nav.Item>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Footer;
