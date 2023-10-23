import React, { Component } from 'react';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counter = e => {
    const key = e.target.id;
    this.setState(state => ({
      [key]: state[key] + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button id="good" onClick={this.counter}>
          Good
        </button>
        <button id="neutral" onClick={this.counter}>
          Neutral
        </button>
        <button id="bad" onClick={this.counter}>
          Bad
        </button>
        <h2>Statistics</h2>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
        </ul>
      </div>
    );
  }
}
