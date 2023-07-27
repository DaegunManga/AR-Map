import {View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {CurrentLocAtom} from '../../atom/currentLocation';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default function GoogleMap() {
  const {latitude, longitude} = useRecoilValue(CurrentLocAtom);

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
