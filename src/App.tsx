import { FC } from 'react';
import styled from 'styled-components';

import Attribution from './components/Attribution';
import Map from './components/Map';
import { BASE_MAP } from './constant';

const SApp = styled.div`
  font-family: var(--font-family);
  color: var(--color-text);
`;

const App: FC = () => {
  return (
    <SApp>
      <Map baseMapURL={BASE_MAP.url} />
      <Attribution contributors={BASE_MAP.contributors} />
    </SApp>
  );
};

export default App;
