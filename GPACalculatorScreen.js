/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {useState, Component} from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar, Platform, TouchableOpacity, Picker, AppNavigator, StackNavigator, TextInput, Label, Linking } from 'react-native';
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



class GPACalculatorScreen extends Component{

  constructor(props) {
    super(props);
    this.exampleRef = this.updateRef.bind(this, 'text');

    this.smallRef = React.createRef();
    this.grade1Ref = React.createRef();
    this.grade2Ref = React.createRef();
    this.grade3Ref = React.createRef();
    this.grade4Ref = React.createRef();
    this.grade5Ref = React.createRef();
    this.grade6Ref = React.createRef();
    this.grade7Ref = React.createRef();
    this.grade8Ref = React.createRef();
    this.credit1Ref = React.createRef();
    this.credit2Ref = React.createRef();
    this.credit3Ref = React.createRef();
    this.credit4Ref = React.createRef();
    this.credit5Ref = React.createRef();
    this.credit6Ref = React.createRef();
    this.credit7Ref = React.createRef();
    this.credit8Ref = React.createRef();
    this.clicked1Ref = React.createRef();
    this.clicked2Ref = React.createRef();
    this.clicked3Ref = React.createRef();
    this.clicked4Ref = React.createRef();
    this.clicked5Ref = React.createRef();
    this.clicked6Ref = React.createRef();
    this.clicked7Ref = React.createRef();
    this.clickedBy8Ref = React.createRef();
    this.class1Ref = React.createRef();
    this.class2Ref = React.createRef();
    this.class3Ref = React.createRef();
    this.class4Ref = React.createRef();
    this.class5Ref = React.createRef();
    this.class6Ref = React.createRef();
    this.class7Ref = React.createRef();
    this.class8Ref = React.createRef();
    this.apRef = React.createRef();
    this.honorsRef = React.createRef();
    this.regularRef = React.createRef();
    this.weightedRef = React.createRef();
    this.gradeValuesRef = React.createRef();
    this.weightedRef = React.createRef();



    this.state = {
      text: 'h',
      textinput: 'A',
      grade1: 'A',
      grade2: 'A',
      grade3: 'A',
      grade4: 'A',
      grade5: 'A',
      grade6: 'A',
      grade7: 'A',
      grade8: 'A',
      gradePoints1: 0.0,
      gradePoints2: 0.0,
      gradePoints3: 0.0,
      gradePoints4: 0.0,
      gradePoints5: 0.0,
      gradePoints6: 0.0,
      gradePoints7: 0.0,
      gradePoints8: 0.0,
      credit1: 0,
      credit2: 0,
      credit3: 0,
      credit4: 0,
      credit5: 0,
      credit6: 0,
      credit7: 0,
      credit8: 0,
      clickedBy1: false,
      clickedBy2: false,
      clickedBy3: false,
      clickedBy4: false,
      clickedBy5: false,
      clickedBy6: false,
      clickedBy7: false,
      clickedBy8: false,
      classType1: 'Regular',
      classType2: 'Regular',
      classType3: 'Regular',
      classType4: 'Regular',
      classType5: 'Regular',
      classType6: 'Regular',
      classType7: 'Regular',
      classType8: 'Regular',
      ap: [5.3, 5.0, 4.7, 4.3, 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 0.0],
      honors: [4.8, 4.5, 4.17, 3.8, 3.5, 3.17, 2.8, 2.5, 2.17, 1.8, 1.5, 1.17, 0.0],
      regular: [4.3, 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0, .07, 0.0],
      unWeightedArr: [4.3, 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0, .07, 0.0],
      gradeValues: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"],
      weighted: false,
      credits: 0,
      gpa: 0,
      clickedin : false,
      username : "",
      password : "s",
      isLoggedIn : false

    };
  }

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

