import { FC, memo } from 'react';
import styled from 'styled-components';

export type Attribution = {
  contributors: Contributor[];
};

export type Contributor = {
  name: string;
  url: string;
};

const SAttribution = styled.div`
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

const SCopyRight = styled.span`
  margin-right: 0.25em;
  font-size: 1rem;
`;

const SContributor = styled.span`
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

const Attribution: FC<Attribution> = ({ contributors }) => {
  return (
    <SAttribution>
      <SCopyRight>&copy;</SCopyRight>
      {contributors.map(contributor => (
        <SContributor key={contributor.name}>
          <a href={contributor.url} target="_blank" rel="noreferrer">
            {contributor.name}
          </a>
          {contributor.name === 'OpenStreetMap' && <span> contributors</span>}
        </SContributor>
      ))}
    </SAttribution>
  );
};

export default memo(Attribution);
