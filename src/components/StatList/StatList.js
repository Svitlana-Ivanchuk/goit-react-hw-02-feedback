export const StatList = ({ feedbacks: { good, neutral, bad } }) => {
  return (
    <>
      <li>
        <p>Good: {good} </p>
      </li>
      <li>
        <p>Neutral:{neutral} </p>
      </li>
      <li>
        <p>Bad: {bad} </p>
      </li>
    </>
  );
};
