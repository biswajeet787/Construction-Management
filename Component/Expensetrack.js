import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,isArrowDown } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Expancedetails from './Expancedetails';


const Expensetrack = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.spends}>₹Total spend</Text>
        <Text style={styles.text1}>₹0</Text>
      </View>
      <Expancedetails/>
      <Text style={styles.additionalText}>PROJECT EXPENSE</Text>
      <Text style={styles.additionalText}>EXPENSE DETAILS</Text>

      {/* Add two buttons */}
      <View style={styles.card1}>
      <TouchableOpacity style={styles.button1} onPress={() => handleButtonPress('Button 1')}>
        <Text style={styles.buttonText}>DOWNLOAD</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button2} onPress={() => handleButtonPress('Button 2')}>
        <Text style={styles.buttonText1}>Expance History</Text>
        <View>
        <Icon
          name={isArrowDown ? 'arrow-down' : 'arrow-right'}
          size={15}
          color="#000"
          style={styles.icon}
        />
    </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const handleButtonPress = (buttonName) => {
  // Handle button press logic here
  console.log(`${buttonName} pressed`);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 360,
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 15,
  },
  text1: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 290,
    marginTop: 5,
    margin: 10,

  },
  spends: {
    flex: 1,
    fontSize: 15,
    color: 'black',
    alignContent: 'flex-end',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  additionalText: {
    fontSize: 16,
    margin: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'orange',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
  },
  
  card1: {
    width:370,
  padding: 20,
  backgroundColor: 'white',
  borderRadius: 10,
  shadowColor: '#000',
  marginLeft: 10,
  shadowOffset: {
    width: 0,
  height: 2,
},
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  alignItems: 'center',
},

button1:{
  width: 110,
borderWidth: 2,
borderColor: 'orange',
marginRight: 250,
borderRadius: 10,
marginLeft: 20,



},
button2:{
  margin: 25,
  width:370,
  padding: 20,
  backgroundColor: 'white',
  borderRadius: 10,
  shadowColor: '#000',
  marginLeft: 10,
  shadowOffset: {
    width: 0,
  height: 2,
},
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  alignItems: 'center',
},
buttonText1: {

  color: 'black',
  marginRight: 180,
  fontSize: 16,
  fontWeight: 'bold',
  padding: 8,
  
},
icon:{
  marginLeft: 300,
  top: -20
}
});

export default Expensetrack;
