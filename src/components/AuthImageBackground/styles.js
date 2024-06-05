import {Dimensions, Platform, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  rootScreen: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textView: {
    marginTop: 50,
    marginBottom: 30,
  },
});
export default Style;
