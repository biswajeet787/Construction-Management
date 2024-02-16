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
import IssueHistoryScreen from './Issue';
import SearchScreen from './SearchScreen';
import MaterialSearch from './HomeScreenInnerPage/MaterialSearch';
import ExpertSearch from './HomeScreenInnerPage/ExpertSearch';
import HomeScreen from './HomeScreen';
import EventsCard from './HomeScreenInnerPage/EventsCard';
import SolarSavingsCalculator from './HomeScreenInnerPage/SolarSavingsCalculator';
import { Permissions } from './HomeScreenInnerPage/Permissions';
import VaastuScore from './HomeScreenInnerPage/VaastuScore';
import DBLHomeStudio from './HomeScreenInnerPage/DBLHomeStudio';
import StyleQuiz from './HomeScreenInnerPage/StyleQuiz';
import Budgeting from './HomeScreenInnerPage/Budgeting';
import ServicesExperts from './HomeScreenInnerPage/ServicesExperts';
import StylesCard from './HomeScreenInnerPage/StylesCard';
import { EMI_Calculator } from './HomeScreenInnerPage/EMI_Calculator';


// solutionscreensInnerPage import
import ConceptDesignPackageScreen from './ConceptDesign';
import DesignPackage from './AdvanceDesignPackage'; // Import AdvancedConceptDesignPackageScreen
import VisualizationPackage from './VisualizationPackage';
import Layout from './Layout';
import Elevation from './Elevation';
import VirtualReality from './VirtualReality';
import AntiTermite from './AntiTermite';
import RainwaterHarvesting from './RainwaterHarvesting';
import SolarService from './SolarService';
import ConstructionAdvisory from './ConstructionAdvisory';
import DesignIdeas from './DesignIdeas';
import FinanceService from './FinanceService';
import VaastuService from './VaastuService';
import SolutionsScreen from './SolutionsScreen';

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
      <Stack.Screen
        name="ReferHomeBuiders"
        component={ReferHome}
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="ReferPartners"
        component={ReferPartner}
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="ReportProblemScreen"
        component={ReportProblem}
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="FAQsScreen"
        component={FAQsScreen}
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="IssueHistoryScreen"
        component={IssueHistoryScreen}
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          headerTintColor: 'white',
        }}
      />
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
        options={{headerShown: false}}
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
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen} // Use SearchScreen component
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PlansScreen"
        component={PlansScreen} // Use ImageSlider component
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, // Change header background color
          headerTintColor: 'white', // Change header text color
        }}
      />
      <Stack.Screen
        name="StylesScreen"
        component={StylesScreen} // Use ImageSlider component
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, // Change header background color
          headerTintColor: 'white', // Change header text color
        }}
      />
      <Stack.Screen
        name="VideosScreen"
        component={VideosScreen} // Use ImageSlider component
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, // Change header background color
          headerTintColor: 'white', // Change header text color
        }}
      />
      <Stack.Screen
        name="ArticlesScreen"
        component={ArticlesScreen} // Use ImageSlider component
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, // Change header background color
          headerTintColor: 'white', // Change header text color
        }}
      />
      <Stack.Screen
        name="MaterialsScreen"
        component={ArticlesScreen} // Use ImageSlider component
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, // Change header background color
          headerTintColor: 'white', // Change header text color
        }}
      />
      <Stack.Screen
        name="ExpertsScreen"
        component={Experts} // Use ImageSlider component
        options={{
          headerStyle: {
            backgroundColor: '#713ABE',
            height: 100,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }, // Change header background color
          headerTintColor: 'white', // Change header text color
        }}
      />
      <Stack.Screen
        name="DBLHomeStudio"
        component={DBLHomeStudio} // Use DBLHomeStudio component
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="EventsCard"
        component={EventsCard} // Use EventsCard component
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SolarSavingsCalculator"
        component={SolarSavingsCalculator} // Use EventsCard component
      />
      <Stack.Screen
        name="Expensetrack"
        component={Expensetrack} // Use Expensetrack component
      />
      <Stack.Screen
        name="Permissions"
        component={Permissions} // Use Permissions component
      />
      <Stack.Screen
        name="VaastuScore"
        component={VaastuScore} // Use VaastuScore component
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StyleQuiz"
        component={StyleQuiz} // Use StyleQuiz component
      />
      <Stack.Screen
        name="Budgeting"
        component={Budgeting} // Use Budgeting component
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ServicesExperts"
        component={ServicesExperts} // Use Budgeting component
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StylesCard"
        component={StylesCard} // Use Budgeting component
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EMI_Calculator"
        component={EMI_Calculator} // Use Budgeting component
        options={{headerShown: true}}
      />
    
          {/* Solution screen */}

          <Stack.Screen name="Solutions" component={SolutionsScreen} options={{headerShown:false}} />
    <Stack.Screen name="ConceptDesignPackage" component={ConceptDesignPackageScreen} options={{
      headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
      headerTintColor: 'white', // Change header text color
    }} />
    <Stack.Screen name="AdvancedConceptDesign" component={DesignPackage} options={{ // Add route for AdvancedConceptDesignPackageScreen
      headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
      headerTintColor: 'white', // Change header text color
      title: 'Advanced Concept Design' // Set title for the screen
    }} />
    <Stack.Screen name="VisualizationPackage" component={VisualizationPackage} options={{ // Add route for AdvancedConceptDesignPackageScreen
      headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
      headerTintColor: 'white', // Change header text color
      title: 'Visualization Package' // Set title for the screen
    }} />
   <Stack.Screen
      name="Layout"
      component={Layout}
      options={{
        headerShown: false, // Set headerShown to false for Layout screen
      }}
    />
    <Stack.Screen
      name="Elevation"
      component={Elevation}
      options={{
        headerShown: false, // Set headerShown to false for Layout screen
      }}
    />

