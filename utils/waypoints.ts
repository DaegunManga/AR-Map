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
  name: string;
  waypoint1: Waypoint;
  waypoint2: Waypoint;
}

export type Waypoints = Array<Range>;

// range 35.83501°N 128.52763°E
// range 35.83499°N 128.52770°E

export const START_RANGE: Range = {
  type: 'range',
  name: '시작점',
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

// 11. 35.833616, 128.528057
// 12. 35.833619, 128.527966

export const ATM_CORNER: Range = {
  type: 'range',
  name: 'ATM',
  waypoint1: {
    type: 'waypoint',
    latitude: 35.833619,
    longitude: 128.527966,
  },
  waypoint2: {
    type: 'waypoint',
    latitude: 35.83388,
    longitude: 128.527955,
  },
};

// 9. 35.833562, 128.528215
// 10. 35.833500, 128.528129

export const AFTER_ATM_CORNER: Range = {
  type: 'range',
  name: 'ATM 코너 돌고',
  waypoint1: {
    type: 'waypoint',
    latitude: 35.833562,
    longitude: 128.528215,
  },
  waypoint2: {
    type: 'waypoint',
    latitude: 35.8335,
    longitude: 128.528129,
  },
};

// 3. 35.833570, 128.528521
// 4. 35.833509, 128.528455

export const DAEUGN_MID_SCH: Range = {
  type: 'range',
  name: '대건중',
  waypoint1: {
    type: 'waypoint',
    latitude: 35.83357,
    longitude: 128.528521,
  },
  waypoint2: {
    type: 'waypoint',
    latitude: 35.833509,
    longitude: 128.528455,
  },
};

// 1. 35.833585, 128.529217
// 2. 35.833543, 128.529235
// 3. 35.833570, 128.528521
// 4. 35.833509, 128.528455
// 5. 35.833387, 128.528375
// 6. 35.833344, 128.528368
// 7. 35.833220, 128.528393
// 8. 35.833191, 128.528444
// 9. 35.833562, 128.528215
// 10. 35.833500, 128.528129
// 11. 35.833616, 128.528057
// 12. 35.833619, 128.527966
// 13. 35.833880, 128.527955
// 14. 35.833897, 128.527874
