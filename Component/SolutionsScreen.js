import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SolutionsScreen = ({ navigation }) => {
  const Design = [
    { id: '1', name: 'Concept Design Package', icon: 'home', screen: 'ConceptDesignPackage' },
    { id: '2', name: 'Advanced concept Design', icon: 'rocket', screen: 'AdvancedConceptDesign' },
    { id: '3', name: 'Visualization Packages', icon: 'picture-o', screen:'VisualizationPackage'},
    { id: '4', name: '2D Layout Services', icon: 'file-text-o' , screen:'Layout'},
    { id: '5', name: '3D Elevation Services', icon: 'cubes', screen:'Elevation' },
    { id: '6', name: 'Virtual Reality Experience', icon: 'eye', screen:'VirtualReality'},
    { id: '7', name: 'Design Ideas', icon: 'lightbulb-o',screen:'DesignIdeas' },
    { id: '8', name: 'Vaastu Services', icon: 'compass',screen:'VaastuService' },
  ];

  const Civil = [
    { id: '1', name: 'Construction Advisory', icon: 'wrench', screen:'ConstructionAdvisory' },
  ];

  const Speciality = [
    { id: '1', name: 'Anti Termite Treatment', icon: 'bug',screen:'AntiTermite' },
    { id: '2', name: 'Financial Service', icon: 'money', screen:'FinanceService' },
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

export default SolutionsScreen;
