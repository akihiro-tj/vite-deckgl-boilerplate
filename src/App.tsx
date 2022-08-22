import React from 'react';

import Attribution from './components/Attribution';
import Map from './components/Map';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Map />
      <Attribution
        contributors={[
          {
            url: 'https://www.openstreetmap.org/copyright',
            name: 'OpenStreetMap',
          },
        ]}
      />
    </React.Fragment>
  );
};

export default App;
