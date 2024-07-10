import React from 'react';

import {SearchBar} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Style from './style';
import {colors} from '../../constants/colors';

const GlobalSearchBar = ({search, updateSearch, placeholder}) => {
  return (
    <SearchBar
      placeholder={placeholder}
      onChangeText={updateSearch}
      value={search}
      containerStyle={Style.searchContainer}
      inputContainerStyle={Style.inputContainerStyle}
      lightTheme={true}
      placeholderTextColor={colors.grey.lightGrey1}
      inputStyle={Style.inputStyle}
      searchIcon={
        <AntDesign name="search1" size={20} color={colors.greenShades.green1} />
      }
    />
  );
};

export default GlobalSearchBar;
