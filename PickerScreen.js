/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {useState, Component} from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar, Platform, TouchableOpacity, Picker, AppNavigator, StackNavigator, Linking } from 'react-native';
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
import  GPACalculatorScreen  from './GPACalculatorScreen.js';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-ionicons'
//import Example from './dropdown';
const mainColors = ['tomato', '#0099cc'];
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';
import { InterstitialAd, RewardedAd, BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);
RewardedAd.createForAdRequest(TestIds.REWARDED);
admob()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.PG,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: true,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,
  })
  .then(() => {
    // Request config successfully set!
  });
class PickerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

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

    const { navigate } = this.props.navigation;
  return (
    <>
    
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#343434" translucent = {true}/>



      <ScrollView style ={{backgroundColor: '#1A1A1A', paddingTop : 10, paddingBottom: 60}} >
          <View style = {{justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{maxWidth: 350, alignItems: 'center', textAlign: 'center', lineHeight:26}}>
            <Text style = {{color: 'white', fontSize: 24, textAlign: 'center', maxWidth: 375, fontFamily: 'Montserrat-Medium', lineHeight : 26}}>
            From College Finding to GPA Calculating{'\n'}</Text>
          </Text>
        </View>
        <View style = {{flex: 1, flexDirection: 'row', marginLeft: 0, justifyContent: 'space-evenly', maxHeight: 175}}>
          <View style = {{textAlign: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.pickerButton1} onPress={() => navigate("CollegePicker")}>

             <Text style = {{fontSize: 16, color: 'white', paddingHorizontal: 13, textAlign: 'center', fontFamily : 'Montserrat-SemiBold'}}>CollegePicker {"\n\n"} <MaterialIcons
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "right",
                  color: "#fff"
                }}
                name = "account-balance"
                color = "#fff"
                size= {45}
              /></Text>
            </TouchableOpacity>
            {this.state.showComponent ?
           <CollegePickerScreen /> :
           null
        }
          </View>
          <View style={{textAlign: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.pickerButton2} onPress = {() => this.props.navigation.navigate('DegreePicker')}>
             <Text style = {{fontSize: 16, color: 'white', paddingHorizontal: 13, textAlign: 'center', fontFamily : 'Montserrat-SemiBold'}}>DegreePicker {"\n\n"} <FontAwesome
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "right",
                  color: "#fff"
                }}
                name = "scroll"
                color = "#fff"
                size= {40}
              /></Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style = {{textAlign: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.pickerButton3} onPress = {() => this.props.navigation.navigate('DevicePicker')}>
             <Text style = {{fontSize: 16, color: 'white', paddingHorizontal: 13, textAlign: 'center', fontFamily : 'Montserrat-SemiBold'}}>DevicePicker {"\n\n"} <Entypo
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "right",
                  color: "#fff"
                }}
                name = "laptop"
                color = "#fff"
                size= {45}
              /></Text>
            </TouchableOpacity>
          </View>
          <View style={{textAlign: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.pickerButton4} onPress = {() => this.props.navigation.navigate('GPACalculator')}>
             <Text style = {{fontSize: 16, color: 'white', paddingHorizontal: 13, textAlign: 'center', fontFamily : 'Montserrat-SemiBold'}}>GPACalculator {"\n\n"} <Ionicons
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "right",
                  color: "#fff"
                }}
                name = "ios-calculator"
                color = "#fff"
                size= {45}
              /></Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style = {{height : 60}}>

        </View>
        <View>
        <Text style = {{fontFamily : 'Quicksand', fontSize : 16, color : 'white', paddingBottom : 15, paddingTop : 15, textAlign : 'center'}} onPress = {() => this._goToURL("https://collegeplus.us")}>
          College<Text style = {{color : 'tomato'}}>Plus™</Text>
        </Text>
      </View>
      <BannerAd
      unitId="ca-app-pub-2209994521755973/5149618893"
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: false,
      }}
      onAdLoaded={() => {
        console.log('Advert loaded');
      }}
      onAdFailedToLoad={(error) => {
        // console.error('Advert failed to load: ', error);
      }}
    />
      </ScrollView>
    </>
  );
}
}


const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#343434',
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
 indexMainButton :{
   marginTop: 20,
   borderRadius: 15,
   backgroundColor: mainColors[Math.floor(Math.random() * 2)],
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
    paddingTop: APPBAR_HEIGHT
  },
  dropDownView: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center'
  },
  pickerButton1 :{
    marginTop: 20,
    borderRadius: 15,
    backgroundColor:  mainColors[Math.floor(Math.random() * 2)],
    maxWidth: 175,
    minWidth: 175,
    minHeight: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pickerButton2 :{
    marginTop: 20,
    borderRadius: 15,
    backgroundColor:  mainColors[Math.floor(Math.random() * 2)],
    maxWidth: 175,
    minWidth: 175,
    minHeight: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pickerButton3 :{
    marginTop: 20,
    borderRadius: 15,
    backgroundColor:  mainColors[Math.floor(Math.random() * 2)],
    maxWidth: 175,
    minWidth: 175,
    minHeight: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pickerButton4 :{
    marginTop: 20,
    borderRadius: 15,
    backgroundColor:  mainColors[Math.floor(Math.random() * 2)],
    maxWidth: 175,
    minWidth: 175,
    minHeight: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  PickerStackHeader: {
    backgroundColor: '#343434',
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


export default PickerScreen;
