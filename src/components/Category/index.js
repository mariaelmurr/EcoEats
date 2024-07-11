import React from 'react';
import {Image, View} from 'react-native';
import Style from './styles';
import Text from '../common/Text';

const Category = ({image, title}) => {
  return (
    <View style={Style.container}>
      <View style={Style.greenCircle}>
        <Image style={Style.image} source={{uri: image}} />
      </View>

      <Text textAlign="center" fontSize={14}>
        {title}
      </Text>
    </View>
  );
};

export default Category;
