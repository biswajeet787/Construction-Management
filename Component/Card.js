import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { SocialIcon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const Card = () => {
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <View style={Styles.cardContainer}>
        <View style={Styles.card}>
          <TouchableOpacity onPress={()=>{navigation.navigate('MaterialSearch')}}>
            <FontAwesome5
              name="building"
              size={50}
              color="#5B0888"
              style={Styles.cardImage}
            />
            <View style={{}}>
              <Text style={Styles.cardText1}>Material Search</Text>
              {/* <Text style={Styles.cardText1}>Find trustworthy</Text> */}
            </View>
            
          </TouchableOpacity>
        </View>

        <View style={Styles.card}>
          <TouchableOpacity onPress={()=>{navigation.navigate('ExpertSearch')}}>
            <FontAwesome6
              name="building-user"
              size={50}
              color="#5B0888"
              style={Styles.cardImage}
            />
            <Text style={Styles.cardText2}>Expert Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
};

const Styles = StyleSheet.create({
  // container: {backgroundColor: '#E5CFF7'},
  CardTextContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
  },

  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#FDFFAB',
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#756AB6',
    marginHorizontal: 8,
  },
  cardImage: {
    width: 120,
    height: 130,
    // borderRadius: 75,
    marginBottom: 10,
    textAlign: 'center',
  },
  cardText1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    bottom: '291%',
    color:'black'
  },
  cardText2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    bottom: '40%',
    color:'black'
  },
  text: {
    marginTop: 20,
    backgroundColor: '#FFECD6',
  },
  textIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // paddingHorizontal: 20, //change here***
  },
  textSize: {
    fontSize: 18,
    padding: 20,
    fontWeight: '700',
    color:'black'
  },
  textColor: {
    color: '#5B0888',
  },
  textSite: {
    padding: 30,
  },
});

export default Card;
