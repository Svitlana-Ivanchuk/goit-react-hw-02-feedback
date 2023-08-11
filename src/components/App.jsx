import { Component } from 'react';
import { FeedbackTitle } from './FeedbackTitle/FeedbackTitle';
import { ButtonsList } from './ButtonsList/ButtonsList';
import { StatTitle } from './StatTitle/StatTitle';
import { StatList } from './StatList/StatList';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelClick = evt => {
    console.log(evt.target);
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <FeedbackTitle title="Please leave feedback" />
        <ButtonsList onClick={this.handelClick}></ButtonsList>
        <StatTitle title="Statistics" />
        <StatList feedbacks={this.state}></StatList>
      </div>
    );
  }
}
