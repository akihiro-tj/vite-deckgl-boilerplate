import React from 'react';
import styled from 'styled-components';

type Props = {
  type: 'vite' | 'react';
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Container = styled.img<{ type: 'vite' | 'react' }>`
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  &:hover {
    filter: ${props => `drop-shadow(0 0 2em var(--color-${props.type}-logo))`};
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${props =>
      props.type === 'react' ? 'logo-spin infinite 20s linear' : 'none'};
  }
`;

const Logo: React.FC<Props> = props => {
  return <Container {...props}></Container>;
};

export default Logo;
