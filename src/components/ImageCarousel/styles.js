import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  container: {
    borderRadius: 16,
    width: '100%',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  image: {
    width: '70%',
    height: 100,
    resizeMode: 'contain',
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 180,
    marginRight: 5,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
export default Style;
