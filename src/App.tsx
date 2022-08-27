import { FC, Fragment } from 'react';

import Attribution from './components/Attribution';
import Map from './components/Map';
import { BASE_MAP } from './constant';

const App: FC = () => {
  return (
    <Fragment>
      <Map baseMapURL={BASE_MAP.url} />
      <Attribution contributors={BASE_MAP.contributors} />
    </Fragment>
  );
};

export default App;
