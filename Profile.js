/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {useState, Component} from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar, Platform, TouchableOpacity, Picker, AppNavigator, StackNavigator, Image, RefreshControl, Linking} from 'react-native';
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
import Icon from 'react-native-ionicons';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import CookieManager from 'react-native-cookies';
import { TextInput } from 'react-native-paper';
import {Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import appleAuth, {
  AppleButton,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthCredentialState,
} from '@invertase/react-native-apple-authentication';
GoogleSignin.configure();
// GoogleSignin.configure({
//   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  // webClientId: '224517218415-g481q73mv6i9e6sao3p0362ic4tf5368.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   hostedDomain: '', // specifies a hosted domain restriction
//   loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//   forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//   accountName: '', // [Android] specifies an account name on the device that should be used
//   iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
// });
String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

// GoogleSignin.configure({
//   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//   webClientId: '224517218415-g481q73mv6i9e6sao3p0362ic4tf5368.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   hostedDomain: '', // specifies a hosted domain restriction
//   loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//   forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
//   accountName: '', // [Android] specifies an account name on the device that should be used
//   iosClientId: '224517218415-kjmq6c87vcpm05f5487isf24a2cnvkki.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
// });
// import * as firebase from 'firebase';
//
// firebase.initializeApp(environment.firebase);

// import firestore from '@react-native-firebase/firestore';


// import Datastore from '@google-cloud/datastore';
//
// const datastore = new Datastore();


class ProfileScreen extends Component{
  
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
      appleLogIn : "",
      users: [],
      datasource: {},
      userInfo : {},
      isLoggedIn : false,
      name : "",
      username : "",
      password : "",
      college1 : "",
      college2 : "",
      college3 : "",
      collegeweather1 : "",
      collegeweather2 : "",
      collegeweather3 : "",
      collegetemp1 : "",
      collegetemp2 : "",
      collegetemp3 : "",
      collegecity1 : "", 
      collegecity2 : "", 
      collegecity3 : "",
      collegestate1 : "", 
      collegestate2 : "",
      collegestate3 : "",
      collegelink1 : "",
      collegelink2 : "",
      collegelink3 : "",
      major1 : "",
      major2 : "", 
      major3 : "",
      device1 : "",
      device2 : "",
      device3 : "",
      gpa : "0",
      ACT : "0",
      SAT : "0",
      cookies : {},
      secureText : true,
      iconType : "eye-off",
      usernameError : {height : 0},
      passwordError : {height: 0},
      valUser : false,
      valPassword : false,
      passwordView : {height: 100, alignItems : 'center', marginTop : 5},
      passwordView2 : {width: screenWidth*.7, alignItems: 'center', borderWidth: 4, borderColor : '#0099cc', paddingBottom : 30, backgroundColor : "#000000", borderRadius : 15},
      currentlyLoading : true,
      refreshing: false,
      googleSignedIn : false,
      colleges : [],
      collegeTemp : [],
      collegeWeather : [],
      collegeCities : [],
      collegeStates : [],
      collegeLinks : [],
      collegesRender : [],
      collegeTempRender : [],
      collegeWeatherRender : [],
      collegeCitiesRender : [],
      collegeStatesRender : [],
      collegeLinksRender : [],
      textStyles : [styles.categoryContent, styles.categoryContent, styles.categoryContent, styles.categoryContent, styles.categoryContent, styles.categoryContent, styles.categoryContent, styles.categoryContent, styles.categoryContent],
      weatherStyles : [styles.weatherFont, styles.weatherFont, styles.weatherFont, styles.weatherFont,  styles.weatherFont,  styles.weatherFont,  styles.weatherFont,  styles.weatherFont,  styles.weatherFont],
      incorrectStyle : {},
      incorrect : false,
      loadingImageView : {height : 0, width : 0},
      loadingImage : {height : 0, width : 0},
      loadingImageView2 : {height : 0, width : 0},
      loadingImage2 : {height : 0, width : 0},
      withApple : false
    };
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    // fetchData().then(() => {
    //   this.setState({refreshing: false});
    // });
    // this.getCookies();
    console.log(this.state.password);
    if(this.state.password == '?'){
      console.log("++++++++++++++++++++++++++");
      this.googleLogIn();
    }
    else if(this.state.password == "~"){
      this.appleLogIn();
    }
    else if(this.state.password){
      this.callAPI(this.state.username, this.cypher(this.state.password));
    }
    this.setState({refreshing : false});
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo});
      this.googleSignIn();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
        // play services not available or outdated
      } else {
        console.log(error);
        // some other error happened
      }
    }
  };

  getCookies =async () => {
    CookieManager.getAll()
    .then((res) => {
      console.log('CookieManager.getAll =>', res);
      if(res["collegePlusPassword"]){
        this.setState({password : res["collegePlusPassword"]["value"]});
        this.setState({username : res["collegePlusUsername"]["value"]});
      }

      if(res["appleSignIn"] != undefined){
        this.setState({appleLogIn : res["appleSignIn"]["value"]});
      }
      // this.callAPI(this.state.username, this.state.password); 
      if(Object.keys(res).length === 0 && res.constructor === Object){
        this.setState({isLoggedIn : false});
      }
      else if(res["collegePlusPassword"]){
        console.log(res);
        this.setState({isLoggedIn : true});
      }
    });
    // CookieManager.get('https://collegeplus.us')
    // .then((res) => {
    //   console.log('CookieManager.get =>', res); // => 'user_session=abcdefg; path=/;'
    //   this.setState({cookies : res});
    //   this.setState({password : res["collegePlusPassword"]});
    //   this.setState({username : res["collegePlusUsername"]});
    //   // this.callAPI(this.state.username, this.state.password); 
    //   if(Object.keys(res).length === 0 && res.constructor === Object){
    //     this.setState({isLoggedIn : false});
    //   }
    //   else{
    //     console.log(res);
    //     this.setState({isLoggedIn : true});
    //   }
    //   console.log(this.state.isLoggedIn);    
    // });
    ;
  }

  setCookies = (username, password) => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear()+5;
    console.log("USERNAME AND PASSWORD: ", username, password);
    password =  password ? password : "?";
    CookieManager.set({
      name: 'collegePlusUsername',
      value: username,
      domain: 'https://collegeplus.us',
      origin: 'some origin',
      path: '/',
      version: '1',
      expiration: currentYear + '-05-30T12:30:00.00-05:00'
    }).then((res) => {
      console.log('CookieManager.set =>', res);
    });
    CookieManager.set({
      name: 'collegePlusPassword',
      value: password,
      domain: 'https://collegeplus.us',
      origin: 'some origin',
      path: '/',
      version: '1',
      expiration: currentYear + '-05-30T12:30:00.00-05:00'
    }).then((res) => {
      console.log('CookieManager.set =>', res);
    });
    // CookieManager.setFromResponse(
    // 'https://collegeplus.us', 
    // 'collegePlusUsername='+ username +'; path=/; expires=Thu, 1 Jan ' + currentYear + ' 00:00:00 -0000; secure; HttpOnly')
    // .then((res) => {
    //   // `res` will be true or false depending on success.
    //   console.log('CookieManager.setFromResponse =>', res);
    // });
    // CookieManager.setFromResponse(
    //   'https://collegeplus.us', 
    //   'collegePlusPassword='+password + '; path=/; expires=Thu, 1 Jan ' + currentYear + ' 00:00:00 -0000; secure; HttpOnly')
    //   .then((res) => {
    //     // `res` will be true or false depending on success.
    //     console.log('CookieManager.setFromResponse =>', res);
    //   });
  }

  isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    this.setState({ isLoggedIn: isSignedIn, googleSignedIn : isSignedIn });
  };

  getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    this.setState({ userInfo: currentUser });
  };

  googleLogIn(){
    console.log("START: " + this.state.username);
    let temp = this.cypher(this.state.username);
    console.log("https://collegeplus.us/showData2?username="+temp + "&apiKey=" + this.cypher("seunsSpecificKey21382947"));
    fetch("https://collegeplus.us/showData2?username="+temp + "&apiKey=" + this.cypher("seunsSpecificKey21382947"))
      .then(response => response.json())
      .then((responseJson)=> {
        console.log(this.state.username);
        this.setState({
        dataSource: responseJson
        });
        this.setState({college1: this.state.dataSource["college1"], withApple : false});
        this.setState({college2: this.state.dataSource["college2"]});
        this.setState({college3: this.state.dataSource["college3"]});
        this.setState({collegeweather1: this.state.dataSource["collegeweather1"]});
        this.setState({collegeweather2: this.state.dataSource["collegeweather2"]});
        this.setState({collegeweather3: this.state.dataSource["collegeweather3"]});
        this.setState({collegetemp1: this.state.dataSource["collegetemp1"]});
        this.setState({collegetemp2: this.state.dataSource["collegetemp2"]});
        this.setState({collegetemp3: this.state.dataSource["collegetemp3"]});
        this.setState({collegecity1: this.state.dataSource["collegecity1"]});
        this.setState({collegecity2: this.state.dataSource["collegecity2"]});
        this.setState({collegecity3: this.state.dataSource["collegecity3"]});
        this.setState({collegestate1: this.state.dataSource["collegestate1"]});
        this.setState({collegestate2: this.state.dataSource["collegestate2"]});
        this.setState({collegestate3: this.state.dataSource["collegestate3"]});
        this.setState({collegecity3: this.state.dataSource["collegecity3"]});
        this.setState({collegelink1: this.state.dataSource["collegelink1"]});
        this.setState({collegelink2: this.state.dataSource["collegelink2"]});
        this.setState({collegelink3: this.state.dataSource["collegelink3"]});
        this.setState({major1: this.state.dataSource["major1"]});
        this.setState({major2: this.state.dataSource["major2"]});
        this.setState({major3: this.state.dataSource["major3"]});
        this.setState({device1: this.state.dataSource["device1"]});
        this.setState({device2: this.state.dataSource["device2"]});
        this.setState({device3: this.state.dataSource["device3"]});
        this.setState({gpa: this.state.dataSource["gpa"]});
        this.setState({ACT: this.state.dataSource["userACT"]});
        this.setState({SAT: this.state.dataSource["userSAT"]});
        this.setState({colleges: this.state.dataSource["colleges"]});
        this.setState({collegeCities: this.state.dataSource["collegecities"]});
        this.setState({collegeStates: this.state.dataSource["collegestates"]});
        this.setState({collegeLinks: this.state.dataSource["collegeLinks"]});
        this.setState({collegeWeather: this.state.dataSource["collegeweather"]});
        this.setState({collegeTemp: this.state.dataSource["collegeTemp"]});
        // console.log(this.state.colleges);
        // console.log(this.state);
        let leftover = 9 - this.state.colleges.length;
        for(var i = 0; i < this.state.colleges.length; i++){
          this.state.textStyles[i] = styles.categoryContent;
          this.state.weatherStyles[i] = styles.weatherFont;
        }
        for(var i  = 8 ; i >= this.state.colleges.length; i--){
          this.state.textStyles[i] = {height : 0, width : 0};
          this.state.weatherStyles[i] = {height : 0, width : 0};
        }
        for(var i = 0; i < this.state.colleges.length; i++){
          this.state.collegesRender.push(<Text><Text style = {styles.categoryContent}> {this.state.colleges[i]}</Text><Text style = {styles.weatherFont}>{this.state.collegecity1}, {this.state.collegestate1} {this.state.collegetemp1}, {this.state.collegeweather1} <MaterialCommunityIcons style={{alignItems: "center",justifyContent: "center",textAlign: "right",color: "#fff"}} name = "weather-cloudy" color = "tomato" size= {14}/></Text></Text>);
        }
        // console.log(this.state.collegesRender);
        if(this.state.text != '0'){
          this.setState({isLoggedIn : true});
        }
        this.setState({currentlyLoading : false});      

        // loadingImage = {width: 0, height : 0};
      })
      .catch(error=>console.log(error)); //to catch the errors if any
  }

  googleSignIn = () => {
    if(!this.state.isLoggedIn){
      this.signIn();
    }
    this.isSignedIn();
    if(this.state.isLoggedIn){
      this.setState({loadingImage : {height : 50, width : 50}, withApple : false});
      this.getCurrentUser();
      console.log(this.state.userInfo, "Profile Page");
      this.setState({name : this.state.userInfo.user.name});
      this.setState({text : this.state.userInfo.user.name});
      let temp = this.state.userInfo.user.email;
      for(var i = 0; i < temp.length; i++){
        if(temp.charAt(i) == '@'){
          temp = temp.substr(0, i);
          break;
        }
      }
      this.setState({username : temp});
      this.setState({valPassword : true});
      this.setState({valUser : true});
      
      console.log(temp);
      console.log("https://collegeplus.us/showData2?username="+ this.cypher(temp) + "&apiKey=" + this.cypher("seunsSpecificKey21382947"));
      fetch("https://collegeplus.us/showData2?username="+this.cypher(temp) + "&apiKey=" + this.cypher("seunsSpecificKey21382947"))
      .then(response => response.json())
      .then((responseJson)=> {
        console.log("PROFILE");
        this.setState({
        dataSource: responseJson
        });
        this.setState({text: this.state.dataSource["name"],
          college1: this.state.dataSource["college1"],
          college2: this.state.dataSource["college2"],
          college3: this.state.dataSource["college3"],
          collegeweather1: this.state.dataSource["collegeweather1"],
          collegeweather2: this.state.dataSource["collegeweather2"],
          collegeweather3: this.state.dataSource["collegeweather3"],
          collegetemp1: this.state.dataSource["collegetemp1"],
          collegetemp2: this.state.dataSource["collegetemp2"],
          collegetemp3: this.state.dataSource["collegetemp3"],
          collegecity1: this.state.dataSource["collegecity1"],
          collegecity2: this.state.dataSource["collegecity2"],
          collegecity3: this.state.dataSource["collegecity3"],
          collegestate1: this.state.dataSource["collegestate1"],
          collegestate2: this.state.dataSource["collegestate2"],
          collegestate3: this.state.dataSource["collegestate3"],
          collegecity3: this.state.dataSource["collegecity3"],
          collegelink1: this.state.dataSource["collegelink1"],
          collegelink2: this.state.dataSource["collegelink2"],
          collegelink3: this.state.dataSource["collegelink3"],
          major1: this.state.dataSource["major1"],
          major2: this.state.dataSource["major2"],
          major3: this.state.dataSource["major3"],
          device1: this.state.dataSource["device1"],
          device2: this.state.dataSource["device2"],
          device3: this.state.dataSource["device3"],
          gpa: this.state.dataSource["gpa"],
          ACT: this.state.dataSource["userACT"],
          SAT: this.state.dataSource["userSAT"],
          colleges: this.state.dataSource["colleges"],
          collegeCities: this.state.dataSource["collegecities"],
          collegeCities: this.state.dataSource["collegecities"],
          collegeStates: this.state.dataSource["collegestates"],
          collegeLinks: this.state.dataSource["collegeLinks"],
          collegeWeather: this.state.dataSource["collegeweather"],
          collegeTemp: this.state.dataSource["collegeTemp"],
          loadingImage2 : {height : 50, width : 50}, 
          loadingImageView2 : {marginBottom: 35, flex: 1,marginTop: 50, alignItems: 'center'}

        });

        for(var i = 0; i < this.state.colleges.length; i++){
          this.state.textStyles[i] = styles.categoryContent;
          this.state.weatherStyles[i] = styles.weatherFont;
        }

        for(var i = 0; i < this.state.colleges; i++){
          console.log(i);
          this.state.collegesRender.push(<View><Text style = {styles.categoryContent}> {this.state.colleges[i]}</Text><Text style = {styles.weatherFont}>{this.state.collegecity1}, {this.state.collegestate1} {this.state.collegetemp1}, {this.state.collegeweather1} <MaterialCommunityIcons style={{alignItems: "center",justifyContent: "center",textAlign: "right",color: "#fff"}} name = "weather-cloudy" color = "tomato" size= {14}/></Text></View>);
        }
        console.log(this.state.collegesRender);
        if(this.state.text != '0'){
          this.setState({isLoggedIn : true});
        }
        else{
          console.log("USERNAME", temp);
          fetch("https://collegeplus.us/addGoogleNewUser?username="+ this.cypher(temp) + "&apiKey="+ this.cypher("seunsSpecificKey21382947"))
          .then(response => response.json())
          .then(async (responseJson)=> {
              console.log("PROFILE");
              this.setState({
              dataSource: responseJson
              });
              if(responseJson["message"] == "signed in"){
                  this.setCookies(this.state.username, this.state.password);
                  // await this.props.navigation.popToTop();
              }
              else{
                  this.setCookies(this.state.username, this.state.password);
                  // await this.props.navigation.popToTop();
              }
              this.setState({currentlyLoading : false, loadingImage2 : {height : 0, width : 50}, loadingImageView2 : {height : 0, width : 0}});
              // loadingImage = {width: 0, height : 0};
          })
          .catch(error=>console.log(error)); //to catch the errors if any
        }
        this.setState({currentlyLoading : false, loadingImage2 : {height : 0, width : 50}, loadingImageView2 : {height : 0, width : 0}});
        this.setCookies(this.state.username, "");

        // loadingImage = {width: 0, height : 0};
      })
      .catch(error=>console.log(error)); //to catch the errors if any
    }
  }

  setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
  }

  UNSAFE_componentWillMount = async() => {
    console.log("here");
    await this.getCookies();
    // await this.googleSignIn();
    setTimeout(async()=>{
    if(this.state.isLoggedIn && this.state.password == '?'){
      console.log("???????????????????????????????//");
      await this.googleLogIn();
    }
    else if(this.state.isLoggedIn && this.state.password == '~'){
      await this.appleLogIn();
    }
    else if (this.state.isLoggedIn && this.state.password != '?'){
      await this.callAPI(this.state.username, this.cypher(this.state.password));
    }
      }, 1000);
    console.log("unsafe");
    this.setState({currentlyLoading : false});
    // console.log(this.state.cookies["collegePlusPassword"]);
    // this.setState({password : this.state.cookies["collegePlusPassword"]});
    // this.setState({username : this.state.cookies["collegePlusUsername"]});
    // console.log(this.state.username + " " + this.state.password);
    // this.callAPI(this.state.username, this.state.password);

  }

  // cyper = () => {
  //     let temp = this.state.username;
  //     let tempass = this.state.password;
  //     let templen = temp.length-1;
  //     let tempasslen = tempass.length-1;
  //     for(var i = 0; i <= (temp.length/2); i++){
  //         let tempChar = temp.charAt(templen);
  //         let temp = this.setCharAt(temp, templen, temp.charAt(i));
  //         let temp = this.setCharAt(temp, i, tempChar);
  //         templen--;
  //     }

  //     for(var i = 0; i <= (tempass.length/2); i++){
  //       let tempChar = tempass.charAt(tempasslen);
  //       let tempass = this.setCharAt(tempass, tempasslen, temp.charAt(i));
  //       let tempass = this.setCharAt(tempass, i, tempChar);
  //       tempasslen--;
  //     }
  //     this.setState({username});
  // }

  cypher(stringVal){
    let sentVar = "";
    let arr = ["a", "b", "c", "f", "y"];
    for(var i = 0 ; i < stringVal.length ; i++){
      sentVar = sentVar.concat((stringVal.charCodeAt(i)/2).toString()+arr[Math.floor(Math.random() * 5)]);
    }
    console.log(sentVar);
    return sentVar;
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

  deleteCookies = async() => {
    if(this.state.googleSignedIn){
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      } catch (error) {
        console.error(error);
      }
    }
    let AppleLogIn = this.state.username;
    CookieManager.clearAll()
    .then((res) => {
      console.log('CookieManager.clearAll =>', res);
      this.setState({
        isLoggedIn : false,
        name : "",
        username : "",
        password : "",
        college1 : "",
        college2 : "",
        college3 : "",
        collegeweather1 : "",
        collegeweather2 : "",
        collegeweather3 : "",
        collegetemp1 : "",
        collegetemp2 : "",
        collegetemp3 : "",
        collegecity1 : "", 
        collegecity2 : "", 
        collegecity3 : "",
        collegestate1 : "", 
        collegestate2 : "",
        collegestate3 : "",
        collegelink1 : "",
        collegelink2 : "",
        collegelink3 : "",
        major1 : "",
        major2 : "", 
        major3 : "",
        device1 : "",
        device2 : "",
        device3 : "",
        gpa : "",
        ACT : "",
        SAT : "",
        loadingImageView : {height : 0, width : 0},
        loadingImage : {height : 0, width : 0},
        loadingImageView2 : {height : 0, width : 0},
        loadingImage2 : {height : 0, width : 0}
      });
    });
    if(this.state.withApple){
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear()+5;
      CookieManager.set({
        name: 'appleSignIn',
        value: AppleLogIn,
        domain: 'https://collegeplus.us',
        origin: 'some origin',
        path: '/',
        version: '1',
        expiration: currentYear + '-05-30T12:30:00.00-05:00'
      }).then((res) => {
        this.setState({appleLogIn : AppleLogIn});
        console.log('CookieManager.set =>', res);
      });
    }
    let currentDate = new Date();
  }

  callAPI(username, password){
    console.log("https://collegeplus.us/showData?username=" + username + "&password=" +password + "&apiKey=" + this.cypher("seunsSpecificKey21382947"));
    fetch("https://collegeplus.us/showData?username=" + username + "&password=" +password + "&apiKey=" + this.cypher("seunsSpecificKey21382947"))
    .then(response => response.json())
    .then((responseJson)=> {
      console.log("PROFILE");
      this.setState({
      dataSource: responseJson
      });
      this.setState({text: this.state.dataSource["name"], withApple : false,
        college1: this.state.dataSource["college1"],
        college2: this.state.dataSource["college2"],
        college3: this.state.dataSource["college3"],
        collegeweather1: this.state.dataSource["collegeweather1"],
        collegeweather2: this.state.dataSource["collegeweather2"],
        collegeweather3: this.state.dataSource["collegeweather3"],
        collegetemp1: this.state.dataSource["collegetemp1"],
        collegetemp2: this.state.dataSource["collegetemp2"],
        collegetemp3: this.state.dataSource["collegetemp3"],
        collegecity1: this.state.dataSource["collegecity1"],
        collegecity2: this.state.dataSource["collegecity2"],
        collegecity3: this.state.dataSource["collegecity3"],
        collegestate1: this.state.dataSource["collegestate1"],
        collegestate2: this.state.dataSource["collegestate2"],
        collegestate3: this.state.dataSource["collegestate3"],
        collegecity3: this.state.dataSource["collegecity3"],
        collegelink1: this.state.dataSource["collegelink1"],
        collegelink2: this.state.dataSource["collegelink2"],
        collegelink3: this.state.dataSource["collegelink3"],
        major1: this.state.dataSource["major1"],
        major2: this.state.dataSource["major2"],
        major3: this.state.dataSource["major3"],
        device1: this.state.dataSource["device1"],
        device2: this.state.dataSource["device2"],
        device3: this.state.dataSource["device3"],
        gpa: this.state.dataSource["gpa"],
        ACT: this.state.dataSource["userACT"],
        SAT: this.state.dataSource["userSAT"],
        colleges: this.state.dataSource["colleges"],
        collegeCities: this.state.dataSource["collegecities"],
        collegeCities: this.state.dataSource["collegecities"],
        collegeStates: this.state.dataSource["collegestates"],
        collegeLinks: this.state.dataSource["collegeLinks"],
        collegeWeather: this.state.dataSource["collegeweather"],
        collegeTemp: this.state.dataSource["collegeTemp"],
    
      });   
      this.setState({loadingImage : {height : 0, width : 0}});
      if(this.state.text != '0'){
        this.setState({isLoggedIn : true, incorrect : false});
        this.setCookies(this.state.username, this.state.password);
        for(var i = 0; i < this.state.colleges.length; i++){
          this.state.textStyles[i] = styles.categoryContent;
          this.state.weatherStyles[i] = styles.weatherFont;
        }
      }
      else{
        this.setState({incorrect : true});
      }
      this.setState({currentlyLoading : false, loadingImage : {height : 0, width : 50}, loadingImageView : {height : 0, width : 0}});
      try{
        this.setState({gpa : parseFloat(this.state.gpa).toFixed(2).toString()});
      }
      catch(e){
        this.setState({gpa : this.state.gpa});
      }
    })
    .catch(error=>console.log(error)); //to catch the errors if any
  }
      
  changeBool (){
    if(this.state.secureText){
      this.setState({secureText : false});
      this.setState({iconType : "eye"});
    }
    else{
      this.setState({secureText : true});
      this.setState({iconType : "eye-off"});
    }
  }

  handleUsername(value){
    this.setState({usernameError : {height : 30}});
    let tempUsername = value;
    var indexOfAt = 0;
    var indexOfDot = 0;
    var containsSpace = false;
    for(var i = 0; i < tempUsername.length; i++){
        if(tempUsername.charAt(i) == '@'){
            indexOfAt = i;
        }
        else if(value.charAt(i) == ' '){
          containsSpace = true;
        }
        else if(tempUsername.charAt(i) == '.'){
            indexOfDot = i;
        }
    }
    if(indexOfAt == 0 || indexOfDot == 0 || indexOfAt > indexOfDot || containsSpace){
        this.setState({usernameError : {height: 50, color: 'red', fontSize: 15}});
        this.setState({valUser : false});
        this.setState({passwordView : {height: 100, alignItems : 'center', marginTop : 30}});
    }
    else{
        this.setState({valUser : true});
        this.setState({usernameError : {height : 0}});
        this.setState({username : value});
        this.setState({passwordView : {height: 100, alignItems : 'center', marginTop : 5}});
    }
  }

  handlePassword(value){
    this.setState({passwordError : {height : 30}});
    var numNums = 0;
    var numLetters = 0;
    var numSpecials = 0;
    var containsSpace = false;
    console.log(value);
    for(var i = 0; i < value.length; i++){
        if((value.charAt(i)>= 'a' && value.charAt(i) <= 'z') || (value.charAt(i)>= 'A' && value.charAt(i) <= 'Z')){
            numLetters++;
        }
        else if((value.charAt(i)>= '0' && value.charAt(i) <= '9')){
            numNums++;
        }
        else if(value.charAt(i) == ' '){
            containsSpace = true;
        }
        else{
            numSpecials++;
        }
    }
    if(numNums > 0 && numLetters > 0 && numSpecials > 0 && value.length > 7 && !containsSpace){
        this.setState({passwordError : {height : 0, color: 'red', fontSize: 15}});
        this.setState({valPassword : true});
        this.setState({password : value});
        this.setState({passwordView2 : {width: screenWidth*.7, alignItems: 'center', borderWidth: 4, borderColor : '#0099cc', paddingBottom : 30, backgroundColor : "#000000", borderRadius : 15}});
        this.setState({passwordView : {height: 100, alignItems : 'center', marginTop : 30}});

    }
    else{
        this.setState({passwordError : {height : 30}})
        this.setState({valPassword : false});
        this.setState({passwordView2 : {width: screenWidth*.7, alignItems: 'center', borderWidth: 4, borderColor : '#0099cc', paddingBottom : 30, backgroundColor : "#000000", borderRadius : 15}});
        this.setState({passwordView : {height: 120, alignItems : 'center', marginTop : 30}});

    }
  }

  handleSignin(){
    console.log(this.state.username, this.state.password);
    if(this.state.valPassword && this.state.valUser){
      this.setState({currentlyLoading : true, loadingImage : {height : 50, width : 50}, loadingImageView : {marginBottom: 35, flex: 1,marginTop: 50, alignItems: 'center'}});
      this.callAPI(this.state.username, this.cypher(this.state.password));
      this.setState({currentlyLoading : false});
    }
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

  onAppleButtonPress = async() => {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: AppleAuthRequestOperation.LOGIN,
      requestedScopes: [AppleAuthRequestScope.EMAIL],
    });
  
    // get current authentication state for user
    // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
    console.log(AppleAuthCredentialState.AUTHORIZED);
    // use credentialState response to ensure the user is authenticated
    if (credentialState === AppleAuthCredentialState.AUTHORIZED) {
      // user is authenticated
      // await this.getCookies();
      console.log(this.state.appleLogIn);
      if(this.state.appleLogIn != ""){
        this.setState({username : this.state.appleLogIn});
        this.appleLogIn();
      }
      else{
        let temp = appleAuthRequestResponse.email;
        console.log("APPLE RESPONSE: ", temp);
        this.setState({username : temp, withApple : true});
        console.log("https://collegeplus.us/showData3?username="+ this.cypher(temp) + "&apiKey=" + this.cypher("seunsSpecificKey21382947"));
        fetch("https://collegeplus.us/showData3?username="+this.cypher(temp) + "&apiKey=" + this.cypher("seunsSpecificKey21382947"))
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({dataSource: responseJson})
          this.setState({
              text: this.state.dataSource["name"],
              college1: this.state.dataSource["college1"],
              college2: this.state.dataSource["college2"],
              college3: this.state.dataSource["college3"],
              collegeweather1: this.state.dataSource["collegeweather1"],
              collegeweather2: this.state.dataSource["collegeweather2"],
              collegeweather3: this.state.dataSource["collegeweather3"],
              collegetemp1: this.state.dataSource["collegetemp1"],
              collegetemp2: this.state.dataSource["collegetemp2"],
              collegetemp3: this.state.dataSource["collegetemp3"],
              collegecity1: this.state.dataSource["collegecity1"],
              collegecity2: this.state.dataSource["collegecity2"],
              collegecity3: this.state.dataSource["collegecity3"],
              collegestate1: this.state.dataSource["collegestate1"],
              collegestate2: this.state.dataSource["collegestate2"],
              collegestate3: this.state.dataSource["collegestate3"],
              collegecity3: this.state.dataSource["collegecity3"],
              collegelink1: this.state.dataSource["collegelink1"],
              collegelink2: this.state.dataSource["collegelink2"],
              collegelink3: this.state.dataSource["collegelink3"],
              major1: this.state.dataSource["major1"],
              major2: this.state.dataSource["major2"],
              major3: this.state.dataSource["major3"],
              device1: this.state.dataSource["device1"],
              device2: this.state.dataSource["device2"],
              device3: this.state.dataSource["device3"],
              gpa: this.state.dataSource["gpa"],
              ACT: this.state.dataSource["userACT"],
              SAT: this.state.dataSource["userSAT"],
              colleges: this.state.dataSource["colleges"],
              collegeCities: this.state.dataSource["collegecities"],
              collegeCities: this.state.dataSource["collegecities"],
              collegeStates: this.state.dataSource["collegestates"],
              collegeLinks: this.state.dataSource["collegeLinks"],
              collegeWeather: this.state.dataSource["collegeweather"],
              collegeTemp: this.state.dataSource["collegeTemp"],
              loadingImage2 : {height : 50, width : 50}, 
              loadingImageView2 : {marginBottom: 35, flex: 1,marginTop: 50, alignItems: 'center'}
          });
          if(this.state.text != '0'){
            this.setState({isLoggedIn : true});
            this.setState({password : "~"});
            this.setCookies(this.state.username, this.state.password);
          }
          else{
            console.log("USERNAME", temp);
            fetch("https://collegeplus.us/addAppleNewUser?username="+ this.cypher(temp) + "&apiKey="+ this.cypher("seunsSpecificKey21382947"))
            .then(response => response.json())
            .then(async (responseJson)=> {
                console.log("PROFILE");
                this.setState({
                dataSource: responseJson
                });
                if(responseJson["message"] == "signed in"){
                    this.setState({password : "~"});
                    this.setCookies(this.state.username, this.state.password);
                    // await this.props.navigation.popToTop();
                }
                else{
                    this.setState({password : "~"});
                    this.setCookies(this.state.username, this.state.password);
                    // await this.props.navigation.popToTop();
                }
                this.setState({currentlyLoading : false, loadingImage2 : {height : 0, width : 50}, loadingImageView2 : {height : 0, width : 0}});
                // loadingImage = {width: 0, height : 0};
            })
            .catch(error=>console.log(error)); //to catch the errors if any

            let currentDate = new Date();
            let currentYear = currentDate.getFullYear()+5;
            CookieManager.set({
              name: 'appleSignIn',
              value: this.state.username,
              domain: 'https://collegeplus.us',
              origin: 'some origin',
              path: '/',
              version: '1',
              expiration: currentYear + '-05-30T12:30:00.00-05:00'
            }).then((res) => {
              this.setState({appleLogIn : this.state.username});
              console.log('CookieManager.set =>', res);
            });
          }
        })
        .catch(error=>console.log(error));
      }
    }
  }

  appleLogIn(){
    if(this.state.appleLogIn != ""){
      this.setState({username : this.state.appleLogIn, withApple : true});
    }
    this.setCookies(this.state.username, "~");
    console.log("START: " + this.state.username);
    let temp = this.cypher(this.state.username);
    console.log("https://collegeplus.us/showData3?username="+temp + "&apiKey=" + this.cypher("seunsSpecificKey21382947"));
    fetch("https://collegeplus.us/showData3?username="+temp + "&apiKey=" + this.cypher("seunsSpecificKey21382947"))
      .then(response => response.json())
      .then((responseJson)=> {
        console.log(this.state.username);
        this.setState({
        dataSource: responseJson
        });
        this.setState({college1: this.state.dataSource["college1"]});
        this.setState({college2: this.state.dataSource["college2"]});
        this.setState({college3: this.state.dataSource["college3"]});
        this.setState({collegeweather1: this.state.dataSource["collegeweather1"]});
        this.setState({collegeweather2: this.state.dataSource["collegeweather2"]});
        this.setState({collegeweather3: this.state.dataSource["collegeweather3"]});
        this.setState({collegetemp1: this.state.dataSource["collegetemp1"]});
        this.setState({collegetemp2: this.state.dataSource["collegetemp2"]});
        this.setState({collegetemp3: this.state.dataSource["collegetemp3"]});
        this.setState({collegecity1: this.state.dataSource["collegecity1"]});
        this.setState({collegecity2: this.state.dataSource["collegecity2"]});
        this.setState({collegecity3: this.state.dataSource["collegecity3"]});
        this.setState({collegestate1: this.state.dataSource["collegestate1"]});
        this.setState({collegestate2: this.state.dataSource["collegestate2"]});
        this.setState({collegestate3: this.state.dataSource["collegestate3"]});
        this.setState({collegecity3: this.state.dataSource["collegecity3"]});
        this.setState({collegelink1: this.state.dataSource["collegelink1"]});
        this.setState({collegelink2: this.state.dataSource["collegelink2"]});
        this.setState({collegelink3: this.state.dataSource["collegelink3"]});
        this.setState({major1: this.state.dataSource["major1"]});
        this.setState({major2: this.state.dataSource["major2"]});
        this.setState({major3: this.state.dataSource["major3"]});
        this.setState({device1: this.state.dataSource["device1"]});
        this.setState({device2: this.state.dataSource["device2"]});
        this.setState({device3: this.state.dataSource["device3"]});
        this.setState({gpa: this.state.dataSource["gpa"]});
        this.setState({ACT: this.state.dataSource["userACT"]});
        this.setState({SAT: this.state.dataSource["userSAT"]});
        this.setState({colleges: this.state.dataSource["colleges"]});
        this.setState({collegeCities: this.state.dataSource["collegecities"]});
        this.setState({collegeStates: this.state.dataSource["collegestates"]});
        this.setState({collegeLinks: this.state.dataSource["collegeLinks"]});
        this.setState({collegeWeather: this.state.dataSource["collegeweather"]});
        this.setState({collegeTemp: this.state.dataSource["collegeTemp"]});
        console.log(this.state.colleges);
        console.log(this.state.textStyles);

        // console.log(this.state);
        let leftover = 9 - this.state.colleges.length;
        let length = this.state.colleges.length;
        for(var i = 0; i < this.state.colleges.length; i++){
          this.state.textStyles[i] = styles.categoryContent;
          this.state.weatherStyles[i] = styles.weatherFont;
        }
        for(var i  = 8 ; i >= this.state.colleges.length; i--){
          this.state.textStyles[i] = {height : 0, width : 0};
          this.state.weatherStyles[i] = {height : 0, width : 0};
        }
        console.log(this.state.textStyles);
        for(var i = 0; i < this.state.colleges.length; i++){
          this.state.collegesRender.push(<Text><Text style = {styles.categoryContent}> {this.state.colleges[i]}</Text><Text style = {styles.weatherFont}>{this.state.collegecity1}, {this.state.collegestate1} {this.state.collegetemp1}, {this.state.collegeweather1} <MaterialCommunityIcons style={{alignItems: "center",justifyContent: "center",textAlign: "right",color: "#fff"}} name = "weather-cloudy" color = "tomato" size= {14}/></Text></Text>);
        }
        // console.log(this.state.collegesRender);
        if(this.state.text != '0'){
          this.setState({isLoggedIn : true});
        } 
        else{
          this.setState({isLoggedIn : false});
        }
        this.setState({currentlyLoading : false});      

        // loadingImage = {width: 0, height : 0};
      })
      .catch(error=>console.log(error)); //to catch the errors if any
  }


    render(){

      // this.getCookies();
       let { text } = this.state;
       const {navigate} = this.props.navigation;
      let data = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pear',
      }];
      // var MyText = function(t) {
        
      //   return(
      //     <Text>
      //       {t}
      //     </Text>
      //   )           
      // }
  if(this.state.isLoggedIn){
    return (
      <ScrollView style ={styles.pickerPage} refreshControl={
        <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />
      }>
      <View style = {{marginTop : 5, marginBottom : 20, alignItems : "flex-end"}}>
        <TouchableOpacity
          onPress  = {() => {this.deleteCookies()}}
          style = {{backgroundColor: 'tomato', padding : 8, borderRadius : 18, marginRight : 10, paddingLeft : 12, paddingRight : 12}}
        > 
          <Text style = {{fontFamily : "Montserrat-Medium"}}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
      <View style = {{alignItems: 'center', marginBottom : 10}}>
        <Ionicons
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "right",
                  color: "#fff"
                }}
                name = "md-person"
                color = "#fff"
                size= {60}
              />
      </View>
      <View style = {{ justifyContent: 'center', alignItems: 'center'}}>
        <Text style = {{color: 'white', fontSize: 22, fontFamily : "Montserrat-Medium"}} onPress = {() => {this.callAPI(this.state.username, this.state.password)}}>
          Welcome Back
        </Text>
        <Text style = {{color: 'white', fontSize: 28, color : 'tomato', fontFamily : "Quicksand"}}>
          {this.state.username}
        </Text>
       
      </View>
      <View style = {{display : 'flex', flexDirection : 'row', flex : 1, marginTop : 20}}>
        <View style = {{flex :1}}>
          <Text style = {{textAlign : 'center', fontSize : 28, color : 'white', maxWidth : screenWidth * .5, marginBottom : 5, fontFamily : "Quicksand"}}>
            <Text style= {{fontSize : 18, color : "tomato", fontFamily : "Montserrat-Medium"}}>GPA</Text> {"\n"}{parseFloat(this.state.gpa).toFixed(2)}

          </Text>
        </View>
        <View style = {{flex :1}}>
          <Text style = {{textAlign : 'center', fontSize : 28, color : 'white', maxWidth : screenWidth * .5, marginBottom : 5, fontFamily : "Quicksand"}}>
            <Text style= {{fontSize : 18, color : "#0099cc", fontFamily : "Montserrat-Medium"}}>SAT</Text> {"\n"}{parseInt(this.state.SAT)}

          </Text>
        </View>
        <View style = {{flex :1}}>
          <Text style = {{textAlign : 'center', fontSize : 28, color : 'white', maxWidth : screenWidth * .5, marginBottom : 5, fontFamily : "Quicksand"}}>
            <Text style= {{fontSize : 18, color : "tomato",fontFamily : "Montserrat-Medium"}}>ACT</Text> {"\n"}{parseInt(this.state.ACT)}

          </Text>
        </View>
      </View>
      <View style = {{marginTop : 10}} >
          <View style = {{marginTop : 15, alignItems : 'center'}}>
            <Text style = {styles.categoryTitle}>
              Colleges <MaterialIcons
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "right",
                  color: "#0099cc"
                }}
                name = "account-balance"
                color = "#0099cc"
                size= {20}
              />
            </Text>
            {/* {(this.state.collegesRender)} */}
            <Text  style = {this.state.textStyles[0] = this.state.colleges[0] ? this.state.textStyles[0] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[0] ? this.state.collegeLinks[0] : "google.com")}}>
              {this.state.colleges[0] = this.state.colleges[0] ? this.state.colleges[0] : ""}
            </Text>
            <Text style = {this.state.weatherStyles[0] = this.state.colleges[0] ? this.state.weatherStyles[0] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[0] ? this.state.collegeLinks[0] : "google.com")}}>
              {this.state.collegeCities[0]}, {this.state.collegeStates[0]} {this.state.collegeTemp[0] ? this.state.collegeTemp[0] : "NULL"}°, {this.state.collegeWeather[0] ? this.state.collegeWeather[0] : "NULL"} <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "tomato"
                                size= {14}
                            />
            </Text>
            <Text style = {this.state.textStyles[1] = this.state.colleges[1] ? this.state.textStyles[1] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[1] ? this.state.collegeLinks[1] : "google.com")}}>
              {this.state.colleges[1] = this.state.colleges[1] ? this.state.colleges[1] : ""}
            </Text>
            <Text style = {this.state.weatherStyles[1] = this.state.colleges[1] ? this.state.weatherStyles[1] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[1] ? this.state.collegeLinks[1] : "google.com")}}>
              {this.state.collegeCities[1]}, {this.state.collegeStates[1]} {this.state.collegeTemp[1] ? this.state.collegeTemp[1] : "NULL"}°, {this.state.collegeWeather[1] ? this.state.collegeWeather[1] : "NULL"} <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "#0099cc"
                                size= {14}
                            />
            </Text>
            <Text style = {this.state.textStyles[2] = this.state.colleges[2] ? this.state.textStyles[2] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[2] ? this.state.collegeLinks[2] : "google.com")}}>
              {this.state.colleges[2] = this.state.colleges[2] ? this.state.colleges[2] : ""}
            </Text>
            <Text style = {this.state.weatherStyles[2] = this.state.colleges[2] ? this.state.weatherStyles[2] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[2] ? this.state.collegeLinks[2] : "google.com")}}>
              {this.state.collegeCities[2]}, {this.state.collegeStates[2]} {this.state.collegeTemp[2] ? this.state.collegeTemp[2] : "NULL"}°, {this.state.collegeWeather[2] ? this.state.collegeWeather[2] : "NULL"} <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "#fff"
                                size= {14}
                            />
            </Text>
            <Text style = {this.state.textStyles[3] = this.state.colleges[3] ? this.state.textStyles[3] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[3] ? this.state.collegeLinks[3] : "google.com")}}>
              {this.state.colleges[3] = this.state.colleges[3] ? this.state.colleges[3] : ""}
            </Text>
            <Text style = {this.state.weatherStyles[3] = this.state.colleges[3] ? this.state.weatherStyles[3] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[3] ? this.state.collegeLinks[3] : "google.com")}}>
              {this.state.collegeCities[3]}, {this.state.collegeStates[3]} {this.state.collegeTemp[3] ? this.state.collegeTemp[3] : "NULL"}°, {this.state.collegeWeather[3] ? this.state.collegeWeather[3] : "NULL"} <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "tomato"
                                size= {14}
                            />
            </Text>
            <Text style = {this.state.textStyles[4] = this.state.colleges[4] ? this.state.textStyles[4] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[4] ? this.state.collegeLinks[4] : "google.com")}}>
              {this.state.colleges[4] = this.state.colleges[4] ? this.state.colleges[4] : ""}
            </Text>
            <Text style = {this.state.weatherStyles[4] = this.state.colleges[4] ? this.state.weatherStyles[4] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[4] ? this.state.collegeLinks[4] : "google.com")}}>
              {this.state.collegeCities[4]}, {this.state.collegeStates[4]} {this.state.collegeTemp[4] ? this.state.collegeTemp[4] : "NULL"}°, {this.state.collegeWeather[4] ? this.state.collegeWeather[4] : "NULL"} <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "#0099cc"
                                size= {14}
                            />
            </Text>
            <Text style = {this.state.textStyles[5] = this.state.colleges[5] ? this.state.textStyles[5] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[5] ? this.state.collegeLinks[5] : "google.com")}}>
              {this.state.colleges[5] = this.state.colleges[5] ? this.state.colleges[5] : ""}
            </Text>
            <Text style = {this.state.weatherStyles[5] = this.state.colleges[5] ? this.state.weatherStyles[5] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[5] ? this.state.collegeLinks[5] : "google.com")}}>
              {this.state.collegeCities[5]}, {this.state.collegeStates[5]} {this.state.collegeTemp[5] ? this.state.collegeTemp[5] : "NULL"}°, {this.state.collegeWeather[5] ? this.state.collegeWeather[5] : "NULL"} <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "#fff"
                                size= {14}
                            />
            </Text>
            <Text style = {this.state.textStyles[6] = this.state.colleges[6] ? this.state.textStyles[6] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[6] ? this.state.collegeLinks[6] : "google.com")}}>
              {this.state.colleges[6] = this.state.colleges[6] ? this.state.colleges[6] : ""}
            </Text>
            <Text style = {this.state.weatherStyles[6] = this.state.colleges[6] ? this.state.weatherStyles[6] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[6] ? this.state.collegeLinks[6] : "google.com")}}>
              {this.state.collegeCities[6]}, {this.state.collegeStates[6]} {this.state.collegeTemp[6] ? this.state.collegeTemp[6] : "NULL"}°, {this.state.collegeWeather[6] ? this.state.collegeWeather[6] : "NULL"} <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "tomato"
                                size= {14}
                            />
            </Text>
            <Text style = {this.state.textStyles[7] = this.state.colleges[7] ? this.state.textStyles[7] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[7] ? this.state.collegeLinks[7] : "google.com")}}>
              {this.state.colleges[7] = this.state.colleges[7] ? this.state.colleges[7] : ""}
            </Text>
            <Text style = {this.state.weatherStyles[7] = this.state.colleges[7] ? this.state.weatherStyles[7] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[7] ? this.state.collegeLinks[7] : "google.com")}}>
              {this.state.collegeCities[7]}, {this.state.collegeStates[7]} {this.state.collegeTemp[7] ? this.state.collegeTemp[7] : "NULL"}°, {this.state.collegeWeather[7] ? this.state.collegeWeather[7] : "NULL"} <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "#0099cc"
                                size= {14}
                            />
            </Text>
            <Text style = {this.state.textStyles[8] = this.state.colleges[8] ? this.state.textStyles[8] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[8] ? this.state.collegeLinks[8] : "google.com")}}>
              {this.state.colleges[8] = this.state.colleges[8] ? this.state.colleges[8] : ""}
            </Text>
            <Text style = {this.state.weatherStyles[8] = this.state.colleges[8] ? this.state.weatherStyles[8] : {height : 0, width : 0}} onPress = {() => {this._goToURL("https://"+ this.state.collegeLinks[8] ? this.state.collegeLinks[8] : "google.com")}}>
              {this.state.collegeCities[8]}, {this.state.collegeStates[8]} {this.state.collegeTemp[8] ? this.state.collegeTemp[8] : "NULL"}°, {this.state.collegeWeather[8] ? this.state.collegeWeather[8] : "NULL"} <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "#fff"
                                size= {14}
                            />
            </Text>
          </View>
          <View style = {{marginTop : 15, alignItems : 'center'}}>
            <Text style = {styles.categoryTitle}>
              Majors <FontAwesome
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "right",
                  color: "tomato"
                }}
                name = "scroll"
                color = "#fff"
                size= {20}
              />
            </Text>
            <Text style = {styles.categoryContent2}>
              {this.state.major1}
            </Text>
            <Text style = {styles.categoryContent2}>
              {this.state.major2}
            </Text>
            <Text style = {styles.categoryContent2}>
              {this.state.major3}
            </Text>
          </View>
          <View style = {{marginTop : 15, alignItems : 'center'}}>
            <Text style = {styles.categoryTitle}>
              Devices <Entypo
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "right",
                  color: "#0099cc"
                }}
                name = "laptop"
                color = "#fff"
                size= {20}
              />
            </Text>
            <Text style = {styles.categoryContent2}>
              {this.state.device1}
            </Text>
            <Text style = {styles.categoryContent2}>
              {this.state.device2}
            </Text>
            <Text style = {styles.categoryContent2}>
              {this.state.device3}
            </Text>
          </View>
      </View>
      <View style = {{height : 60}}>

      </View>
      <View>
        <Text style = {{fontFamily : 'Quicksand', fontSize : 16, color : 'white', paddingBottom : 15, paddingTop : 15, textAlign : 'center'}} onPress = {() => this._goToURL("https://collegeplus.us")}>
          College<Text style = {{color : 'tomato'}}>Plus™</Text>
        </Text>
      </View>
      </ScrollView>
    );
  }
  else if(!this.state.isLoggedIn){
    return (
      
      <ScrollView style ={styles.pickerPage} refreshControl={
        <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />
      }>
      <View style = {{height: 100, justifyContent: 'center', alignItems: 'center'}}>
        <Text style = {{color: 'white', fontSize: 24, fontFamily : "Montserrat-Medium"}}>
        Log Into College<Text style={{color : 'tomato'}}>Plus</Text> {'\n'}
        </Text>
      </View>
      <View style = {{alignItems: "center", height: 120}}>
        <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this.googleSignIn}
        disabled={this.state.isSigninInProgress} />
        <Text style = {{color :"white", width : screenWidth * .8, textAlign :'center', paddingTop : 5}}>
          By clicking this button you agree to our <Text onPress = {() => this._goToURL("https://collegeplus.us/TermsOfService")} style = {{color : "#0099cc"}}>Terms Of Service</Text> and <Text onPress = {() => this._goToURL("https://collegeplus.us/PrivacyPolicy")} style = {{color : "#0099cc"}}>Privacy Policies</Text>
        </Text>      
      </View>
      <View style = {{alignItems: "center", height: 120}}>
        <AppleButton
          buttonStyle={AppleButton.Style.WHITE}
          buttonType={AppleButton.Type.SIGN_IN}
          style={{
            width: 160,
            height: 45,
          }}
          onPress={() => this.onAppleButtonPress()}
        />
        <Text style = {{color :"white", width : screenWidth * .8, textAlign :'center', paddingTop : 5}}>
          By clicking this button you agree to our <Text onPress = {() => this._goToURL("https://collegeplus.us/TermsOfService")} style = {{color : "#0099cc"}}>Terms Of Service</Text> and <Text onPress = {() => this._goToURL("https://collegeplus.us/PrivacyPolicy")} style = {{color : "#0099cc"}}>Privacy Policies</Text>
        </Text> 
      </View>
      <View style={this.state.loadingImageView2}>
          <Image 
            style = {this.state.loadingImage2}
            source = {
                require('./loadingAnimation.gif')
            }
          />
      </View>
      <View>
        <Text style = {{textAlign: 'center', fontSize: 20, color : '#fff', fontFamily : "Montserrat-Medium"}}>
          OR
        </Text>
      </View>
      <View style = {this.state.incorrectStyle = this.state.incorrect? {marginTop : 30} : {height : 0, width : 0}}>
        <Text style = {{color : 'red', textAlign: 'center'}}>
          Incorrect Password/Username
        </Text>
      </View>
      <View style = {{alignItems: "center", marginTop: 30, marginBottom : 30, paddingBottom : 100, borderRadius : 15}}>
        <View style = {this.state.passwordView2}>
          <View style = {{height: 100, marginTop : 40}}>
            <View>
              <Text style = {{textAlign : 'center', color : '#fff', fontSize : 18, paddingBottom : 10, fontFamily : "Montserrat-Medium"}}>
                Username
              </Text>
            </View>
            <View style = {this.state.usernameError}>
              <Text style = {styles.showText}>
                    Invalid Username
                </Text>
            </View>
            <View>
              <TextInput
              style={{height : 30, width: 175, borderRadius: 5, backgroundColor: "#fff", textAlign: 'center'}}
              onChangeText = {(value) => this.handleUsername(value)}
              />
            </View>
          </View>
          <View style = {this.state.passwordView}>
            <Text style = {{textAlign : 'center', color : '#fff', fontSize : 18, paddingBottom : 10, fontFamily : "Montserrat-Medium"}}>
              Password
            </Text>
            <View style = {this.state.passwordError}>
              <Text style = {styles.showText}>
                    Invalid Password
              </Text>
            </View>

            <View style = {{maxWidth : screenWidth * .5, display: 'flex', flexDirection : 'row'}}>
              
              <TextInput
              secureTextEntry={this.state.secureText} 
              style={{height : 30, width: 175, borderRadius: 5, backgroundColor: "#fff", textAlign: 'center'}}
              onChangeText = {(value) => this.handlePassword(value)}
              />
              <TouchableOpacity style = {{marginLeft : 10}} onPress = {() => {this.changeBool()}}>

              <Feather
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "right",
                  color: "#fff"
                }}
                name = {this.state.iconType}
                color = "#fff"
                size= {25}
              />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style = {{minWidth: screenWidth * .25, backgroundColor: '#ff6347', borderRadius: 8, padding: 16, marginTop: 40}} onPress = {() => this.handleSignin()}>
              <Text style = {{textAlign: 'center', fontFamily : "Montserrat-Medium"}}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style = {{alignItems : 'center', marginTop : 35}}>
          <Text style = {{textAlign : 'center', color  : '#0099cc'}} onPress = {() => {this._goToURL("https://collegeplus.us/mobile/ForgotPassword")}}>
                Forgot Password?
          </Text>
        </View>
        <View style={this.state.loadingImageView}>
          <Image 
            style = {this.state.loadingImage}
            source = {
                require('./loadingAnimation.gif')
            }
          />
        </View>
        </View>
        <View style = {{display : 'flex', flexDirection : 'row'}}>
          <View style = {{width : screenWidth * .5, justifyContent : 'center'}}>
            <Text style = {{textAlign : 'right', color : 'white', marginRight : 10, fontFamily : "Quicksand"}}>
              Don't have an account? 
            </Text>
          </View>
          <View style = {{width : screenWidth * .5}}>
            <TouchableOpacity style = {{backgroundColor : 'tomato', width : screenWidth * .3, paddingTop : 10, paddingBottom : 10, borderRadius : 10}} onPress = {() => {navigate("SignUp")}}><Text style = {{textAlign : 'center', fontFamily : "Montserrat-Medium"}}>Sign Up</Text></TouchableOpacity>
          </View>
        </View>
        <View style = {{height : 60}}>

        </View>
        <View>
          <Text style = {{fontFamily : 'Quicksand', fontSize : 16, color : 'white', paddingBottom : 15, paddingTop : 15, textAlign : 'center'}} onPress = {() => this._goToURL("https://collegeplus.us")}>
            College<Text style = {{color : 'tomato'}}>Plus™</Text>
          </Text>
        </View>
      </ScrollView>
    );

  }
  else{
    return(
      <View style = {{alignItems : "center", backgroundColor : "#1A1A1A", height : screenHeight}}>
        <Image 
            style = {{width: 80, height : 80, marginTop : screenHeight * .32}}
            source = {
                require('./loadingAnimation.gif')
            }
          />
      </View>

    );
  }
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
    backgroundColor: "#1a1A1A",
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
    backgroundColor: '#343434',
    elevation: 0,
    shadowOpacity: 0,
  },
  showText : {
    height: 30,
    color : 'red',
    fontSize : 15,
    textAlign : 'center', 
    fontFamily : "Quicksand"
  },
  categoryTitle : {
    textAlign : 'center',
    fontSize : 24,
    color : 'tomato',
    maxWidth : screenWidth * .5,
    borderBottomWidth : 2,
    borderBottomColor : '#0099cc',
    marginBottom : 5,
    fontFamily : "Montserrat-Medium"
  },
  categoryContent  : {
    color : 'white',
    textAlign : 'center',
    fontSize : 18,
    fontFamily : "Quicksand"
  },
  categoryContent2  : {
    color : 'white',
    textAlign : 'center',
    fontSize : 18, 
    marginBottom : 10,
    maxWidth : screenWidth * .5,
    fontFamily : "Quicksand"

  },
  weatherFont : {
    color : 'white',
    fontSize : 14,
    marginBottom : 15,
    fontFamily : "Quicksand"

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

export default ProfileScreen;
