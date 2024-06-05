import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './src/navigation/RootNavigation';
import RootContainer from './src/navigation/RootContainer';

const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootContainer />
    </NavigationContainer>
  );
};

export default AppContainer;
