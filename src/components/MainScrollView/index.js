import React from 'react';
import {ScrollView, View} from 'react-native';
import Style from './styles';

const MainScrollView = ({children}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Style.rootScreen}>
      <View style={Style.view}>{children}</View>
    </ScrollView>
  );
};

export default MainScrollView;
