import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

const ExpertOfAllServices = () => {
  const  navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.fullBox}>
          <Text style={styles.text}>Design & Planning Expert</Text>
          <View style={styles.box}>
            <View style={styles.card}>
              <Image
                resizeMode="cover"
                source={require('../../image/business.jpg')}
                style={styles.image}
              />
              <View style={{}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Rakesh{'\n'}
                  <Text style={{fontWeight: '400'}}>Interior designer</Text>
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('DesignExpert1')}>
                  <View style={styles.BookNow}>
                    <Text style={{textAlign: 'center', color: '#fff'}}>
                      Book Now
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <Image
                resizeMode="cover"
                source={require('../../image/business.jpg')}
                style={styles.image}
              />
              <View style={{}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Amit Sahoo{'\n'}
                  <Text style={{fontWeight: '400'}}>Design coordinator</Text>
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('DesignExpert2')}>
                  <View style={styles.BookNow}>
                    <Text style={{textAlign: 'center', color: '#fff'}}>
                      Book Now
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.fullBox}>
          <Text style={styles.text}>Plumbing Expert</Text>
          <View style={styles.box}>
            <View style={styles.card}>
              <Image
                resizeMode="cover"
                source={require('../../image/business.jpg')}
                style={styles.image}
              />
              <View style={{}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Anwesh{'\n'}
                  <Text style={{fontWeight: '400'}}>Plumber</Text>
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('PlumbingExpert1')}>
                  <View style={styles.BookNow}>
                    <Text style={{textAlign: 'center', color: '#fff'}}>
                      Book Now
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <Image
                resizeMode="cover"
                source={require('../../image/business.jpg')}
                style={styles.image}
              />
              <View style={{}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Sangram{'\n'}
                  <Text style={{fontWeight: '400'}}>Master plumbers</Text>
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('PlumbingExpert2')}>
                  <View style={styles.BookNow}>
                    <Text style={{textAlign: 'center', color: '#fff'}}>
                      Book Now
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.fullBox}>
          <Text style={styles.text}>Civil Expert</Text>
          <View style={styles.box}>
            <View style={styles.card}>
              <Image
                resizeMode="cover"
                source={require('../../image/business.jpg')}
                style={styles.image}
              />
              <View style={{}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Suryakanta{'\n'}
                  <Text style={{fontWeight: '400'}}>Chief Engineer</Text>
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('CivilExpert1')}>
                  <View style={styles.BookNow}>
                    <Text style={{textAlign: 'center', color: '#fff'}}>
                      Book Now
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <Image
                resizeMode="cover"
                source={require('../../image/business.jpg')}
                style={styles.image}
              />
              <View style={{}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Sanket{'\n'}
                  <Text style={{fontWeight: '400'}}>Structural Engineer</Text>
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('CivilExpert2')}>
                  <View style={styles.BookNow}>
                    <Text style={{textAlign: 'center', color: '#fff'}}>
                      Book Now
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.fullBox}>
          <Text style={styles.text}>Electrical Expert</Text>
          <View style={styles.box}>
            <View style={styles.card}>
              <Image
                resizeMode="cover"
                source={require('../../image/business.jpg')}
                style={styles.image}
              />
              <View style={{}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Vishal{'\n'}
                  <Text style={{fontWeight: '400'}}>Electrical Engineer</Text>
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('ElectricalExpert1')}>
                  <View style={styles.BookNow}>
                    <Text style={{textAlign: 'center', color: '#fff'}}>
                      Book Now
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <Image
                resizeMode="cover"
                source={require('../../image/business.jpg')}
                style={styles.image}
              />
              <View style={{}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Deepak{'\n'}
                  <Text style={{fontWeight: '400'}}>Electrician</Text>
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('ElectricalExpert2')}>
                  <View style={styles.BookNow}>
                    <Text style={{textAlign: 'center', color: '#fff'}}>
                      Book Now
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExpertOfAllServices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  fullBox:{
    backgroundColor: '#fff',
    marginTop:15,
    borderRadius:10
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  box: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-around',
    borderRadius: 15,
  },
  card: {
    height: 170,
    width: 130,
    backgroundColor: '#F3CCF3',
    borderWidth: 2,
    justifyContent: 'center',
  },
  box1: {
    height: 110,
    width: 110,
    borderRadius: 55,
    backgroundColor: 'green',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    alignSelf: 'center',
  },
  BookNow: {
    backgroundColor: '#5B0888',
    borderRadius: 25,
    width: '70%',
    alignSelf: 'center',
  },
});
