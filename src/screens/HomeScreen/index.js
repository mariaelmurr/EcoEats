import React, {useState} from 'react';

import Text from '../../components/common/Text';
import ImageCarousel from '../../components/ImageCarousel';
import {CATEGORIES, FEATURED_DATA} from '../../DummyData';
import MainScrollView from '../../components/MainScrollView';
import Category from '../../components/Category';
import {ScrollView} from 'react-native';

const HomeScreen = () => {
  return (
    <MainScrollView>
      <ImageCarousel images={FEATURED_DATA} />

      <Text weight="Bold" fontSize={20} style={{marginTop: 20}}>
        Categories
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CATEGORIES?.map((category, id) => {
          return (
            <Category
              key={category?.id}
              image={category?.logo}
              title={category?.title}
            />
          );
        })}
      </ScrollView>
    </MainScrollView>
  );
};

export default HomeScreen;
