import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const HomeImageCarousel = () => {
  const carouselData = [
    {id: '1', image: require('../image/image12.jpg')},
    {id: '2', image: require('../image/image13.jpg')},
    {id: '3', image: require('../image/image14.jpg')},
    {id: '4', image: require('../image/image4.jpg')},
  ];

  const renderItem = ({item}) => (
    <Image
      source={item.image}
      style={styles.carouselImage}
      resizeMode="cover"
    />
  );

  return (
    <View>
      <View style={styles.mainContainerCarousel}></View>
      <View style={{backgroundColor:'#fff'}}>
        <View style={{alignItems: 'center', bottom: 30}}>
          <Carousel
            data={carouselData}
            renderItem={renderItem}
            sliderWidth={400}
            itemWidth={340}
            loop
            autoplay
            autoplayInterval={4000}
          />
        </View>
        </View>
        <View style={{top:50}}></View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainerCarousel: {
    backgroundColor: '#713ABE',
    height: 70,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  carouselImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default HomeImageCarousel;
