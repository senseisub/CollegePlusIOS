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
// import { Dropdown } from 'react-native-material-dropdown';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-ionicons'
import CookieManager from 'react-native-cookies';
import {Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get('window').width);
let loadingImage = {width: 0, height : 0};
let buttonStyle = {maxWidth: screenWidth * .4, backgroundColor: '#0099cc', borderRadius: 8, padding: 16, marginTop: 20};
const mainColors = ['tomato', '#0099cc'];

let questions1 = [
  {value: "I find circuits and wiring fascinating", },
 { value: "I find nuclear energy fascinating", },
 { value: "I find digging for oil fascinating", },
 { value: "I have always been interested in how roads, bridges, and buildings are built" }];

let questions2 = [{value: "I'm super interested in how technology can help the human body"},
               {value: "Fascinated with the way food is made, and the things that go into it"},
               {value: "I've always wanted to build a computer"},
               {value: "Nuclear energy is the future and I want to help spread the benefits of it"}];

let questions3 = [{value: "Good at figuring out the best way to do things efficiently."},
           {value: "I'm more interested in how technology can help the environment"},
           {value: "Curious about how we can maximize our ways of getting fossil fuels, making it more efficient"},
           {value: "Decent of coding, but I don't want to do it as a career"}];

let questions4 = [{value: "I would like building a robot"},
               {value: "I would like playing with legos even now"}];


class EngineeringPickerScreen extends Component{

