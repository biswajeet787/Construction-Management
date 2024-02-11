import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the specific icon you downloaded


const About = () => {
  const menuItems = [
    { text: 'Privacy Policy', icon: 'shield' },
    { text: 'Term of Use', icon: 'pencil-square-o' },
    { text: 'App Version', icon: 'android' },
    { text: 'Cancellation & Refunds Policy', icon: 'times-circle-o' },
  ];

  return (
    <View style={styles.menu}>
      <View>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <Icon name={item.icon} size={24} color="#9336B4" />
              <Text style={styles.menuItemText}>{item.text}</Text>
              <Icon name="angle-right" size={20} color="#9336B4" style={styles.arrowIcon} />
            </View>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'white',
    padding: 20,
    paddingBottom: 650,
  },
  menuItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f9f2fa',
    borderRadius: 10,
    marginVertical: 5,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    color: '#000000',
    fontSize: 15,
    marginLeft: 15,
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
});

export default About;