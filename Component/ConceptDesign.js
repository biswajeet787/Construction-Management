import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const packages = [
  {
    id: '1',
    name: ' Advance Concept  Design  Package',
    icon: 'rocket1',
    screen: 'AdvancedConceptDesign',
  },
  {
    id: '2',
    name: 'Visualization Package',
    icon: 'bulb1',
    screen: 'VisualizationPackage',
  },
];

const ConceptDesignPackageScreen = () => {
  const navigation = useNavigation();

  const images = [
    require('../image/image1.jpg'),
    require('../image/image2.jpg'),
    require('../image/image3.jpg'),
    require('../image/image4.jpg'),
  ];

  const [isIncludeDropdownOpen, setIsIncludeDropdownOpen] = useState(false);
  const [isAddOnDropdownOpen, setIsAddOnDropdownOpen] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);


  const toggleIncludeDropdown = () => {
    setIsIncludeDropdownOpen(!isIncludeDropdownOpen);
  };
  const toggleAddOnDropdown = () => {
    setIsAddOnDropdownOpen(!isAddOnDropdownOpen);
  };

  const renderCarouselItem = ({item}) => {
    return (
      <View style={styles.carouselItemContainer}>
        <Image
          source={item}
          style={styles.carouselItemImage}
          resizeMode="cover"
        />
      </View>
    );
  };
 

  

  // Use useFocusEffect to hide bottom tab bar on screen focus
  useFocusEffect(
    React.useCallback(() => {
      // Function to hide the tab bar when screen is focused
      const hideTabBar = () => {
        navigation.setOptions({
          tabBarVisible: false,
        });
      };

      // Call the function to hide the tab bar
      hideTabBar();

      // Return a cleanup function to show the tab bar when leaving the screen
      return () => {
        navigation.setOptions({
          tabBarVisible: true,
        });
      };
    }, [navigation]), // Include navigation in the dependencies array
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Carousel
          data={images}
          renderItem={renderCarouselItem}
          sliderWidth={400}
          itemWidth={400}
          loop
          autoplay
        />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Concept Design Package</Text>
          <Text style={styles.paragraph}>
            Get a conceptual 2D layout and 3D Elevations to visualize the
            interior design of your home as per your requirements and budget.
            This package will help you to efficiently plan your home as per
            specifications provided by you, for your 2D layout. Thereafter with
            a 3D Design, you will also be able to view to exterior design of
            your home with more aesthetics.
          </Text>
          <Text style={styles.Delivery}>Delivery Time</Text>
          <Text style={styles.paragraph2}>
            2D will be delivered in 3 working Days after your requirements are
            submitted and verified.3D will be delivered in 3 working days after
            the 2D layout is finalized and all your 3d requirements are
            submitted and verified.
          </Text>

          <Text style={styles.additionalText1}>Starting</Text>
          <Text style={styles.additionalText2}>₹3728/-</Text>
          <View style={styles.startingContainer}>
            <View style={styles.horizontalLine} />
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <View style={styles.dropdownSection}>
              <Text style={styles.sectionTitle}>WHAT IS INCLUDE</Text>
              <TouchableOpacity onPress={toggleIncludeDropdown}>
                <Icon
                  name={isIncludeDropdownOpen ? 'up' : 'down'}
                  size={20}
                  color="#5B0888"
                />
              </TouchableOpacity>
            </View>
            {isIncludeDropdownOpen && (
              <View style={styles.cardsContainer}>
                {/* First card */}
                <View style={styles.cardContainer}>
                  <TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.iconContainer}>
                      <FontAwesome name="building" size={50} color="#5B0888" />
                    </View>
                    <View
                      style={{marginLeft: 10, justifyContent: 'flex-start'}}>
                      <Text style={styles.cardText}>2D Layout</Text>
                      <Text style={styles.additionalText}>
                        Get a conceptual 2D Layout of {'\n'} your new home as
                        per your{'\n'} requirements.
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {/* Second card */}
                <View style={styles.cardContainer}>
                  <TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.iconContainer}>
                      <FontAwesome5 name="building" size={50} color="#5B0888" />
                    </View>
                    <View
                      style={{marginLeft: 10, justifyContent: 'flex-start'}}>
                      <Text style={styles.cardText}>3D Elevation</Text>
                      <Text style={styles.additionalText}>
                        Get conceptual 3D Elevations {'\n'} to visualize the
                        exterior design {'\n'} of your home as per your {'\n'}{' '}
                        requirements and budget
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <View style={styles.dropdownSection}>
              <Text style={styles.sectionTitle}>ADD-ONS</Text>
              <TouchableOpacity onPress={toggleAddOnDropdown}>
                <Icon
                  name={isAddOnDropdownOpen ? 'up' : 'down'}
                  size={20}
                  color="#5B0888"
                />
              </TouchableOpacity>
            </View>
            {isAddOnDropdownOpen && (
              <View style={styles.addOnDropdownContent}>
                {/* Add-on dropdown content goes here */}
                <View style={styles.boxContainer1}>
                  <View style={styles.box1}>
                    <Text style={styles.boxText}>2D Layout</Text>
                  </View>
                  <View style={styles.boxContainer1}>
                    <View
                      style={[
                        styles.box1,
                        {width: '58%', marginLeft: 5, marginRight: 5},
                      ]}>
                      <Text style={styles.boxText}>3D Elevation</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <View style={styles.dropdownSection}>
              <Text style={styles.sectionTitle}>HOW TO GET THIS SERVICE ?</Text>
              <TouchableOpacity
                onPress={() => console.log('How to get this service clicked')}>
                <Icon name="down" size={20} color="#5B0888" />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.horizontalLine} />
            <View style={styles.dropdownSection}>
              <Text style={styles.sectionTitle}>ADVANTAGES</Text>
              <TouchableOpacity
                onPress={() => console.log('Advantages clicked')}>
                <Icon name="down" size={20} color="#5B0888" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.horizontalLine} />
          <View style={{marginTop: 5, marginLeft: 8}}>
            <Text>{'\n'}FREQUENTLY ASKED QUESTIONS</Text>
          </View>

          <View>
            <View style={styles.dropdownSection}>
              <Text style={styles.Title}>What is a Concept design package</Text>
              <TouchableOpacity onPress={() => console.log('clicked')}>
                <Icon name="down" size={20} color="#5B0888" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.horizontalLine} />
          <View style={styles.dropdownSection}>
            <Text style={[styles.Title1, styles.textWithGap]}>
              How do I avail a Concept design {'\n'} package ?
            </Text>
            <TouchableOpacity onPress={() => console.log('clicked')}>
              <Icon name="down" size={20} color="#5B0888" />
            </TouchableOpacity>
          </View>

          <View style={styles.horizontalLine} />
          <View style={styles.dropdownSection}>
            <Text style={[styles.Title2, styles.textWithGap]}>
              What is the process after raising {'\n'}a request?
            </Text>
            <TouchableOpacity onPress={() => console.log('clicked')}>
              <Icon name="down" size={20} color="#5B0888" />
            </TouchableOpacity>
          </View>

          <View style={styles.horizontalLine} />
          <View style={styles.dropdownSection}>
            <Text style={[styles.Title3, styles.textWithGap]}>
              What will be delivered as part of concept design package?
            </Text>
            <TouchableOpacity onPress={() => console.log('clicked')}>
              <Icon name="down" size={20} color="#5B0888" />
            </TouchableOpacity>
          </View>

          <View style={styles.horizontalLine} />
          <View style={styles.dropdownSection}>
            <Text style={[styles.Title4, styles.textWithGap]}>
              {' '}
              Will it be possible to make changes {'\n'} in the designs?
            </Text>
            <TouchableOpacity onPress={() => console.log('clicked')}>
              <Icon name="down" size={20} color="#5B0888" />
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.dropdownSection}>
            <Text style={[styles.Title5, styles.textWithGap]}>
              {' '}
              What is the cost of availing a Concept {'\n'} design package?
            </Text>
            <TouchableOpacity onPress={() => console.log('clicked')}>
              <Icon name="down" size={20} color="#5B0888" />
            </TouchableOpacity>
          </View>

          <View style={styles.Disclaimer}>
            <Text style={styles.heading2}>*Disclaimer.</Text>
            <Text style={styles.paragraph3}>
              {' '}
              DBL is a digital platform that connects individual users with
              qualified architects and engineers. DBL provides concept designs
              by engaging such qualified professionals. DBL does not provide any
              structural consultancy services, and home builders' structural
              consultancy services. Users are advised to seek a professional
              opinion from any independent practitioner for further construction
              needs.
            </Text>
          </View>

          <View style={{marginTop: 15, marginBottom: 10, marginLeft: 1}}>
            <Text style={{fontSize: 18, color: 'black', marginBottom: 10}}>
              RECOMMENDED PACKAGES FOR YOU
            </Text>
          </View>

          <View style={{flexDirection: 'row', paddingHorizontal: 5}}>
            {/* Render the first box */}
            <TouchableOpacity
              style={[
                styles.box,
                {
                  flex: 0.4, // Adjust flex to make it smaller
                  marginRight: 25, // Add marginRight to create a gap
                  backgroundColor: '#9D76C1',
                },
              ]}
              onPress={() => navigation.navigate(packages[0].screen)}>
              <View style={styles.boxContent}>
                <View style={[styles.iconContainer, {width: 60, height: 60}]}>
                  <Icon name={packages[0].icon} size={40} color="#5B0888" />
                </View>
                <Text style={styles.packageName}>{packages[0].name}</Text>
              </View>
            </TouchableOpacity>

            {/* Render the second box */}
            <TouchableOpacity
              style={[
                styles.box,
                {
                  flex: 0.4, // Adjust flex to make it smaller
                  backgroundColor: '#9D76C1',
                },
              ]}
              onPress={() => navigation.navigate(packages[1].screen)}>
              <View style={styles.boxContent}>
                <View style={[styles.iconContainer, {width: 60, height: 60}]}>
                  <Icon name={packages[1].icon} size={40} color="#5B0888" />
                </View>
                <Text style={styles.packageName}>{packages[1].name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItemContainer: {
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItemImage: {
    width: '100%',
    height: 305,
    marginTop: -10,
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 3,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
    paddingLeft: 3,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'left',
    color: 'black',
    marginBottom: 8,
    paddingLeft: 3,
  },
  Delivery: {
    fontSize: 20,
    marginTop: 8,
    marginBottom: 5,
    paddingLeft: 3,
  },
  paragraph2: {
    fontSize: 16,
    textAlign: 'left',
    color: 'black',
    marginBottom: 5,
    paddingLeft: 3,
  },
  additionalText1: {
    fontSize: 16,
    marginTop: 1,
    paddingLeft: 3,
  },
  additionalText2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    paddingLeft: 3,
  },
  startingContainer: {
    alignItems: 'center',
    marginTop: -1,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingLeft: 3,
  },
  dropdownSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingLeft: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    paddingLeft: 3,
  },
  Title: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 8,
    color: 'black',
    paddingLeft: 3,
  },
  Title1: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 1,
    color: 'black',
    paddingLeft: 3,
  },
  Title2: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 1,
    color: 'black',
    paddingLeft: 3,
  },
  Title3: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 3,
    color: 'black',
    paddingLeft: 3,
  },
  Title4: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 3,
    color: 'black',
    paddingLeft: -1,
  },
  Title5: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 3,
    color: 'black',
    paddingLeft: -1,
  },
  Disclaimer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingLeft: -1,
  },
  heading2: {
    fontWeight: 'bold',
    marginBottom: 1,
    color: 'black',
    paddingLeft: 3,
  },
  paragraph3: {
    marginTop: 5,
    lineHeight: 15,
    fontStyle: 'italic',
    paddingLeft: 3,
  },
  box: {
    width: 160, // Adjust width of the container
    height: 170, // Adjust height of the container
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9D76C1',
    paddingHorizontal: 10, // Adjust padding to fit the content
    paddingVertical: 10, // Adjust padding to fit the content
    borderRadius: 10, // Adjust borderRadius to make it round
    marginBottom: 8,
  },
  boxContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  packageName: {
    fontSize: 14, // Adjust font size to fit the content
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 5, // Adjust spacing between icon and text
  },

  bottomButton: {
    backgroundColor: '#713ABE',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20, // Adjust margin bottom to give space between button and content
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  cardsContainer: {
    marginTop: 10, // Add marginTop for separation from other sections
  },
  cardContainer: {
    backgroundColor: 'white',
    height: 130,
    width: '100%',
    borderRadius: 15,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 8,
    borderColor: 'grey', // Add border color to the card container
    borderWidth: 1, // Add border width for the card container
  },
  iconContainer: {
    height: 100,
    width: 100,
    backgroundColor: '#FFEAD2',
    borderRadius: 50, // Make it a perfect circle
    alignItems: 'center', // Center the icon horizontally
    justifyContent: 'center', // Center the icon vertically
    marginLeft: 5,
    borderColor: '#fff',
    borderColor: '#9D76C1', // Add border color to the icon container
    borderWidth: 1, // Add border width for the icon container
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
  additionalText: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
    marginLeft: 5,
  },

  boxContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8, // Add margin bottom for separation between boxes
  },
  box1: {
    //flex:1,
    width: '35%', // Adjust width of the box
    height: 45, // Adjust height of the box
    backgroundColor: '#F3F4F6', // Adjust background color of the box
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, // Adjust border radius of the box to make it half of the height
    borderWidth: 2, // Add border width for the box
    borderColor: '#9D76C1', // Add border color for the box for the box
    marginLeft: 5,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Adjust text color of the box
  },
});

export default ConceptDesignPackageScreen;
