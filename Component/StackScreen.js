import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import ImagePage from './ImagePage';
import LoaderPage from './LoaderPage';
import LoginScreen from './LoginScreen';
import OTPScreen from './OTPScreen';
import ImageSlider from './ImageSlider';
import RegisterPage from './RegisterPage';
import AllScreen from './AllScreen';
import PlansScreen from './Plans';
import StylesScreen from './Styles';
import VideosScreen from './Videos';
import ArticlesScreen from './Articles';

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
          name="PlansScreen"
          component={PlansScreen} // Use ImageSlider component
          options={{
            headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
            headerTintColor: 'white', // Change header text color
          }}
        />
        <Stack.Screen
          name="StylesScreen"
          component={StylesScreen} // Use ImageSlider component
          options={{
            headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
            headerTintColor: 'white', // Change header text color
          }}
        />
         <Stack.Screen
          name="VideosScreen"
          component={VideosScreen} // Use ImageSlider component
          options={{
            headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
            headerTintColor: 'white', // Change header text color
          }}
        />
       <Stack.Screen
          name="ArticlesScreen"
          component={ArticlesScreen} // Use ImageSlider component
          options={{
            headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
            headerTintColor: 'white', // Change header text color
          }}
        />
        <Stack.Screen
          name="MaterialsScreen"
          component={ArticlesScreen} // Use ImageSlider component
          options={{
            headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
            headerTintColor: 'white', // Change header text color
          }}
          />

    

      </Stack.Navigator>
    
  );
};

export default StackScreen;