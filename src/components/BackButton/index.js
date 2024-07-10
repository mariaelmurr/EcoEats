import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';

import CircleButton from '../CircleButton';
import {colors} from '../../constants/colors';

const BackButton = ({onPress, backgroundColor, navigation}) => {
  return (
    <CircleButton
      backgroundColor={backgroundColor}
      onPress={onPress ? onPress : () => navigation.goBack()}>
      <AntDesign name="left" color={colors.white} size={20} />
    </CircleButton>
  );
};

export default BackButton;
