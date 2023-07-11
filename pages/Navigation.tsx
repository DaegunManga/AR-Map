import {useContext, useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LocContext} from '../app';
import {Waypoint, Waypoints} from '../utils/waypoints';
import Geolocation from '@react-native-community/geolocation';
import {BackHandler} from 'react-native';

export default function Navigation() {
  const navigation = useContext(LocContext);
  const directions = useState<Waypoints>([]);
  const [currentLoc, setCurrentLoc] = useState<Waypoint>({
    type: 'waypoint',
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const watchGeoID = Geolocation.watchPosition(
      loc => {
        const {latitude, longitude, heading} = loc.coords;
        setCurrentLoc({type: 'waypoint', latitude, longitude});
      },
      () => BackHandler.exitApp(),
    );

    return () => {
      Geolocation.clearWatch(watchGeoID);
    };
  }, []);

  return <SafeAreaProvider></SafeAreaProvider>;
}
