import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Style from './styles';

import Apple from '../../assets/icons/apple.png';
import Google from '../../assets/icons/google.png';

const SocialButton = ({onPress, type}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Style.buttonView}>
      <Image style={Style.icon} source={type === 'apple' ? Apple : Google} />
    </TouchableOpacity>
  );
};

export default SocialButton;
