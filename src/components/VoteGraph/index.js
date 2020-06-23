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
    const votes = {};
    const data = [];
    const finalVotes = this.props.finalVotes; // {ezffo1591016315849: undefined, nhsxr1591044491394: "13", sdiuv1591044471155: "21", sklht1591016241481: "13"}

    const validVotes = [];
    for (let key of Object.keys(finalVotes)) {
      if (finalVotes[key] !== undefined) {
        validVotes.push(finalVotes[key]);
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
    finalVotes: state.finalVotes,
  }
}
export default connect(mapStateToProps, null)(VoteGraph)