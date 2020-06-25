import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Col, Row } from 'react-bootstrap';

import './styles.css';

import PokerCard from '../PokerCard';
import { GAME_FORMATS } from '../../constants';

class CardDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  drawCardRow(deck) {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
  render() {
    const deck = GAME_FORMATS[this.props.gameFormat].cards;
    const vote = this.props.vote;
    // TODO use radio buttons as cards https://react-bootstrap.netlify.app/components/buttons/#checkbox--radio
    return (
      <Container className="card-holder">
        <Row>
          <Col><PokerCard number={deck[0]} selected={vote == deck[0]} /></Col>
          <Col><PokerCard number={deck[1]} selected={vote == deck[1]} /></Col>
          <Col><PokerCard number={deck[2]} selected={vote == deck[2]} /></Col>
          <Col><PokerCard number={deck[3]} selected={vote == deck[3]} /></Col>
        </Row>
        <Row>
          <Col><PokerCard number={deck[4]} selected={vote == deck[4]} /></Col>
          <Col><PokerCard number={deck[5]} selected={vote == deck[5]} /></Col>
          <Col><PokerCard number={deck[6]} selected={vote == deck[6]} /></Col>
          <Col><PokerCard number={deck[7]} selected={vote == deck[7]} /></Col>
        </Row>
        <Row>
          <Col><PokerCard number={deck[8]} selected={vote == deck[8]} /></Col>
          <Col><PokerCard number={deck[9]} selected={vote == deck[9]} /></Col>
          <Col><PokerCard number={deck[10]} selected={vote == deck[10]} /></Col>
          <Col><PokerCard number={deck[11]} selected={vote == deck[11]} /></Col>
        </Row>
        {deck.lngeth == 13 && (
          <Row>
            <Col><PokerCard number={deck[12]} selected={vote == deck[12]} /></Col>
          </Row>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vote: state.vote
  }
}

export default connect(mapStateToProps)(CardDeck)
