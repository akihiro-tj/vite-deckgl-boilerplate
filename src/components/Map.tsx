import { TileLayer } from '@deck.gl/geo-layers';
import { BitmapLayer } from '@deck.gl/layers';
import DeckGL from '@deck.gl/react';
import { FC, memo, useCallback, useMemo, useState } from 'react';

export type Map = {
  baseMapURL: string;
};

const INITIAL_VIEW_STATE = {
  longitude: -122.4,
  latitude: 37.74,
  zoom: 11,
  maxZoom: 20,
  pitch: 0,
  bearing: 0,
};

const Map: FC<Map> = ({ baseMapURL }) => {
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);

  const layers = useMemo(
    () => [
      new TileLayer({
        id: 'tile',
        data: baseMapURL,

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
    ],
    [baseMapURL],
  );

  const handleViewStateChange = useCallback(
    ({ viewState }: { viewState: any }) => {
      setViewState(viewState);
    },
    [],
  );

  return (
    <DeckGL
      viewState={viewState}
      onViewStateChange={handleViewStateChange}
      layers={layers}
      controller
    />
  );
};

export default memo(Map);
