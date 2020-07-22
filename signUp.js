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
import { GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-community/google-signin';
import CookieManager from 'react-native-cookies';
import { TextInput } from 'react-native-paper';
import {Dimensions } from "react-native";
import CheckBox from '@react-native-community/checkbox';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

// GoogleSignin.configure();



GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: '224517218415-g481q73mv6i9e6sao3p0362ic4tf5368.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  // hostedDomain: '', // specifies a hosted domain restriction
  // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  // forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
  // accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: '224517218415-kjmq6c87vcpm05f5487isf24a2cnvkki.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});
// import * as firebase from 'firebase';
//
// firebase.initializeApp(environment.firebase);

// import firestore from '@react-native-firebase/firestore';


// import Datastore from '@google-cloud/datastore';
//
// const datastore = new Datastore();


class SignUpScreen extends Component{
  
  constructor(props) {
    super(props);
    this.exampleRef = this.updateRef.bind(this, 'text');
    this.smallRef = React.createRef();

    this.state = {
      text: 'h',
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
      gpa : "",
      ACT : "",
      SAT : "",
      cookies : {},
      secureText : true,
      iconType : "eye-off",
      usernameError : {height : 0},
      passwordError : {height: 0},
      valUser : false,
      valPassword : false,
      passwordView : {height: 200, alignItems : 'center', marginTop : 5},
      passwordView2 : {width: screenWidth*.7, alignItems: 'center', borderWidth: 4, borderColor : 'tomato', paddingBottom : 30, backgroundColor : "#000000", borderRadius : 15},
      loadingImage : {width: 0, height : 0},
      currentlyLoading : false,
      refreshing: false,
      message : "",
      checked : false,
      checked2 : false,
      incorrectStyle : {},
      incorrect : false,
      loadingImageView : {height : 0, width : 0},
      loadingImage : {height : 0, width : 0},
      loadingImageView2 : {height : 0, width : 0},
      loadingImage2 : {height : 0, width : 0},
    };
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    // fetchData().then(() => {
    //   this.setState({refreshing: false});
    // });
    // this.googleLogIn();
    this.setState({refreshing : false});
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
      await this.isSignedIn();
      await this.googleSignInMethod();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("SIGN IN CANCELLED");
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("PLAY SERVICES NOT AVAILABLE");
        // play services not available or outdated
      } else {
        console.log("OTHER");
        // some other error happened
      }
    }
  };

  getCookies =async () => {
    CookieManager.getAll()
    .then((res) => {
      console.log('CookieManager.getAll =>', res);
      this.setState({password : res["collegePlusPassword"]["value"]});
      this.setState({username : res["collegePlusUsername"]["value"]});
      // this.callAPI(this.state.username, this.state.password); 
      if(Object.keys(res).length === 0 && res.constructor === Object){
        this.setState({isLoggedIn : false});
      }
      else{
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
    //   this.callAPI(this.state.username, this.state.password); 
    //   if(Object.keys(res).length === 0 && res.constructor === Object){
    //     this.setState({isLoggedIn : false});
    //   }
    //   else{
    //     this.setState({isLoggedIn : true});
    //   }
    //   console.log(this.state.isLoggedIn);    
    // });
    // ;
  }

  cypher(stringVal){
    let sentVar = "";
    let arr = ["a", "b", "c", "f", "y"];
    for(var i = 0 ; i < stringVal.length ; i++){
      sentVar = sentVar.concat((stringVal.charCodeAt(i)/2).toString()+arr[Math.floor(Math.random() * 5)]);
    }
    console.log(sentVar);
    return sentVar;
  }

  setCookies = (username, password) => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear()+1;
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
    console.log("isSignedIn");
    const isSignedIn = await GoogleSignin.isSignedIn();
    this.setState({ isLoggedIn: isSignedIn });
  };

  getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    this.setState({ userInfo: currentUser });
  };

  googleLogIn(){
    let temp = this.state.username;
    fetch("https://collegeplus.us/showData2?username="+this.cypher(temp) + "&apiKey="+ this.cypher("seunsSpecificKey21382947"))
      .then(response => response.json())
      .then((responseJson)=> {
        console.log(this.state.username);
        this.setState({
        dataSource: responseJson
        });
        if(this.state.text != '0'){
          this.setState({isLoggedIn : true});
        }
        this.setState({currentlyLoading : false});      

        // loadingImage = {width: 0, height : 0};
      })
      .catch(error=>console.log(error)); //to catch the errors if any
  }

  googleSignInMethod = async() => {
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&");
      if(!this.state.isLoggedIn && this.state.checked){
        console.log(this.state.checked);
        console.log("NOT LOGGED IN");
        await this.signIn();
      }
      if(this.state.isLoggedIn && this.state.checked){
        console.log("CHECKED: ", this.state.checked);
        this.setState({currentlyLoading : true});
        this.getCurrentUser();
        console.log(this.state.userInfo);
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
        if(valUser && valPassword){
          fetch("https://collegeplus.us/addGoogleNewUser?username="+this.cypher(temp) + "&apiKey="+ this.cypher("seunsSpecificKey21382947"))
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
      }
  }

  setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
  }

  UNSAFE_componentWillMount = async() => {
    console.log("here sign in");
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

  deleteCookies(){
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
  callAPI(username, password){
    const {navigate} = this.props.navigation;
    console.log("https://collegeplus.us/addNewUser?username=" + username + "&password=" +this.cypher(password) + "&apiKey="+ this.cypher("seunsSpecificKey21382947"));
    fetch("https://collegeplus.us/addNewUser?username=" + username + "&password=" +this.cypher(password) + "&apiKey="+ this.cypher("seunsSpecificKey21382947"))
    .then(response => response.json())
    .then((responseJson)=> {
        console.log("PROFILE");
        this.setState({
        dataSource: responseJson
        });
        if(responseJson["message"] == "signed in"){
            this.setCookies(this.state.username, this.state.password);
            this.props.navigation.popToTop();
        }
        else{
            this.setCookies(this.state.username, this.state.password);
            this.props.navigation.popToTop();
        }
        this.setState({currentlyLoading : false, loadingImage : {height : 0, width : 50}, loadingImageView : {height : 0, width : 0}});
        // loadingImage = {width: 0, height : 0};
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
        else if(tempUsername.charAt(i) == '.' && indexOfDot == 0){
            indexOfDot = i;
        }
    }
    if(indexOfAt == 0 || indexOfDot == 0 || indexOfAt > indexOfDot || containsSpace){
        this.setState({usernameError : {height: 50, color: 'red', fontSize: 15}});
        this.setState({valUser : false});
        this.setState({passwordView : {height: 210, alignItems : 'center', marginTop : 30}});
    }
    else{
        this.setState({valUser : true});
        this.setState({usernameError : {height : 0}});
        this.setState({username : value});
        this.setState({passwordView : {height: 200, alignItems : 'center', marginTop : 5}});
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
        this.setState({passwordView2 : {width: screenWidth*.7, alignItems: 'center', borderWidth: 4, borderColor : 'tomato', paddingBottom : 30, backgroundColor : "#000000", borderRadius : 15}});
        this.setState({ passwordView : {height: 200, alignItems : 'center', marginTop : 5} });
    }
    else{
        this.setState({passwordError : {height : 30}})
        this.setState({valPassword : false});
        this.setState({passwordView2 : {width: screenWidth*.7, alignItems: 'center', borderWidth: 4, borderColor : 'tomato', paddingBottom : 30, backgroundColor : "#000000", borderRadius : 15}});
        this.setState({ passwordView : {height: 230, alignItems : 'center', marginTop : 5} });
    }
  }

  handleSignin(){
    if(this.state.valPassword && this.state.valUser && this.state.checked2){
      this.setState({currentlyLoading : true, loadingImage : {height : 50, width : 50}, loadingImageView : {marginBottom: 35, flex: 1,marginTop: 50, alignItems: 'center'}});
      this.callAPI(this.state.username, this.state.password);
      this.setState({currentlyLoading : false});
    }
  }



    render(){

      // this.getCookies();
       let { text } = this.state;
      let data = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pear',
      }];
        return (
        <ScrollView style ={styles.pickerPage}>
        <View style = {{height: 100, justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{color: 'white', fontSize: 24, fontFamily : "Montserrat-Medium"}}>
            Sign Up for College<Text style={{color : 'tomato'}}>Plus</Text>{'\n'}
            </Text>
        </View>
        {/*<View style = {{alignItems: "center", height: 70}}>
            <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.googleSignInMethod}
            disabled={this.state.isSigninInProgress} />
        </View>
        <View style = {{marginBottom : 30, alignItems : 'center'}}>
          <View style = {{display : "flex", flexDirection: "row", width : screenWidth * .8}}>
            <CheckBox
              tintColors = {{true : "#ffffff",false : "#ffffff"}}
              value={this.state.checked}
              onValueChange={(value) => {this.setState({checked : value}); console.log(this.state.checked)}}
            />
            <Text style = {{color :"white"}}>
              By Checking this box you agree to our <Text onPress = {() => this._goToURL("https://collegeplus.us/TermsOfService")} style = {{color : "#0099cc"}}>Terms Of Service</Text> and <Text onPress = {() => this._goToURL("https://collegeplus.us/PrivacyPolicy")} style = {{color : "#0099cc"}}>Privacy Policies</Text>
            </Text>
          </View>
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
            </View>*/}
        <View style = {{alignItems: "center", marginTop: 30, marginBottom : 0, borderBottomWidth : 0, paddingBottom : 100, borderRadius : 15}}>
            <View style = {this.state.passwordView2}>
            <View style = {{height: 100, marginTop : 40}}>
                <View>
                <Text style = {{textAlign : 'center', color : '#fff', fontSize : 18, paddingBottom : 10, fontFamily : "Montserrat-Medium"}}>
                    Email
                </Text>
                </View>
                <View style = {this.state.usernameError}>
                <Text style = {styles.showText}>
                        Invalid Email
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
                Password (1 special character and 1 number)
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
                <View style = {{display : "flex", flexDirection: "row", width : screenWidth * .5, marginTop : 25}}>
                  <CheckBox
                    tintColors = {{true : "#ffffff",false : "#ffffff"}}
                    value={this.state.checked2}
                    onValueChange={(value) => {this.setState({checked2 : value}); console.log(this.state.checked2)}}
                  />
                  <Text style = {{color : "white", paddingRight : 20, paddingLeft : 10, fontSize: 13}}>
                    By Checking this box you agree to our <Text onPress = {() => this._goToURL("https://collegeplus.us/TermsOfService")} style = {{color : "#0099cc"}}>Terms Of Service</Text> and <Text onPress = {() => this._goToURL("https://collegeplus.us/PrivacyPolicy")} style = {{color : "#0099cc"}}>Privacy Policies</Text>
                  </Text>
              </View>
                <TouchableOpacity style = {{minWidth: screenWidth * .25, backgroundColor: '#0099cc', borderRadius: 8, padding: 16, marginTop: 40}} onPress = {() => this.handleSignin()}>
                <Text style = {{textAlign: 'center', fontFamily : "Montserrat-Medium"}}>
                    Sign Up
                </Text>
                </TouchableOpacity>
            </View>
            </View>

        </View>
        <View style={this.state.loadingImageView}>
          <Image 
            style = {this.state.loadingImage}
            source = {
                require('./loadingAnimation.gif')
            }
          />
        </View>
        <View>
          <Text style = {{fontFamily : 'Quicksand', fontSize : 16, color : 'white', paddingBottom : 15, paddingTop : 15, textAlign : 'center'}} onPress = {() => this._goToURL("https://collegeplus.us")}>
            College<Text style = {{color : 'tomato'}}>Plus™</Text>
          </Text>
        </View>
        </ScrollView>
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
    color : 'white',
    maxWidth : screenWidth * .5,
    borderBottomWidth : 2,
    borderBottomColor : 'white',
    marginBottom : 5
  },
  categoryContent  : {
    color : 'white',
    textAlign : 'center',
    fontSize : 18
  },
  categoryContent2  : {
    color : 'white',
    textAlign : 'center',
    fontSize : 18, 
    marginBottom : 10,
    maxWidth : screenWidth * .5
  },
  weatherFont : {
    color : 'white',
    fontSize : 14,
    marginBottom : 15
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
export default SignUpScreen;
