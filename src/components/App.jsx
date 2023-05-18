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

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };
  
// options = ['good', 'neutral', 'bad'];
//   onLeaveFeedback = state => {
//     this.setState(prevState => {
//       return {
//         [state]: prevState[state] + 1,
//       };
//     });
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total === 0 ? 0 : Math.round((good / total) * 100);
//   }

//   render() {
//     return (
//       <div className={css.container}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               {...this.state}
//               // good={this.state.good}
//               // neutral={this.state.neutral}
//               // bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
export default App;
