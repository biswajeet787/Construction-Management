import React from 'react';
import { ScrollView,View } from 'react-native';
import Slider from './Slider';
import Card from './Card';
import Grid from './Grid';
import SliderBackGroundNav from './SliderBackGroundNav';
import HomeVideoSlider from './HomeVideoSlider';

const HomeScreen = () => (
  <ScrollView>
    <View style={{height:150}}>
      {/* height=150 with only slider component */}
    {/* <SliderBackGroundNav/> */}
    <Slider />
    
    </View>
    <Card />
    <Grid />
    <View>
    <HomeVideoSlider />
    </View>
  </ScrollView>
);

export default HomeScreen;
