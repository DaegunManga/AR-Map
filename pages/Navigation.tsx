import {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  HeadingTo,
  Waypoint as WaypointType,
  Waypoints,
} from '../utils/waypoints';
import Geolocation from '@react-native-community/geolocation';
import {ViroARSceneNavigator} from '@viro-community/react-viro';
import Navigator from '../components/AR/Navigator';
import Arrow from '../components/AR/Arrow';
import Waypoint from '../components/AR/Waypoint';
import WaypointUtils from '../utils/Waypoint.class';

interface NavigationProps {
  info: {
    loc: '대건고' | '대건중' | '대건학사' | '체육관';
    waypoints: Waypoints;
  };
}

export default function Navigation({info}: NavigationProps) {
  const navigation = info;
  const [directions, setDirections] = useState<Waypoints>([]);
  const [locationInfo, setLocationInfo] = useState<LocationInfo>({
    meter: 0,
    direction: 'foward',
  });
  const [currentLoc, setCurrentLoc] = useState<WaypointType>({
    type: 'waypoint',
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const watchGeoID = Geolocation.watchPosition(
      loc => {
        const {latitude, longitude} = loc.coords;
        setCurrentLoc({type: 'waypoint', latitude, longitude});
      },
      e => {
        console.error(e);
      },
      {
        distanceFilter: 0,
      },
    );
    setDirections(navigation.waypoints);

    return () => {
      Geolocation.clearWatch(watchGeoID);
    };
  });

  useEffect(() => {
    // console.log('Location Changed');
    const waypoint = directions[0];
    if (!waypoint) return;
    if (WaypointUtils.isInRange(waypoint, currentLoc)) {
      setDirections(() => directions.filter(d => waypoint !== d));
    }
    console.log(currentLoc);
    setLocationInfo(prev => {
      console.log(prev);
      return {
        direction: WaypointUtils.headingTo(directions, currentLoc),
        meter: WaypointUtils.getDistance(waypoint.waypoint1, currentLoc),
      };
    });
  }, [currentLoc]);

  return (
    <SafeAreaProvider>
      <Arrow result={locationInfo.direction} meter={locationInfo.meter} />
      <Waypoint waypoints={navigation.waypoints} />
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{scene: Navigator}}
        style={{flex: 1}}
      />
    </SafeAreaProvider>
  );
}

interface LocationInfo {
  meter: number;
  direction: HeadingTo;
}
