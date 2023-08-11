import { Title } from './StatTitle.styled';

export const StatTitle = ({ title }) => {
  return <div>{title && <Title>{title}</Title>} </div>;
};
