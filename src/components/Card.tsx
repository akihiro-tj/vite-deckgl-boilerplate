import React from 'react';
import styled from 'styled-components';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Container = styled.div`
  padding: 2em;
`;

const Card: React.FC<Props> = props => {
  return <Container {...props} />;
};

export default Card;
