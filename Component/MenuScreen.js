import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MenuScreen = () => {
  const menuItems = [
    { name: 'My Details', icon: 'user' },
    { name: 'My Sites', icon: 'globe' },
    { name: 'My Teams', icon: 'users' },
    { name: 'Rewards & referrals', icon: 'gift' },
    { name: 'Support', icon: 'headphones' },
    { name: 'Settings', icon: 'cogs' },
    { name: 'About', icon: 'info-circle' },
    { name: 'Rate us on the play store', icon: 'star' },
    { name: 'Log out', icon: 'sign-out' },
  ];
 
  return (
    <View style={styles.menu}>
      <Text style={styles.heading1}>Menu</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../image/image1.jpg')} style={styles.profileImage} resizeMode="cover" />
      </View>
      <Text style={styles.heading2}>Anwesh Kumar</Text>

      <View style={styles.menuBox}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <Icon name={item.icon} size={20} color="#000000" style={styles.icon} />
            </View>
            <Text style={styles.menuItemText}>{item.name}</Text>
            <Icon name="angle-right" size={20} color="#000000" style={styles.arrowIcon} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#AC87C5',
    padding: 25,
    flex: 1,
  },
  heading1: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  heading2: {
    fontSize: 15,
    color: '#fff',
    // marginBottom: 1,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  
  menuBox: {
    marginTop: 20,
    backgroundColor: '#F5EEE6',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: '#D0C0E5',
    
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  menuItemText: {
    color: '#000000',
    fontSize: 15,
    flex: 1,
  },
}); 

export default MenuScreen;