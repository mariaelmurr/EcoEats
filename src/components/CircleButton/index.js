import React from 'react';
import {TouchableOpacity} from 'react-native';
import Style from './styles';

const CircleButton = ({backgroundColor, onPress, children}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Style.container,
        backgroundColor && {backgroundColor: backgroundColor},
      ]}>
      {children}
    </TouchableOpacity>
  );
};

export default CircleButton;
