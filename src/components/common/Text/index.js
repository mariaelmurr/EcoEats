import React from 'react';
import {Text as RNText} from 'react-native';
import {colors} from '../../../constants/colors';
import {fonts} from '../../../constants/fonts';

const Text = ({
  weight = 'Regular',
  fontSize = 16,
  color = colors.black,
  children,
  textAlign,
  style,
}) => {
  return (
    <RNText
      style={[
        {
          fontFamily: fonts[weight],
          fontSize: fontSize,
          color: color,
          textAlign: textAlign,
        },
        style,
      ]}>
      {children}
    </RNText>
  );
};

export default Text;
