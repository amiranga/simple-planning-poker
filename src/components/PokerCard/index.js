import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

import { addVote, removeVote } from '../../store/actions';


class PokerCard extends React.Component {

  constructor(props) {
    super(props);
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  toggleSelect() {
    const isSelected = !this.props.selected;

    if (isSelected) {
      this.props.addVote(this.props.number)
    } else {
      this.props.removeVote();
    }
  }

  render() {
    const cn = 'poker-card' + (this.props.selected ? ' selected' : '');
    return <div
      className={cn}
      onClick={this.toggleSelect}
    >{this.props.number}</div>
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addVote: (val) => {
      dispatch(addVote(val))
    },
    removeVote: () => {
      dispatch(removeVote())
    }
  }
}
export default connect(null, mapDispatchToProps)(PokerCard);