import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    backgroundColor: colors.white,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    width: 80,
  },
  greenCircle: {
    height: 60,
    width: 60,
    borderRadius: 180,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.greenShades.lightGreen3,
    marginBottom: 20,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 180,
    resizeMode: 'contain',
  },
});
export default Style;
