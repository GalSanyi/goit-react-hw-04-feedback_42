import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';
import Section from '../Section/Section';
import s from './Feedback.module.css';

export default function Statistic() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = event => {
    const feedback = event.currentTarget.textContent;
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const feedbackTotal = () => {
    return good + bad + neutral;
  };
  const positiveFeedback = () => {
    return !feedbackTotal() ? '0' : Math.round((good / feedbackTotal()) * 100);
  };

  const keys = Object.keys({ good, neutral, bad });

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {feedbackTotal() ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={feedbackTotal()}
            positivePercentage={positiveFeedback()}
          />
        ) : (
          <Notification message="No feedback givin" />
        )}
      </Section>
    </div>
  );
}
