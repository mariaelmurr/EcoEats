import React from 'react';
import {ImageBackground, SafeAreaView, View} from 'react-native';

import ImageBg from '../../assets/images/ImageBg.png';
import Style from './styles';
import Text from '../common/Text';
import {colors} from '../../constants/colors';

const AuthImageBackground = ({children, title, description}) => {
  return (
    <ImageBackground source={ImageBg} style={Style.rootScreen}>
      <SafeAreaView>
        <View style={Style.textView}>
          <Text
            style={{marginBottom: 15}}
            textAlign="center"
            weight="Bold"
            color={colors.white}
            fontSize={25}>
            {title}
          </Text>
          <Text
            style={{lineHeight: 20}}
            textAlign="center"
            weight="Medium"
            color={colors.white}>
            {description}
          </Text>
        </View>

        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AuthImageBackground;
