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
      <View>
        <Text>
          {result === 'foward'
            ? '직진'
            : result === 'right'
            ? '우회전'
            : result === 'left'
            ? '좌회전'
            : '경로를 이탈하였습니다.'}
        </Text>
        <Text style={styles.arrow_meter}>{meter}m</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    top: 0,
    right: 0,
  },
  arrow_icon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  arrow_meter: {
    fontSize: 13,
    color: 'white',
  },
});
