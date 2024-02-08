import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';
import ConceptDesignPackageScreen from './ConceptDesign';
import DesignPackage from './AdvanceDesignPackage'; // Import AdvancedConceptDesignPackageScreen
import VisualizationPackage from './VisualizationPackage';
import Layout from './Layout';
import Elevation from './Elevation';
import VirtualReality from './VirtualReality';
import AntiTermite from './AntiTermite';
import RainwaterHarvesting from './RainwaterHarvesting';
import SolarService from './SolarService';
import ConstructionAdvisory from './ConstructionAdvisory';







const SolutionsScreen = ({ navigation }) => {
  const Design = [
    { id: '1', name: 'Concept Design Package', icon: 'home', screen: 'ConceptDesignPackage' },
    { id: '2', name: 'Advanced concept Design', icon: 'rocket', screen: 'AdvancedConceptDesign' },
    { id: '3', name: 'Visualization Packages', icon: 'picture-o', screen:'VisualizationPackage'},
    { id: '4', name: '2D Layout Services', icon: 'file-text-o' , screen:'Layout'},
    { id: '5', name: '3D Elevation Services', icon: 'cubes', screen:'Elevation' },
    { id: '6', name: 'Virtual Reality Experience', icon: 'eye', screen:'VirtualReality'},
    { id: '7', name: 'Design Ideas', icon: 'lightbulb-o' },
    { id: '8', name: 'Vaastu Services', icon: 'compass' },
  ];

  const Civil = [
    { id: '1', name: 'Construction Advisory', icon: 'wrench', screen:'ConstructionAdvisory' },
  ];

  const Speciality = [
    { id: '1', name: 'Anti Termite Treatment', icon: 'bug',screen:'AntiTermite' },
    { id: '2', name: 'Financial Service', icon: 'money' },
    { id: '3', name: 'Rainwater Harvesting', icon: 'tint',screen:'RainwaterHarvesting' },
    { id: '4', name: 'Solar Service', icon: 'sun-o' ,screen:'SolarService'},
  ];

  const renderGrid = (items) => {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 8 }}>
        {items.map((item) => (
          <TouchableOpacity key={item.name} style={styles.gridItem} onPress={() => navigation.navigate(item.screen)}>
            <View style={styles.boxContainer}>
              <View style={styles.circle}>
                <Icon name={item.icon} size={35} color="#000000" style={styles.icon} />
              </View>
            </View>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.textSolution}>Solutions</Text>
          <Text style={styles.textDesign}>Design & Planning</Text>
        </View>
        {renderGrid(Design)}
        <View style={styles.horizontalLine} />
        <View>
          <Text style={styles.civil}>Civil Construction</Text>
        </View>
        {renderGrid(Civil)}
        <View style={styles.horizontalLine} />
        <View>
          <Text style={[styles.civil, styles.speciality]}>Speciality Home Building Services</Text>
        </View>
        {renderGrid(Speciality)}
      </View>
    </ScrollView>
  );
};

const Stack = createStackNavigator();

const App = () => (
  <Stack.Navigator>
    <Stack.Screen name="Solutions" component={SolutionsScreen} options={{headerShown:false}} />
    <Stack.Screen name="ConceptDesignPackage" component={ConceptDesignPackageScreen} options={{
      headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
      headerTintColor: 'white', // Change header text color
    }} />
    <Stack.Screen name="AdvancedConceptDesign" component={DesignPackage} options={{ // Add route for AdvancedConceptDesignPackageScreen
      headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
      headerTintColor: 'white', // Change header text color
      title: 'Advanced Concept Design' // Set title for the screen
    }} />
    <Stack.Screen name="VisualizationPackage" component={VisualizationPackage} options={{ // Add route for AdvancedConceptDesignPackageScreen
      headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
      headerTintColor: 'white', // Change header text color
      title: 'Visualization Package' // Set title for the screen
    }} />
   <Stack.Screen
      name="Layout"
      component={Layout}
      options={{
        headerShown: false, // Set headerShown to false for Layout screen
      }}
    />
    <Stack.Screen
      name="Elevation"
      component={Elevation}
      options={{
        headerShown: false, // Set headerShown to false for Layout screen
      }}
    />

<Stack.Screen
      name="VirtualReality"
      component={VirtualReality}
      options={{
        headerShown: false, // Set headerShown to false for Layout screen
      }}
    />
     <Stack.Screen name="AntiTermite" component={AntiTermite} options={{ // Add route for AdvancedConceptDesignPackageScreen
      headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
      headerTintColor: 'white', // Change header text color
      title: 'Anti Termite Treatment' // Set title for the screen
    }} 
    />
     <Stack.Screen name="RainwaterHarvesting" component={RainwaterHarvesting} options={{ // Add route for AdvancedConceptDesignPackageScreen
      headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
      headerTintColor: 'white', // Change header text color
      title: 'Rainwater Harvesting' // Set title for the screen
    }} 
    />
    <Stack.Screen name="SolarService" component={SolarService} options={{ // Add route for AdvancedConceptDesignPackageScreen
      headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
      headerTintColor: 'white', // Change header text color
      title: 'Solar Service' // Set title for the screen
    }} 
    />
    <Stack.Screen name="ConstructionAdvisory" component={ConstructionAdvisory} options={{ // Add route for AdvancedConceptDesignPackageScreen
      headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
      headerTintColor: 'white', // Change header text color
      title: 'Construction Advisory' // Set title for the screen
    }} 
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {},
  textSolution: {
    fontSize: 27,
    borderWidth: 0,
    height: 100,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 41,
    backgroundColor: '#9D76C1',
    color: 'white',
  },
  textDesign: {
    fontSize: 27,
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  gridItem: {
    width: '33%',
    alignItems: 'center',
    marginBottom: 10,
  },
  boxContainer: {
    marginTop:20,
    width: 101,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 7,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    marginRight:1.8,
    borderColor: '#E5CFF7',
    backgroundColor:'#FFEAD2',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#5B0888',
  },
  itemText: {
    fontSize: 16,
    backgroundColor: 'white',
    color: 'black',
    padding: 5,
    width:101,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 7,
    borderTopLeftRadius:0,
    borderTopRightRadius:0,
    height:80,
    marginRight:1.8,
  },
  civil: {
    marginTop: 1,
    fontSize: 27,
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  speciality: {
    textAlign: 'center',
    paddingRight: 7,
  },
  horizontalLine: {
    height: 12,
    backgroundColor: '#EDDBC7',
    marginHorizontal: 7,
    marginVertical: 17,
  },
});

export default App;
