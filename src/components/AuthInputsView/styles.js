import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  rootView: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
});
export default Style;