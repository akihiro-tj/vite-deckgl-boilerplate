import { TileLayer } from '@deck.gl/geo-layers';
import { BitmapLayer } from '@deck.gl/layers';
import DeckGL from '@deck.gl/react';
import React, { useState } from 'react';

const INITIAL_VIEW_STATE = {
  longitude: -122.4,
  latitude: 37.74,
  zoom: 11,
  maxZoom: 20,
  pitch: 0,
  bearing: 0,
};

const Map: React.FC = () => {
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);

  const layers = [
    new TileLayer({
      // https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers
      data: 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',

      minZoom: 0,
      maxZoom: 19,
      tileSize: 256,

      renderSubLayers: props => {
        const {
          bbox: { west, south, east, north },
        } = props.tile;

        return new BitmapLayer(props, {
          data: null,
          image: props.data,
          bounds: [west, south, east, north],
        });
      },
    }),
  ];

  const handleViewStateChange = ({ viewState }: { viewState: any }) => {
    setViewState(viewState);
  };

  return (
    <DeckGL
      viewState={viewState}
      onViewStateChange={handleViewStateChange}
      layers={layers}
      controller
    />
  );
};

export default Map;
