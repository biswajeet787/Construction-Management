import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Slider} from 'react-native-elements';

export const EMI_Calculator = () => {
  const [loan, setLoan] = useState(0);

  const handleTextInputChange = (text) => {
    // Parse the text input to a number
    const parsedValue = parseFloat(text);
    
    // Check if it's a valid number
    if (!isNaN(parsedValue)) {
      setLoan(parsedValue);
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={{margin: 15}}>
        <View style={{backgroundColor: '#fff'}}>
          <View style={{margin: 12}}>
            <Text style={styles.text}>Monthly installment</Text>
            <Icon name="rupee" size={25} color="black" style={styles.rupee} />
            <TouchableOpacity>
              <Text style={styles.text1}>VIEW DETAILS {'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: '#fff', position: 'relative'}}>
        <View style={{margin: 15}}>
          <View style={{position: 'absolute', bottom: 41, left: 15, zIndex: 1}}>
            <Text style={{backgroundColor: '#fff'}}>Loan Amount</Text>
          </View>
          <TextInput
            placeholder="₹"
            keyboardType="numeric"
            style={{borderWidth: 1, borderRadius: 15, width: '50%'}}
            // value={loan.toString()}
            value={loan.toFixed(0)}
            onChangeText={handleTextInputChange} 
          />
        </View>
        <View style={{margin: 15}}>
          <Slider
            // style={{width: 300}}
            onValueChange={value => setLoan(value)}
            minimumValue={100000}
            maximumValue={1000000}
            value={loan}
            thumbTintColor='#5B0888'
            thumbStyle={{ width: 20, height: 20 }}
          />
          <Text>{loan}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'black',
  },
  rupee: {
    marginTop: 15,
  },
  text1: {
    fontSize: 18,
    color: '#FE7A36',
    marginTop: 15,
  },
});
