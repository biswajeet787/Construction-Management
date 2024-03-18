import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
const ServicesExperts = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card2}>
        <View>
          <TouchableOpacity onPress={()=>navigation.navigate('ExpertOfAllServices')}>
          <View style={[styles.textview1, styles.textview11]}>
            <Text style={{fontSize: 16, color: '#5B0888', fontWeight: 'bold'}}>
              Design & Planning
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('ExpertOfAllServices')}>
          <View
            style={[styles.textview2, styles.textview22, styles.textview222]}>
            <Text style={{fontSize: 16, color: '#5B0888', fontWeight: 'bold'}}>
              Plumbing
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('ExpertOfAllServices')}>
          <View
            style={[styles.textview1, styles.textview11, styles.textview111]}>
            <Text style={{fontSize: 16, color: '#5B0888', fontWeight: 'bold'}}>
              Civil & Structural Engineering
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('ExpertOfAllServices')}>
          <View
            style={[styles.textview1, styles.textview11, styles.textview1111]}>
            <Text style={{fontSize: 16, color: '#5B0888', fontWeight: 'bold'}}>
              Electrical
            </Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cardimage3}>
          <Image
            source={require('../../image/business.jpg')} // Change the path to your image
            style={styles.image1}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
  },
  header: {
    backgroundColor: '#5B0888',
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 10,
  },
  icon: {
    paddingLeft: 20,
    color: '#fff',
  },
  icon1: {
    paddingLeft: 30,
    paddingBottom: 8,
    color: '#fff',
  },
  textContainer: {
    flex: 1,
  },
  text1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 100,
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
    marginBottom: 7,
    marginRight: 1,
  },
  header1: {
    backgroundColor: '#5B0888',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 11,
    marginBottom: 7,
  },
  viewtextcontainer1: {
    marginTop: 30,
    marginLeft: 21,
  },
  text4: {
    fontSize: 17,
    color: 'black',
  },
  card1: {
    backgroundColor: 'white',
    height: 150,
    width: 350,
    marginLeft: 21,
    marginTop: 10,
    borderRadius: 7,
    flexDirection: 'row',
  },
  cardtext: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingLeft: 15,
    color: 'black',
  },
  image1: {
    height: 70,
    width: 70,
    borderRadius: 5,
  },
  cardimage1: {
    marginTop: 30,
    marginLeft: 42,
  },
  textview1: {
    backgroundColor: '#E5CFF7',
    marginTop: 25,
    borderRadius: 10,
    marginLeft: 16,
    height: 45,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textview2: {
    backgroundColor: '#E5CFF7',
    marginTop: 18,
    borderRadius: 10,
    marginLeft: 16,
    height: 30,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textview11: {
    width: 160,
  },
  textview22: {
    width: 220,
  },
  cardimage2: {
    marginTop: 30,
    marginLeft: 13,
  },
  card2: {
    backgroundColor: 'white',
    height: 280,
    width: 350,
    marginLeft: 21,
    marginTop: 10,
    borderRadius: 15,
    flexDirection: 'row',
  },
  textview222: {
    width: 90,
  },
  textview111: {
    width: 145,
    marginTop: 18,
  },
  textview1111: {
    width: 90,
    marginTop: 19,
  },
  cardimage3: {
    marginTop: 90,
    marginLeft: 67,
  },
  
});

export default ServicesExperts;
