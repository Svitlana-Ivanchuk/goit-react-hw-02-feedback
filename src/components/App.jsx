import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelClick = elem => {
    //let status = evt.target.name;
    const { good, neutral, bad } = this.state;
    //console.log(this.state.key);

    this.setState(prevState => ({ good: prevState.good + 1 }));
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handelClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics feedbacks={this.state}></Statistics>
        </Section>
      </div>
    );
  }
}
