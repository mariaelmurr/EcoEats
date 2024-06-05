import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';

import Style from './styles';

const AuthInputsView = ({children}) => {
  return (
    <KeyboardAvoidingView style={Style.rootView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flexGrow: 1}}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthInputsView;
