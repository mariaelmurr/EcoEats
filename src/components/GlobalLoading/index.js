import React from 'react';
import {ActivityIndicator} from 'react-native';
import {colors} from '../../constants/colors';

const GlobalLoading = () => (
  <ActivityIndicator
    size="large"
    color={colors.white}
    style={{
      justifyContent: 'center',
    }}
  />
);

export default GlobalLoading;
