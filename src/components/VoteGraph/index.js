import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PieChart } from 'react-minimal-pie-chart';
import { Alert } from 'react-bootstrap';

import './styles.css';

class VoteGraph extends Component {
  constructor(props) {
    super(props)
    this.state =
      { username: '' }
  }

  generateColor(precentage) {
    if (precentage > 90) {
      return '#ff0000';
    } else if (precentage > 80) {
      return '#ff3300';
    } else if (precentage > 70) {
      return '#ff6600';
    } else if (precentage > 60) {
      return '#ff9900';
    } else if (precentage > 50) {
      return '#ffcc00';
    } else if (precentage > 40) {
      return '#ffff00';
    } else if (precentage > 30) {
      return '#ccff00';
    } else if (precentage > 20) {
      return '#99ff00';
    } else if (precentage > 10) {
      return '#66ff00';
    } else if (precentage > 0) {
      return '#33ff00';
    }
  }

  render() {
    const userMap = this.props.users;
    const votes = {};
    const data = [];

    const validVotes = [];
    for (let key of Object.keys(userMap)) {
      const vote = userMap[key].vote;
      if (vote != undefined && vote != null) {
        validVotes.push(vote);
      }
    }
    const nValidVotes = validVotes.length;
    const isValid = nValidVotes > 0;

    console.log('validVotes :>> ', validVotes);

    if (isValid) {
      validVotes.forEach(element => {
        const voteLabel = element.toString();
        votes[voteLabel] = votes[voteLabel] ? votes[voteLabel] + 1 : 1;
      });

      Object.keys(votes).forEach(vote => {
        const percentage = (votes[vote] / nValidVotes) * 100;
        data.push({ title: vote, value: percentage, color: this.generateColor(percentage) })
      });
    }

    return (
      <div className={`chart-holder ${isValid ? '' : 'has-error'}`}>
        {isValid ? <PieChart
          data={data}
          label={({ dataEntry }) => `${dataEntry.title} (${Math.round(dataEntry.percentage)} %)`}
          labelStyle={{
            fontSize: '5px'
          }}
          lineWidth={90}
          labelPosition={60}
          viewBoxSize={[130, 130]}
          center={[65, 55]}
          segmentsShift={1}
          animate
        /> : <Alert variant="danger">No one voted. Reset the votes and try again!</Alert>}

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
  }
}
export default connect(mapStateToProps, null)(VoteGraph)