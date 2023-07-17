import {StyleSheet, Text, View} from 'react-native';
import {Waypoints} from '../../utils/waypoints';

interface WaypointProps {
  waypoints: Waypoints;
}

interface WaypointBoxProps {
  name: string;
}

export default function Waypoint({waypoints}: WaypointProps) {
  return (
    <View style={Styles.View}>
      {waypoints.map((v, i) => (
        <WaypointBox key={i} name={v.name} />
      ))}
    </View>
  );
}

function WaypointBox({name}: WaypointBoxProps) {
  return (
    <View style={Styles.WaypointBoxView}>
      <Text style={Styles.WaypointText}>{name}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  View: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 100,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: 'white',
    flexDirection: 'column',
  },
  WaypointBoxView: {
    display: 'flex',
    borderBottomWidth: 1,
    borderColor: 'white',
    color: 'white',
  },
  WaypointText: {
    color: 'white',
  },
});
