import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    width: '100%',
    backgroundColor: colors.lightGrey.lightGrey1,
    borderWidth: 1,
    borderColor: colors.lightGrey.lightGrey2,
    borderRadius: 10,
    marginBottom: 15,
  },
  errorMessage: {
    marginBottom: 15,
  },
  inputText: {
    fontFamily: 'Gilroy-Regular',
    width: '90%',
    color: colors.black,
    fontSize: 14,
    paddingHorizontal: 15,
  },
  eye: {
    color: colors.lightGrey.lightGrey2,
    fontSize: 20,
  },
});
export default Style;
