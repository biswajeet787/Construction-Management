import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the specific icon you downloaded
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'; // Import auth from @react-native-firebase/auth

const Settings= () => {
  const navigation = useNavigation();
  
  const menuItems = [
    { text: 'Manage', icon: 'lightbulb-o', screen: 'Manage'},
    { text: 'Alerts', icon: 'bell', screen: 'Alerts' },
    { text: 'Delete Account', icon: 'trash-o' },
  ];

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { 
          text: 'OK', 
          onPress: async () => {
            try {
              await auth().currentUser.delete(); // Delete the currently authenticated user
              console.log('User account deleted successfully');
              // Close the app
              BackHandler.exitApp();
            } catch (error) {
              console.error('Error deleting user account:', error);
            }
          }
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.menu}>
      <View>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={() => item.text === 'Delete Account' ? handleDeleteAccount() : navigation.navigate(item.screen)}>
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

export default Settings;
