
import React from 'react';
import {Doughnut} from 'react-chartjs-2';
const createReactClass = require('create-react-class');

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min)*0) + 1;
}

const getState = () => ({
  labels: [
    'left',
    '% Complete'

  ],
  datasets: [{
    data: [(50/100), (90/100)],
    backgroundColor: [
    '#CCC',
    '#7CFC00',

    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',

    ]
  }]
});

export default createReactClass({
  displayName: 'today',

	getInitialState() {
		return getState();
	},

	componentWillMount() {
		setInterval(() => {
			this.setState(getState());
		}, 1000);
	},

  render() {
    return (
      <div>
        <Doughnut data={this.state} />
      </div>
    );
  }
});
