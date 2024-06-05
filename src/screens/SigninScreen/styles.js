import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  socialView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 25,
    width: 25,
  },
});
export default Style;
