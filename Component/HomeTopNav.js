import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const HomeTopNav = () => {

  const navigation = useNavigation();
  const handleSearchPress = () => {
    navigation.navigate('SearchScreen');
  };
  const handleProfilePress = () => {
    navigation.navigate('Menu');
  };
  return (
    <View style={{}}>
      <View style={styles.navContainer}>
        <View style={styles.navItem}>
          <Image
            source={require('../image/homeImage.png')}
            resizeMode="contain"
            style={{height: '100%'}}
          />
        </View>
        <View style={styles.navSideItem}>
          <View style={{right: 20,paddingTop:3}}>
            <TouchableOpacity onPress={handleSearchPress}>
              <Icon name="search" size={26} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={handleProfilePress}>
              <Ionicons name="person-circle-outline" size={32} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: '#713ABE',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  navItem: {
    height: 100,
    width: 50,
    marginLeft: 60,
  },
  navSideItem: {
    flexDirection: 'row',
    left: 80,
  },
});

export default HomeTopNav;
