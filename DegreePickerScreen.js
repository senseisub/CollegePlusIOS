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
  {value: "I find studying individuals backgrounds and gender roles interesting", },
 { value: "I enjoy studying the way individuals comunicate their ideas with others", },
 { value: "I could spend hours behind a computer exploring how tech works", },
 { value: "I enjoy teaching others things I have learned" },
 { value: "I enjoy reading about public policy.", },
 { value: "I enjoy learning about the ecocomy and how it works", },
 { value: "I am really interested in any type of history." }];

let questions2 = [{value: "I enjoy using math and science to build things"},
               {value: "I value using evidience and logic to support an argument"},
               {value: "I appreciate literature and read & analyze text for fun"},
               {value: "I am interested in studying live organisms and how they work"},
               {value: "I like finding different ways to make money."},
               {value: "I take pride in the fact that I like taking care of people"}];

let questions3 = [{value: "An independent, open-minded, and critical thinker."},
           {value: "Fascinated by all forms of mass media, from the Internet to TV to magazines."},
           {value: "Curious about human behavior, organized, good with numbers, and a good communicator."},
           {value: "Patient, well organized, and flexible. I am fascinated by the learning process."},
           {value: "A good leader and I would be a really good president."},
           {value: "Pretty good at understanding how money works and how it travels."},
           {value: "Really good at piecing together historical events."}];

let questions4 = [{value: "Good at math and science and interested in working with people. "},
               {value: "Fascinated by the relationship between law and society."}, 
               {value: "A person who loves to read different types of texts and who enjoys analyzing literary pieces."}, 
               {value : "A nature lover. I love animals and plants and enjoy learning why life exists and behaves the way it does."},
               {value: "Good at selling things and have a knack for getting money."}, 
               {value : "Good at knowing how to take care of injuries or sicknesses"}];

let questions5 = [{value: "Anthropology"}, 
                 {value: "Media Criticism"}, 
                 {value: "A independent project where I create a program"}, 
                 {value: "A semester taught teaching kids"},
                 {value: "Shadowing a politician and learning politics."}, 
                 {value: "Economics 101: The Stock Market"}, 
                 {value: "US History"}];

let questions6 = [{value: "Intro to Engineering"},
 {value: "Legal Research and Writing"},
 {value: "British and American literature"}, 
 {value: "Plant Anatomy"},
 {value: "Microeconomics"}, 
 {value: "Human anatomy"}];

let questions7 = [{value: "When individuals are not interested in others culture"},
 {value: "When people are bad communicators"},
 {value: "When I don't understand how a piece of software works"},
 {value: "When others are not willing to help others with coursework"},
 {value: "When people don't vote"},
 {value: "When people don't understand or try to understand how money works"},
 {value: "When people talk about past events but actually have no idea what happened"}];

let questions8 = [{value: "When people don't put effort into problemsolving"},
 {value: "When somebody cannot support their argument"},
 {value: "Bad grammar. Enough said."},
 {value: "Not being outside enough"},
 {value: "When people complain about not having money without thinking of ways to make it."},
 {value: "When people don't know how to take care of their health."}];

let questions9 = [{value: "Anthropologist"},
 {value: "Public Relations Manager"},
 {value: "Software Engineer"},
 {value: "Teacher"},
 {value: "Mayor of my city"},
 {value: "Stock Broker"},
 {value: "Historian"}];
                 
let questions10 = [{value: "Engineer"},
 {value: "Lawyer"},
 {value: "English Professor"},
 {value: "Biologist"},
 {value: "COO of a company"},
 {value: "Nurse"}];

class DegreePickerScreen extends Component{

