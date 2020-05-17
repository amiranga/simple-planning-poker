import React, { Component } from 'react';
import './styles.css';


class PokerCard extends React.Component {

  render() {
    return <div className="poker-card">{this.props.number}</div>
  }
}

export default PokerCard;