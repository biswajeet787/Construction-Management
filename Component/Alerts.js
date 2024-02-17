import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

const Alerts = () => {
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  });

  const handleCheckboxToggle = (option) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  const handleMasterToggle = (value) => {
    const updatedCheckboxes = {};
    for (const key in checkboxes) {
      updatedCheckboxes[key] = value;
    }
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <View style={styles.card}>
       <View style={styles.masterToggle}>
          <Switch
            value={Object.values(checkboxes).every((value) => value)}
            onValueChange={(value) => handleMasterToggle(value)}
          />
        </View>
      <Text style={styles.masterToggleText}>Receive Alerts</Text>
      <Text style={styles.masterToggleText1}>Enable All</Text>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => handleCheckboxToggle('option1')}
          >
            <View style={[styles.checkbox, checkboxes.option1 && styles.checked]} />
            <Text style={styles.checkboxText}>Push Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => handleCheckboxToggle('option2')}
          >
            <View style={[styles.checkbox, checkboxes.option2 && styles.checked]} />
            <Text style={styles.checkboxText}>SMS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => handleCheckboxToggle('option3')}
          >
            <View style={[styles.checkbox, checkboxes.option3 && styles.checked]} />
            <Text style={styles.checkboxText}>Email</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => handleCheckboxToggle('option4')}
          >
            <View style={[styles.checkbox, checkboxes.option4 && styles.checked]} />
            <Text style={styles.checkboxText}>Phone Call</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => handleCheckboxToggle('option5')}
          >
            <View style={[styles.checkbox, checkboxes.option5 && styles.checked]} />
            <Text style={styles.checkboxText}>WhatsApp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    borderWidth: 20,
    height: '50%',
    borderColor: '#dddddd',
  },
  masterToggleText: {
    fontSize: 16,
    fontWeight: 'bold',
    // marginBottom: 10,
    bottom:30,
    color: 'black',
  },
  masterToggleText1:{
    fontSize:15,
    bottom:20,
  },
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  masterToggle: {
    marginRight: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding:6
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#8B0888',
  },
  checkboxText: {
    fontSize: 16,
    color:'black'
  },
});

export default Alerts;