  constructor(props) {
    super(props);
    this.exampleRef = this.updateRef.bind(this, 'text');
    this.smallRef = React.createRef();
    this.state = {
      ethnic : 0,
      engineering : 0,
      communication : 0,
      legal : 0,
      english : 0,
      biological : 0,
      computer : 0,
      education : 0,
      political : 0,
      business : 0,
      economics : 0,
      nursing : 0,
      finance : 0,
      history : 0,
      kinesiology : 0,
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
            Don't know what major you want to pursure or what you want to study?{'\n'} </Text>
            <Text style = {{color: 'white', fontSize: 18, textAlign: 'center', maxWidth: 375, fontWeight: 'bold'}}> DegreePicker</Text>
            <Text style = {{color: 'white', fontSize: 18, textAlign: 'center', maxWidth: 375,fontFamily: 'Montserrat-Medium'}}> is a CollegePlus feature to help you figure out what general major to study. The results are general majors to study that you can research for more specific majors or specializations{'\n'}
          </Text>
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
        containerStyle = {{backgroundColor: mainColors[Math.floor(Math.random() * 2)], borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, minWidth: screenWidth * .9, paddingLeft: 10, fontFamily : "Montserrat-Medium"}}
        baseColor = "#000000"
        dropdownOffset = {{top: 16}}
        pickerStyle = {{borderBottomColor: 'transparent', fontFamily : "Montserrat-Medium"}}
        inputContainerStyle={{ borderBottomWidth: 0, minWidth: screenWidth * .8, maxWidth: screenWidth * .9, fontFamily : "Montserrat-Medium"}}
        labelFontSize={0}
        itemTextStyle = {{ fontFamily: 'Montserrat-Medium'}}
        // labelTextStyle={{fontFamily : "Montserrat-Medium"}}
        // titleTextStyle={{fontFamily : "Montserrat-Medium"}}
        // affixTextStyle={{fontFamily : "Montserrat-Medium"}}
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
        <Text style ={styles.TextLabel}> I feel like I am ... </Text>
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
      <View style = {styles.dropDownView}>
        <Text style ={styles.TextLabel}> Select a course that interests you </Text>
        <Dropdown label='Ex. Calculus 1300'
        // value = {householdIncome[1].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => {this.question5function(value)}}
        data={questions5}
        containerStyle = {{backgroundColor: mainColors[Math.floor(Math.random() * 2)], borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, minWidth: screenWidth * .9, paddingLeft: 10}}
        baseColor = '#000'
        dropdownOffset = {{top: 16}}
        pickerStyle = {{borderBottomColor: 'transparent'}}
        inputContainerStyle={{ borderBottomWidth: 0, minWidth: screenWidth * .8, maxWidth: screenWidth * .9 }}
        labelFontSize={0}
        itemTextStyle = {{ fontFamily: 'Montserrat-Medium'}}

        />
      </View> 
      <View style = {styles.dropDownView}>
        <Text style ={styles.TextLabel}> Select a course that interests you </Text>
        <Dropdown label='Ex. English 1300'
        // value = {householdIncome[1].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => {this.question6function(value)}}
        data={questions6}
        containerStyle = {{backgroundColor: mainColors[Math.floor(Math.random() * 2)], borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, minWidth: screenWidth * .9, paddingLeft: 10}}
        baseColor = '#000'
        dropdownOffset = {{top: 16}}
        pickerStyle = {{borderBottomColor: 'transparent'}}
        inputContainerStyle={{ borderBottomWidth: 0, minWidth: screenWidth * .8, maxWidth: screenWidth * .9 }}
        labelFontSize={0}
        itemTextStyle = {{ fontFamily: 'Montserrat-Medium'}}

        />
      </View> 
      <View style = {styles.dropDownView}>
        <Text style ={styles.TextLabel}> What can you absolutely not stand ? </Text>
        <Dropdown label='Ex. Chalk on a chalkboard'
        // value = {householdIncome[1].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => {this.question7function(value)}}
        data={questions7}
        containerStyle = {{backgroundColor: mainColors[Math.floor(Math.random() * 2)], borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, minWidth: screenWidth * .9, paddingLeft: 10}}
        baseColor = '#000'
        dropdownOffset = {{top: 16}}
        pickerStyle = {{borderBottomColor: 'transparent'}}
        inputContainerStyle={{ borderBottomWidth: 0, minWidth: screenWidth * .8, maxWidth: screenWidth * .9 }}
        labelFontSize={0}
        itemTextStyle = {{ fontFamily: 'Montserrat-Medium'}}

        />
      </View> 
      <View style = {styles.dropDownView}>
        <Text style ={styles.TextLabel}> What can you absolutely not stand? </Text>
        <Dropdown label='Ex. Old Technology'
        // value = {householdIncome[1].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => {this.question8function(value)}}
        data={questions8}
        containerStyle = {{backgroundColor: mainColors[Math.floor(Math.random() * 2)], borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, minWidth: screenWidth * .9, paddingLeft: 10}}
        baseColor = '#000'
        dropdownOffset = {{top: 16}}
        pickerStyle = {{borderBottomColor: 'transparent'}}
        inputContainerStyle={{ borderBottomWidth: 0, minWidth: screenWidth * .8, maxWidth: screenWidth * .9 }}
        labelFontSize={0}
        itemTextStyle = {{ fontFamily: 'Montserrat-Medium'}}

        />
      </View>
      <View style = {styles.dropDownView}>
        <Text style ={styles.TextLabel}> Which career sounds the best to you? </Text>
        <Dropdown label='Ex. Lion Tamer'
        // value = {householdIncome[1].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => {this.question9function(value)}}
        data={questions9}
        containerStyle = {{backgroundColor: mainColors[Math.floor(Math.random() * 2)], borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, minWidth: screenWidth * .9, paddingLeft: 10}}
        baseColor = '#000'
        dropdownOffset = {{top: 16}}
        pickerStyle = {{borderBottomColor: 'transparent'}}
        inputContainerStyle={{ borderBottomWidth: 0, minWidth: screenWidth * .8, maxWidth: screenWidth * .9 }}
        labelFontSize={0}
        itemTextStyle = {{ fontFamily: 'Montserrat-Medium'}}

        />
      </View>
      <View style = {styles.dropDownView}>
        <Text style ={styles.TextLabel}> Which career sounds the best to you? </Text>
        <Dropdown label='Ex. Chicken Herder'
        // value = {householdIncome[1].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => {this.question10function(value)}}
        data={questions10}
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
    question1function(value){
        switch(value){
          case "I find studying individuals backgrounds and gender roles interesting":
            this.setState({ethnic : this.state.ethnic+1});
            break;
          case "I enjoy studying the way individuals comunicate their ideas with others":
            this.setState({communication : this.state.communication+1});
            break;
          case "I could spend hours behind a computer exploring how tech works":
            this.setState({computer : this.state.computer+1});
            break;
          case "I enjoy teaching others things I have learned":
            this.setState({education : this.state.education+1});
            break;
          case "I enjoy reading about public policy.":
            this.setState({political : this.state.political+1});
            break;
          case "I enjoy learning about the economy and how it works":
            this.setState({economics : this.state.economics+1});
            break;
          case "I am really interested in any type of history.":
            this.setState({history : this.state.history+1});
            break;
          default:
            break;
        }
    }

    question2function(value){
      switch(value){
        case "I enjoy using math and science to build things":
          this.setState({engineering : this.state.engineering+1});
          break;
        case "I value using evidience and logic to support an argument":
          this.setState({legal : this.state.legal+1});
          break;
        case "I appreciate literature and read & analyze text for fun":
          this.setState({english : this.state.english+1});
          break;
        case "I am interested in studying live organisms and how they work":
          this.setState({biological : this.state.biological+1});
          break;
        case "I like finding different ways to make money.":
          this.setState({business : this.state.business+1});
          break;
        case "I take pride in the fact that I like taking care of people":
          this.setState({nursing : this.state.nursing+1});
          break;
        default:
          break;
      }
    }

    question3function(value){
      switch(value){
        case "An independent, open-minded, and critical thinker.":
          this.setState({ethnic : this.state.ethnic+1});
          break;
        case "Fascinated by all forms of mass media, from the Internet to TV to magazines.":
          this.setState({communication : this.state.communication+1});
          break;
        case "Curious about human behavior, organized, good with numbers, and a good communicator.":
          this.setState({computer : this.state.computer+1});
          break;
        case "Patient, well organized, and flexible. I am fascinated by the learning process.":
          this.setState({education : this.state.education+1});
          break;
        case "A good leader and I would be a really good president.":
          this.setState({political : this.state.political+1});
          break;
        case "Pretty good at understanding how money works and how it travels.":
          this.setState({economics : this.state.economics+1});
          break;
        case "Really good at piecing together historical events.":
          this.setState({history : this.state.history+1});
          break;
        default:
          break;
      }
    }

    question4function(value){
      switch(value){
        case "Good at math and science and interested in working with people.":
          this.setState({engineering : this.state.engineering+1});
          break;
        case "Fascinated by the relationship between law and society.":
          this.setState({legal : this.state.legal+1});
          break;
        case "A person who loves to read different types of texts and who enjoys analyzing literary pieces.":
          this.setState({english : this.state.english+1});
          break;
        case "A nature lover. I love animals and plants and enjoy learning why life exists and behaves the way it does.":
          this.setState({biological : this.state.biological+1});
          break;
        case "Good at selling things and have a knack for getting money.":
          this.setState({business : this.state.business+1});
          break;
        case "Good at knowing how to take care of injuries or sicknesses":
          this.setState({nursing : this.state.nursing+1});
          break;
        default:
          break;
      }
    }

    question5function(value){
      switch(value){
        case "Anthropology":
          this.setState({ethnic : this.state.ethnic+1});
          break;
        case "Media Criticism":
          this.setState({communication : this.state.communication+1});
          break;
        case "A independent project where I create a program":
          this.setState({computer : this.state.computer+1});
          break;
        case "A semester taught teaching kids":
          this.setState({education : this.state.education+1});
          break;
        case "Shadowing a politician and learning politics.":
          this.setState({political : this.state.political+1});
          break;
        case "Economics 101: The Stock Market":
          this.setState({economics : this.state.economics+1});
          break;
        case "US History":
          this.setState({history : this.state.history+1});
          break;
        default:
          break;
      }
    }

    question6function(value){
      switch(value){
        case "Intro to Engineering":
          this.setState({engineering : this.state.engineering+1});
          break;
        case "Legal Research and Writing":
          this.setState({legal : this.state.legal+1});
          break;
        case "British and American literature":
          this.setState({english : this.state.english+1});
          break;
        case "Plant Anatomy":
          this.setState({biological : this.state.biological+1});
          break;
        case "Microeconomics":
          this.setState({business : this.state.business+1});
          break;
        case "Human anatomy":
          this.setState({nursing : this.state.nursing+1});
          break;
        default:
          break;
      }
    }

    question7function(value){
      switch(value){
        case "When individuals are not interested in others culture":
          this.setState({ethnic : this.state.ethnic+1});
          break;
        case "When people are bad communicators":
          this.setState({communication : this.state.communication+1});
          break;
        case "When I don't understand how a piece of software works":
          this.setState({computer : this.state.computer+1});
          break;
        case "When others are not willing to help others with coursework":
          this.setState({education : this.state.education+1});
          break;
        case "When people don't vote":
          this.setState({political : this.state.political+1});
          break;
        case "When people don't understand or try to understand how money works":
          this.setState({economics : this.state.economics+1});
          break;
        case "When people talk about past events but actually have no idea what happened":
          this.setState({history : this.state.history+1});
          break;
        default:
          break;
      }
    }

    question8function(value){
      switch(value){
        case "When people don't put effort into problemsolving":
          this.setState({engineering : this.state.engineering+1});
          break;
        case "When somebody cannot support their argument":
          this.setState({legal : this.state.legal+1});
          break;
        case "Bad grammar. Enough said.":
          this.setState({english : this.state.english+1});
          break;
        case "Not being outside enough":
          this.setState({biological : this.state.biological+1});
          break;
        case "When people complain about not having money without thinking of ways to make it.":
          this.setState({business : this.state.business+1});
          break;
        case "When people don't know how to take care of their health.":
          this.setState({nursing : this.state.nursing+1});
          break;
        default:
          break;
      }
    }

    question9function(value){
      switch(value){
        case "Anthropologist":
          this.setState({ethnic : this.state.ethnic+1});
          break;
        case "Public Relations Manager":
          this.setState({communication : this.state.communication+1});
          break;
        case "Software Engineer":
          this.setState({computer : this.state.computer+1});
          break;
        case "Teacher":
          this.setState({education : this.state.education+1});
          break;
        case "Mayor of my city":
          this.setState({political : this.state.political+1});
          break;
        case "Stock Broker":
          this.setState({economics : this.state.economics+1});
          break;
        case "Historian":
          this.setState({history : this.state.history+1});
          break;
        default:
          break;
      }
    }

    question10function(value){
      switch(value){
        case "Engineer":
          this.setState({engineering : this.state.engineering+1});
          break;
        case "Lawyer":
          this.setState({legal : this.state.legal+1});
          break;
        case "English Professor":
          this.setState({english : this.state.english+1});
          break;
        case "Biologist":
          this.setState({biological : this.state.biological+1});
          break;
        case "COO of a company":
          this.setState({business : this.state.business+1});
          break;
        case "Nurse":
          this.setState({nursing : this.state.nursing+1});
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

    setDatastore(major1, major2, major3){
      console.log("DATASTORE");
        console.log(this.state.isLoggedIn);
        if(this.state.isLoggedIn){
          major1 = major1.replace(new RegExp(' ', 'g'), '+');
          major2 = major2.replace(new RegExp(' ', 'g'), '+');
          major3 = major3.replace(new RegExp(' ', 'g'), '+');
          let url = "https://collegeplus.us/setData?username=" + this.state.username + "&password=" + this.state.password + "&colleges=&collegeweathers=&collegetemps=&collegecities=&collegestates=&collegelinks=&major1="+ major1 +"&major2="+ major2 +"&major3="+ major3 +"&device1=&device2=&device3=&gpa=&usersat=&useract=&gpa=&userCity=&userState=&apiKey=seunsSpecificKey21382947";
          if(this.state.password == "~"){
            url = "https://collegeplus.us/setData?username=" + this.state.username + "&password=" + this.state.password + "&colleges=&collegeweathers=&collegetemps=&collegecities=&collegestates=&collegelinks=&major1="+ major1 +"&major2="+ major2 +"&major3="+ major3 +"&device1=&device2=&device3=&gpa=&usersat=&useract=&gpa=&userCity=&userState=&apple=TRUE&apiKey=seunsSpecificKey21382947";
          }
          else{
              url = "https://collegeplus.us/setData?username=" + this.state.username + "&password=" + this.state.password + "&colleges=&collegeweathers=&collegetemps=&collegecities=&collegestates=&collegelinks=&major1="+ major1 +"&major2="+ major2 +"&major3="+ major3 +"&device1=&device2=&device3=&gpa=&usersat=&useract=&gpa=&userCity=&userState=&apple=FALSE&apiKey=seunsSpecificKey21382947";
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
        let mainList = [this.state.ethnic, this.state.engineering, this.state.communication, this.state.legal, this.state.english, this.state.biological, this.state.computer, this.state.education, this.state.political, this.state.business, this.state.economics, this.state.nursing, this.state.finance, this.state.history];
        let names = ["Ethnic and Gender Studies", "Engineering", "Communication", "Legal Studies", "English", "Biological Sciences", "Computer Science", "Education", "Political Science", "Business", "Economics", "Nursing", "Finance", "History"];
        let description = ["The ethnic studies field explores theories of race, migration, social policy and historical instances regarding various ethnic groups. Gender studies focuses on how the different sexes handle various issues and includes feminist and masculinity theory, as well as theories regarding sexuality, gender roles and various types of gender social systems.",
          "An Engineer applies science and mathematics to technical problems. They help develop new products by recording and analyzing performance and material parts for testing. Engineers play an essential role in your business during the processes of product development and maintenance.",
          "A communications major is a major designed to teach you about effective communication and how to apply it to fields like media, law and business. Coursework for this major is very similar to coursework for related majors such as public relations, advertising and journalism.",
          "Legal studies is an undergraduate major that focuses on how law impacts and interacts with many areas of our lives. Its goal is to empower students to pursue work in the many jobs that deal with law, whether inside or outside the legal field, apart from being a lawyer.",
          "An English major is a humanities degree option that comes with plenty of opportunities for students to explore different styles of expression. An undergraduate background in English is useful for graduate and professional programs in fields like journalism, law and business.",
          "A general program of biology at the introductory, basic level or a program in biology or the biological sciences that is undifferentiated as to title or content. Includes instruction in general biology and programs covering a variety of biological specializations.",
          "A program that focuses on computer theory, computing problems and solutions, and the design of computer systems and user interfaces from a scientific perspective. Includes instruction in the principles of computational science, computer development and programming, and applications to a variety of end-use situations.",
          "An education major is designed to help college students develop the skills to teach others. Combining the ability to create engaging lessons with the desire to spread knowledge, this major is all about learning the most effective ways to become an educator.",
          "A political science major is a social science degree path that requires students to study government in theory and practice. Majors will explore topics related to political theory, international relations, comparative politics and more. ",
          "Generally, business degrees are designed to help students prepare for a wide range of positions and industries by introducing them to the fundamental aspects of business knowledge in accounting, finance, international business, marketing, human resources, operations and project management.",
          "An economics major is a degree option that examines questions related to resource allocation, incentives and wealth, among others. Economics is relevant to graduate and professional study in fields like business management, law and public affairs, as well as undergraduate degrees that are useful for many career paths. Students often begin their studies by developing a solid foundation in microeconomics, macroeconomics and calculus, which they can use to pursue more advanced coursework and research opportunities.",
          "Most of the classes in a BSN program are grounded in the biological sciences and liberal arts. In addition to classroom lectures, nursing students participate in clinical training where they work in healthcare facilities under the supervision of a licensed nurse.",
          "A program that generally prepares individuals to plan, manage, and analyze the financial and monetary aspects and performance of business enterprises, banking institutions, or other organizations. Includes instruction in principles of accounting, financial instruments, capital planning, funds acquisition, asset and debt management, budgeting, financial analysis, and investments and portfolio management.",
          "A program that focuses on the general study and interpretation of the past, including the gathering, recording, synthesizing and criticizing of evidence and theories about past events. Includes instruction in historiography; historical research methods; studies of specific periods, issues and cultures; and applications to areas such as historic preservation, public policy, and records administration."
        ];
        let urls = ["https://study.com/directory/category/Liberal_Arts_and_Humanities/Ethnic_and_Gender_Studies.html#:~:text=Ethnic%20and%20gender%20studies%20are,opportunities%20in%20these%20interdisciplinary%20fields.",
          "https://www.indeed.com/hire/job-description/engineer",
          "https://www.wayup.com/guide/what-is-a-communications-major-and-is-it-right-for-me/#:~:text=A%20communications%20major%20is%20a,public%20relations%2C%20advertising%20and%20journalism.",
          "https://www.bestcolleges.com/careers/law/legal-studies/#:~:text=Legal%20studies%20is%20an%20undergraduate,apart%20from%20being%20a%20lawyer.",
          "https://www.usnews.com/education/best-colleges/english-major-overview",
          "https://www.mymajors.com/college-majors/biology-biological-sciences/",
          "https://www.mymajors.com/college-majors/computer-science/",
          "wayup.com/guide/what-is-an-education-major-and-is-it-right-for-me/#:~:text=An%20education%20major%20is%20designed,the%20skills%20to%20teach%20others.&text=Typical%20classes%20in%20this%20major,education%20and%20public%20policy%20classes.",
          "https://www.usnews.com/education/best-colleges/political-science-major-overview",
          "https://www.aiuniv.edu/degrees/business/articles/majoring-in-business#:~:text=Generally%2C%20business%20degrees%20are%20designed,resources%2C%20operations%20and%20project%20management.",
          "https://www.usnews.com/education/best-colleges/economics-major-overview#:~:text=An%20economics%20major%20examines%20resource,management%2C%20law%20and%20public%20affairs.&text=Majoring%20in%20economics%20can%20provide,methods%2C%20quantitative%20analysis%20and%20more.",
          "https://study.com/articles/Bachelor_of_Nursing_Degree_Overview.html",
          "https://www.mymajors.com/college-majors/finance/",
          "https://www.mymajors.com/college-majors/history/#:~:text=History%20Major-,History%20Major,and%20theories%20about%20past%20events."
        ];
        var comparisonList = [this.state.ethnic, this.state.engineering, this.state.communication, this.state.legal, this.state.english, this.state.biological, this.state.computer, this.state.education, this.state.political, this.state.business, this.state.economics, this.state.nursing, this.state.finance, this.state.history];
        var realTop3 = [];
        var descriptions = [];
        let names2 = ["Ethnic and Gender Studies", "Engineering", "Communication", "Legal Studies", "English", "Biological Sciences", "Computer Science", "Education", "Political Science", "Business", "Economics", "Nursing", "Finance", "History"];
        var urlsList = [];
        while(realTop3.length < 3){
          console.log("LOOP");
            var tempIndex = 0;
            for(var i = 0; i < comparisonList.length; i++){
              if(comparisonList[i] > comparisonList[tempIndex]){
                  tempIndex = i;
              }
              if(i == (comparisonList.length - 1)){
                realTop3.push(names2[tempIndex]);
                // console.log(names.indexOf(names2[tempIndex]), names, names2);
                descriptions.push(description[names.indexOf(names2[tempIndex])]);
                urlsList.push(urls[names.indexOf(names2[tempIndex])]);
                comparisonList.splice(tempIndex, 1);
                names2.splice(names2[tempIndex], 1);
              }
            }
        }
      loadingImage = {width: 0, height: 0};
      this.setDatastore(realTop3[0], realTop3[1], realTop3[2]);
      navigate("DegreeRecommendations", {firstPick : realTop3[0], secondPick : realTop3[1], thirdPick : realTop3[2], firstPickDescription : descriptions[0], secondPickDescription : descriptions[1], thirdPickDescription: descriptions[2], firstPickURL : urlsList[0], secondPickURL : urlsList[1], thirdPickURL : urlsList[2]});
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
export default DegreePickerScreen;
