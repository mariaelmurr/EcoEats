import React, {useState} from 'react';
import {Dimensions, FlatList, Image, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Style from './styles';
import {colors} from '../../constants/colors';
import Text from '../common/Text';
import LightGreenButton from '../LightGreenButton';
import BlankSpacer from 'react-native-blank-spacer';

const {width, height} = Dimensions.get('window');

const ImageCarousel = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePageChange = event => {
    const {contentOffset} = event.nativeEvent;
    const index = Math.round(contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <>
      <LinearGradient
        style={Style.container}
        colors={[colors.greenShades.green2, colors.greenShades.lightGreen2]}
        start={{x: 0, y: 0.5}}
        end={{x: 0.5, y: 1}}>
        <FlatList
          data={images}
          renderItem={({item}) => {
            return (
              <View style={[Style.row, {width: width - 40}]}>
                <View style={{width: '40%'}}>
                  <Text weight="Bold" color={colors.white} fontSize={18}>
                    {item.title}
                  </Text>

                  <BlankSpacer height={30} />

                  <View style={{width: 100}}>
                    <LightGreenButton title="Shop Now" />
                  </View>
                </View>

                <Image source={{uri: item?.image}} style={Style.image} />
              </View>
            );
          }}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handlePageChange}
        />
      </LinearGradient>

      <View style={Style.pagination}>
        {images?.map((item, index) => (
          <View
            key={item.id}
            style={[
              Style.circle,
              {
                backgroundColor:
                  index === activeIndex
                    ? colors.greenShades.green1
                    : colors.greenShades.lightGreen3,
              },
            ]}
          />
        ))}
      </View>
    </>
  );
};

export default ImageCarousel;
