import {getDistance} from 'geolib';
import {
  AFTER_ATM_CORNER,
  ATM_CORNER,
  Coordinate,
  DAEUGN_MID_SCH,
  HeadingTo,
  Range,
  START_RANGE,
  Waypoint,
  Waypoints,
} from './waypoints';

export default class WaypointUtils {
  static isInRange(range: Range, target: Waypoint): boolean {
    const way1 = range.waypoint1;
    const way2 = range.waypoint2;
    const result = [false, false];

    if (
      (way1.latitude < target.latitude && target.latitude < way2.latitude) ||
      (way2.latitude < target.latitude && target.latitude < way1.latitude)
    ) {
      result[0] = true;
    }

    if (
      (way1.longitude < target.longitude &&
        target.longitude < way2.longitude) ||
      (way2.longitude < target.longitude && target.longitude < way1.longitude)
    ) {
      result[1] = true;
    }

    if (result[0] && result[1]) return true;

    return false;
  }

  static getDistance(way1: Waypoint, way2: Waypoint): number {
    return getDistance(way1, way2);
  }

  static headingTo(waypoints: Waypoints, now: Coordinate): HeadingTo {
    const {waypoint1} = waypoints[0];
    const absLat = waypoint1.latitude - now.latitude;
    const absLon = waypoint1.longitude - now.longitude;
    const angle = (Math.atan2(absLat, absLon) * 180) / Math.PI;

    if (-30 <= angle && angle <= 30) {
      return 'foward';
    } else if (-180 < angle && angle < -30) {
      return 'left';
    } else if (30 < angle && angle < 180) {
      return 'right';
    }

    return 'backward';
  }

  static getWaypoints(
    name: '대건고' | '대건중' | '대건학시' | '체육관',
  ): Waypoints {
    if (name === '대건고') {
      return [
        START_RANGE,
        ATM_CORNER,
        AFTER_ATM_CORNER,
        DAEUGN_MID_SCH,
      ] as Waypoints;
    } else if (name === '대건중') {
      return [
        START_RANGE,
        ATM_CORNER,
        AFTER_ATM_CORNER,
        DAEUGN_MID_SCH,
      ] as Waypoints;
    }

    return [
      START_RANGE,
      ATM_CORNER,
      AFTER_ATM_CORNER,
      DAEUGN_MID_SCH,
    ] as Waypoints;
  }
}
