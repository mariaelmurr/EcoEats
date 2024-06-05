import React from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';

import Style from './styles';
import Text from '../common/Text';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../constants/colors';
import BlankSpacer from 'react-native-blank-spacer';
import {useDispatch} from 'react-redux';
import {clearErrorMessage} from '../../redux/actions/authActions';

const ErrorModal = ({modalVisible, onRequestClose, message}) => {
  const dispatch = useDispatch();
  return (
    <Modal
      animationType="fade"
      visible={modalVisible}
      transparent={true}
      onRequestClose={onRequestClose}>
      <View style={Style.outerView}>
        <View style={Style.modalView}>
          <TouchableOpacity
            onPress={() => dispatch(clearErrorMessage())}
            style={Style.closeIcon}>
            <AntDesign name="close" size={20} color={colors.red} />
          </TouchableOpacity>

          <View style={Style.row}>
            <FontAwesome6
              name="triangle-exclamation"
              color={colors.red}
              size={20}
            />
            <BlankSpacer width={10} />
            <Text weight="Bold" fontSize={14} color={colors.red}>
              {message}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;
