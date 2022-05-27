import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';
import Section from '../Section/Section';
import s from './Feedback.module.css';
export default class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // visible: true,
  };

  handleFeedback = event => {
    const feedback = event.currentTarget.textContent;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  feedbackTotal = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };
  positiveFeedback = () => {
    const { good } = this.state;
    return !this.feedbackTotal()
      ? '0'
      : Math.round((good / this.feedbackTotal()) * 100);
  };

  render() {
    const { good, bad, neutral } = this.state;
    const keys = Object.keys(this.state);

    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.feedbackTotal() ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.feedbackTotal()}
              positivePercentage={this.positiveFeedback()}
            />
          ) : (
            <Notification message="No feedback givin" />
          )}
        </Section>
      </div>
    );
  }
}
