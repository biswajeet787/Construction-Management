import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import {useNavigation} from '@react-navigation/native';

const data = [
  { id: '1', name: 'Concept Design', icon: 'home',screen:'ConceptDesignPackage' },
  { id: '2', name: 'Advanced concept Design', icon: 'rocket',screen:'AdvancedConceptDesign' },
  { id: '3', name: 'Visualization Packages', icon: 'picture-o',screen:'VisualizationPackage' },
  { id: '4', name: '2D Layout Services', icon: 'file-text-o',screen:'Layout' },
  { id: '5', name: '3D Elevation Services', icon: 'cubes',screen:'Elevation' },
  { id: '6', name: 'Vitual Reality Experience', icon: 'eye',screen:'VirtualReality' },
  { id: '7', name: 'Design Ideas', icon: 'lightbulb-o',screen:'DesignIdeas' },
  { id: '8', name: 'Vaastu Services', icon: 'compass',screen:'VaastuService' },
  { id: '9', name: 'Construction Advisory', icon: 'wrench',screen:'ConstructionAdvisory' },
  { id: '10', name: 'Anti Termite Treatment', icon: 'bug',screen:'AntiTermite' },
  { id: '11', name: 'Financial Service', icon: 'money',screen:'FinanceService' },
  { id: '12', name: 'Rainwater Harvesting', icon: 'tint',screen:'RainwaterHarvesting' },
  { id: '13', name: 'Solar Service', icon: 'sun-o',screen:'SolarService' },
  { id: '14', name: 'Concept Design', icon: 'home',screen:'ConceptDesignPackage' },
  { id: '15', name: 'Concept Design', icon: 'home',screen:'ConceptDesignPackage' },
];

const Grid = () => {
  const navigation = useNavigation();
  const renderItem = ({ item,index}) => (
    <View style={styles.item}>
      <View style={[styles.iconContainer,index<3?styles.blueBackground:null]}>
        <Icon name={item.icon} size={35} color="#5B0888" />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate(item.screen)}>
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.mainGridContainer}>
        <Text style={styles.text1}>Explore All Our Solution</Text>
        <Text style={styles.text2}>Based on your current home building stages!</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.gridContainer}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainGridContainer:{backgroundColor:'#fff',marginTop:30},
  gridContainer: {
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    height: 150,
    borderWidth: 1,
    borderBottomWidth: 4,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  blueBackground:{
    backgroundColor:'#DCF2F1'
  },
  iconContainer: {
    backgroundColor: '#FBF0B2', // Background color for the icon  D2E0FB
    height: '75%', // 50% of the height of the grid item
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 30,
    
  },
  itemText: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 30,
    height: '50%', // 50% of the height of the grid item
    paddingTop: 10,
  },
  text1: {
    fontSize: 22,
    color: '#000000',
    marginTop: 15,
    marginLeft: 16,
    fontWeight:'bold',
    marginBottom:2
  },
  text2: {
    fontSize: 12,
    marginLeft: 16,
    marginBottom: 10,
    color:'grey',
    fontWeight:'bold'
  },
});

export default Grid;