import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';

import Style from './style';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../constants/colors';
import Text from '../Text';

const Input = ({
  children,
  onChangeText,
  onBlur,
  onFocus,
  value,
  placeholder,
  type,
  error,
  keyboardType,
  password,
  showPassword,
  onIconPress,
  autoCapitalize,
  secureTextEntry,
}) => {
  return (
    <>
      <View style={[Style.inputView]}>
        <TextInput
          onChangeText={onChangeText}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          placeholder={placeholder}
          type={type}
          placeholderTextColor={colors.grey.lightGrey1}
          style={[Style.inputText]}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
        />
        {password ? (
          <TouchableOpacity onPress={onIconPress}>
            <FontAwesome
              name={showPassword ? 'eye' : 'eye-slash'}
              style={Style.eye}
            />
          </TouchableOpacity>
        ) : (
          <>{children}</>
        )}
      </View>
      {error && (
        <Text color={colors.red.red} fontSize={12} style={Style.errorMessage}>
          {error}
        </Text>
      )}
    </>
  );
};

export default Input;