  setDatastore(gpa){
    console.log("DATASTORE");

      if(this.state.isLoggedIn){
        gpa = gpa;
        let url = "https://collegeplus.us/setData?username=" + this.state.username + "&password=" + this.state.password + "&colleges=&collegeweathers=&collegetemps=&collegecities=&collegestates=&collegelinks=&major1=&major2=&major3=&device1=&device2=&device3=&gpa=&usersat=&useract=&gpa="+ gpa +"&userCity=&userState=&apiKey=seunsSpecificKey21382947";
        if(this.state.password == "~"){
          url = "https://collegeplus.us/setData?username=" + this.state.username + "&password=" + this.state.password + "&colleges=&collegeweathers=&collegetemps=&collegecities=&collegestates=&collegelinks=&major1=&major2=&major3=&device1=&device2=&device3=&gpa=&usersat=&useract=&gpa="+ gpa +"&userCity=&userState=&apple=TRUE&apiKey=seunsSpecificKey21382947";
        }
        else{
          url = "https://collegeplus.us/setData?username=" + this.state.username + "&password=" + this.state.password + "&colleges=&collegeweathers=&collegetemps=&collegecities=&collegestates=&collegelinks=&major1=&major2=&major3=&device1=&device2=&device3=&gpa=&usersat=&useract=&gpa="+ gpa +"&userCity=&userState=&apple=FALSE&apiKey=seunsSpecificKey21382947";
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

  setGrade1 = (value) => {
      this.setState({grade1: value});
  }
  setGrade2 = (value) => {
      this.setState({grade2: value});
  }
  setGrade3 = (value) => {
      this.setState({grade3: value});
  }
  setGrade4 = (value) => {
      this.setState({grade4: value});
  }
  setGrade5 = (value) => {
      this.setState({grade5: value});
  }
  setGrade6 = (value) => {
      this.setState({grade6: value});
  }
  setGrade7 = (value) => {
      this.setState({grade7: value});
  }
  setGrade8 = (value) => {
      this.setState({grade8: value});
  }
  setCredit1 = (value) => {
      let credit = parseInt(value);
      this.setState({credit1: credit});
      let temp = {
        grade: this.state.grade1,
        gradePoint: this.state.gradePoints1,
        credits: this.state.credit1,
        classType: this.state.classType1,
        clickedBy: this.state.clickedBy1
      }
      this.calcGPA1(temp);
      this.setState({gradePoints1: temp.gradePoint});
      this.setState({credit1: temp.credits});
      this.setState({clickedBy1: temp.clickedBy});
      let gpa = (this.state.gradePoints1+this.state.gradePoints2+this.state.gradePoints3+this.state.gradePoints4+this.state.gradePoints5+this.state.gradePoints6+this.state.gradePoints7+this.state.gradePoints8)/(this.state.credit1+this.state.credit2+this.state.credit3+this.state.credit4+this.state.credit5+this.state.credit6+this.state.credit7+this.state.credit8);
      this.setState({gpa: gpa});
      this.setDatastore(gpa);

  }
  setCredit2 = (value) => {
      let credit = parseInt(value);
      this.setState({credit2: credit});
      let temp = {
        grade: this.state.grade2,
        gradePoint: this.state.gradePoints2,
        credits: this.state.credit2,
        classType: this.state.classType2,
        clickedBy: this.state.clickedBy2
      }
      this.calcGPA1(temp);
      this.setState({gradePoints2: temp.gradePoint});
      this.setState({credit2: temp.credits});
      this.setState({clickedBy2: temp.clickedBy});
      let gpa = (this.state.gradePoints1+this.state.gradePoints2+this.state.gradePoints3+this.state.gradePoints4+this.state.gradePoints5+this.state.gradePoints6+this.state.gradePoints7+this.state.gradePoints8)/(this.state.credit1+this.state.credit2+this.state.credit3+this.state.credit4+this.state.credit5+this.state.credit6+this.state.credit7+this.state.credit8);
      this.setState({gpa: gpa});
      this.setDatastore(gpa);

  }
  setCredit3 = (value) => {
      let credit = parseInt(value);
      this.setState({credit3: credit});
      let temp = {
        grade: this.state.grade3,
        gradePoint: this.state.gradePoints3,
        credits: this.state.credit3,
        classType: this.state.classType3,
        clickedBy: this.state.clickedBy3
      }
      this.calcGPA1(temp);
      this.setState({gradePoints3: temp.gradePoint});
      this.setState({credit3: temp.credits});
      this.setState({clickedBy3: temp.clickedBy});
      let gpa = (this.state.gradePoints1+this.state.gradePoints2+this.state.gradePoints3+this.state.gradePoints4+this.state.gradePoints5+this.state.gradePoints6+this.state.gradePoints7+this.state.gradePoints8)/(this.state.credit1+this.state.credit2+this.state.credit3+this.state.credit4+this.state.credit5+this.state.credit6+this.state.credit7+this.state.credit8);
      this.setState({gpa: gpa});
      this.setDatastore(gpa);

  }
  setCredit4 = (value) => {
      let credit = parseInt(value);
      this.setState({credit4: credit});
      let temp = {
        grade: this.state.grade4,
        gradePoint: this.state.gradePoints4,
        credits: this.state.credit4,
        classType: this.state.classType4,
        clickedBy: this.state.clickedBy4
      }
      this.calcGPA1(temp);
      this.setState({gradePoints4: temp.gradePoint});
      this.setState({credit4: temp.credits});
      this.setState({clickedBy4: temp.clickedBy});
      console.log(temp.gradePoint);
      let gpa = (this.state.gradePoints1+this.state.gradePoints2+this.state.gradePoints3+this.state.gradePoints4+this.state.gradePoints5+this.state.gradePoints6+this.state.gradePoints7+this.state.gradePoints8)/(this.state.credit1+this.state.credit2+this.state.credit3+this.state.credit4+this.state.credit5+this.state.credit6+this.state.credit7+this.state.credit8);
      this.setState({gpa: gpa});
      this.setDatastore(gpa);

  }
  setCredit5 = (value) => {
      let credit = parseInt(value);
      this.setState({credit5: credit});
      let temp = {
        grade: this.state.grade5,
        gradePoint: this.state.gradePoints5,
        credits: this.state.credit5,
        classType: this.state.classType5,
        clickedBy: this.state.clickedBy5
      }
      this.calcGPA1(temp);
      this.setState({gradePoints5: temp.gradePoint});
      this.setState({credit5: temp.credits});
      this.setState({clickedBy5: temp.clickedBy});
      console.log(temp.gradePoint);
      let gpa = (this.state.gradePoints1+this.state.gradePoints2+this.state.gradePoints3+this.state.gradePoints4+this.state.gradePoints5+this.state.gradePoints6+this.state.gradePoints7+this.state.gradePoints8)/(this.state.credit1+this.state.credit2+this.state.credit3+this.state.credit4+this.state.credit5+this.state.credit6+this.state.credit7+this.state.credit8);
      this.setState({gpa: gpa});
      this.setDatastore(gpa);

  }
  setCredit6 = (value) => {
      let credit = parseInt(value);
      this.setState({credit6: credit});
      let temp = {
        grade: this.state.grade6,
        gradePoint: this.state.gradePoints6,
        credits: this.state.credit6,
        classType: this.state.classType6,
        clickedBy: this.state.clickedBy6
      }
      this.calcGPA1(temp);
      this.setState({gradePoints6: temp.gradePoint});
      this.setState({credit6: temp.credits});
      this.setState({clickedBy6: temp.clickedBy});
      console.log(temp.gradePoint);
      let gpa = (this.state.gradePoints1+this.state.gradePoints2+this.state.gradePoints3+this.state.gradePoints4+this.state.gradePoints5+this.state.gradePoints6+this.state.gradePoints7+this.state.gradePoints8)/(this.state.credit1+this.state.credit2+this.state.credit3+this.state.credit4+this.state.credit5+this.state.credit6+this.state.credit7+this.state.credit8);
      this.setState({gpa: gpa});
      this.setDatastore(gpa);

  }
  setCredit7 = (value) => {
      let credit = parseInt(value);
      this.setState({credit7: credit});
      let temp = {
        grade: this.state.grade7,
        gradePoint: this.state.gradePoints7,
        credits: this.state.credit7,
        classType: this.state.classType7,
        clickedBy: this.state.clickedBy7
      }
      this.calcGPA1(temp);
      this.setState({gradePoints7: temp.gradePoint});
      this.setState({credit7: temp.credits});
      this.setState({clickedBy7: temp.clickedBy});
      console.log(temp.gradePoint);
      let gpa = (this.state.gradePoints1+this.state.gradePoints2+this.state.gradePoints3+this.state.gradePoints4+this.state.gradePoints5+this.state.gradePoints6+this.state.gradePoints7+this.state.gradePoints8)/(this.state.credit1+this.state.credit2+this.state.credit3+this.state.credit4+this.state.credit5+this.state.credit6+this.state.credit7+this.state.credit8);
      this.setState({gpa: gpa});
      this.setDatastore(gpa);

  }
  setCredit8 = (value) => {
      let credit = parseInt(value);
      this.setState({credit8: credit});
      let temp = {
        grade: this.state.grade8,
        gradePoint: this.state.gradePoints8,
        credits: this.state.credit8,
        classType: this.state.classType8,
        clickedBy: this.state.clickedBy8
      }
      this.calcGPA1(temp);
      this.setState({gradePoints8: temp.gradePoint});
      this.setState({credit8: temp.credits});
      this.setState({clickedBy8: temp.clickedBy});
      console.log(temp.gradePoint);
      let gpa = (this.state.gradePoints1+this.state.gradePoints2+this.state.gradePoints3+this.state.gradePoints4+this.state.gradePoints5+this.state.gradePoints6+this.state.gradePoints7+this.state.gradePoints8)/(this.state.credit1+this.state.credit2+this.state.credit3+this.state.credit4+this.state.credit5+this.state.credit6+this.state.credit7+this.state.credit8);
      this.setState({gpa: gpa});
      this.setDatastore(gpa);
  }
  setClass1 = (value) => {
      this.setState({classType1: value});
      this.setCredit1(this.state.credit1);
  }
  setClass2 = (value) => {
      this.setState({classType2: value});
      this.setCredit2(this.state.credit2);
  }
  setClass3 = (value) => {
      this.setState({classType3: value});
      this.setCredit3(this.state.credit3);
  }
  setClass4 = (value) => {
      this.setState({classType4: value});
      this.setCredit4(this.state.credit4);
  }
  setClass5 = (value) => {
      this.setState({classType5: value});
      this.setCredit5(this.state.credit5);
  }
  setClass6 = (value) => {
      this.setState({classType6: value});
      this.setCredit6(this.state.credit6);
  }
  setClass7 = (value) => {
      this.setState({classType7: value});
      this.setCredit7(this.state.credit7);
  }
  setClass8 = (value) => {
      this.setState({classType8: value});
      this.setCredit8(this.state.credit8);
  }
  onChangeHandler2 = (value) => {
      this.setState({textinput: value})
  }

  calcGPA1(obj){
      if(obj.clickedBy == true){
          obj.grade = 0;
          // obj.credits = 0;
      }
      obj.clickedBy = true;
      for(var i = 0; i< this.state.gradeValues.length; i++){
          if(obj.grade == this.state.gradeValues[i]){
              if(obj.classType == "AP"){
                  if(this.state.weighted == true){
                      obj.gradePoint = obj.gradePoint+(this.state.ap[i]*obj.credits);
                  }
                  else{
                      obj.gradePoint = obj.gradePoint+(this.state.unWeightedArr[i]*obj.credits);
                  }
              }
              else if(obj.classType == "IB"){
                  if(this.state.weighted == true){
                      obj.gradePoint = obj.gradePoint+(this.state.ap[i]*obj.credits);
                  }
                  else{
                      obj.gradePoint = obj.gradePoint+(this.state.unWeightedArr[i]*obj.credits);
                  }
              }
              else if(obj.classType == "Dual-Credit"){
                  if(this.state.weighted == true){
                      obj.gradePoint = obj.gradePoint+(this.state.honors[i]*obj.credits);
                  }
                  else{
                      obj.gradePoint = obj.gradePoint+(this.state.unWeightedArr[i]*obj.credits);
                  }
              }
              else if(obj.classType == "Honors"){
                  if(this.state.weighted == true){
                      obj.gradePoint = obj.gradePoint+(this.state.honors[i]*obj.credits);
                  }
                  else{
                      obj.gradePoint = obj.gradePoint+(this.state.unWeightedArr[i]*obj.credits);
                  }
              }
              else if(obj.classType == "Regular"){
                  if(this.state.weighted == true){
                      obj.gradePoint = obj.gradePoint+(this.state.regular[i]*obj.credits);
                  }
                  else{
                    obj.gradePoint = obj.gradePoint+(this.state.unWeightedArr[i]*obj.credits);
                  }
              }
              break;
          }
      }

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
       let { text } = this.state;
      let data = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pear',
      }];

      let grades = [{
        value: 'A+',
      }, {
        value: 'A',
      }, {
        value: 'A-',
      }, {
        value: 'B+',
      }, {
        value: 'B',
      }, {
        value: 'B-',
      }, {
        value: 'C+',
      }, {
        value: 'C',
      }, {
        value: 'C-',
      }, {
        value: 'D+',
      }, {
        value: 'D',
      }, {
        value: 'D-',
      }, {
        value: 'F',
      }];

      let credits = [{value: 4}, {value: 3}, {value: 2}, {value: 1}];

      let classType = [{value: 'AP'}, {value: 'IB'}, {value: 'Dual-Credit'}, {value: 'Honors'}, {value: 'Regular'}];

  return (
    <ScrollView style ={styles.pickerPage}
      contentContainerStyle = {{alignItems: 'center'}}
    >
    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', maxWidth: 350, marginTop: 0}}>
      <View style ={{flex: 1, flexDirection: 'column', borderBottomWidth: 1, borderBottomColor: 'white', paddingBottom: 30, alignItems: 'center'}}>
        <View><Text style ={styles.ClassTitle}> Class 1 </Text></View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 25}}>
          <View style = {{flex: 2,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
              }}>
            <Text style ={styles.TextLabel}> Class Name </Text>
            <TextInput label=''
            ref = {this.smallRef}
            // value={this.state.text}
            style={{ height: 60, borderColor: '#0099cc', borderWidth: 4, borderRadius: 15, minWidth: 150, maxWidth: 200, backgroundColor: "#fff", color : "black", textColor : "black", textAlign: 'center'}}
            onChangeText={(value) => this.onChangeHandler2(value)}
            />
          </View>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Grade </Text>
            <Dropdown label=''
            ref = {this.grade1Ref}
            value = {grades[1].value}
            // value={this.state.text}
            onChangeText = {(value) => {this.setState({grade1: value})}}
            data={grades}
            containerStyle = {{backgroundColor: '#ff6347', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 65 }}
            labelFontSize={0}
            />
          </View>
        </View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Credit </Text>
            <Dropdown label=''
            ref = {this.credit1Ref}
            value = {credits[0].value}
            // value={this.state.text}
            onChangeText = {(value) => this.setCredit1(value)}
            data={credits}
            containerStyle = {{backgroundColor: '#ff6347', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent', minWidth: 100}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 65}}
            labelFontSize={0}
            labelFontColor = "transparent"
            />
          </View>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Class Type </Text>
            <Dropdown label=''
            ref = {this.class1Ref}
            value = {classType[4].value}
            // value={this.state.text}
            onChangeText = {(value) => {this.setState({classType1: value})}}
            data={classType}
            containerStyle = {{backgroundColor: '#0099cc', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 75 }}
            labelFontSize={0}
            />
          </View>
        </View>
      </View>
    </View>
    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', maxWidth: 350}}>
      <View style ={{flex: 1, flexDirection: 'column', borderBottomWidth: 1, borderBottomColor: 'white', paddingBottom: 30, alignItems: 'center'}}>
        <View><Text style ={styles.ClassTitle}> Class 2 </Text></View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 25}}>
          <View style = {{flex: 2,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
              }}>
            <Text style ={styles.TextLabel}> Class Name </Text>
            <TextInput label=''
            ref = {this.smallRef}
            // value={this.state.text}
            style={{ height: 60, borderColor: 'tomato', borderWidth: 4, borderRadius: 15, minWidth: 150, maxWidth: 200, backgroundColor: "#fff", color : "black", textColor : "black", textAlign: 'center'}}
            onChangeText={(value) => this.onChangeHandler2(value)}
            />
          </View>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Grade </Text>
            <Dropdown label=''
            ref = {this.grade2Ref}
            value = {grades[1].value}
            // value={this.state.text}
            onChangeText = {(value) => {this.setState({grade2: value})}}
            data={grades}
            containerStyle = {{backgroundColor: '#0099cc', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 65 }}
            labelFontSize={0}
            />
          </View>
        </View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Credit </Text>
            <Dropdown label=''
            ref = {this.credit2Ref}
            value = {credits[0].value}
            // value={this.state.text}
            onChangeText = {(value) => this.setCredit2(value)}
            data={credits}
            containerStyle = {{backgroundColor: '#0099cc', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 65 }}
            labelFontSize={0}
            />
          </View>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Class Type </Text>
            <Dropdown label=''
            ref = {this.class2Ref}
            value = {classType[4].value}
            // value={this.state.text}
            onChangeText = {(value) => {this.setState({classType2: value})}}
            data={classType}
            containerStyle = {{backgroundColor: '#ff6347', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 75 }}
            labelFontSize={0}
            />
          </View>
        </View>
      </View>
    </View>
    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', maxWidth: 350}}>
      <View style ={{flex: 1, flexDirection: 'column', borderBottomWidth: 1, borderBottomColor: 'white', paddingBottom: 30, alignItems: 'center'}}>
        <View><Text style ={styles.ClassTitle}> Class 3 </Text></View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 25}}>
          <View style = {{flex: 2,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
              }}>
            <Text style ={styles.TextLabel}> Class Name </Text>
            <TextInput label=''
            ref = {this.smallRef}
            // value={this.state.text}
            style={{ height: 60, borderColor: '#0099cc', borderWidth: 4, borderRadius: 15, minWidth: 150, maxWidth: 200, backgroundColor: "#fff", color : "black", textColor : "black", textAlign: 'center'}}
            onChangeText={(value) => this.onChangeHandler2(value)}
            />
          </View>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Grade </Text>
            <Dropdown label=''
            ref = {this.grade3Ref}
            value = {grades[1].value}
            // value={this.state.text}
            onChangeText = {(value) => {this.setState({grade3: value})}}
            data={grades}
            containerStyle = {{backgroundColor: '#ff6347', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 65 }}
            labelFontSize={0}
            />
          </View>
        </View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Credit </Text>
            <Dropdown label=''
            ref = {this.credit3Ref}
            value = {credits[0].value}
            // value={this.state.text}
            onChangeText = {(value) => this.setCredit3(value)}
            data={credits}
            containerStyle = {{backgroundColor: '#ff6347', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 75 }}
            labelFontSize={0}
            />
          </View>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Class Type </Text>
            <Dropdown label=''
            ref = {this.class3Ref}
            value = {classType[4].value}
            // value={this.state.text}
            onChangeText = {(value) => {this.setState({classType3: value})}}
            data={classType}
            containerStyle = {{backgroundColor: '#0099cc', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent', textAlign: 'center'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 65 }}
            labelFontSize={0}
            />
          </View>
        </View>
      </View>
    </View>
    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', maxWidth: 350}}>
      <View style ={{flex: 1, flexDirection: 'column', borderBottomWidth: 1, borderBottomColor: 'white', paddingBottom: 30, alignItems: 'center'}}>
        <View><Text style ={styles.ClassTitle}> Class 4 </Text></View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 25}}>
          <View style = {{flex: 2,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
              }}>
            <Text style ={styles.TextLabel}> Class Name </Text>
            <TextInput label='Ex. Algebra'
            ref = {this.smallRef}
            // value={this.state.text}
            style={{ height: 60, borderColor: 'tomato', borderWidth: 4, borderRadius: 15, minWidth: 150, maxWidth: 200, backgroundColor: "#fff", color : "black", textColor : "black", textAlign: 'center'}}
            onChangeText={(value) => this.onChangeHandler2(value)}
            />
          </View>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Grade </Text>
            <Dropdown label=''
            ref = {this.grade3Ref}
            value = {grades[1].value}
            // value={this.state.text}
            onChangeText = {(value) => {this.setState({grade4: value})}}
            data={grades}
            containerStyle = {{backgroundColor: '#0099cc', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 65 }}
            labelFontSize={0}
            />
          </View>
        </View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Credit </Text>
            <Dropdown label=''
            ref = {this.credit3Ref}
            value = {credits[0].value}
            // value={this.state.text}
            onChangeText = {(value) => this.setCredit4(value)}
            data={credits}
            containerStyle = {{backgroundColor: '#0099cc', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 75 }}
            labelFontSize={0}
            />
          </View>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Class Type </Text>
            <Dropdown label=''
            ref = {this.class3Ref}
            value = {classType[4].value}
            // value={this.state.text}
            onChangeText = {(value) => {this.setState({classType4: value})}}
            data={classType}
            containerStyle = {{backgroundColor: '#ff6347', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent', textAlign: 'center'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 65 }}
            labelFontSize={0}
            />
          </View>
        </View>
      </View>
    </View>
    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', maxWidth: 350}}>
      <View style ={{flex: 1, flexDirection: 'column', borderBottomWidth: 1, borderBottomColor: 'white', paddingBottom: 30, alignItems: 'center'}}>
        <View><Text style ={styles.ClassTitle}> Class 5 </Text></View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 25}}>
          <View style = {{flex: 2,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
              }}>
            <Text style ={styles.TextLabel}> Class Name </Text>
            <TextInput label='Ex. Algebra'
            ref = {this.smallRef}
            // value={this.state.text}
            style={{ height: 60, borderColor: '#0099cc', borderWidth: 4, borderRadius: 15, minWidth: 150, maxWidth: 200, backgroundColor: "#fff", color : "black", textColor : "black", textAlign: 'center'}}
            onChangeText={(value) => this.onChangeHandler2(value)}
            />
          </View>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Grade </Text>
            <Dropdown label=''
            ref = {this.grade3Ref}
            value = {grades[1].value}
            // value={this.state.text}
            onChangeText = {(value) => {this.setState({grade5: value})}}
            data={grades}
            containerStyle = {{backgroundColor: '#ff6347', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 65 }}
            labelFontSize={0}
            />
          </View>
        </View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Credit </Text>
            <Dropdown label=''
            ref = {this.credit3Ref}
            value = {credits[0].value}
            // value={this.state.text}
            onChangeText = {(value) => this.setCredit5(value)}
            data={credits}
            containerStyle = {{backgroundColor: '#ff6347', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 75 }}
            labelFontSize={0}
            />
          </View>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Class Type </Text>
            <Dropdown label=''
            ref = {this.class3Ref}
            value = {classType[4].value}
            // value={this.state.text}
            onChangeText = {(value) => {this.setState({classType3: value})}}
            data={classType}
            containerStyle = {{backgroundColor: '#0099cc', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent', textAlign: 'center'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 65 }}
            labelFontSize={0}
            />
          </View>
        </View>
      </View>
    </View>
    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', maxWidth: 350}}>
      <View style ={{flex: 1, flexDirection: 'column', borderBottomWidth: 1, borderBottomColor: 'white', paddingBottom: 30, alignItems: 'center'}}>
        <View><Text style ={styles.ClassTitle}> Class 6 </Text></View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 25}}>
          <View style = {{flex: 2,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
              }}>
            <Text style ={styles.TextLabel}> Class Name </Text>
            <TextInput label='Ex. Algebra'
            ref = {this.smallRef}
            // value={this.state.text}
            style={{ height: 60, borderColor: 'tomato', borderWidth: 4, borderRadius: 15, minWidth: 150, maxWidth: 200, backgroundColor: "#fff", color : "black", textColor : "black", textAlign: 'center'}}
            onChangeText={(value) => this.onChangeHandler2(value)}
            />
          </View>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Grade </Text>
            <Dropdown label=''
            ref = {this.grade3Ref}
            value = {grades[1].value}
            // value={this.state.text}
            onChangeText = {(value) => {this.setState({grade6: value})}}
            data={grades}
            containerStyle = {{backgroundColor: '#0099cc', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 65 }}
            labelFontSize={0}
            />
          </View>
        </View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Credit </Text>
            <Dropdown label=''
            ref = {this.credit3Ref}
            value = {credits[0].value}
            // value={this.state.text}
            onChangeText = {(value) => this.setCredit6(value)}
            data={credits}
            containerStyle = {{backgroundColor: '#0099cc', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 75 }}
            labelFontSize={0}
            />
          </View>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Class Type </Text>
            <Dropdown label=''
            ref = {this.class3Ref}
            value = {classType[4].value}
            // value={this.state.text}
            onChangeText = {(value) => {this.setState({classType6: value})}}
            data={classType}
            containerStyle = {{backgroundColor: '#ff6347', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent', textAlign: 'center'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 65 }}
            labelFontSize={0}
            />
          </View>
        </View>
      </View>
    </View>
    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', maxWidth: 350}}>
      <View style ={{flex: 1, flexDirection: 'column', borderBottomWidth: 1, borderBottomColor: 'white', paddingBottom: 30, alignItems: 'center'}}>
        <View><Text style ={styles.ClassTitle}> Class 7 </Text></View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 25}}>
          <View style = {{flex: 2,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
              }}>
            <Text style ={styles.TextLabel}> Class Name </Text>
            <TextInput label='Ex. Algebra'
            ref = {this.smallRef}
            // value={this.state.text}
            style={{ height: 60, borderColor: '#0099cc', borderWidth: 4, borderRadius: 15, minWidth: 150, maxWidth: 200, backgroundColor: "#fff", color : "black", textColor : "black", textAlign: 'center'}}
            onChangeText={(value) => this.onChangeHandler2(value)}
            />
          </View>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Grade </Text>
            <Dropdown label=''
            ref = {this.grade3Ref}
            value = {grades[1].value}
            // value={this.state.text}
            onChangeText = {(value) => {this.setState({grade7: value})}}
            data={grades}
            containerStyle = {{backgroundColor: '#ff6347', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 65 }}
            labelFontSize={0}
            />
          </View>
        </View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Credit </Text>
            <Dropdown label=''
            ref = {this.credit3Ref}
            value = {credits[0].value}
            // value={this.state.text}
            onChangeText = {(value) => this.setCredit7(value)}
            data={credits}
            containerStyle = {{backgroundColor: '#ff6347', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 75 }}
            labelFontSize={0}
            />
          </View>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Class Type </Text>
            <Dropdown label=''
            ref = {this.class3Ref}
            value = {classType[4].value}
            // value={this.state.text}
            onChangeText = {(value) => {this.setState({classType7: value})}}
            data={classType}
            containerStyle = {{backgroundColor: '#0099cc', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent', textAlign: 'center'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 65 }}
            labelFontSize={0}
            />
          </View>
        </View>
      </View>
    </View>
    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', maxWidth: 350}}>
      <View style ={{flex: 1, flexDirection: 'column', borderBottomWidth: 1, borderBottomColor: 'white', paddingBottom: 30, alignItems: 'center'}}>
        <View><Text style ={styles.ClassTitle}> Class 8 </Text></View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 25}}>
          <View style = {{flex: 2,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
              }}>
            <Text style ={styles.TextLabel}> Class Name </Text>
            <TextInput label='Ex. Algebra'
            ref = {this.smallRef}
            // value={this.state.text}
            style={{ height: 60, borderColor: 'tomato', borderWidth: 4, borderRadius: 15, minWidth: 150, maxWidth: 200, backgroundColor: "#fff", color : "black", textColor : "black", textAlign: 'center'}}
            onChangeText={(value) => this.onChangeHandler2(value)}
            />
          </View>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Grade </Text>
            <Dropdown label=''
            ref = {this.grade3Ref}
            value = {grades[1].value}
            // value={this.state.text}
            onChangeText = {(value) => {this.setState({grade8: value})}}
            data={grades}
            containerStyle = {{backgroundColor: '#0099cc', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 65 }}
            labelFontSize={0}
            />
          </View>
        </View>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Credit </Text>
            <Dropdown label=''
            ref = {this.credit3Ref}
            value = {credits[0].value}
            // value={this.state.text}
            onChangeText = {(value) => this.setCredit8(value)}
            data={credits}
            containerStyle = {{backgroundColor: '#0099cc', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 75 }}
            labelFontSize={0}
            />
          </View>
          <View style = {styles.dropDownView}>
            <Text style ={styles.TextLabel}> Class Type </Text>
            <Dropdown label=''
            ref = {this.class3Ref}
            value = {classType[4].value}
            // value={this.state.text}
            onChangeText = {(value) => {this.setState({classType8: value})}}
            data={classType}
            containerStyle = {{backgroundColor: '#ff6347', borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, maxWidth: 200, minWidth: 150, alignItems: 'center'}}
            baseColor = "#000000"
            dropdownOffset = {{top: 16}}
            pickerStyle = {{borderBottomColor: 'transparent', textAlign: 'center'}}
            inputContainerStyle={{ borderBottomWidth: 0, minWidth: 65 }}
            labelFontSize={0}
            />
          </View>
        </View>
      </View>
    </View>
    <View style= {{ marginTop: 20}}>
    <Text style = {{paddingBottom: 20, fontSize: 48, fontWeight: '400', color: 'white'}}>
      {/* {this.state.grade1} hello {"\n"} */}
      {this.state.gpa.toFixed(2)} {"\n"}

      
    </Text>
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
    backgroundColor: "#1A1A1A",
  },
  dropDownView: {
    flex: 2,
    marginTop: 10,
    alignItems: 'center',
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
  TextLabel: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 16
  },
  ClassTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: '400',
    marginTop: 15
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



export default GPACalculatorScreen;
