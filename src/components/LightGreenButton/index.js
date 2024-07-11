import React from 'react';
import {TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Text from '../common/Text';
import {colors} from '../../constants/colors';
import Style from './styles';

const LightGreenButton = ({title}) => {
  return (
    <LinearGradient
      style={Style.container}
      colors={[colors.greenShades.green3, colors.greenShades.lightGreen4]}
      start={{x: 0, y: 0.5}}
      end={{x: 0.5, y: 1}}>
      <TouchableOpacity>
        <Text weight="Bold" fontSize={14} color={colors.white}>
          {title}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default LightGreenButton;
