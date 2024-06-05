import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  inputView: {
    width: '100%',
    backgroundColor: colors.grey.lightGrey3,
    height: 45,
    alignItems: 'center',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.grey.lightGrey2,
    borderRadius: 10,
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
    color: colors.grey.lightGrey2,
    fontSize: 20,
  },
});
export default Style;
