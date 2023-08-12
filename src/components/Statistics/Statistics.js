import { StatsBoard, StatsElem } from './Statistics.styled';

export const Statistics = ({ feedbacks }) => {
  const keysFeedbacks = Object.keys(feedbacks);
  const { good, neutral, bad } = feedbacks;
  console.log(keysFeedbacks);
  console.log(feedbacks);
  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage =
    countTotalFeedback === 0
      ? 0
      : Math.round((good / countTotalFeedback) * 100);
  return (
    <StatsBoard>
      {keysFeedbacks.map(key => (
        <StatsElem key={key}>
          {key} : {feedbacks[key]}
        </StatsElem>
      ))}
      <p>Total: {countTotalFeedback}</p>
      <p>PositiveFeedback: {countPositiveFeedbackPercentage}%</p>
    </StatsBoard>
  );
};
