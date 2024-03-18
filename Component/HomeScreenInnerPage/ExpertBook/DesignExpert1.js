import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { AirbnbRating } from 'react-native-elements';

const DesignExpert1 = () => {
  return (
    <View style={{margin: 15}}>
      <Image
        resizeMode="cover"
        source={require('../../../image/business.jpg')}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
          Personal Details
        </Text>
        <View style={styles.data}>
          <Text style={{color: 'black', fontSize: 18}}>Mr Rakesh Panda</Text>
          <Text style={{color: 'black', fontSize: 15}}>
            Designation: Interior Designer
          </Text>
        </View>
        <View style={{alignItems:'center',marginTop:15}}>
          <Text style={{fontSize:18,color:'black'}}>Working Hours</Text>
          <View style={{flexDirection: 'row', gap: 50,marginTop:15}}>
            <View style={styles.time}>
              <TouchableOpacity>
                <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold',top:5}}>9:00-12:00</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.time}>
              <TouchableOpacity>
                <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold',top:5}}>5:00-7:00</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <AirbnbRating defaultRating={3}
      selectedColor='#5B0888'
      reviewSize={14}
      reviewColor='#5B0888'
      size={20}/>
    </View>
  );
};

export default DesignExpert1;

const styles = StyleSheet.create({
  image: {
    height: 140,
    width: 140,
    borderRadius: 70,
    alignSelf: 'center',
  },
  details: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor:'#fff'
  },
  data: {
    width: '100%',
    alignItems: 'center',
  },
  time: {
    backgroundColor: '#5B0888',
    borderRadius: 15,
    justifyContent:'space-between',
    width:120,
    height:30
  },
});