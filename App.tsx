/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {createContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import Navigation from './pages/Navigation';
import {Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {Waypoints} from './utils/waypoints';
import WaypointUtils from './utils/Waypoint.class';

interface LocContextType {
  loc: '대건고' | '대건중' | '대건학사' | '체육관';
  waypoints: Waypoints;
}

// const Stack = createNativeStackNavigator();

export const LocContext = createContext<LocContextType | undefined>(undefined);

const locContextDefault: LocContextType = {
  loc: '대건고',
  waypoints: WaypointUtils.getWaypoints('대건고'),
};

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <LocContext.Provider value={locContextDefault}>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Navi" component={Navigation} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <Navigation
        info={{loc: '대건고', waypoints: WaypointUtils.getWaypoints('대건고')}}
      />
    </LocContext.Provider>
  );
}
