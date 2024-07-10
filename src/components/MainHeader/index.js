import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Style from './styles';
import BackButton from '../BackButton';
import Text from '../common/Text';
import {colors} from '../../constants/colors';
import NotificationButton from '../NotificationButton';
import GlobalSearchBar from '../SearchBar';
import BlankSpacer from 'react-native-blank-spacer';

const MainHeader = ({withLocation, withSearch, navigation, title}) => {
  const [search, setSearch] = useState('');

  const updateSearch = search => {
    setSearch(search);
  };
  return (
    <SafeAreaView style={Style.container}>
      <View style={{padding: 15}}>
        <View style={[Style.row, {justifyContent: 'space-between'}]}>
          <BackButton navigation={navigation} />

          {withLocation ? (
            <View style={Style.row}>
              <EvilIcons
                name="location"
                color={colors.white}
                size={25}
                style={{marginRight: 5}}
              />

              <Text color={colors.white} fontSize={14}>
                Location{' '}
              </Text>
            </View>
          ) : (
            <Text>{title}</Text>
          )}

          <NotificationButton />
        </View>

        {withLocation && (
          <Text textAlign="center" color={colors.white} weight="Bold">
            Baridhara, Dhaka
          </Text>
        )}

        {withSearch && (
          <>
            <BlankSpacer height={20} />

            <GlobalSearchBar
              search={search}
              updateSearch={updateSearch}
              placeholder="Search Your Groceries"
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MainHeader;
