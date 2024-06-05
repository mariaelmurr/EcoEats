import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  buttonView: {
    backgroundColor: colors.lightGrey.lightGrey1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 180,
    borderWidth: 1,
    borderColor: colors.lightGrey.lightGrey2,
  },
});
export default Style;
