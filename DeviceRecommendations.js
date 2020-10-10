/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {useState, Component} from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar, Platform, TouchableOpacity, Picker, AppNavigator, StackNavigator,  Linking, Image } from 'react-native';
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
// import { Dropdown } from 'react-native-material-dropdown';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-ionicons'
import {Dimensions } from "react-native";
////import { isNumber } from 'firebase-admin/lib/utils/validator';
const screenWidth = Math.round(Dimensions.get('window').width);
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
// import * as firebase from 'firebase';
//
// firebase.initializeApp(environment.firebase);

// import firestore from '@react-native-firebase/firestore';


// import Datastore from '@google-cloud/datastore';
//
// const datastore = new Datastore();

class DeviceRecommendations extends Component{

  constructor(props) {
    super(props);
    this.exampleRef = this.updateRef.bind(this, 'text');
    this.smallRef = React.createRef();
    // firebase.initializeApp(config);
    // const userDocument = firestore()
    //   .collection('userprof')
    //   .doc('coll1');
    this.state = {
      text: 'h',
      users: []
    };
  }

  handleChange = (selection) => {
    this.setState({ text: event.target.data[selection] });
  };
  updateRef(name, ref) {
      this[name] = ref;
  }
  onChangeHandler = (value) => {
      let temp = ['Banana', 'Mango', 'Pear'];
      let tempEqual = ['B', 'M', 'P'];
      let index = temp.indexOf(value);
      this.setState({text: tempEqual[index]})
  }
  _goToURL(temp) {
      if(temp.substr(0, 8) != "https://" && temp.substr(0, 7) != "http://"){
              console.log(temp);
              temp = "https://" + temp;
          }
      Linking.canOpenURL(temp).then(supported => {
      if (supported) {
          Linking.openURL(temp);
      } else {
          console.log('Don\'t know how to open URI: ' + temp);
      }
      });
    }
    addComma(str){
            str = str.toString();
            if(str.charAt(0) >= '0' && str.charAt(0) <= '9'){
                let index = 1;
                for(var i = (str.length-1); i >= 0; i--){
                    if(index % 3 == 0 && i != 0){
                        console.log(str[i]);
                        str = str.substr(0, i) + "," + str.substr(i);
                    }                    
                    index++;
                }
                return str;
            }
            return "No Info :(";
            
    }
    
    render(){
        // const { navigate } = this.props.navigation;
        const { navigation } = this.props;  
        let { text } = this.state;
        const firstPick = this.props.route.params.firstPickname;
        const firstPickurl = this.props.route.params.firstPickurl;
        const firstPickImage = this.props.route.params.firstPickImage;
        const secondPick = this.props.route.params.secondPickname;
        const secondPickurl = this.props.route.params.secondPickurl;
        const secondPickImage = this.props.route.params.secondPickImage;
        const thirdPick = this.props.route.params.thirdPickname;      
        const thirdPickurl = this.props.route.params.thirdPickurl;
        const thirdPickImage = this.props.route.params.thirdPickImage;

        return (
            <>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#1A1A1A" translucent = {true}/>
            <ScrollView style ={styles.pickerPage}>
                <View style= {styles.wholeView}>
                    <Text style = {styles.header}>
                        {firstPick}
                    </Text>
                    <Image
                        style = {{width : 300, height : 200, marginBottom : 60}}
                        source = {
                            {uri : firstPickImage}
                        }
                    />
                    <Text style = {{fontSize : 18, paddingBottom :10, color : 'white', fontFamily : "Quicksand"}}  onPress = {() => this._goToURL(firstPickurl)}>
                        Visit Website<Text style = {{color : 'tomato', fontFamily : "Quicksand"}}> > </Text>
                    </Text>
                </View>
                <View style= {styles.wholeView}>
                    <Text style = {styles.header}>
                        {secondPick}
                    </Text>
                    <Image
                        style = {{width : 300, height : 200, marginBottom : 60}}
                        source = {
                            {uri : secondPickImage}
                        }
                    />
                    <Text style = {{fontSize : 18, paddingBottom :10, color : 'white',fontFamily : "Quicksand"}}  onPress = {() => this._goToURL(secondPickurl)}>
                        Visit Website<Text style = {{color : 'tomato', fontFamily : "Quicksand"}}> > </Text>
                    </Text>
                </View>
                <View style= {styles.wholeView}>
                    <Text style = {styles.header}>
                        {thirdPick}
                    </Text>
                    <Image
                        style = {{width : 300, height : 200, marginBottom : 60}}
                        source = {
                            {uri : thirdPickImage}
                        }
                    />
                    <Text style = {{fontSize : 18, paddingBottom :10, color : 'white', fontFamily : "Quicksand"}}  onPress = {() => this._goToURL(thirdPickurl)}>
                        Visit Website<Text style = {{color : 'tomato', fontFamily : "Quicksand"}}> > </Text>
                    </Text>
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
 statusBar: {
   height: STATUSBAR_HEIGHT,
   backgroundColor: '#1A1A1A'
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
    // paddingTop: APPBAR_HEIGHT,
    backgroundColor: "#1A1A1A"
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
  wholeView: {
      alignItems: 'center', 
      marginTop: 20,
      borderWidth: 0,
      borderRadius: 15,
      backgroundColor: '#343434'
  },
  header : {
      color: 'white', 
      fontWeight: '600',
      fontSize: 20,
      textAlign: 'center',
      paddingTop : 30,
      width : screenWidth * .8,
      marginBottom: 20,
      fontFamily : "Montserrat-Medium"
  },
  costOfAttendence : {
      color: 'white',
      fontSize: 14,
      textAlign: 'center',
      paddingTop: 15
  },
  bigPrice : {
      fontSize: 30,
      color: 'white',
      marginTop: 10
  },
  weather : {
      color : 'tomato',
      fontSize: 12
  },
  scores : {
      fontSize : 26,
      color: 'tomato',
      marginTop: 15
  },
  priceCalc : {
      color : 'black',
      textAlign: 'center',
      lineHeight: 22
  },
  priceCalcButton : {
      backgroundColor: 'tomato',
      borderRadius: 8,
      padding: 7,
      marginTop: 20,
      marginBottom: 20
  },
  topView : {
    alignItems: 'center', 
    maxWidth: 250, 
    marginTop: 20
  },
  bottomView : {
    display: 'flex', 
    flexDirection: 'row', 
    marginBottom: 20
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  imageContainer : {
    alignItems: 'center', 
    minWidth: screenWidth* .5
  },
  greenImage : {
    width: 80,
    height: 80,
    marginTop: 1
  },
  redImage : {
    width: 87,
    height: 87,
    
  },
  yellowImage : {
      width: 80,
      height: 80
  },
  higherLower : {
    maxWidth: screenWidth * .3, 
    textAlign: 'center',
    color: 'white'
  },
  optionsButton : {
    maxWidth: screenWidth * .4, 
    backgroundColor: 'tomato',
    borderRadius: 8,
    padding: 7
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
export default DeviceRecommendations;
