import React, {useRef, useEffect,useState} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeCardSlider = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to scroll to the next set of cards
  const scrollToNextCards = () => {
    let totalNumberOfCards=data.length;
    if (flatListRef.current) {
      const nextIndex = (currentIndex + 2) % totalNumberOfCards; // Assuming totalNumberOfCards is the total number of cards in your list
      flatListRef.current.scrollToIndex({ animated: true, index: nextIndex }); 
      setCurrentIndex(nextIndex);
    }
  };

  // Automatically scroll after a delay (e.g., 3 seconds)
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      scrollToNextCards();
    }, 5000); 
    return () => clearInterval(scrollInterval);
}, [currentIndex, scrollToNextCards]); // Add currentIndex to the dependency array to avoid potential issues

  const data = [
    {
      iconName: 'bank',
      id: 1,
      text: 'Budgeting',
      subText: 'Tool to manage homebuilding expenses better',
    },
    {
      iconName: 'calculator',
      id: 2,
      text: 'EMI Calculator',
      subText: 'Calculator EMI based on the loan period and interest rate',
    },
    {
      iconName: 'suitcase',
      id: 3,
      text: 'Expense Tracker',
      subText: 'Tool to track, record and monitor construction expenses',
    },
    {
      iconName: 'files-o',
      id: 4,
      text: 'Permissions',
      subText: 'Checklists of permissions required for homebuilding',
    },
    {
      iconName: 'slideshare',
      id: 5,
      text: 'Design Gallery',
      subText: 'Readymade 2D layouts to inspire home design',
    },
    {
      iconName: 'flash',
      id: 6,
      text: 'Style Quiz',
      subText: 'Quiz to identify your design preference for home exteriors',
    },
    {
      iconName: 'fort-awesome',
      id: 7,
      text: 'Styles',
      subText: 'Browse through style options for different house elements',
    },
    {
      iconName: 'compass',
      id: 8,
      text: 'Vaastu Compass',
      subText: 'Tool to check Vaastu compliance of the home',
    },
    {
      iconName: 'magic',
      id: 9,
      text: 'Vaastu Score',
      subText: 'Detailed report to check Vaastu compliance of the home',
    },
    {
      iconName: 'hdd-o',
      id: 10,
      text: 'Solar Savings Calculator',
      subText: 'Calculator to estimate solar potential and savings based',
    },
    {
      iconName: 'bell',
      id: 11,
      text: 'Events',
      subText:
        'Informational sessions by industry experts on homebuilding process',
    },
  ];
  return (
    <View>
      <View style={{width: '100%',height:200}}>
        <ImageBackground
          source={require('../image/image10.jpg')} resizeMode='cover' style={{flex:1,height:200,opacity:0.1}}>
        </ImageBackground>
        <View style={{margin:15,position:'absolute'}}>
        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Step into your dream home today!</Text>
        <Text style={{fontSize:15,color:'black',top:15}}>Experience Virtual Reality of {'\n'}your home at a <Text style={{fontSize:16,fontWeight:'bold',color:'black'}}>DBL Home Studio</Text> {'\n'}near you.</Text>
        
        </View>
        <TouchableOpacity style={{backgroundColor:'#5B0888',padding:10,borderRadius:10,width:100,margin:15}}>
          <Text style={{color:'#fff'}}>Know More</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.text}>Explore All Utilities</Text>
          <Text style={styles.subText}>Tools that might come handy</Text>
        </View>

        <FlatList
          ref={flatListRef}
          horizontal
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.cardContainer}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: '#fff',
                    borderRadius: 25,
                    alignSelf: 'center',
                    top: 20,
                  }}>
                  <Icon
                    name={item.iconName}
                    size={30}
                    color="#5B0888"
                    style={styles.icon}
                  />
                </View>
                <View>
                  <Text style={styles.cardText}>{item.text}</Text>
                  <Text style={styles.cardSubText}>{item.subText}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{width: '100%',height:200}}>
        <ImageBackground
          source={require('../image/image11.jpg')} resizeMode='cover' style={{flex:1,height:200,opacity:0.3}}>
        </ImageBackground>
        <View style={{margin:15,position:'absolute'}}>
        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Let us help you build {'\n'}an ideal home.Contact our {'\n'}<Text style={{color:'#5B0888'}}>Customer Care</Text> today.</Text>
        
        </View>
        <TouchableOpacity style={{backgroundColor:'#5B0888',padding:10,borderRadius:10,width:100,margin:15}}>
          <Text style={{color:'#fff'}}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 18,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
  },
  cardContainer: {
    width: 170,
    height: 200,
    backgroundColor: '#C499F3',
    marginRight: 2,
    margin: 18,
    borderRadius: 10,
  },
  icon: {
    alignSelf: 'center',
    top: 8,
  },
  cardText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    top: 30,
  },
  cardSubText: {
    textAlign: 'center',
    top: 35,
    padding: 10,
  },
});
export default HomeCardSlider;
