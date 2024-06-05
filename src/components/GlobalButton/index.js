import React from 'react';
import {TouchableOpacity} from 'react-native';
import Style from './styles';
import Text from '../common/Text';
import {colors} from '../../constants/colors';
import GlobalLoading from '../GlobalLoading';

const GlobalButton = ({onPress, title, disabled, loading}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={Style.buttonView}
      disabled={disabled && loading}>
      {loading ? (
        <GlobalLoading />
      ) : (
        <Text weight="Bold" fontSize={14} color={colors.white}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default GlobalButton;
