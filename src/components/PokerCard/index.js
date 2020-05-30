import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './styles.css';

import { addVote, removeVote } from '../../store/actions';


class PokerCard extends React.Component {

  constructor(props) {
    super(props);
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  toggleSelect() {
    const isSelected = !this.props.selected;
    const roomId = (this.props.location.pathname || window.location.pathname).split("/")[2];
    if (isSelected) {
      this.props.addVote(roomId, this.props.userId, this.props.number)
    } else {
      this.props.removeVote(roomId, this.props.userId);
    }
  }

  getLable(symbol) {
    if (symbol == 'Coffee') {
      return '\u2615';
    } else if (symbol == '1/2') {
      return '\u00BD';
    } else {
      return symbol;
    }
  }

  render() {
    const cn = 'poker-card' + (this.props.selected ? ' selected' : '');
    return <div
      className={cn}
      onClick={this.toggleSelect}
    >{this.getLable(this.props.number)}</div>
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.userId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addVote: (roomId, userId, val) => {
      dispatch(addVote(roomId, userId, val))
    },
    removeVote: (roomId, userId) => {
      dispatch(removeVote(roomId, userId))
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokerCard));