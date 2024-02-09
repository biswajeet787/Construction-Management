import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MenuScreen = () => {
  const navigation = useNavigation();

  const [showDetails, setShowDetails] = useState(false);
  const [showSubItems, setShowSubItems] = useState(false); // Make sure these states are declared
  const [subItemsVisible, setSubItemsVisible] = useState(false);

  const menuItems = [
    {name: 'My Details',
      icon: 'user',
      subItems: [{ name: 'Personal Details', screen: 'PersonalDetails' }],
    },
    { name: 'My Sites', icon: 'globe' },
    { name: 'Rewards & referrals', icon: 'gift' },
    { name: 'Support', icon: 'headphones' },
    { name: 'Settings', icon: 'cogs' },
    { name: 'About', icon: 'info-circle' },
    { name: 'Rate us on the play store', icon: 'star' },
    { name: 'Log out', icon: 'sign-out' },
  ];
  
  const handleItemClick = (item) => {
    if (item.subItems) {
      setShowDetails(!showDetails);
      setShowSubItems(!showSubItems);
    } else if (item.screen) {
      navigation.navigate(item.screen);
    } else if (item.name === 'My Details') {
      setShowSubItems(!showSubItems);
      setSubItemsVisible(!subItemsVisible);
    } else if (item.name === 'My Sites') {
      navigation.navigate('MySites'); // Navigate to My Sites screen
    }
      else if (item.name === 'Rewards & referrals') {
        navigation.navigate('Rewards'); 
        
    } else if (item.name === 'Support') {
      navigation.navigate('Support');
    }
      else if (item.name === 'Settings') {
        navigation.navigate('Settings'); 
      }
      else if (item.name === 'About') {
        navigation.navigate('About'); 
    } else {
    }
    
  };
  
  const renderRightArrow = () => {
    return <Icon name="angle-right" size={20} color="#000000" style={styles.arrowIcon} />;
  };
  
  
  
  {menuItems.map((item, index) => (
    <View key={index}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleItemClick(item)}>
        <View style={styles.iconContainer}>
          <Icon name={item.icon} size={20} color="#000000" style={styles.icon} />
        </View>
        <Text style={styles.menuItemText}>{item.name}</Text>
        {renderRightArrow()} {/* Always display the right arrow icon */}
      </TouchableOpacity>
  
      {item.subItems && showDetails && (
        <View style={styles.detailsDropdown}>
          {item.subItems.map((subItem, subIndex) => (
            <TouchableOpacity
              key={subIndex}
              style={styles.dropdownItem}
              onPress={() => navigation.navigate(subItem.screen)}>
              <Text style={styles.dropdownItemText}>{subItem.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  ))}

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.menu}>
        <Text style={styles.heading}></Text>
        <View style={styles.imageContainer}>
        <Image source={require('../image/business.jpg')} style={styles.profileImage} resizeMode="cover" />
      </View>
      <View>
        <Text style={styles.heading}>User</Text>
      <View style={styles.menuBox}>
          {menuItems.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => handleItemClick(item)}>
                <View style={styles.iconContainer}>
                  <Icon name={item.icon} size={20} color="#000000" style={styles.icon} />
                </View>
                <Text style={styles.menuItemText}>{item.name}</Text>
                {renderRightArrow()}
              </TouchableOpacity>

              {item.subItems && showDetails && (
                <View style={styles.detailsDropdown}>
                  {item.subItems.map((subItem, subIndex) => (
                    <TouchableOpacity
                      key={subIndex}
                      style={styles.dropdownItem}
                      onPress={() => navigation.navigate(subItem.screen)}>
                      <Text style={styles.dropdownItemText}>{subItem.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 detailsDropdown: {
    marginTop: 10,
    backgroundColor: '#E5CFF7',
    padding: 10,
    borderRadius: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
  },
  dropdownItemText: {
    color: '#000000',
    fontSize: 15,
  },
  scrollView: {
    flex: 1,
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  menu: {
    backgroundColor: '#AC87C5',
    padding: 25,
    flex: 1,
  },
  heading: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  profileImage: {
    // width: '80%',
    // width:150,
    height: 120,
    aspectRatio: 1,
    borderRadius: 55,
  },
  menuBox: {
    flex: 3,
    marginTop: 20,
    backgroundColor: '#E5CFF7',
    padding: 10,
    borderRadius: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
  menuItemText: {
    color: '#000000',
    fontSize: 15,
    flex: 1,
  },
});

export default MenuScreen;
