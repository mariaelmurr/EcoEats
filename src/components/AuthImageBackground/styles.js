import {Dimensions, Platform, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  rootScreen: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textView: {
    marginVertical: 50,
  },
});
export default Style;
