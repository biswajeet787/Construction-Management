import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

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
import Expensetrack from './Expensetrack';
import Experts from './Experts';
import PersonalDetails from './PersonalDetails';
import MySitesScreen from './MySites';
import Rewards from './Rewards';
import Support from './Support';
import About from './About';
import Settings from './Settings';
import ReferHome from './ReferHome';
import ReferPartner from './ReferPartner';
import ReportProblem from './ReportProblem';
import FAQsScreen from './FAQs';
import IssueHistoryScreen from './IssueHistory';
import SearchScreen from './SearchScreen';
import MaterialSearch from './HomeScreenInnerPage/MaterialSearch';
import ExpertSearch from './HomeScreenInnerPage/ExpertSearch';
import HomeScreen from './HomeScreen';
import Alerts from './Alerts';
import Manage from './Manage';
import PrivacyPolicy from './Privacypolicy';
import Termofuse from './Termofuse';
import Cancellation from './Cancellation';
import TermofUse from './Termofuse';
import IssueHistory from './IssueHistory';
import FAQs from './FAQs';

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="ImagePage">
      <Stack.Screen
        name="ImagePage"
        component={ImagePage}
        options={{headerShown: false}} // Hides the header for ImagePage
      />
      <Stack.Screen
        name="LoaderPage"
        component={LoaderPage}
        options={{headerShown: false}} // Hides the header for LoaderPage
      />
      <Stack.Screen
        name="SignUpPage" // Correct the typo here from 'LoinScreen' to 'LoginScreen'
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen} // Add OTPScreen to the stack
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ImageSlider"
        component={ImageSlider} // Use ImageSlider component
        options={{headerShown: false}}
      />
      <Stack.Screen name="ReferHomeBuiders" component={ReferHome} 
      options={{
        headerStyle: { backgroundColor: '#713ABE', height: 100, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
        headerTintColor: 'white',
      }}/>
      <Stack.Screen name="ReferPartners" component={ReferPartner}
      options={{
        headerStyle: { backgroundColor: '#713ABE', height: 100, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
        headerTintColor: 'white',
      }}/>
    <Stack.Screen name="Report a Problem" component={ReportProblem}
    options={{
      headerStyle: { backgroundColor: '#713ABE', height: 100, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
      headerTintColor: 'white',
    }}/>
    <Stack.Screen name="FAQs" component={FAQs}
     options={{
      headerStyle: { backgroundColor: '#713ABE', height: 100, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
      headerTintColor: 'white',
    }}/>
     <Stack.Screen name="Issue History" component={IssueHistory}
    options={{
      headerStyle: { backgroundColor: '#713ABE', height: 100, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
      headerTintColor: 'white',
    }}/>
      <Stack.Screen
        name="RegisterPage"
        component={RegisterPage} // Use ImageSlider component
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="SearchScreen"
        component={SearchScreen} // Use SearchScreen component
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="MaterialSearch"
        component={MaterialSearch} // Use Material component
        options={{header: () => <CustomHeaderForMaterial />}}
      />
      <Stack.Screen
        name="ExpertSearch"
        component={ExpertSearch} // Use Material component
        options={{header: () => <CustomHeaderForMaterial />}}
      />
   
      
        <Stack.Screen
          name="AllScreen"
          component={AllScreen} // Use ImageSlider component
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalDetails"
          component={PersonalDetails} // Use ImageSlider component
          options={{
            headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
            headerTintColor: 'white', // Change header text color
          }}
          
        />
         <Stack.Screen
          name="MySites"
          component={MySitesScreen} // Use ImageSlider component 
        />
         <Stack.Screen
          name="Rewards"
          component={Rewards} // Use ImageSlider component 
          options={{
            headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
            headerTintColor: 'white', // Change header text color
          }}
        />
        <Stack.Screen
          name="Support"
          component={Support} // Use ImageSlider component 
          options={{
            headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
            headerTintColor: 'white', // Change header text color
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings} // Use ImageSlider component 
          options={{
            headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
            headerTintColor: 'white', // Change header text color
          }}
        />
        <Stack.Screen
          name="About"
          component={About} // Use ImageSlider component 
          options={{
            headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
            headerTintColor: 'white', // Change header text color
          }}
         
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen} // Use SearchScreen component
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
          <Stack.Screen
          name="ExpertsScreen"
          component={Experts} // Use ImageSlider component
          options={{
            headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
            headerTintColor: 'white', // Change header text color
            
          }}
          />
           <Stack.Screen
          name="Alerts"
          component={Alerts} 
          options={{
            headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
            headerTintColor: 'white', // Change header text color
            
          }}
          />
           <Stack.Screen
          name="Manage"
          component={Manage} 
          options={{
            headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
            headerTintColor: 'white', // Change header text color
            
          }}
          />
          <Stack.Screen
          name="Privacy Policy"
          component={PrivacyPolicy} 
          options={{
            headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
            headerTintColor: 'white', // Change header text color
            
          }}
          />
          <Stack.Screen
          name="Terms of Use"
          component={TermofUse} 
          options={{
            headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
            headerTintColor: 'white', // Change header text color
            
          }}
          />
          <Stack.Screen
          name="Cancellation & Refunds Policy"
          component={Cancellation} 
          options={{
            headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
            headerTintColor: 'white', // Change header text color
            
          }}
          />

    

      </Stack.Navigator>
  );
};

export default StackScreen;

const CustomHeaderForMaterial = () => {
  const navigation = useNavigation();
  return (
    // Your custom header component JSX goes here
    // You can use View, Text, Image, etc., and style it as needed
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#713ABE',
        height: 80,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <AntDesign
          name="arrowleft"
          size={27}
          color="#fff"
          style={{marginLeft: 10}}
        />
      </TouchableOpacity>
      <View style={{marginRight: 142}}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
          Materials
        </Text>
      </View>
    </View>
  );
};
