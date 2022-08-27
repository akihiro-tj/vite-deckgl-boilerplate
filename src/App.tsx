import { FC, Fragment } from 'react';

import Attribution from './components/Attribution';
import Map from './components/Map';

const App: FC = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default App;
