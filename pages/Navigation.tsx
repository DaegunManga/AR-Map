import {useContext, useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LocContext} from '../app';
import {
  HeadingTo,
  Waypoint as WaypointType,
  Waypoints,
} from '../utils/waypoints';
import Geolocation from '@react-native-community/geolocation';
import {BackHandler} from 'react-native';
import {ViroARSceneNavigator} from '@viro-community/react-viro';
import Navigator from '../components/AR/Navigator';
import Arrow from '../components/AR/Arrow';
import Waypoint from '../components/AR/Waypoint';
import WaypointUtils from '../utils/Waypoint.class';

export default function Navigation() {
  const navigation = useContext(LocContext);
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
    setDirections(navigation.waypoints);
    const watchGeoID = Geolocation.watchPosition(
      loc => {
        const {latitude, longitude} = loc.coords;
        setCurrentLoc({type: 'waypoint', latitude, longitude});
      },
      () => BackHandler.exitApp(),
    );

    return () => {
      Geolocation.clearWatch(watchGeoID);
    };
  }, []);

  useEffect(() => {
    const waypoint = directions[0];
    if (WaypointUtils.isInRange(waypoint, currentLoc)) {
      setDirections(() => directions.filter(d => waypoint !== d));
    }
    setLocationInfo(p => ({
      direction: WaypointUtils.headingTo(directions, currentLoc),
      meter: WaypointUtils.getDistance(waypoint.waypoint1, currentLoc),
    }));
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