<Stack.Screen
      name="VirtualReality"
      component={VirtualReality}
      options={{
        headerShown: false, // Set headerShown to false for Layout screen
      }}
    />
     <Stack.Screen name="AntiTermite" component={AntiTermite} options={{ // Add route for AdvancedConceptDesignPackageScreen
      headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
      headerTintColor: 'white', // Change header text color
      title: 'Anti Termite Treatment' // Set title for the screen
    }} 
    />
     <Stack.Screen name="RainwaterHarvesting" component={RainwaterHarvesting} options={{ // Add route for AdvancedConceptDesignPackageScreen
      headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
      headerTintColor: 'white', // Change header text color
      title: 'Rainwater Harvesting' // Set title for the screen
    }} 
    />
    <Stack.Screen name="SolarService" component={SolarService} options={{ // Add route for AdvancedConceptDesignPackageScreen
      headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
      headerTintColor: 'white', // Change header text color
      title: 'Solar Service' // Set title for the screen
    }} 
    />
    <Stack.Screen name="ConstructionAdvisory" component={ConstructionAdvisory} options={{ // Add route for AdvancedConceptDesignPackageScreen
      headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
      headerTintColor: 'white', // Change header text color
      title: 'Construction Advisory' // Set title for the screen
    }} 
    />
    <Stack.Screen name="DesignIdeas" component={DesignIdeas} options={{ // Add route for AdvancedConceptDesignPackageScreen
      headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
      headerTintColor: 'white', // Change header text color
      title: 'Design Gallery' // Set title for the screen
    }} 
    />
    <Stack.Screen name="FinanceService" component={FinanceService} options={{ // Add route for AdvancedConceptDesignPackageScreen
      headerStyle: { backgroundColor: '#713ABE', height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15  }, // Change header background color
      headerTintColor: 'white', // Change header text color
      title: 'Finance' // Set title for the screen
    }} 
    />
    <Stack.Screen name="VaastuService" component={VaastuService} options={{
        headerShown: false, // Set headerShown to false for Layout screen
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
