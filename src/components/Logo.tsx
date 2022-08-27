import { FC, memo } from 'react';
import styled from 'styled-components';

export type Logo = {
  href: string;
  shadowColor: string;
  isRotating?: boolean;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const SLogo = styled.img<{
  shadowColor: string;
  isRotating?: boolean;
}>`
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  &:hover {
    filter: ${props => `drop-shadow(0 0 2em ${props.shadowColor})`};
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
      props.isRotating ? 'logo-spin infinite 20s linear' : 'none'};
  }
`;

const Logo: FC<Logo> = ({ href, shadowColor, src, alt, isRotating }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <SLogo
        src={src}
        alt={alt}
        shadowColor={shadowColor}
        isRotating={isRotating}
      />
    </a>
  );
};

export default memo(Logo);
