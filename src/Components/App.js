import React, { Component } from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './statistics/Statistics';

const options = [
  { name: 'good', title: 'Good' },
  { name: 'neutral', title: 'Neutral' },
  { name: 'bad', title: 'Bad' },
];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const btn = e.target.name;
    this.setState(prev => ({ [btn]: prev[btn] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    return total ? Math.round((this.state.good * 100) / total) : 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const result = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.addFeedback}
            options={options}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivFeedback={result}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
