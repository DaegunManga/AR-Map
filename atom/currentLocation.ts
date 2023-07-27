import {atom} from 'recoil';
import {Waypoint} from '../utils/waypoints';

export const CurrentLocAtom = atom<Waypoint>({
  key: 'CurrentLoc_atom',
  default: {
    type: 'waypoint',
    latitude: 0,
    longitude: 0,
  },
});
