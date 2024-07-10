import React, {useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MainHeader from '../components/MainHeader';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const renderCommonHeader = props => {
    return <MainHeader {...props} />;
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: props =>
            renderCommonHeader({
              ...props,
              withLocation: true,
              withSearch: true,
            }),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