  constructor(props) {
    super(props);
    this.exampleRef = this.updateRef.bind(this, 'text');
    this.smallRef = React.createRef();
    this.state = {
      civil : 0,
      electrical : 0, 
      chemical : 0,
      petroleum : 0,
      environmental : 0,
      biomedical : 0,
      computer : 0,
      nuclear : 0,
      top3: [],
      firstPick : "",
      secondPick : "",
      thirdPick : "",
      clickedin : false,
      username : "",
      password : "s",
      isLoggedIn : false
    };
  }
  // let list1 = [this.state.ethnic, this.state.engineering, this.state.communication, this.state.legal, this.state.english, this.state.biological, this.state.computer, this.state.education, this.state.political, this.state.business, this.state.economics, this.state.nursing, this.state.finance, this.state.history],
  // const    list2 = ["Ethnic and Gender Studies", "Engineering", "Communication", "Legal Studies", "English", "Biological Sciences", "Computer Science", "Education", "Political Science", "Business", "Economics", "Nursing", "Finance", "History"]
  UNSAFE_componentWillMount = async() => {
    console.log("here");
    await this.getCookies();
    this.setState({clickedin : false });
    // console.log(this.state.cookies["collegePlusPassword"]);
    // this.setState({password : this.state.cookies["collegePlusPassword"]});
    // this.setState({username : this.state.cookies["collegePlusUsername"]});
    // console.log(this.state.username + " " + this.state.password);
    // this.callAPI(this.state.username, this.state.password);
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
    render(){
       const { navigate } = this.props.navigation;
       let { text } = this.state;

  return (
    <ScrollView style ={styles.pickerPage}>
      <View style = {{height: 200, justifyContent: 'center', alignItems: 'center'}}>
        <Text style = {{color: 'white', fontSize: 24}}>
        </Text>
        <Text style = {{maxWidth: 350, alignItems: 'center', textAlign: 'center'}}>
          <Text style = {{color: 'white', fontSize: 18, textAlign: 'center', maxWidth: 375, fontFamily: 'Montserrat-Medium', lineHeight : 26}}>
            Don't know which engineering track you weant to pursue? Let's help you figure it out!{'\n'} </Text>
        </Text>
      </View>
      <View style = {styles.dropDownView}>
        <Text style ={styles.TextLabel}> Select the statement that you identify the most with </Text>
        <Dropdown label='Ex. I am a student'
        // value = {hbcu[0].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => this.question1function(value)}
        data={questions1}
        containerStyle = {{backgroundColor: mainColors[Math.floor(Math.random() * 2)], borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, minWidth: screenWidth * .9, paddingLeft: 10}}
        baseColor = "#000000"
        dropdownOffset = {{top: 16}}
        pickerStyle = {{borderBottomColor: 'transparent'}}
        inputContainerStyle={{ borderBottomWidth: 0, minWidth: screenWidth * .8, maxWidth: screenWidth * .9}}
        labelFontSize={0}
        itemTextStyle = {{ fontFamily: 'Montserrat-Medium'}}

        />
      </View>
      <View style = {styles.dropDownView}>
        <Text style ={styles.TextLabel}> Select the statement that you identify the most with </Text> 
        <Dropdown label='Ex. I am in school'
        // value = {allWomens[0].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => this.question2function(value)}
        data={questions2}
        containerStyle = {{backgroundColor: mainColors[Math.floor(Math.random() * 2)], borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, minWidth: screenWidth * .9, paddingLeft: 10}}
        baseColor = "#000"
        dropdownOffset = {{top: 16}}
        pickerStyle = {{borderBottomColor: 'transparent'}}
        inputContainerStyle={{ borderBottomWidth: 0, minWidth: screenWidth * .8, maxWidth: screenWidth * .9 }}
        labelFontSize={0}
        itemTextStyle = {{ fontFamily: 'Montserrat-Medium'}}

        />
      </View>
      <View style = {styles.dropDownView}>
        <Text style ={styles.TextLabel}> I feel like I am ... </Text>
        <Dropdown label='Ex. Studying too hard'
        // value = {universitySize[1].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => this.question3function(value)}
        data={questions3}
        containerStyle = {{backgroundColor: mainColors[Math.floor(Math.random() * 2)], borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, minWidth: screenWidth * .9, paddingLeft: 10}}
        baseColor = "#000"
        dropdownOffset = {{top: 16}}
        pickerStyle = {{borderBottomColor: 'transparent'}}
        inputContainerStyle={{ borderBottomWidth: 0, minWidth: screenWidth * .8, maxWidth: screenWidth * .9 }}
        labelFontSize={0}
        itemTextStyle = {{ fontFamily: 'Montserrat-Medium'}}

        />
      </View>
      <View style = {styles.dropDownView}>
        <Text style ={styles.TextLabel}> I feel like...</Text>
        <Dropdown label='Ex. the best student I can be'
        // value = {householdIncome[1].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => {this.question4function(value)}}
        data={questions4}
        containerStyle = {{backgroundColor: mainColors[Math.floor(Math.random() * 2)], borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, minWidth: screenWidth * .9, paddingLeft: 10}}
        baseColor = '#000'
        dropdownOffset = {{top: 16}}
        pickerStyle = {{borderBottomColor: 'transparent'}}
        inputContainerStyle={{ borderBottomWidth: 0, minWidth: screenWidth * .8, maxWidth: screenWidth * .9 }}
        labelFontSize={0}
        itemTextStyle = {{ fontFamily: 'Montserrat-Medium'}}

        />
      </View>
      <View style={{marginBottom: 35, flex: 1,marginTop: 10, alignItems: 'center'}}>
        <Image 
          style = {loadingImage}
          source = {
              require('./loadingAnimation.gif')
          }
        />
        <TouchableOpacity style={buttonStyle} onPress={()=> {this.setState({clickedin : true}); this.calculate()}}>
          <Text style={{textAlign: 'center',fontFamily: 'Montserrat-Medium'}}>
            See Results
          </Text>
        </TouchableOpacity>
    </View>
    <View>
        <Text style = {{fontFamily : 'Quicksand', fontSize : 16, color : 'white', paddingBottom : 15, paddingTop : 15, textAlign : 'center'}} onPress = {() => this._goToURL("https://collegeplus.us")}>
          College<Text style = {{color : 'tomato'}}>Plus™</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

    question1function(value){
        switch(value){
          case "I find circuits and wiring fascinating":
            this.setState({electrical : this.state.electrical+1});
            break;
          case "I find nuclear energy fascinating":
            this.setState({nuclear : this.state.nuclear+1});
            break;
          case "I find digging for oil fascinating":
            this.setState({petroleum : this.state.petroleum+1});
            break;
          case "I have always been interested in how roads, bridges, and buildings are built.":
            this.setState({civil : this.state.civil+1});
            break;
          default:
            break;
        }
    }

    question2function(value){
      switch(value){
        case "I'm super interested in how technology can help the human body":
          this.setState({biomedical : this.state.biomedical+1});
          break;
        case "Fascinated with the way food is made, and the things that go into it":
          this.setState({chemical : this.state.chemical+1});
          break;
        case "I've always wanted to build a computer":
          this.setState({computer : this.state.computer+1});
          break;
        case "Nuclear energy is the future and I want to help spread the benefits of it":
          this.setState({nuclear : this.state.nuclear+1});
          break;
        default:
          break;
      }
    }

    question3function(value){
      switch(value){
        case "Good at figuring out the best way to do things efficiently.":
          this.setState({chemical : this.state.chemical+1});
          break;
        case "I'm more interested in how technology can help the environment":
          this.setState({biomedical : this.state.biomedical+1});
          break;
        case "Curious about how we can maximize our ways of getting fossil fuels, making it more efficient":
          this.setState({petroleum : this.state.petroleum+1});
          break;
        case "Decent of coding, but I don't want to do it as a career":
          this.setState({computer : this.state.computer+1});
          break;
        default:
          break;
      }
    }

    question4function(value){
      switch(value){
        case "I would like building a robot":
          this.setState({electrical : this.state.electrical+1});
          break;
        case "I would like playing with legos even now":
          this.setState({civil : this.state.civil+1});
          break;
        default:
          break;
      }
    }

    
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
        else{
          console.log(res);
          this.setState({isLoggedIn : true});
        }
      });
      await console.log(this.state.username);
    }

