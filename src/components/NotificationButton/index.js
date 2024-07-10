import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import CircleButton from '../CircleButton';
import {colors} from '../../constants/colors';

const NotificationButton = ({onPress, backgroundColor, navigation}) => {
  return (
    <CircleButton backgroundColor={backgroundColor} onPress={onPress}>
      <FontAwesome name="bell-o" color={colors.white} size={20} />
    </CircleButton>
  );
};

export default NotificationButton;
