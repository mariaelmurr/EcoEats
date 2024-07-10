import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  container: {
    backgroundColor: colors.greenShades.green1,
    width: width,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Style;
