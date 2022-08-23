import React from 'react';
import styled from 'styled-components';

type Props = {
  contributors: Contributor[];
};

type Contributor = {
  name: string;
  url: string;
};

const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0 5px;

  display: flex;
  align-items: center;

  background: var(--color-attr-bg);
  color: var(--color-text);

  line-height: 1.4;
  font-size: 0.75rem;
`;

const CopyRight = styled.span`
  margin-right: 0.25em;
  font-size: 1rem;
`;

const Contributor = styled.span`
  position: relative;
  display: inline-block;

  &:not(:nth-last-child(1)) {
    margin-right: 0.5em;

    &:before {
      position: absolute;
      top: 0;
      left: 100%;
      content: ',';
      display: block;
    }
  }
`;

const Attribution: React.FC<Props> = ({ contributors }) => {
  return (
    <Container>
      <CopyRight>&copy;</CopyRight>
      {contributors.map(contributor => (
        <Contributor key={contributor.name}>
          <a href={contributor.url} target="_blank" rel="noreferrer">
            {contributor.name}
          </a>
          {contributor.name === 'OpenStreetMap' && <span> contributors</span>}
        </Contributor>
      ))}
    </Container>
  );
};

export default Attribution;
