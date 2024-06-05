import React, {useState} from 'react';
import {Image, View} from 'react-native';

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

import Apple from '../../assets/icons/apple.png';
import Google from '../../assets/icons/google.png';

const SigninScreen = () => {
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

  return (
    <AuthImageBackground
      title="Sign in"
      description="Enter your email address and password to access your account or create an account">
      <AuthInputsView>
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
              <SocialButton>
                <Image source={Apple} style={Style.icon} />
              </SocialButton>
            </View>
            <SocialButton>
              <Image source={Google} style={Style.icon} />
            </SocialButton>
          </View>
        </View>
      </AuthInputsView>
    </AuthImageBackground>
  );
};

export default SigninScreen;
