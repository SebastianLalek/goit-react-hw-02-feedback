import React, { Component } from 'react';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
        <h2>Statistics</h2>
        <ul>
          <li>Good:</li>
          <li>Neutral:</li>
          <li>Bad:</li>
        </ul>
      </div>
    );
  }
}
