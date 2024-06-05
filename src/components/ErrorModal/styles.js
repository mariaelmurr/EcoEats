import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  outerView: {
    flex: 1,
    backgroundColor: colors.stroke,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: colors.lightRed,
    borderRadius: 16,
    padding: 15,
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeIcon: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
});
export default Style;
