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
//import { isNumber } from 'firebase-admin/lib/utils/validator';
import { TextInput } from 'react-native-paper';
const screenWidth = Math.round(Dimensions.get('window').width);
const mainColors = ['tomato', '#0099cc'];


// import * as firebase from 'firebase';
//
// firebase.initializeApp(environment.firebase);

// import firestore from '@react-native-firebase/firestore';


// import Datastore from '@google-cloud/datastore';
//
// const datastore = new Datastore();

class DegreeRecommendations extends Component{

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
      users: [],
      engineering : {marginTop : 20, height : 20},
      firstPick : this.props.route.params.firstPick
    };
  }

  UNSAFE_componentWillMount(){
    if(this.state.firstPick != "Engineering"){
      this.setState({engineering : {height : 0, width: 0}});
    }
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
        const firstPick = this.props.route.params.firstPick;
        const secondPick = this.props.route.params.secondPick;
        const thirdPick = this.props.route.params.thirdPick;
        const firstPickDescription = this.props.route.params.firstPickDescription;
        const secondPickDescription = this.props.route.params.secondPickDescription;
        const thirdPickDescription = this.props.route.params.thirdPickDescription;
        const firstPickURL = this.props.route.params.firstPickURL;
        const secondPickURL = this.props.route.params.secondPickURL;
        const thirdPickURL = this.props.route.params.thirdPickURL;       

        return (
            <>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#1A1A1A" translucent = {true}/>
            <ScrollView style ={styles.pickerPage}>
              <View style = {{alignItems : 'center'}}> 
                <View style= {styles.wholeView}>
                    <Text style = {styles.header}>
                        1 .{firstPick}
                    </Text>
                    <View style = {this.state.engineering}>
                      <Text style = {{fontFamily : "Quicksand", color : "white", fontSize : 16}} onPress = {() => {this.props.navigation.navigate("EngineeringPicker")}}>
                        Learn More <Text style={{color : "tomato"}}>></Text>
                      </Text>
                    </View>
                    <Text style = {styles.descriptionText}>
                        {firstPickDescription}
                      </Text>
                      <View style = {{marginTop : 25}}>
                        <TouchableOpacity style = {styles.learnMoreButton} onPress = {() => {this._goToURL(firstPickURL)}}>
                          <Text style = {{fontFamily : "Montserrat-Medium", fontSize : 16}}>
                            Learn More about this major
                          </Text>
                        </TouchableOpacity>
                      </View>
                </View>
                <View style= {styles.wholeView}>
                    <Text style = {styles.header}>
                        2. {secondPick}
                    </Text>
                    <Text style = {styles.descriptionText}>
                        {secondPickDescription}
                    </Text>
                    <View style = {{marginTop : 25}}>
                        <TouchableOpacity style = {styles.learnMoreButton} onPress = {() => {this._goToURL(secondPickURL)}}>
                          <Text style = {{fontFamily : "Montserrat-Medium", fontSize : 16}}>
                            Learn More about this major
                          </Text>
                        </TouchableOpacity>
                      </View>
                </View>
                <View style= {styles.wholeView}>
                    <Text style = {styles.header}>
                        3. {thirdPick}
                    </Text>
                    <Text style = {styles.descriptionText}>
                        {thirdPickDescription}
                    </Text>
                    <View style = {{marginTop : 25}}>
                        <TouchableOpacity style = {styles.learnMoreButton} onPress = {() => {this._goToURL(thirdPickURL)}}>
                          <Text style = {{fontFamily : "Montserrat-Medium", fontSize : 16}}>
                            Learn More about this major
                          </Text>
                        </TouchableOpacity>
                      </View>
                </View>
              </View>
              <View style={{height : 100}}>

              </View>
              <View>
                <Text style = {{fontFamily : 'Quicksand', fontSize : 16, color : 'white', paddingBottom : 15, paddingTop : 15, textAlign : 'center'}} onPress = {() => this._goToURL("collegeplus.us")}>
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
    backgroundColor: "#1A1A1A",
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
      borderBottomWidth: 2,
      borderRadius: 15,
      backgroundColor: '#1A1A1A', 
      marginBottom : 20,
      paddingBottom : 40,
      width : screenWidth * .8, 
      borderBottomColor : 'white'
  },
  header : {
      color: 'white', 
      fontWeight: '600',
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Montserrat-Medium'

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
  },

  descriptionText : {
    marginTop : 15,
    fontFamily : "Quicksand",
    fontSize : 18, 
    lineHeight : 24,
    color : "white",
    textAlign : "center"
  },

  learnMoreButton : {
    padding : 16,
    backgroundColor : mainColors[Math.floor(Math.random() * 2)],
    borderRadius : 10
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
export default DegreeRecommendations;