    setDatastore(major1){
      console.log("DATASTORE");
  
        if(this.state.isLoggedIn){
          major1 = major1.replace(new RegExp(' ', 'g'), '+');
          let url = "https://collegeplus.us/setData?username=" + this.state.username + "&password=" + this.state.password + "&colleges=&collegeweathers=&collegetemps=&collegecities=&collegestates=&collegelinks=&major1="+ major1 +"&major2=&major3=&device1=&device2=&device3=&gpa=&usersat=&useract=&gpa=&userCity=&userState=&apiKey=seunsSpecificKey21382947";
          if(this.state.password == "~"){
            url = "https://collegeplus.us/setData?username=" + this.state.username + "&password=" + this.state.password + "&colleges=&collegeweathers=&collegetemps=&collegecities=&collegestates=&collegelinks=&major1="+ major1 +"&major2=&major3=&device1=&device2=&device3=&gpa=&usersat=&useract=&gpa=&userCity=&userState=&apple=TRUE&apiKey=seunsSpecificKey21382947";
          }
          else{
            url = "https://collegeplus.us/setData?username=" + this.state.username + "&password=" + this.state.password + "&colleges=&collegeweathers=&collegetemps=&collegecities=&collegestates=&collegelinks=&major1="+ major1 +"&major2=&major3=&device1=&device2=&device3=&gpa=&usersat=&useract=&gpa=&userCity=&userState=&apple=FALSE&apiKey=seunsSpecificKey21382947";
          }
          console.log(url);
          fetch(url)
          .then(response => response.json())
          .then((responseJson)=> {
            console.log("IN THE DATASTORE");
          })
          .catch(error=>console.log(error)); //to catch the errors if any
        }
    }

    calculate(){
        const { navigate } = this.props.navigation;
        if(this.state.clickedin){
          loadingImage = {width: 50, height: 50};
        }
        let mainList = [this.state.civil, this.state.electrical, this.state.chemical, this.state.environmental, this.state.biomedical, this.state.computer, this.state.nuclear];
        let names = ["Civil Engineering", "Electrical Engineering", "Chemical Engineering", "Petroleum Engineering", "Environmental Engineering", "Biomedical Engineering", "Computer Engineering", "Nuclear Engineering"];

        var comparisonList = mainList;
        var realTop3 = [];
        while(realTop3.length < 3){
            var tempIndex =  0;
            for(var i = 0; i < comparisonList.length; i++){
                if(comparisonList[i] > comparisonList[tempIndex]){
                    tempIndex = i;
                }
                if(i == (comparisonList.length - 1)){
                  realTop3.push(names[tempIndex]);
                  comparisonList.splice(tempIndex, 1);
                  names.splice(names[tempIndex], 1);
                }
            }
        }
      loadingImage = {width: 0, height: 0};
      this.setDatastore(realTop3[0]);
      navigate("EngineeringRecommendations", {firstPick : realTop3[0], secondPick : realTop3[1], thirdPick : realTop3[2]});
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
    backgroundColor: '#343434',
    elevation: 0,
    shadowOpacity: 0,
  },
  TextLabel : {
    color : 'white',
    marginTop : 30,
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',    
    fontFamily: 'Montserrat-Medium'

  },
  littleText : {
    maxWidth: screenWidth * .8,
    color: 'white',
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 12
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
export default EngineeringPickerScreen;
