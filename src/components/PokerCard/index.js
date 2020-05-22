import React, { Component } from 'react';
import './styles.css';


class PokerCard extends React.Component {

  constructor(props) {
    super(props);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.state = { selected: false };
  }

  toggleSelect() {
    this.setState({ selected: !this.state.selected });
  }

  render() {
    const cn = 'poker-card' + (this.state.selected ? ' selected' : '');
    return <div
      className={cn}
      onClick={this.toggleSelect}
    >{this.props.number}</div>
  }
}

export default PokerCard;