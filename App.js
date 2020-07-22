/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {useState, Component} from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar, Platform, TouchableOpacity, Picker, AppNavigator, StackNavigator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, Title, Body } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import  HomeScreen  from './HomeScreen.js';
import  CollegePickerScreen  from './CollegePickerScreen.js';
import  DegreePickerScreen  from './DegreePickerScreen.js';
import  DevicePickerScreen  from './DevicePickerScreen.js';
import DeviceRecommendations from './DeviceRecommendations.js'
import  PickerScreen  from './PickerScreen.js';
import  GPACalculatorScreen  from './GPACalculatorScreen.js';
import  ResourceScreen  from './ResourceScreen.js';
import  ProfileScreen  from './Profile.js';
import CollegeRecommendations from './CollegeRecommendations.js'
import DegreeRecommendations from './degreeResults.js'
import SignUp from './signUp.js'
import EngineeringPickerScreen from './engineering.js'
import EngineeringRecommendations from './engineeringResults.js'
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-ionicons'
////import Example from './dropdown';
const mainColors = ['tomato', '#0099cc'];
import SplashScreen from 'react-native-splash-screen';

// import { NavigationActions } from 'react-navigation';
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);




const PickersStack = createStackNavigator();

class PickerStack extends Component{
  render(){
    return(
      <PickersStack.Navigator >
        <PickersStack.Screen name= "Pickers" component={PickerScreen} options ={{headerStyle: styles.PickerStackHeader, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
        <PickersStack.Screen name= "CollegePicker" component={CollegePicker}  options ={{headerShown: false, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
        <PickersStack.Screen name= "GPACalculator" component={GPACalculatorScreen}  options ={{headerStyle: styles.PickerStackHeader, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
        <PickersStack.Screen name = "DegreePicker" component = {DegreePicker}  options ={{headerShown: false, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
        <PickersStack.Screen name = "DevicePicker" component = {DevicePicker}  options ={{headerShown: false, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
      </PickersStack.Navigator>
    );
  }
}

const CollegePickerStack = createStackNavigator();

class CollegePicker extends Component{
  render(){
    return(
      <CollegePickerStack.Navigator >
        <CollegePickerStack.Screen name= "CollegePicker" component={CollegePickerScreen} options ={{headerStyle: styles.PickerStackHeader, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
        <CollegePickerStack.Screen name= "CollegeRecommendations" component={CollegeRecommendations}  options ={{ headerStyle: styles.PickerStackHeader, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
      </CollegePickerStack.Navigator>
    );
  }
}

const DegreePickerStack = createStackNavigator();

class DegreePicker extends Component{
  render(){
    return(
      <DegreePickerStack.Navigator>
        <DegreePickerStack.Screen name = "DegreePicker" component = {DegreePickerScreen} options ={{headerStyle: styles.PickerStackHeader, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
        <DegreePickerStack.Screen name = "DegreeRecommendations" component = {DegreeRecommendations} options ={{headerStyle: styles.PickerStackHeader, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
        <DegreePickerStack.Screen name = "EngineeringPicker" component = {EngineeringPickerScreen} options ={{headerStyle: styles.PickerStackHeader, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
        <DegreePickerStack.Screen name = "EngineeringRecommendations" component = {EngineeringRecommendations} options ={{headerStyle: styles.PickerStackHeader, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
      </DegreePickerStack.Navigator>
    );
  }
}

const DevicePickerStack = createStackNavigator();

class DevicePicker extends Component{
  render(){
    return(
      <DevicePickerStack.Navigator>
        <DevicePickerStack.Screen name = "DevicePicker" component = {DevicePickerScreen} options ={{headerStyle: styles.PickerStackHeader, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
        <DevicePickerStack.Screen name = "DeviceRecommendations" component = {DeviceRecommendations} options ={{headerStyle: styles.PickerStackHeader, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
      </DevicePickerStack.Navigator>
    );
  }
}


const HomeStack = createStackNavigator();

class HomeStackScreen extends Component{
  render(){
    return(
        <HomeStack.Navigator>
          <HomeStack.Screen name = "CollegePlus" component = {HomeScreen}  options ={{headerStyle: styles.PickerStackHeader, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
          <HomeStack.Screen name = "CollegePicker" component = {CollegePicker}  options ={{headerShown: false, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
          <HomeStack.Screen name = "GPACalculator" component = {GPACalculatorScreen}  options ={{headerStyle: styles.PickerStackHeader, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
          <HomeStack.Screen name = "DegreePicker" component = {DegreePicker}  options ={{headerShown: false, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
        </HomeStack.Navigator>
    );
  }
}

const ProfileStack = createStackNavigator();

class ProfileStackScreen extends Component{
  render(){
    return(
        <ProfileStack.Navigator>
          <ProfileStack.Screen name = "Profile" component = {ProfileScreen}  options ={{headerStyle: styles.PickerStackHeader, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}} />
          <ProfileStack.Screen name = "SignUp" component = {SignUp} options ={{headerStyle: styles.PickerStackHeader, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}}/>
        </ProfileStack.Navigator>
      );
  }
}

const ResourceStack = createStackNavigator();

class ResourceStackScreen extends Component{
  render(){
    return(
        <ResourceStack.Navigator>
          <ResourceStack.Screen name = "Resources" component = {ResourceScreen}  options ={{headerStyle: styles.PickerStackHeader, headerTitleStyle : styles.headerText, headerTintColor: '#fff'}} />
        </ResourceStack.Navigator>
      );
  }
}

const Tab = createBottomTabNavigator();

 class App extends Component {
    componentDidMount() {
      SplashScreen.hide()
    }
   render(){
     
  return (
    <>
      <NavigationContainer style = {{backgroundColor: '#1A1A1A', minHeight: 100}}>
        <Tab.Navigator tabBarOptions={{
        activeTintColor: mainColors[Math.floor(Math.random() * 2)],
        textColor: '#fff',
        labelStyle : {
          fontFamily : "Montserrat-Medium",
          fontSize: 12
        },
        tabStyle : {
          backgroundColor : "#1a1a1a"
        },
        style : {
            backgroundColor : "#1A1A1A"
        }
      }}>
          <Tab.Screen name="Home" component={HomeStackScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" color={'#fff'} size={25} />
          ),
          tabBarOptions : {

          }
        }}/>
          <Tab.Screen name="Pickers" component={PickerStack}
              options={{
              tabBarLabel: 'Pickers',
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="appstore1" color={'#fff'} size={20} />
              ),
            }}
          />
          <Tab.Screen name="Resources" component={ResourceStackScreen}
              options={{
              tabBarLabel: 'Resources',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="book-open-outline" color={'#fff'} size={25}
                 />
              ),
            }}
          />
          <Tab.Screen name="Profile" component={ProfileStackScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={'#fff'} size={28} />
          ),
        }}/>

        </Tab.Navigator>
      </NavigationContainer>
      </>
      // </SafeAreaView>
    );
  }
};

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1A1A1A',
    marginTop: STATUSBAR_HEIGHT,
    // zIndex: 2;
  },
  container: {
   flex: 1,
 },
 statusBar: {
   height: STATUSBAR_HEIGHT,
   backgroundColor: "#1A1A1A"
 },
 appBar: {
   backgroundColor:'#ffff00',
   height: APPBAR_HEIGHT,
   zIndex: 5,
 },
 content: {
   flex: 1,
   backgroundColor: '#1A1A1A',
 },
 indexMainButton :{
   marginTop: 20,
   borderRadius: 15,
   backgroundColor: '#ff6347',
   minWidth: 375,
   minHeight: 70,
   alignItems: 'center',
   justifyContent: 'center'
 },
 container1: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",

  },
  pickerPage:{
    flex: 1,
  },
  dropDownView: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center'
  },
  pickerButton :{
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: '#ff6347',
    maxWidth: 175,
    minWidth: 175,
    minHeight: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  PickerStackHeader: {
    backgroundColor: '#1A1A1A',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerText:{
    fontFamily: 'Montserrat-SemiBold',
  }
//   scrollView: {
//     backgroundColor: 'red',
//   },
//   engine: {
//     // position: 'absolute',
//     // bottom: 0,
//     height: 10,
//     backgroundColor: 'blue',
//     flex: 1,
//     flexDirection: 'row',
//     alignSelf: 'stretch',
//     justifyContent: 'center',
//   },
//   body: {
//     backgroundColor: 'red',
//   },
//   titleFont: {
//       fontSize: 10,
//       flex: 1,
//       height: 10,
//   },
//
});

export default App;
