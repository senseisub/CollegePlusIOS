/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {useState, Component} from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar, Platform, TouchableOpacity, Picker, AppNavigator, StackNavigator, Image, Linking } from 'react-native';
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
import  CollegePickerScreen  from './CollegePickerScreen.js';
import  DegreePickerScreen  from './DegreePickerScreen.js';
import  DevicePickerScreen  from './DevicePickerScreen.js';
import  GPACalculatorScreen  from './GPACalculatorScreen.js';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-ionicons'
//import Example from './dropdown';
//import "./global";
import {Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get('window').width);
const mainColors = ['tomato', '#0099cc'];

class HomeScreen extends Component {
  _goToURL(temp) {
      temp = temp;
      Linking.canOpenURL(temp).then(supported => {
      if (supported) {
          Linking.openURL(temp);
      } else {
          console.log('Don\'t know how to open URI: ' + temp);
      }
      });
  }
  render(){
  return (
    <>
    
      <View style={styles.container}>
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#1A1A1A" translucent = {true}/>

      </View>
      <ScrollView style = {{ height: 1500}}>
      <View style={{backgroundColor : "#1A1A1A", height : 200, justifyContent : 'center'}}>
        <Text style = {{fontSize : screenWidth*.15, fontFamily : "Montserrat-Regular", textAlign : "center", color : "white"}}>College<Text style = {{color: "tomato"}}>Plus</Text></Text>
      </View>
      <View style = {{height: 50}}>
      </View>
      <View style = {{textAlign: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.indexMainButton1} onPress = {() => this.props.navigation.navigate('DegreePicker')}>
         <Text style = {{fontSize: 16, color: 'white', paddingHorizontal: 13, fontFamily : "Montserrat-Bold", textAlign : 'center'}}>I don't even know what major I want to pursue</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0145889'}}>
        <TouchableOpacity style={styles.indexMainButton2} onPress = {() => this.props.navigation.navigate('CollegePicker')}>
         <Text style = {{fontSize: 16, color: 'white', paddingHorizontal: 13, fontFamily : "Montserrat-Bold", textAlign : 'center'}}>I don't know what college is good for me</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0145889'}}>
        <TouchableOpacity style={styles.indexMainButton3} onPress = {() => this.props.navigation.navigate('GPACalculator')}>
         <Text style = {{fontSize: 16, color: 'white', paddingHorizontal: 13, fontFamily : "Montserrat-Bold", textAlign : 'center'}}>I don't even know my GPA bro, I need help</Text>
        </TouchableOpacity>
      </View>
      <View style = {{height : 60}}>

      </View>
      <View>
        <Text style = {{fontFamily : 'Quicksand', fontSize : 16, color : 'black', paddingBottom : 15, paddingTop : 15, textAlign : 'center'}} onPress = {() => this._goToURL("https://collegeplus.us")}>
          College<Text style = {{color : 'tomato'}}>Plus™</Text>
        </Text>
      </View>
      </ScrollView>
    </>
  );
}
}
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
 },
 appBar: {
   backgroundColor:'#ffff00',
   height: APPBAR_HEIGHT,
   zIndex: 5,
 },
 content: {
   flex: 1,
   backgroundColor: '#33373B',
 },
 indexMainButton1 :{
   marginTop: 20,
   borderRadius: 15,
   backgroundColor: mainColors[Math.floor(Math.random() * 2)],
   minWidth: screenWidth * .9,
   maxWidth : screenWidth * .9,
   minHeight: 70,
   alignItems: 'center',
   justifyContent: 'center'
 },
 indexMainButton2 :{
  marginTop: 20,
  borderRadius: 15,
  backgroundColor: mainColors[Math.floor(Math.random() * 2)],
  minWidth: screenWidth * .9,
  maxWidth : screenWidth * .9,
  minHeight: 70,
  alignItems: 'center',
  justifyContent: 'center'
},
indexMainButton3 :{
  marginTop: 20,
  borderRadius: 15,
  backgroundColor: mainColors[Math.floor(Math.random() * 2)],
  minWidth: screenWidth * .9,
  maxWidth : screenWidth * .9,
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
  pickerButton1 :{
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: mainColors[Math.floor(Math.random() * 2)],
    maxWidth: 175,
    minWidth: 175,
    minHeight: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pickerButton2 :{
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: mainColors[Math.floor(Math.random() * 2)],
    maxWidth: 175,
    minWidth: 175,
    minHeight: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pickerButton3 :{
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: mainColors[Math.floor(Math.random() * 2)],
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


export default HomeScreen;
