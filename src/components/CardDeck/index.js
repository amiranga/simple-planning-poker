import React, { Component } from 'react';
import PokerCard from '../PokerCard';

class CardDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        {this.props.cardNumbers.map(i => <PokerCard number={i} />)}
      </div>
    );
  }
}

export default CardDeck;