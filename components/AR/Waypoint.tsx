import {Text, View} from 'react-native';
import {Waypoints} from '../../utils/waypoints';

interface WaypointProps {
  waypoints: Waypoints;
}

interface WaypointBoxProps {
  name: string;
}

export default function Waypoint({waypoints}: WaypointProps) {
  return (
    <View>
      {waypoints.map((v, i) => (
        <WaypointBox key={i} name={v.name} />
      ))}
    </View>
  );
}

function WaypointBox({name}: WaypointBoxProps) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
