import React, {useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SigninScreen from '../screens/SigninScreen';

const Stack = createNativeStackNavigator();

const EntryNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default EntryNavigation;
