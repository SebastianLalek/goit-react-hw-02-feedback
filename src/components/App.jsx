import React, { Component } from 'react';

import Section from "./section/Section";
import Statistics from "./statistics/Statistics";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positive: 0,
};

class Feedback extends Component {
state = {
  ...initialState
}

render() {
  return (
    <div>
    <Section title='Please leave feedback'>
    </Section>
    <Section title='Statistics'>
    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positive={this.state.positive}  />

    </Section>
    </div>
  )
}
}

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Feedback />
    </div>
  );
};
