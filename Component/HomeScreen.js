import React from 'react';
import {ScrollView, View} from 'react-native';
import Slider from './Slider';
import Card from './Card';
import Grid from './Grid';
import HomeCardSlider from './HomeCardSlider';
import HomeTopNav from './HomeTopNav';
import HomeImageCarousel from './HomeImageCarousel';

const HomeScreen = () => (
  <View style={{flex: 1}}>
    <HomeTopNav />
    <ScrollView>
      <HomeImageCarousel />
      <View style={{margin: 10}}></View>
      <Card />
      <Grid />
      <HomeCardSlider />
    </ScrollView>
  </View>
);

export default HomeScreen;
