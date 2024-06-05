import React from 'react';
import {TouchableOpacity} from 'react-native';
import Style from './styles';

const SocialButton = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Style.buttonView}>
      {children}
    </TouchableOpacity>
  );
};

export default SocialButton;
