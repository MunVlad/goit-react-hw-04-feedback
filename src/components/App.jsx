import css from './App.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { useState } from 'react';

function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  function onLeaveFeedback(option) {
 if (option === 'good') {
      setGood((prevState) => prevState + 1);
    } else if (option === 'neutral') {
      setNeutral((prevState) => prevState + 1);
    } else if (option === 'bad') {
      setBad((prevState) => prevState + 1);
    }
  };

    function countTotalFeedback() {
    return good + neutral + bad;
  }

  function  countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  }

return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
}

export default App;
