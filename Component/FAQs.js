import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FAQs= () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>APP ARCHITECTURE</Text>
   
      <Text styles={styles.text1}>1. What does home building services mean?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  text: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'black',
    padding:10,
  },
  text1:{
    fontSize:15,
    color:'black'

  },
});

export default FAQs;
