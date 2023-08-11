import { Title } from './FeedbackTitle.styled';

export const FeedbackTitle = ({ title }) => {
  return <div>{title && <Title>{title}</Title>} </div>;
};
