export type HeadingTo = 'foward' | 'left' | 'right' | 'backward';

export interface Coordinate {
  latitude: number;
  longitude: number;
}

export interface Waypoint extends Coordinate {
  type: 'waypoint';
  todo?: HeadingTo;
}

export interface Range {
  type: 'range';
  waypoint1: Waypoint;
  waypoint2: Waypoint;
}

export type Waypoints = Array<Range>;

// range 35.83501°N 128.52763°E
// range 35.83499°N 128.52770°E

export const START_RANGE: Range = {
  type: 'range',
  waypoint1: {
    type: 'waypoint',
    latitude: 35.83501,
    longitude: 128.52763,
  },
  waypoint2: {
    type: 'waypoint',
    latitude: 35.83499,
    longitude: 128.5277,
  },
};

// 35.83372°N 128.52792°E
// 35.83374°N 128.52784°E

export const ATM_CORNER: Range = {
  type: 'range',
  waypoint1: {
    type: 'waypoint',
    latitude: 35.83372,
    longitude: 128.52792,
  },
  waypoint2: {
    type: 'waypoint',
    latitude: 35.83374,
    longitude: 128.52784,
  },
};

// 35.83355°N 128.52796°E
// 35.83352°N 128.52800°E

export const AFTER_ATM_CORNER: Range = {
  type: 'range',
  waypoint1: {
    type: 'waypoint',
    latitude: 35.83355,
    longitude: 128.52796,
  },
  waypoint2: {
    type: 'waypoint',
    latitude: 35.83352,
    longitude: 128.528,
  },
};
