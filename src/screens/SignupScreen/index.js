import React, {useState} from 'react';

import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';

import AuthImageBackground from '../../components/AuthImageBackground';
import AuthInputsView from '../../components/AuthInputsView';
import Text from '../../components/common/Text';
import Input from '../../components/common/TextInput';
import GlobalButton from '../../components/GlobalButton';
import BlankSpacer from 'react-native-blank-spacer';
import {TouchableOpacity, View} from 'react-native';
import {colors} from '../../constants/colors';
import Style from '../SigninScreen/styles';
import SocialButton from '../../components/SocialButton';
import {clearErrorMessage, signup} from '../../redux/actions/authActions';
import ErrorModal from '../../components/ErrorModal';

const SignupScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {showErrorModal, errorMessage, loading} = useSelector(
    state => state.auth,
  );

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [focusesInput, setFocusedInput] = useState('');

  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPass: '',
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('First name required.').trim(),
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email required.')
      .trim(),
    password: Yup.string()
      .required('Password required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?.&#\-\/])[A-Za-z\d@$!%*?.&#\-\/]{8,}$/,
        'The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character, and it should have a minimum length of 8 characters.',
      ),
    confirmPass: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match.')
      .required('Confirm Password required'),
  });

  const onSubmit = values => {
    const obj = {
      full_name: values.fullName,
      email: values.email,
      password: values.password,
    };
    console.log(obj);
    dispatch(signup(obj));
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

  const navigateToSignInScreen = () => {
    navigation.navigate('SigninScreen');
  };
  return (
    <AuthImageBackground
      title="Sign Up"
      description="To get more advantages sign up your accounts by filling some informations">
      <AuthInputsView>
        <View style={{flex: 1}}>
          <Text weight="Bold" style={{marginBottom: 10}} fontSize={14}>
            Your Full Name
          </Text>
          <Input
            onChangeText={handleChange('fullName')}
            onBlur={handleBlur('fullName')}
            onFocus={() => setFocusedInput('fullName')}
            value={values.fullName}
            placeholder="Enter Full Name"
            type="text"
            autoCapitalize="none"
            error={touched.fullName && errors.fullName}
          />

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

          <Text weight="Bold" fontSize={14} style={{marginBottom: 10}}>
            Confirm Password
          </Text>
          <Input
            type="password"
            onChangeText={handleChange('confirmPass')}
            onBlur={handleBlur('confirmPass')}
            onFocus={() => setFocusedInput('confirmPass')}
            value={values.confirmPass}
            placeholder="Enter Password Confirmation"
            secureTextEntry={showConfirmPass ? false : true}
            autoCapitalize="none"
            error={touched.confirmPass && errors.confirmPass}
            password={true}
            onIconPress={() => setShowConfirmPass(!showConfirmPass)}
            showPassword={showConfirmPass}
          />

          <GlobalButton
            title="Sign up"
            onPress={handleSubmit}
            loading={loading}
          />

          <BlankSpacer height={20} />

          <TouchableOpacity onPress={() => navigateToSignInScreen()}>
            <Text color={colors.grey} fontSize={14} textAlign="center">
              Already have an account?{' '}
              <Text color={colors.green} fontSize={14}>
                Sign in
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
            Other sign up options
          </Text>

          <View style={Style.row}>
            <View style={{marginRight: 10}}>
              <SocialButton type="apple" />
            </View>
            <SocialButton type="google" />
          </View>
        </View>
      </AuthInputsView>

      <ErrorModal
        modalVisible={showErrorModal}
        message={errorMessage}
        onRequestClose={() => dispatch(clearErrorMessage())}
      />
    </AuthImageBackground>
  );
};

export default SignupScreen;
