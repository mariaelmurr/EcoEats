import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  searchContainer: {
    backgroundColor: colors.white,
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 25,
  },
  inputContainerStyle: {
    height: 35,
    backgroundColor: colors.white,
  },
  inputStyle: {
    color: colors.grey,
    fontSize: 12,
    fontFamily: 'Gilroy-Regular',
  },
});
export default Style;
