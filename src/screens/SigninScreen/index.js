import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';

import AuthImageBackground from '../../components/AuthImageBackground';
import AuthInputsView from '../../components/AuthInputsView';
import Text from '../../components/common/Text';
import Input from '../../components/common/TextInput';
import GlobalButton from '../../components/GlobalButton';
import {colors} from '../../constants/colors';
import Style from './styles';
import SocialButton from '../../components/SocialButton';

import BlankSpacer from 'react-native-blank-spacer';

const SigninScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [focusesInput, setFocusedInput] = useState('');

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email required.')
      .trim(),
    password: Yup.string().required('Password required.'),
  });

  const onSubmit = values => {
    console.log(values);
  };

  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnMount: true,
  });

  const navigateToSignUpScreen = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <AuthImageBackground
      title="Sign in"
      description="Enter your email address and password to access your account or create an account">
      <AuthInputsView>
        <View style={{flexGrow: 1}}>
          <Text weight="Bold" style={{marginBottom: 10}} fontSize={14}>
            Your Email
          </Text>
          <Input
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            onFocus={() => setFocusedInput('email')}
            value={values.email}
            placeholder="Enter Email"
            type="text"
            autoCapitalize="none"
            error={touched.email && errors.email}
          />

          <Text weight="Bold" fontSize={14} style={{marginBottom: 10}}>
            Password
          </Text>
          <Input
            type="password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            onFocus={() => setFocusedInput('password')}
            value={values.password}
            placeholder="Enter Password"
            secureTextEntry={showPassword ? false : true}
            autoCapitalize="none"
            error={touched.password && errors.password}
            password={true}
            onIconPress={() => setShowPassword(!showPassword)}
            showPassword={showPassword}
          />

          <GlobalButton title="Sign in" onPress={handleSubmit} />

          <BlankSpacer height={20} />

          <TouchableOpacity onPress={() => navigateToSignUpScreen()}>
            <Text color={colors.grey} fontSize={14} textAlign="center">
              Don't have an account?{' '}
              <Text color={colors.green} fontSize={14}>
                Sign up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={Style.socialView}>
          <Text
            textAlign="center"
            style={{marginBottom: 15}}
            color={colors.grey}
            weight="Medium"
            fontSize={12}>
            Other sign in options
          </Text>

          <View style={Style.row}>
            <View style={{marginRight: 10}}>
              <SocialButton type="apple" />
            </View>
            <SocialButton type="google" />
          </View>
        </View>
      </AuthInputsView>
    </AuthImageBackground>
  );
};

export default SigninScreen;
