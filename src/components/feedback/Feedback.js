import React, { Component } from 'react';
import css from './Feedback.module.css';

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

  countTotalFeedback = () => {
    let sum;
    this.setState(state => {
      sum = state.good + state.neutral + state.bad;
      return { total: sum };
    });
  };

  handleClick = e => {
    this.counter(e);
    this.countTotalFeedback();
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button className={css.button} id="good" onClick={this.handleClick}>
          Good
        </button>
        <button className={css.button} id="neutral" onClick={this.handleClick}>
          Neutral
        </button>
        <button className={css.button} id="bad" onClick={this.handleClick}>
          Bad
        </button>
        <h2>Statistics</h2>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
          <li>Total:{this.state.total}</li>
        </ul>
      </div>
    );
  }
}
