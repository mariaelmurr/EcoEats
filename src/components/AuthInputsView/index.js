import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';

import Style from './styles';

const AuthInputsView = ({children}) => {
  return (
    <KeyboardAvoidingView style={Style.rootView}>
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthInputsView;
