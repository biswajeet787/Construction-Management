import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

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
import ReferHome from './ReferHome';
import ReferPartner from './ReferPartner';
import ReportProblem from './ReportProblem';
import FAQsScreen from './FAQs';
import IssueHistoryScreen from './Issue';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="ImagePage">
      <Stack.Screen name="ImagePage" component={ImagePage} options={{ headerShown: false }} />
      <Stack.Screen name="LoaderPage" component={LoaderPage} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpPage" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ImageSlider" component={ImageSlider} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} options={{ headerShown: false }} />
      <Stack.Screen name="AllScreen" component={AllScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="PersonalDetails"
        component={PersonalDetails}
        options={{
          headerStyle: { backgroundColor: '#713ABE', height: 100, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen name="MySites" component={MySitesScreen} />
      <Stack.Screen
        name="Rewards"
        component={Rewards}
        options={{
          headerStyle: { backgroundColor: '#713ABE', height: 100, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Support"
        component={Support}
        options={{
          headerStyle: { backgroundColor: '#713ABE', height: 100, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: { backgroundColor: '#713ABE', height: 100, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerStyle: { backgroundColor: '#713ABE', height: 100, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
          headerTintColor: 'white',
        }}
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
    <Stack.Screen name="ReportProblemScreen" component={ReportProblem}
    options={{
      headerStyle: { backgroundColor: '#713ABE', height: 100, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
      headerTintColor: 'white',
    }}/>
     <Stack.Screen name="FAQsScreen" component={FAQsScreen}
    options={{
      headerStyle: { backgroundColor: '#713ABE', height: 100, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
      headerTintColor: 'white',
    }}/>
     <Stack.Screen name="IssueHistoryScreen" component={IssueHistoryScreen}
    options={{
      headerStyle: { backgroundColor: '#713ABE', height: 100, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
      headerTintColor: 'white',
    }}/>

    </Stack.Navigator>
  );
};

export default StackScreen;
