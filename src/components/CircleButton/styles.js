import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 180,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.greenShades.lightGreen1,
  },
});
export default Style;
