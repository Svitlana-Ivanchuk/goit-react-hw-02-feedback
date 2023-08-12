import { Button, ButtonsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keysOptions = Object.keys(options);
  //console.log(Object.keys(options));
  return (
    <ButtonsList>
      {keysOptions.map(elem => (
        <Button type="button" onClick={onLeaveFeedback} name={elem} key={elem}>
          {elem}
        </Button>
      ))}
    </ButtonsList>
  );
};
