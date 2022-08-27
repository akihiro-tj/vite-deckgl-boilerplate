import { Contributor } from './components/Attribution';

export const BASE_MAP: {
  url: string;
  contributors: Contributor[];
} = {
  // https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers
  url: 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
  contributors: [
    {
      url: 'https://www.openstreetmap.org/copyright',
      name: 'OpenStreetMap',
    },
  ],
};
