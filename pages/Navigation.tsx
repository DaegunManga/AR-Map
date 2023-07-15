import {useContext, useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LocContext} from '../app';
import {Waypoint as WaypointType, Waypoints} from '../utils/waypoints';
import Geolocation from '@react-native-community/geolocation';
import {BackHandler} from 'react-native';
import {ViroARSceneNavigator} from '@viro-community/react-viro';
import Navigator from '../components/AR/Navigator';
import Arrow from '../components/AR/Arrow';
import Waypoint from '../components/AR/Waypoint';

export default function Navigation() {
  const navigation = useContext(LocContext);
  const directions = useState<Waypoints>([]);
  const [currentLoc, setCurrentLoc] = useState<WaypointType>({
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

  return (
    <SafeAreaProvider>
      <Arrow result={'foward'} meter={500} />
      <Waypoint waypoints={navigation.waypoints} />
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{scene: Navigator}}
        style={{flex: 1}}
      />
    </SafeAreaProvider>
  );
}
