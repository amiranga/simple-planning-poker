import React, { Component } from 'react';
import { connect } from 'react-redux';

import PokerCard from '../PokerCard';
import { GAME_FORMATS } from '../../constants';

class CardDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const deck = GAME_FORMATS[this.props.gameFormat].cards;
    return (
      <div>
        {deck.map(i =>
          <PokerCard
            number={i}
            selected={this.props.vote == i}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vote: state.vote
  }
}

export default connect(mapStateToProps)(CardDeck)
