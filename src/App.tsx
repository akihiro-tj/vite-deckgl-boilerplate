import React from 'react';

import Attribution from './components/Attribution';
import Map from './components/Map';

const App: React.FC = () => {
  return (
    <React.Fragment>
      {/* https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers */}
      <Map baseMapURL="https://c.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
