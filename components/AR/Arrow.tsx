import {StyleSheet, Text, View} from 'react-native';
import {HeadingTo} from '../../utils/waypoints';

interface ArrowProps {
  result: HeadingTo;
  meter: number;
}

export default function Arrow({result, meter}: ArrowProps) {
  return (
    <View style={styles.view}>
      <Text style={styles.arrow_icon}>
        {result === 'foward'
          ? '↑'
          : result === 'right'
          ? '→'
          : result === 'left'
          ? '←'
          : '↓'}
      </Text>
      <Text style={styles.arrow_meter}>{meter}m</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  arrow_icon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  arrow_meter: {
    fontSize: 13,
  },
});
