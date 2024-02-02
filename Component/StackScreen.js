import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import ImagePage from './ImagePage';
import LoaderPage from './LoaderPage';
import LoginScreen from './LoginScreen';
import OTPScreen from './OTPScreen';
import ImageSlider from './ImageSlider';
import RegisterPage from './RegisterPage';
import AllScreen from './AllScreen';
import PersonalDetails from './PersonalDetails';
import MySitesScreen from './MySites';
import Rewards from './Rewards';
import Support from './Support';
import About from './About';
import Settings from './Settings';

// const Stack = createStackNavigator();
const Stack=createNativeStackNavigator();



const StackScreen = () => {
  return (
    
      <Stack.Navigator initialRouteName="ImagePage">
        <Stack.Screen
          name="ImagePage"
          component={ImagePage}
          options={{ headerShown: false}} // Hides the header for ImagePage
        />
        <Stack.Screen
          name="LoaderPage"
          component={LoaderPage}
          options={{ headerShown: false }} // Hides the header for LoaderPage
        />
        <Stack.Screen
          name="SignUpPage" // Correct the typo here from 'LoinScreen' to 'LoginScreen'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen} // Add OTPScreen to the stack
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ImageSlider"
          component={ImageSlider} // Use ImageSlider component
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={RegisterPage} // Use ImageSlider component
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AllScreen"
          component={AllScreen} // Use ImageSlider component
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalDetails"
          component={PersonalDetails} // Use ImageSlider component
          
        />
         <Stack.Screen
          name="MySites"
          component={MySitesScreen} // Use ImageSlider component 
        />
         <Stack.Screen
          name="Rewards"
          component={Rewards} // Use ImageSlider component 
        />
        <Stack.Screen
          name="Support"
          component={Support} // Use ImageSlider component 
        />
        <Stack.Screen
          name="Settings"
          component={Settings} // Use ImageSlider component 
        />
        <Stack.Screen
          name="About"
          component={About} // Use ImageSlider component 
        />
      </Stack.Navigator>
    
  );
};

export default StackScreen;