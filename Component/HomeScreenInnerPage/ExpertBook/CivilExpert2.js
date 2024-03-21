import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AirbnbRating } from 'react-native-elements';
import SweetAlert from 'react-native-sweet-alert';

const CivilExpert2 = () => {

  const handleBookNow = () => {
    SweetAlert.showAlertWithOptions({
      title: 'Booking Received!',
      subTitle: 'Thank you for booking with Sanket Sahoo.',
      style: 'success',
    });
  };

  return (
    <View style={{ margin: 15 }}>
      <Image
        resizeMode="cover"
        source={require('../../../image/business.jpg')}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>
          Personal Details
        </Text>
        <View style={styles.data}>
          <Text style={{ color: 'black', fontSize: 18 }}>Sanket Sahoo</Text>
          <Text style={{ color: 'black', fontSize: 15 }}>
            Designation: Structural Engineer
          </Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <Text style={{ fontSize: 18, color: 'black' }}>Working Hours</Text>
          <View style={{ flexDirection: 'row', gap: 50, marginTop: 15 }}>
            <View style={styles.time}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    top: 5,
                  }}>
                  11:00-2:00
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.time}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    top: 5,
                  }}>
                  5:00-7:00
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, bottom: 2, right: 5 }}>Rating:</Text>
        <AirbnbRating
          defaultRating={3}
          selectedColor="#5B0888"
          defaultRating={4}
          reviewSize={14}
          reviewColor="#5B0888"
          size={18}
          showRating={false}
          isDisabled={true}
        />
      </View>
      <TouchableOpacity style={styles.callme} onPress={handleBookNow}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CivilExpert2;

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
    backgroundColor: '#fff',
    height: 160,
    borderRadius: 20
  },
  data: {
    width: '100%',
    alignItems: 'center',
  },
  time: {
    backgroundColor: '#5B0888',
    borderRadius: 15,
    justifyContent: 'space-between',
    width: 120,
    height: 30,
  },
  callme: {
    alignItems: 'center',
    backgroundColor: 'green',
    width: 100,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
});
