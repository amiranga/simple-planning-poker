import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PieChart } from 'react-minimal-pie-chart';

class VoteGraph extends Component {
  constructor(props) {
    super(props)
    this.state =
      { username: '' }
  }

  randonColor() {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16);
  }

  render() {
    const userMap = this.props.users;
    const votes = {};
    const data = [];

    const validVotes = [];
    for (let key of Object.keys(userMap)) {
      const vote = userMap[key].vote;
      if (vote !== undefined) {
        validVotes.push(vote);
      }
    }

    const nValidVotes = validVotes.length;
    validVotes.forEach(element => {
      const voteLabel = element.toString();
      votes[voteLabel] = votes[voteLabel] ? votes[voteLabel] + 1 : 1;
    });

    Object.keys(votes).forEach(vote => {
      data.push({ title: vote, value: votes[vote] / nValidVotes, color: this.randonColor() })
    });

    return (
      <PieChart
        data={data}
        label={({ dataEntry }) => `${dataEntry.title} (${Math.round(dataEntry.percentage)} %)`}
        labelStyle={{
          fontSize: '5px'
        }}
        lineWidth={75}
        labelPosition={50}
        viewBoxSize={[200, 200]}
        animate
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
  }
}
export default connect(mapStateToProps, null)(VoteGraph)