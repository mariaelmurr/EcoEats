import React from 'react';
import {Text, View} from 'react-native';

import AuthImageBackground from '../../components/AuthImageBackground';

const SigninScreen = () => {
  return (
    <AuthImageBackground
      title="Sign in"
      description="Enter your email address and password to access your account or create an account"></AuthImageBackground>
  );
};

export default SigninScreen;
