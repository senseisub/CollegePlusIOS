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
import {PieChart} from "react-native-chart-kit";
const mainColors = ['tomato', '#0099cc'];
import CookieManager from 'react-native-cookies';

// import Chart from 'react-native-chartjs';


// import * as firebase from 'firebase';
//
// firebase.initializeApp(environment.firebase);

// import firestore from '@react-native-firebase/firestore';


// import Datastore from '@google-cloud/datastore';
//
// const datastore = new Datastore();

class CollegeRecommendations extends Component{

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
      username : "",
      password : "",
      collegelinks : this.props.route.params.collegelinks,
      collegeprices : this.props.route.params.collegeprices,
      collegetemps : this.props.route.params.collegetemps,
      collegestates : this.props.route.params.collegestates,
      collegecities : this.props.route.params.collegecities,
      collegeweathers : this.props.route.params.collegeweathers,
      collegepricecalculators : this.props.route.params.collegepricecalculators,
      collegeBlacks : this.props.route.params.collegeBlacks,
      collegeWhites : this.props.route.params.collegeWhites,
      collegeAsians : this.props.route.params.collegeAsians,
      collegeHispanics : this.props.route.params.collegeHispanics,
      collegeACTS : this.props.route.params.collegeACTS,
      collegeReadingSAT : this.props.route.params.collegeReadingSAT,
      collegeMathSAT : this.props.route.params.collegeMathSAT,
      collegeNicheLinks : this.props.route.params.collegeNicheLinks,
      collegeNames : this.props.route.params.collegeNames,
      collegeTemp : this.props.route.params.collegeTemp,
      imageACTs : [],
      imageSATs : [],
      higherLowerACT : [],
      higherLowerSAT : [],
      useract : this.props.route.params.useract,
      usersat : this.props.route.params.usersat,
      isLoggedIn : false,
      userCity : this.props.route.params.userCity,
      userState : this.props.route.params.userState,
      wholeView: [{alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'}, {alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'},{alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'},{alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'},{alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'},{alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'},{alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'},{alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'},{alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'} ],
      topView : [{alignItems: 'center', maxWidth: 250, marginTop: 20},{alignItems: 'center', maxWidth: 250, marginTop: 20},{alignItems: 'center', maxWidth: 250, marginTop: 20},{alignItems: 'center', maxWidth: 250, marginTop: 20},{alignItems: 'center', maxWidth: 250, marginTop: 20},{alignItems: 'center', maxWidth: 250, marginTop: 20},{alignItems: 'center', maxWidth: 250, marginTop: 20},{alignItems: 'center', maxWidth: 250, marginTop: 20},{alignItems: 'center', maxWidth: 250, marginTop: 20}],
      bottomView : [ {display: 'flex', flexDirection: 'row', marginBottom: 20},{display: 'flex', flexDirection: 'row', marginBottom: 20},{display: 'flex', flexDirection: 'row', marginBottom: 20},{display: 'flex', flexDirection: 'row', marginBottom: 20},{display: 'flex', flexDirection: 'row', marginBottom: 20},{display: 'flex', flexDirection: 'row', marginBottom: 20},{display: 'flex', flexDirection: 'row', marginBottom: 20},{display: 'flex', flexDirection: 'row', marginBottom: 20},{display: 'flex', flexDirection: 'row', marginBottom: 20}],
      collegeACTs : [{alignItems: 'center', minWidth: screenWidth*.5, justifyContent: 'center'},{alignItems: 'center', minWidth: screenWidth*.5, justifyContent: 'center'},{alignItems: 'center', minWidth: screenWidth*.5, justifyContent: 'center'},{alignItems: 'center', minWidth: screenWidth*.5, justifyContent: 'center'},{alignItems: 'center', minWidth: screenWidth*.5, justifyContent: 'center'},{alignItems: 'center', minWidth: screenWidth*.5, justifyContent: 'center'},{alignItems: 'center', minWidth: screenWidth*.5, justifyContent: 'center'},{alignItems: 'center', minWidth: screenWidth*.5, justifyContent: 'center'},{alignItems: 'center', minWidth: screenWidth*.5, justifyContent: 'center'} ],
      collegeSATs : [{alignItems: 'center', minWidth: screenWidth*.5},{alignItems: 'center', minWidth: screenWidth*.5},{alignItems: 'center', minWidth: screenWidth*.5},{alignItems: 'center', minWidth: screenWidth*.5},{alignItems: 'center', minWidth: screenWidth*.5},{alignItems: 'center', minWidth: screenWidth*.5},{alignItems: 'center', minWidth: screenWidth*.5},{alignItems: 'center', minWidth: screenWidth*.5},{alignItems: 'center', minWidth: screenWidth*.5} ],
      buttonStyle : [{display: 'flex', flexDirection: 'row', marginBottom: 20, marginTop: 20},{display: 'flex', flexDirection: 'row', marginBottom: 20, marginTop: 20},{display: 'flex', flexDirection: 'row', marginBottom: 20, marginTop: 20},{display: 'flex', flexDirection: 'row', marginBottom: 20, marginTop: 20},{display: 'flex', flexDirection: 'row', marginBottom: 20, marginTop: 20},{display: 'flex', flexDirection: 'row', marginBottom: 20, marginTop: 20},{display: 'flex', flexDirection: 'row', marginBottom: 20, marginTop: 20},{display: 'flex', flexDirection: 'row', marginBottom: 20, marginTop: 20},{display: 'flex', flexDirection: 'row', marginBottom: 20, marginTop: 20} ],
      graphStyle : [{},{},{},{},{},{},{},{},{}],
      greenImage : [{width: 80,height: 80,marginTop: 1},{width: 80,height: 80,marginTop: 1},{width: 80,height: 80,marginTop: 1},{width: 80,height: 80,marginTop: 1},{width: 80,height: 80,marginTop: 1},{width: 80,height: 80,marginTop: 1},{width: 80,height: 80,marginTop: 1},{width: 80,height: 80,marginTop: 1},{width: 80,height: 80,marginTop: 1} ],
      imageContainer : [ {alignItems: 'center', minWidth: screenWidth* .5},{alignItems: 'center', minWidth: screenWidth* .5},{alignItems: 'center', minWidth: screenWidth* .5},{alignItems: 'center', minWidth: screenWidth* .5},{alignItems: 'center', minWidth: screenWidth* .5},{alignItems: 'center', minWidth: screenWidth* .5},{alignItems: 'center', minWidth: screenWidth* .5},{alignItems: 'center', minWidth: screenWidth* .5},{alignItems: 'center', minWidth: screenWidth* .5} ],
      optionsButton : [{maxWidth: screenWidth * .4, backgroundColor: mainColors[Math.floor(Math.random() * 2)],borderRadius: 8,padding: 7},{maxWidth: screenWidth * .4, backgroundColor: mainColors[Math.floor(Math.random() * 2)],borderRadius: 8,padding: 7},{maxWidth: screenWidth * .4, backgroundColor: mainColors[Math.floor(Math.random() * 2)],borderRadius: 8,padding: 7},{maxWidth: screenWidth * .4, backgroundColor: mainColors[Math.floor(Math.random() * 2)],borderRadius: 8,padding: 7},{maxWidth: screenWidth * .4, backgroundColor: mainColors[Math.floor(Math.random() * 2)],borderRadius: 8,padding: 7},{maxWidth: screenWidth * .4, backgroundColor: mainColors[Math.floor(Math.random() * 2)],borderRadius: 8,padding: 7},{maxWidth: screenWidth * .4, backgroundColor: mainColors[Math.floor(Math.random() * 2)],borderRadius: 8,padding: 7},{maxWidth: screenWidth * .4, backgroundColor: mainColors[Math.floor(Math.random() * 2)],borderRadius: 8,padding: 7},{maxWidth: screenWidth * .4, backgroundColor: mainColors[Math.floor(Math.random() * 2)],borderRadius: 8,padding: 7} ],
    };
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
        this.setDatastore();
      }
    });
    await console.log(this.state.username);
  }

  async setDatastore(){
    console.log("DATASTORE");
      let wholeString = "";
      let wholeCitiesString = "";
      let wholeStatesString = "";
      let wholeCollegeTempString = "";
      let wholeCollegeWeatherString = "";
      let wholeCollegeLinksString = "";
      console.log(this.state.isLoggedIn);
      if(this.state.isLoggedIn){
        let colleges = [];
        let collegeCities = [];
        for(var i = 0; i < this.state.collegeNames.length ; i++){
          colleges.push(this.state.collegeNames[i].replace(new RegExp(' ', 'g'), '+'));
        }
        for(var i = 0; i < this.state.collegeNames.length ; i++){
          colleges[i] = colleges[i].replace(new RegExp('&', 'g'), '');
          wholeString += colleges[i] + "~";
        }
        for(var i = 0; i < this.state.collegecities.length ; i++){
          collegeCities.push(this.state.collegecities[i].replace(' ', '+'));
            console.log(wholeCitiesString);
            wholeCitiesString += collegeCities[i] + "~";
        }
        for(var i = 0; i < this.state.collegestates.length ; i++){
            wholeStatesString += this.state.collegestates[i] + "~";
        }
        for(var i = 0; i < this.state.collegeTemp.length ; i++){
            console.log(this.state.collegetemps[i]);
            wholeCollegeTempString += this.state.collegeTemp[i] + "~";
        }
        for(var i = 0; i < this.state.collegeweathers.length ; i++){
            wholeCollegeWeatherString += this.state.collegeweathers[i] + "~";
        }
        for(var i = 0; i < this.state.collegelinks.length ; i++){
            wholeCollegeLinksString += this.state.collegelinks[i] + "~";
        }

        // let college1 = this.state.arr2[0].replace(new RegExp(' ', 'g'), '+');
        // let college2 = this.state.arr2[1].replace(new RegExp(' ', 'g'), '+');
        // let college3 = this.state.arr2[2].replace(new RegExp(' ', 'g'), '+');
        // college1 = college1.replace(new RegExp('&', 'g'), '');
        // college2 = college2.replace(new RegExp('&', 'g'), '');
        // college3 = college3.replace(new RegExp('&', 'g'), '');
        // let usersat = this.state.usersat.replace(new RegExp(' ', 'g'), '+');
        // let useract = this.state.useract.replace(new RegExp(' ', 'g'), '+');
        // this.setState({
        //                 collegecity1 : this.state.collegecity1.replace(' ', '+'), 
        //                 collegecity2 : this.state.collegecity2.replace(' ', '+'), 
        //                 collegecity3 : this.state.collegecity3.replace(' ', '+')
        //               });
        console.log(wholeCollegeTempString);
        let url = "https://collegeplus.us/setData?username=" + this.state.username + "&password=" + this.state.password + "&colleges="+ wholeString + "&collegeweathers="+ wholeCollegeWeatherString + "&collegetemps="+ wholeCollegeTempString + "&collegecities="+ wholeCitiesString + "&collegestates="+ wholeStatesString + "&collegelinks="+ wholeCollegeLinksString + "&major1=&major2=&major3=&device1=&device2=&device3=&gpa=&usersat="+this.state.usersat+"&useract="+this.state.useract+"&gpa=&userCity="+ this.state.userCity +"&userState="+ this.state.userState +"&apiKey=seunsSpecificKey21382947";
        if(this.state.password == "~"){
            url = "https://collegeplus.us/setData?username=" + this.state.username + "&password=" + this.state.password + "&colleges="+ wholeString + "&collegeweathers="+ wholeCollegeWeatherString + "&collegetemps="+ wholeCollegeTempString + "&collegecities="+ wholeCitiesString + "&collegestates="+ wholeStatesString + "&collegelinks="+ wholeCollegeLinksString + "&major1=&major2=&major3=&device1=&device2=&device3=&gpa=&usersat="+this.state.usersat+"&useract="+this.state.useract+"&gpa=&userCity="+ this.state.userCity +"&userState="+ this.state.userState +"&apple=TRUE&apiKey=seunsSpecificKey21382947";
        }
        else{
            url = "https://collegeplus.us/setData?username=" + this.state.username + "&password=" + this.state.password + "&colleges="+ wholeString + "&collegeweathers="+ wholeCollegeWeatherString + "&collegetemps="+ wholeCollegeTempString + "&collegecities="+ wholeCitiesString + "&collegestates="+ wholeStatesString + "&collegelinks="+ wholeCollegeLinksString + "&major1=&major2=&major3=&device1=&device2=&device3=&gpa=&usersat="+this.state.usersat+"&useract="+this.state.useract+"&gpa=&userCity="+ this.state.userCity +"&userState="+ this.state.userState +"&apple=FALSE&apiKey=seunsSpecificKey21382947";
        }
        console.log(url);
        await fetch(url)
        .then(response => response.json())
        .then((responseJson)=> {
          console.log("IN THE DATASTORE");
          // this.setState({
          //   collegecity1 : this.state.collegecity1.replace('+', ' '), 
          //   collegecity2 : this.state.collegecity2.replace('+', ' '), 
          //   collegecity3 : this.state.collegecity3.replace('+', ' ')
            
          // });
          loadingImage = {width: 0, height : 0};
            this.setState({loading : false, submitText : "See Results"});
        })
        .catch(error=>console.log(error)); //to catch the errors if any
      }
  }
  UNSAFE_componentWillMount = async() =>{
        console.log(this.state.collegeTemp);
        for(var i = 0 ; i < this.state.collegeNames.length; i++){
            console.log(i);
            try{
                if(!this.state.collegeNames[i] ){
                    this.state.imageACTs.push(require("./yellowlight.png"));
                    this.state.higherLowerACT.push("Can't compare your score to nothing :/");
                }
                else if(parseInt(this.state.useract, 10) >= parseInt(this.state.collegeACTS[i], 10)){
                    this.state.imageACTs.push(require("./greenlight.png"));
                    this.state.higherLowerACT.push("You score higher or equal to the average");
                }
                else{
                    this.state.imageACTs.push(require("./redlight2.png"));
                    this.state.higherLowerACT.push("You score lower than the average");
    
                }
            }
            catch(e){
                this.state.imageACTs.push(require("./yellowlight.png"));
            }
            try{
                if(!this.state.collegeNames[0] ){
                    this.state.imageSATs.push(require("./yellowlight.png"));
                    this.state.higherLowerSAT.push("Can't compare your score to nothing :/");
                }
                else if(parseInt(this.state.usersat, 10) >= (parseInt(this.state.collegeReadingSAT[i], 10) + parseInt(this.state.collegeMathSAT[i]))){
                    this.state.imageSATs.push(require("./greenlight.png"));
                    this.state.higherLowerSAT.push("You score higher or equal to the average");
    
                }
                else{
                    this.state.imageSATs.push(require("./redlight2.png"));
                    this.state.higherLowerSAT.push("You score lower than the average");
    
                }
            }
            catch(e){
                this.state.imageSATs.push(require("./yellowlight.png"));
            }
        }
        console.log(this.state.imageACTs);
        console.log(this.state.collegeReadingSAT);
        console.log(this.state.collegeMathSAT);
        console.log(this.state.buttonStyle);
        await this.getCookies();
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
      const arr2 = this.props.route.params.arr2;      
      if(this.state.collegeNames.length > 0){
        return (
            <>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#1A1A1A" translucent = {true}/>
            <ScrollView style ={styles.pickerPage}>
                <View style= {this.state.wholeView[0]= this.state.collegeNames[0] ? this.state.wholeView[0] : {height : 0, width : 0}}>
                    <View style= {this.state.topView[0]= this.state.collegeNames[0] ? this.state.topView[0] : {height : 0, width : 0}}>
                        <Text onPress={() => this._goToURL(this.state.collegeNicheLinks[0])} style = {styles.header}>
                            {this.state.collegeNames[0]}
                        </Text>
                        <Text style = {styles.weather}>
                            {this.state.collegecities[0]}, {this.state.collegeTemp[0]}° {this.state.collegeweathers[0]}
                            <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "#fff"
                                size= {15}
                            />
                        </Text>
                        <Text style = {styles.costOfAttendance}>
                            Average cost of attendance for your household income:
                        </Text>
                        <Text style = {styles.bigPrice}>
                            ${this.state.collegeprices[0]}
                        </Text>
                        <TouchableOpacity onPress={() => this._goToURL(this.state.collegepricecalculators[0])} style = {styles.priceCalcButton}>
                            <Text style = {styles.priceCalc}>
                                Check out {this.state.collegeNames[0]}'s Price Calculator
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.bottomView[0] = this.state.collegeNames[0] ? this.state.bottomView[0] : {height : 0, width : 0}}>
                        <View style={this.state.collegeACTs[0]  = this.state.collegeNames[0] ? this.state.collegeACTs[0] : {height : 0, width : 0}} >
                            <Text style = {{textAlign: 'center', color: 'white'}} onPress = {()=>{console.log(this.state.graphStyle), "\n", console.log(this.state.topView)}}>
                                Average ACT score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeACTS[0] = this.state.collegeACTS[0] ? this.state.collegeACTS[0] : "No info :("}
                            </Text>
                        </View>
                        <View style={this.state.collegeSATs[0]  = this.state.collegeNames[0] ? this.state.collegeSATs[0] : {height : 0, width : 0}}>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Reading score:                        
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeReadingSAT[0] = this.state.collegeReadingSAT[0] ? this.state.collegeReadingSAT[0] : "No info :("}
                            </Text>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Math score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeMathSAT[0] = this.state.collegeMathSAT[0] ? this.state.collegeMathSAT[0] : "No info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[0]  = this.state.collegeNames[0] ? this.state.buttonStyle[0] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[0]}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerACT[0] = this.state.collegeNames[0]  ? this.state.higherLowerACT[0] : "No Info :("}
                            </Text>
                        </View>
                        <View style = {this.state.imageContainer[0]}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerSAT[0] = this.state.collegeNames[0]  ? this.state.higherLowerSAT[0] : "No Info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[0]  = this.state.collegeNames[0] ? this.state.buttonStyle[0] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[0] = this.state.collegeNames[0] ? this.state.imageContainer[0] : {height : 0, width : 0}}>
                            <Image
                            style={this.state.greenImage[0] = this.state.collegeNames[0] ? this.state.greenImage[0] : {height : 0, width : 0}}
                                source={
                                        this.state.imageACTs[0] = this.state.collegeNames[0] ? this.state.imageACTs[0] : this.state.imageACTs[0]
                                    }
                            />
                        </View>
                        <View style = {this.state.imageContainer[0] = this.state.collegeNames[0] ? this.state.imageContainer[0] : {height : 0, width : 0}}>
                            <Image
                            style={this.state.greenImage[0] = this.state.collegeNames[0] ? this.state.greenImage[0] : {height : 0, width : 0}}
                                source={
                                    this.state.imageSATs[0] = this.state.collegeNames[0] ? this.state.imageSATs[0] : this.state.imageSATs[0]
                                }
                            />
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[0]  = this.state.collegeNames[0] ? this.state.buttonStyle[0] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[0]}>
                            <TouchableOpacity style = {this.state.optionsButton[0]} onPress={() => this._goToURL(this.state.collegelinks[0])} >
                                <Text style = {styles.priceCalc}>
                                    Visit {this.state.collegeNames[0]}'s Website
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {this.state.imageContainer[0]}>
                            <TouchableOpacity  style = {this.state.optionsButton[0]} onPress={() => this._goToURL(this.state.collegeNicheLinks[0])}>
                                <Text style = {styles.priceCalc}>
                                More Info on {this.state.collegeNames[0]}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {this.state.graphStyle[0] = this.state.collegeNames[0] ? this.state.graphStyle[0] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Black Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeBlacks[1] = isNaN(this.state.collegeBlacks[0]) ? 0 : this.state.collegeBlacks[0])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Black",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeBlacks[1] = isNaN(this.state.collegeBlacks[0]) ? 0 : this.state.collegeBlacks[0])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[0] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[0] = this.state.collegeNames[0] ? this.state.graphStyle[0] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            White Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeWhites[0] = isNaN(this.state.collegeWhites[0]) ? 0 : this.state.collegeWhites[0])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% White",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeWhites[0] = isNaN(this.state.collegeWhites[0]) ? 0 : this.state.collegeWhites[0])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[0] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[0] = this.state.collegeNames[0] ? this.state.graphStyle[0] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Asian Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeAsians[0] = isNaN(this.state.collegeAsians[0]) ? 0 : this.state.collegeAsians[0])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Asian",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeAsians[0] = isNaN(this.state.collegeAsians[0]) ? 0 : this.state.collegeAsians[0])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[0] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[0] = this.state.collegeNames[0] ? this.state.graphStyle[0] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Hispanic Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeHispanics[0] = isNaN(this.state.collegeHispanics[0]) ? 0 : this.state.collegeHispanics[0])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Hispanic",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeHispanics[0] = isNaN(this.state.collegeHispanics[0]) ? 0 : this.state.collegeHispanics[0])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[0] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {{height : 40}}>

                    </View>
                </View>
                <View style= {this.state.wholeView[1]= this.state.collegeNames[1] ? this.state.wholeView[1] : {height : 0, width : 0}}>
                    <View style= {this.state.topView[1]= this.state.collegeNames[1] ? this.state.topView[1] : {height : 0, width : 0}}>
                        <Text onPress={() => this._goToURL(this.state.collegeNicheLinks[1])} style = {styles.header}>
                            {this.state.collegeNames[1]}
                        </Text>
                        <Text style = {styles.weather}>
                            {this.state.collegecities[1]}, {this.state.collegeTemp[1]}° {this.state.collegeweathers[1]}
                            <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "#fff"
                                size= {15}
                            />
                        </Text>
                        <Text style = {styles.costOfAttendance}>
                            Average cost of attendance for your household income:
                        </Text>
                        <Text style = {styles.bigPrice}>
                            ${this.state.collegeprices[1]}
                        </Text>
                        <TouchableOpacity onPress={() => this._goToURL(this.state.collegepricecalculators[1])} style = {styles.priceCalcButton}>
                            <Text style = {styles.priceCalc}>
                                Check out {this.state.collegeNames[1]}'s Price Calculator
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.bottomView[1] = this.state.collegeNames[1] ? this.state.bottomView[1] : {height : 0, width : 0}}>
                        <View style={this.state.collegeACTs[1]  = this.state.collegeNames[1] ? this.state.collegeACTs[1] : {height : 0, width : 0}}>
                            <Text style = {{textAlign: 'center', color: 'white'}}>
                                Average ACT score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeACTS[1] = this.state.collegeACTS[1] ? this.state.collegeACTS[1] : "No info :("}
                            </Text>
                        </View>
                        <View style={this.state.collegeSATs[1]  = this.state.collegeNames[1] ? this.state.collegeSATs[1] : {height : 0, width : 0}}>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Reading score:                        
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeReadingSAT[1] = this.state.collegeReadingSAT[1] ? this.state.collegeReadingSAT[1] : "No info :("}
                            </Text>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Math score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeMathSAT[1] = this.state.collegeMathSAT[1]  ? this.state.collegeMathSAT[1]  : "No info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[1]  = this.state.collegeNames[1] ? this.state.buttonStyle[1] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[1]}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerACT[1] = this.state.collegeNames[1]  ? this.state.higherLowerACT[1] : "No Info :("}
                            </Text>
                        </View>
                        <View style = {this.state.imageContainer[1]}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerSAT[1] = this.state.collegeNames[1]  ? this.state.higherLowerSAT[1] : "No Info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[1]  = this.state.collegeNames[1] ? this.state.buttonStyle[1] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[1] = this.state.collegeNames[1] ? this.state.imageContainer[1] : {height : 0, width : 0}}>
                            <Image
                            style={this.state.greenImage[1] = this.state.collegeNames[1] ? this.state.greenImage[1] : {height : 0, width : 0}}
                                source={
                                    this.state.imageACTs[1] = this.state.collegeNames[1] ? this.state.imageACTs[1] : this.state.imageACTs[0]
                                    }
                            />
                        </View>
                        <View style = {this.state.imageContainer[1] = this.state.collegeNames[1] ? this.state.imageContainer[1] : {height : 0, width : 0}}>
                            <Image
                            style={this.state.greenImage[1] = this.state.collegeNames[1] ? this.state.greenImage[1] : {height : 0, width : 0}}
                                source={
                                    this.state.imageSATs[1] = this.state.collegeNames[1] ? this.state.imageSATs[1] : this.state.imageSATs[0]
                                }
                            />
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[1]  = this.state.collegeNames[1] ? this.state.buttonStyle[1] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[1]}>
                            <TouchableOpacity style = {this.state.optionsButton[1]} onPress={() => this._goToURL(this.state.collegelinks[1])} >
                                <Text style = {styles.priceCalc}>
                                    Visit {this.state.collegeNames[1]}'s Website
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {this.state.imageContainer[1]}>
                            <TouchableOpacity  style = {this.state.optionsButton[1]} onPress={() => this._goToURL(this.state.collegeNicheLinks[1])}>
                                <Text style = {styles.priceCalc}>
                                More Info on {this.state.collegeNames[1]}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {this.state.graphStyle[1] = this.state.collegeNames[1] ? this.state.graphStyle[1] : {height : 0, width : 0}}>
                        <Text style = {styles.title}> 
                            Black Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeBlacks[1] = isNaN(this.state.collegeBlacks[1]) ? 0 : this.state.collegeBlacks[1])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Black",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeBlacks[1])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[1] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[1] = this.state.collegeNames[1] ? this.state.graphStyle[1] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            White Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeWhites[1] = isNaN(this.state.collegeWhites[1]) ? 0 : this.state.collegeWhites[1])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% White",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeWhites[1] = isNaN(this.state.collegeWhites[1]) ? 0 : this.state.collegeWhites[1])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[1] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[1] = this.state.collegeNames[1] ? this.state.graphStyle[1] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Asian Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeAsians[1] = isNaN(this.state.collegeAsians[1]) ? 0 : this.state.collegeAsians[1])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Asian",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeAsians[1] = isNaN(this.state.collegeAsians[1]) ? 0 : this.state.collegeAsians[1])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[1] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[1] = this.state.collegeNames[1] ? this.state.graphStyle[1] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Hispanic Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeHispanics[1] = isNaN(this.state.collegeHispanics[1]) ? 0 : this.state.collegeHispanics[1])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Hispanic",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeHispanics[1] = isNaN(this.state.collegeHispanics[1]) ? 0 : this.state.collegeHispanics[1])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[1] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {{height : 40}}>

                    </View>
                </View>
                <View style= {this.state.wholeView[2]= this.state.collegeNames[2] ? this.state.wholeView[2] : {height : 0, width : 0}}>
                    <View style= {this.state.topView[2]= this.state.collegeNames[2] ? this.state.topView[2] : {height : 0, width : 0}}>
                        <Text onPress={() => this._goToURL(this.state.collegeNicheLinks[2])} style = {styles.header}>
                            {this.state.collegeNames[2]}
                        </Text>
                        <Text style = {styles.weather}>
                            {this.state.collegecities[2]}, {this.state.collegeTemp[2]}° {this.state.collegeweathers[2]}
                            <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "#fff"
                                size= {15}
                            />
                        </Text>
                        <Text style = {styles.costOfAttendance}>
                            Average cost of attendance for your household income:
                        </Text>
                        <Text style = {styles.bigPrice}>
                            ${this.state.collegeprices[2]}
                        </Text>
                        <TouchableOpacity onPress={() => this._goToURL(this.state.collegepricecalculators[2])} style = {styles.priceCalcButton}>
                            <Text style = {styles.priceCalc}>
                                Check out {this.state.collegeNames[2]}'s Price Calculator
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.bottomView[2] = this.state.collegeNames[2] ? this.state.bottomView[2] : {height : 0, width : 0}}>
                        <View style={this.state.collegeACTs[2]  = this.state.collegeNames[2] ? this.state.collegeACTs[2] : {height : 0, width : 0}}>
                            <Text style = {{textAlign: 'center', color: 'white'}}>
                                Average ACT score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeACTS[2] = this.state.collegeACTS[2] ? this.state.collegeACTS[2] : "No info :("}
                            </Text>
                        </View>
                        <View style={this.state.collegeSATs[2]  = this.state.collegeNames[2] ? this.state.collegeSATs[2] : {height : 0, width : 0}}>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Reading score:                        
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeReadingSAT[2] = this.state.collegeReadingSAT[2] ? this.state.collegeReadingSAT[2] : "No info :("}
                            </Text>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Math score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeMathSAT[2] = this.state.collegeMathSAT[2]  ? this.state.collegeMathSAT[2]  : "No info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[2]  = this.state.collegeNames[2] ? this.state.buttonStyle[2] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[2]}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerACT[2] = this.state.collegeNames[2]  ? this.state.higherLowerACT[2] : "No Info :("}
                            </Text>
                        </View>
                        <View style = {this.state.imageContainer[2]}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerSAT[2] = this.state.collegeNames[2]  ? this.state.higherLowerSAT[2] : "No Info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[2]  = this.state.collegeNames[2] ? this.state.buttonStyle[2] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[2] = this.state.collegeNames[2] ? this.state.imageContainer[2] : {height : 0, width : 0}}>
                            <Image
                            style={this.state.greenImage[2] = this.state.collegeNames[2] ? this.state.greenImage[2] : {height : 0, width : 0}}
                                source={
                                    this.state.imageACTs[2] = this.state.collegeNames[2] ? this.state.imageACTs[2] : this.state.imageACTs[0]
                                    }
                            />
                        </View>
                        <View style = {this.state.imageContainer[2] = this.state.collegeNames[2] ? this.state.imageContainer[2] : {height : 0, width : 0}}>
                            <Image
                            style={this.state.greenImage[2] = this.state.collegeNames[2] ? this.state.greenImage[2] : {height : 0, width : 0}}
                                source={
                                    this.state.imageSATs[2] = this.state.collegeNames[2] ? this.state.imageSATs[2] : this.state.imageSATs[0]
                                }
                            />
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[2]  = this.state.collegeNames[2] ? this.state.buttonStyle[2] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[2]}>
                            <TouchableOpacity style = {this.state.optionsButton[2]} onPress={() => this._goToURL(this.state.collegelinks[2])} >
                                <Text style = {styles.priceCalc}>
                                    Visit {this.state.collegeNames[2]}'s Website
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {this.state.imageContainer[2]}>
                            <TouchableOpacity  style = {this.state.optionsButton[2]} onPress={() => this._goToURL(this.state.collegeNicheLinks[2])}>
                                <Text style = {styles.priceCalc}>
                                More Info on {this.state.collegeNames[2]}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {this.state.graphStyle[2] = this.state.collegeNames[2] ? this.state.graphStyle[2] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Black Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeBlacks[2] = isNaN(this.state.collegeBlacks[2]) ? 0 : this.state.collegeBlacks[2])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Black",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeBlacks[2] = isNaN(this.state.collegeBlacks[2]) ? 0 : this.state.collegeBlacks[2])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[2] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[2] = this.state.collegeNames[2] ? this.state.graphStyle[2] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            White Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeWhites[2] = isNaN(this.state.collegeWhites[2]) ? 0 : this.state.collegeWhites[2])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% White",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeWhites[2] = isNaN(this.state.collegeWhites[2]) ? 0 : this.state.collegeWhites[2])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[2] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[2] = this.state.collegeNames[2] ? this.state.graphStyle[2] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Asian Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeAsians[2] = isNaN(this.state.collegeAsians[2]) ? 0 : this.state.collegeAsians[2])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Asian",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeAsians[2] = isNaN(this.state.collegeAsians[2]) ? 0 : this.state.collegeAsians[2])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[2] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[2] = this.state.collegeNames[2] ? this.state.graphStyle[2] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Hispanic Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeHispanics[2] = isNaN(this.state.collegeHispanics[2]) ? 0 : this.state.collegeHispanics[2])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Hispanic",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeHispanics[2] = isNaN(this.state.collegeHispanics[2]) ? 0 : this.state.collegeHispanics[2])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[2] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {{height : 40}}>

                    </View>
                </View>
                <View style= {this.state.wholeView[3]= this.state.collegeNames[3] ? this.state.wholeView[3] : {height : 0, width : 0}}>
                    <View style= {this.state.topView[3]= this.state.collegeNames[3] ? this.state.topView[3] : {height : 0, width : 0}}>
                        <Text onPress={() => this._goToURL(this.state.collegeNicheLinks[3])} style = {styles.header}>
                            {this.state.collegeNames[3]}
                        </Text>
                        <Text style = {styles.weather}>
                            {this.state.collegecities[3]}, {this.state.collegeTemp[3]}° {this.state.collegeweathers[3]}
                            <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "#fff"
                                size= {15}
                            />
                        </Text>
                        <Text style = {styles.costOfAttendance}>
                            Average cost of attendance for your household income:
                        </Text>
                        <Text style = {styles.bigPrice}>
                            ${this.state.collegeprices[3]}
                        </Text>
                        <TouchableOpacity onPress={() => this._goToURL(this.state.collegepricecalculators[3])} style = {styles.priceCalcButton}>
                            <Text style = {styles.priceCalc }>
                                Check out {this.state.collegeNames[3]}'s Price Calculator
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.bottomView[3]  = this.state.collegeNames[3] ? this.state.bottomView[3] : {height : 0, width : 0}}>
                        <View style={this.state.collegeACTs[3]  = this.state.collegeNames[3] ? this.state.collegeACTs[3] : {height : 0, width : 0}}>
                            <Text style = {{textAlign: 'center', color: 'white'}}>
                                Average ACT score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeACTS[3] = this.state.collegeACTS[3] ? this.state.collegeACTS[3] : "No info :("}
                            </Text>
                        </View>
                        <View style={this.state.collegeSATs[3]  = this.state.collegeNames[3] ? this.state.collegeSATs[3] : {height : 0, width : 0}}>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Reading score:                        
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeReadingSAT[3] = this.state.collegeReadingSAT[3] ? this.state.collegeReadingSAT[3] : "No info :("}
                            </Text>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Math score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeMathSAT[3] = this.state.collegeMathSAT[3]  ? this.state.collegeMathSAT[3]  : "No info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[3]  = this.state.collegeNames[3] ? this.state.buttonStyle[3] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[3]  = this.state.collegeNames[3] ? this.state.imageContainer[3] : {height : 0, width : 0}}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerACT[3] = this.state.collegeNames[3]  ? this.state.higherLowerACT[3] : "No Info :("}
                            </Text>
                        </View>
                        <View style = {this.state.imageContainer[3]= this.state.collegeNames[3] ? this.state.imageContainer[3] : {height : 0, width : 0}}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerSAT[3] = this.state.collegeNames[3]  ? this.state.higherLowerSAT[3] : "No Info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[3]  = this.state.collegeNames[3] ? this.state.buttonStyle[3] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[3]  = this.state.collegeNames[3] ? this.state.imageContainer[3] : {height : 0, width : 0}}>
                            <Image
                            style={this.state.greenImage[3] = this.state.collegeNames[3] ? this.state.greenImage[3] : {height : 0, width : 0}}
                                source={
                                    this.state.imageACTs[3] = this.state.collegeNames[3] ? this.state.imageACTs[3] : this.state.imageACTs[0]
                                    }
                            />
                        </View>
                        <View style = {this.state.imageContainer[3]}>
                            <Image
                            style={this.state.greenImage[3] = this.state.collegeNames[3] ? this.state.greenImage[3] : {height : 0, width : 0}}
                                source={
                                    this.state.imageSATs[3] = this.state.collegeNames[3] ? this.state.imageSATs[3] : this.state.imageSATs[0]
                                }
                            />
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[3]  = this.state.collegeNames[3] ? this.state.buttonStyle[3] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[3]}>
                            <TouchableOpacity style = {this.state.optionsButton[3]= this.state.collegeNames[3] ? this.state.optionsButton[3] : {height : 0, width : 0}} onPress={() => this._goToURL(this.state.collegelinks[3])} >
                                <Text style = {styles.priceCalc}>
                                    Visit {this.state.collegeNames[3]}'s Website
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {this.state.imageContainer[3]}>
                            <TouchableOpacity  style = {this.state.optionsButton[3]= this.state.collegeNames[3] ? this.state.optionsButton[3] : {height : 0, width : 0}} onPress={() => this._goToURL(this.state.collegeNicheLinks[3])}>
                                <Text style = {styles.priceCalc}>
                                More Info on {this.state.collegeNames[3]}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {this.state.graphStyle[3] = this.state.collegeNames[3] ? this.state.graphStyle[3] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Black Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeBlacks[3] = isNaN(this.state.collegeBlacks[3]) ? 0 : this.state.collegeBlacks[3])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Black",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeBlacks[3] = isNaN(this.state.collegeBlacks[3]) ? 0 : this.state.collegeBlacks[3])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[3] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[3] = this.state.collegeNames[3] ? this.state.graphStyle[3] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            White Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeWhites[3] = isNaN(this.state.collegeWhites[3]) ? 0 : this.state.collegeWhites[3])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% White",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeWhites[3] = isNaN(this.state.collegeWhites[3]) ? 0 : this.state.collegeWhites[3])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[3] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[3] = this.state.collegeNames[3] ? this.state.graphStyle[3] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Asian Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeAsians[3] = isNaN(this.state.collegeAsians[3]) ? 0 : this.state.collegeAsians[3])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Asian",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeAsians[3] = isNaN(this.state.collegeAsians[3]) ? 0 : this.state.collegeAsians[3])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[3] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[3] = this.state.collegeNames[3] ? this.state.graphStyle[3] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Hispanic Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeHispanics[3] = isNaN(this.state.collegeHispanics[3]) ? 0 : this.state.collegeHispanics[3])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Hispanic",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeHispanics[3] = isNaN(this.state.collegeHispanics[3]) ? 0 : this.state.collegeHispanics[3])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[3] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {{height : 40}}>

                    </View>
                </View>
                <View style= {this.state.wholeView[4]= this.state.collegeNames[4] ? this.state.wholeView[4] : {height : 0, width : 0}}>
                    <View style= {this.state.topView[4]= this.state.collegeNames[4] ? this.state.topView[4] : {height : 0, width : 0}}>
                        <Text onPress={() => this._goToURL(this.state.collegeNicheLinks[4])} style = {styles.header}>
                            {this.state.collegeNames[4]}
                        </Text>
                        <Text style = {styles.weather}>
                            {this.state.collegecities[4]}, {this.state.collegeTemp[4]}° {this.state.collegeweathers[4]}
                            <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "#fff"
                                size= {15}
                            />
                        </Text>
                        <Text style = {styles.costOfAttendance}>
                            Average cost of attendance for your household income:
                        </Text>
                        <Text style = {styles.bigPrice}>
                            ${this.state.collegeprices[4]}
                        </Text>
                        <TouchableOpacity onPress={() => this._goToURL(this.state.collegepricecalculators[4])} style = {styles.priceCalcButton}>
                            <Text style = {styles.priceCalc }>
                                Check out {this.state.collegeNames[4]}'s Price Calculator
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.bottomView[4]  = this.state.collegeNames[4] ? this.state.bottomView[4] : {height : 0, width : 0}}>
                        <View style={this.state.collegeACTs[4]  = this.state.collegeNames[4] ? this.state.collegeACTs[4] : {height : 0, width : 0}}>
                            <Text style = {{textAlign: 'center', color: 'white'}}>
                                Average ACT score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeACTS[4] = this.state.collegeACTS[4] ? this.state.collegeACTS[4] : "No info :("}
                            </Text>
                        </View>
                        <View style={this.state.collegeSATs[4]  = this.state.collegeNames[4] ? this.state.collegeSATs[4] : {height : 0, width : 0}}>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Reading score:                        
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeReadingSAT[4] = this.state.collegeReadingSAT[4] ? this.state.collegeReadingSAT[4] : "No info :("}
                            </Text>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Math score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeMathSAT[4] = this.state.collegeMathSAT[4]  ? this.state.collegeMathSAT[4]  : "No info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[4]  = this.state.collegeNames[4] ? this.state.buttonStyle[4] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[4]  = this.state.collegeNames[4] ? this.state.imageContainer[4] : {height : 0, width : 0}}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerACT[4] = this.state.collegeNames[4]  ? this.state.higherLowerACT[4] : "No Info :("}
                            </Text>
                        </View>
                        <View style = {this.state.imageContainer[4]= this.state.collegeNames[4] ? this.state.imageContainer[4] : {height : 0, width : 0}}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerSAT[4] = this.state.collegeNames[4]  ? this.state.higherLowerSAT[4] : "No Info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[4]  = this.state.collegeNames[4] ? this.state.buttonStyle[4] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[4]  = this.state.collegeNames[4] ? this.state.imageContainer[4] : {height : 0, width : 0}}>
                            <Image
                            style={this.state.greenImage[4] = this.state.collegeNames[4] ? this.state.greenImage[4] : {height : 0, width : 0}}
                                source={
                                    this.state.imageACTs[4] = this.state.collegeNames[4] ? this.state.imageACTs[4] : this.state.imageACTs[0]
                                    }
                            />
                        </View>
                        <View style = {this.state.imageContainer[4]}>
                            <Image
                            style={this.state.greenImage[4] = this.state.collegeNames[4] ? this.state.greenImage[4] : {height : 0, width : 0}}
                                source={
                                    this.state.imageSATs[4] = this.state.collegeNames[4] ? this.state.imageSATs[4] : this.state.imageSATs[0]
                                }
                            />
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[4]  = this.state.collegeNames[4] ? this.state.buttonStyle[4] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[4]}>
                            <TouchableOpacity style = {this.state.optionsButton[4]= this.state.collegeNames[4] ? this.state.optionsButton[4] : {height : 0, width : 0}} onPress={() => this._goToURL(this.state.collegelinks[4])} >
                                <Text style = {styles.priceCalc}>
                                    Visit {this.state.collegeNames[4]}'s Website
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {this.state.imageContainer[4]}>
                            <TouchableOpacity  style = {this.state.optionsButton[4]= this.state.collegeNames[4] ? this.state.optionsButton[4] : {height : 0, width : 0}} onPress={() => this._goToURL(this.state.collegeNicheLinks[4])}>
                                <Text style = {styles.priceCalc}>
                                More Info on {this.state.collegeNames[4]}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {this.state.graphStyle[4] = this.state.collegeNames[4] ? this.state.graphStyle[4] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Black Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeBlacks[4] = isNaN(this.state.collegeBlacks[4]) ? 0 : this.state.collegeBlacks[4])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Black",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeBlacks[4] = isNaN(this.state.collegeBlacks[4]) ? 0 : this.state.collegeBlacks[4])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[4] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[4] = this.state.collegeNames[4] ? this.state.graphStyle[4] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            White Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeWhites[4] = isNaN(this.state.collegeWhites[4]) ? 0 : this.state.collegeWhites[4])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% White",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeWhites[4] = isNaN(this.state.collegeWhites[4]) ? 0 : this.state.collegeWhites[4])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[4] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[4] = this.state.collegeNames[4] ? this.state.graphStyle[4] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Asian Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeAsians[4] = isNaN(this.state.collegeAsians[4]) ? 0 : this.state.collegeAsians[4])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Asian",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeAsians[4] = isNaN(this.state.collegeAsians[4]) ? 0 : this.state.collegeAsians[4])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[4] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[4] = this.state.collegeNames[4] ? this.state.graphStyle[4] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Hispanic Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeHispanics[4] = isNaN(this.state.collegeHispanics[4]) ? 0 : this.state.collegeHispanics[4])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Hispanic",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeHispanics[4] = isNaN(this.state.collegeHispanics[4]) ? 0 : this.state.collegeHispanics[4])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[4] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {{height : 40}}>

                    </View>
                </View>
                <View style= {this.state.wholeView[5]= this.state.collegeNames[5] ? this.state.wholeView[5] : {height : 0, width : 0}}>
                    <View style= {this.state.topView[5]= this.state.collegeNames[5] ? this.state.topView[5] : {height : 0, width : 0}}>
                        <Text onPress={() => this._goToURL(this.state.collegeNicheLinks[5])} style = {styles.header}>
                            {this.state.collegeNames[5]}
                        </Text>
                        <Text style = {styles.weather}>
                            {this.state.collegecities[5]}, {this.state.collegeTemp[5]}° {this.state.collegeweathers[5]}
                            <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "#fff"
                                size= {15}
                            />
                        </Text>
                        <Text style = {styles.costOfAttendance}>
                            Average cost of attendance for your household income:
                        </Text>
                        <Text style = {styles.bigPrice}>
                            ${this.state.collegeprices[5]}
                        </Text>
                        <TouchableOpacity onPress={() => this._goToURL(this.state.collegepricecalculators[5])} style = {styles.priceCalcButton}>
                            <Text style = {styles.priceCalc }>
                                Check out {this.state.collegeNames[5]}'s Price Calculator
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.bottomView[5]  = this.state.collegeNames[5] ? this.state.bottomView[5] : {height : 0, width : 0}}>
                        <View style={this.state.collegeACTs[5]  = this.state.collegeNames[5] ? this.state.collegeACTs[5] : {height : 0, width : 0}}>
                            <Text style = {{textAlign: 'center', color: 'white'}}>
                                Average ACT score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeACTS[5] = this.state.collegeACTS[5] ? this.state.collegeACTS[5] : "No info :("}
                            </Text>
                        </View>
                        <View style={this.state.collegeSATs[5]  = this.state.collegeNames[5] ? this.state.collegeSATs[5] : {height : 0, width : 0}}>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Reading score:                        
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeReadingSAT[5] = this.state.collegeReadingSAT[5] ? this.state.collegeReadingSAT[5] : "No info :("}
                            </Text>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Math score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeMathSAT[5] = this.state.collegeMathSAT[5]  ? this.state.collegeMathSAT[5]  : "No info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[5]  = this.state.collegeNames[5] ? this.state.buttonStyle[5] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[5]  = this.state.collegeNames[5] ? this.state.imageContainer[5] : {height : 0, width : 0}}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerACT[5] = this.state.collegeNames[5]  ? this.state.higherLowerACT[5] : "No Info :("}
                            </Text>
                        </View>
                        <View style = {this.state.imageContainer[5]= this.state.collegeNames[5] ? this.state.imageContainer[5] : {height : 0, width : 0}}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerSAT[5] = this.state.collegeNames[5]  ? this.state.higherLowerSAT[5] : "No Info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[5]  = this.state.collegeNames[5] ? this.state.buttonStyle[5] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[5]  = this.state.collegeNames[5] ? this.state.imageContainer[5] : {height : 0, width : 0}}>
                            <Image
                            style={this.state.greenImage[5] = this.state.collegeNames[5] ? this.state.greenImage[5] : {height : 0, width : 0}}
                                source={
                                    this.state.imageACTs[5] = this.state.collegeNames[5] ? this.state.imageACTs[5] : this.state.imageACTs[0]
                                    }
                            />
                        </View>
                        <View style = {this.state.imageContainer[5]}>
                            <Image
                            style={this.state.greenImage[5] = this.state.collegeNames[5] ? this.state.greenImage[5] : {height : 0, width : 0}}
                                source={
                                    this.state.imageSATs[5] = this.state.collegeNames[5] ? this.state.imageSATs[5] : this.state.imageSATs[0]
                                }
                            />
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[5]  = this.state.collegeNames[5] ? this.state.buttonStyle[5] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[5]}>
                            <TouchableOpacity style = {this.state.optionsButton[5]= this.state.collegeNames[5] ? this.state.optionsButton[5] : {height : 0, width : 0}} onPress={() => this._goToURL(this.state.collegelinks[5])} >
                                <Text style = {styles.priceCalc}>
                                    Visit {this.state.collegeNames[5]}'s Website
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {this.state.imageContainer[5]}>
                            <TouchableOpacity  style = {this.state.optionsButton[5]= this.state.collegeNames[5] ? this.state.optionsButton[5] : {height : 0, width : 0}} onPress={() => this._goToURL(this.state.collegeNicheLinks[5])}>
                                <Text style = {styles.priceCalc}>
                                More Info on {this.state.collegeNames[5]}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {this.state.graphStyle[5] = this.state.collegeNames[5] ? this.state.graphStyle[5] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Black Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeBlacks[5] = isNaN(this.state.collegeBlacks[5]) ? 0 : this.state.collegeBlacks[5])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Black",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeBlacks[5] = isNaN(this.state.collegeBlacks[5]) ? 0 : this.state.collegeBlacks[5])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[5] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[5] = this.state.collegeNames[5] ? this.state.graphStyle[5] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            White Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeWhites[5] = isNaN(this.state.collegeWhites[5]) ? 0 : this.state.collegeWhites[5])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% White",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeWhites[5] = isNaN(this.state.collegeWhites[5]) ? 0 : this.state.collegeWhites[5])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[5] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[5] = this.state.collegeNames[5] ? this.state.graphStyle[5] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Asian Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeAsians[5] = isNaN(this.state.collegeAsians[5]) ? 0 : this.state.collegeAsians[5])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Asian",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeAsians[5] = isNaN(this.state.collegeAsians[5]) ? 0 : this.state.collegeAsians[5])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[5] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[5] = this.state.collegeNames[5] ? this.state.graphStyle[5] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Hispanic Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeHispanics[5] = isNaN(this.state.collegeHispanics[5]) ? 0 : this.state.collegeHispanics[5])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Hispanic",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeHispanics[5] = isNaN(this.state.collegeHispanics[5]) ? 0 : this.state.collegeHispanics[5])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[5] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {{height : 40}}>

                    </View>
                </View>
                <View style= {this.state.wholeView[6]= this.state.collegeNames[6] ? this.state.wholeView[6] : {height : 0, width : 0}}>
                    <View style= {this.state.topView[6]= this.state.collegeNames[6] ? this.state.topView[6] : {height : 0, width : 0}}>
                        <Text onPress={() => this._goToURL(this.state.collegeNicheLinks[6])} style = {styles.header}>
                            {this.state.collegeNames[6]}
                        </Text>
                        <Text style = {styles.weather}>
                            {this.state.collegecities[6]}, {this.state.collegeTemp[6]}° {this.state.collegeweathers[6]}
                            <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "#fff"
                                size= {15}
                            />
                        </Text>
                        <Text style = {styles.costOfAttendance}>
                            Average cost of attendance for your household income:
                        </Text>
                        <Text style = {styles.bigPrice}>
                            ${this.state.collegeprices[6]}
                        </Text>
                        <TouchableOpacity onPress={() => this._goToURL(this.state.collegepricecalculators[6])} style = {styles.priceCalcButton}>
                            <Text style = {styles.priceCalc }>
                                Check out {this.state.collegeNames[6]}'s Price Calculator
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.bottomView[6]  = this.state.collegeNames[6] ? this.state.bottomView[6] : {height : 0, width : 0}}>
                        <View style={this.state.collegeACTs[6]  = this.state.collegeNames[6] ? this.state.collegeACTs[6] : {height : 0, width : 0}}>
                            <Text style = {{textAlign: 'center', color: 'white'}}>
                                Average ACT score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeACTS[6] = this.state.collegeACTS[6] ? this.state.collegeACTS[6] : "No info :("}
                            </Text>
                        </View>
                        <View style={this.state.collegeSATs[6]  = this.state.collegeNames[6] ? this.state.collegeSATs[6] : {height : 0, width : 0}}>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Reading score:                        
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeReadingSAT[6] = this.state.collegeReadingSAT[6] ? this.state.collegeReadingSAT[6] : "No info :("}
                            </Text>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Math score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeMathSAT[6] = this.state.collegeMathSAT[6]  ? this.state.collegeMathSAT[6]  : "No info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[6]  = this.state.collegeNames[6] ? this.state.buttonStyle[6] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[6]  = this.state.collegeNames[6] ? this.state.imageContainer[6] : {height : 0, width : 0}}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerACT[6] = this.state.collegeNames[6]  ? this.state.higherLowerACT[6] : "No Info :("}
                            </Text>
                        </View>
                        <View style = {this.state.imageContainer[6]= this.state.collegeNames[6] ? this.state.imageContainer[6] : {height : 0, width : 0}}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerSAT[6] = this.state.collegeNames[6]  ? this.state.higherLowerSAT[6] : "No Info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[6]  = this.state.collegeNames[6] ? this.state.buttonStyle[6] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[6]  = this.state.collegeNames[6] ? this.state.imageContainer[6] : {height : 0, width : 0}}>
                            <Image
                            style={this.state.greenImage[6] = this.state.collegeNames[6] ? this.state.greenImage[6] : {height : 0, width : 0}}
                                source={
                                    this.state.imageACTs[6] = this.state.collegeNames[6] ? this.state.imageACTs[6] : this.state.imageACTs[0]
                                    }
                            />
                        </View>
                        <View style = {this.state.imageContainer[6]}>
                            <Image
                            style={this.state.greenImage[6] = this.state.collegeNames[6] ? this.state.greenImage[6] : {height : 0, width : 0}}
                                source={
                                    this.state.imageSATs[6] = this.state.collegeNames[6] ? this.state.imageSATs[6] : this.state.imageSATs[0]
                                }
                            />
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[6]  = this.state.collegeNames[6] ? this.state.buttonStyle[6] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[6]}>
                            <TouchableOpacity style = {this.state.optionsButton[6]= this.state.collegeNames[6] ? this.state.optionsButton[6] : {height : 0, width : 0}} onPress={() => this._goToURL(this.state.collegelinks[6])} >
                                <Text style = {styles.priceCalc}>
                                    Visit {this.state.collegeNames[6]}'s Website
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {this.state.imageContainer[6]}>
                            <TouchableOpacity  style = {this.state.optionsButton[6]= this.state.collegeNames[6] ? this.state.optionsButton[6] : {height : 0, width : 0}} onPress={() => this._goToURL(this.state.collegeNicheLinks[6])}>
                                <Text style = {styles.priceCalc}>
                                More Info on {this.state.collegeNames[6]}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {this.state.graphStyle[6] = this.state.collegeNames[6] ? this.state.graphStyle[6] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Black Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeBlacks[6] = isNaN(this.state.collegeBlacks[6]) ? 0 : this.state.collegeBlacks[6])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Black",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeBlacks[6] = isNaN(this.state.collegeBlacks[6]) ? 0 : this.state.collegeBlacks[6])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[6] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[6] = this.state.collegeNames[6] ? this.state.graphStyle[6] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            White Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeWhites[6] = isNaN(this.state.collegeWhites[6]) ? 0 : this.state.collegeWhites[6])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% White",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeWhites[6] = isNaN(this.state.collegeWhites[6]) ? 0 : this.state.collegeWhites[6])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[6] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[6] = this.state.collegeNames[6] ? this.state.graphStyle[6] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Asian Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeAsians[6] = isNaN(this.state.collegeAsians[6]) ? 0 : this.state.collegeAsians[6])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Asian",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeAsians[6] = isNaN(this.state.collegeAsians[6]) ? 0 : this.state.collegeAsians[6])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[6] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[6] = this.state.collegeNames[6] ? this.state.graphStyle[6] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Hispanic Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeHispanics[6] = isNaN(this.state.collegeHispanics[6]) ? 0 : this.state.collegeHispanics[6])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Hispanic",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeHispanics[6] = isNaN(this.state.collegeHispanics[6]) ? 0 : this.state.collegeHispanics[6])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[6] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {{height : 40}}>

                    </View>
                </View>
                <View style= {this.state.wholeView[7]= this.state.collegeNames[7] ? this.state.wholeView[7] : {height : 0, width : 0}}>
                    <View style= {this.state.topView[7]= this.state.collegeNames[7] ? this.state.topView[7] : {height : 0, width : 0}}>
                        <Text onPress={() => this._goToURL(this.state.collegeNicheLinks[7])} style = {styles.header}>
                            {this.state.collegeNames[7]}
                        </Text>
                        <Text style = {styles.weather}>
                            {this.state.collegecities[7]}, {this.state.collegeTemp[7]}° {this.state.collegeweathers[7]}
                            <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "#fff"
                                size= {15}
                            />
                        </Text>
                        <Text style = {styles.costOfAttendance}>
                            Average cost of attendance for your household income:
                        </Text>
                        <Text style = {styles.bigPrice}>
                            ${this.state.collegeprices[7]}
                        </Text>
                        <TouchableOpacity onPress={() => this._goToURL(this.state.collegepricecalculators[7])} style = {styles.priceCalcButton}>
                            <Text style = {styles.priceCalc }>
                                Check out {this.state.collegeNames[7]}'s Price Calculator
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.bottomView[7]  = this.state.collegeNames[7] ? this.state.bottomView[7] : {height : 0, width : 0}}>
                        <View style={this.state.collegeACTs[7]  = this.state.collegeNames[7] ? this.state.collegeACTs[7] : {height : 0, width : 0}}>
                            <Text style = {{textAlign: 'center', color: 'white'}}>
                                Average ACT score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeACTS[7] = this.state.collegeACTS[7] ? this.state.collegeACTS[7] : "No info :("}
                            </Text>
                        </View>
                        <View style={this.state.collegeSATs[7]  = this.state.collegeNames[7] ? this.state.collegeSATs[7] : {height : 0, width : 0}}>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Reading score:                        
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeReadingSAT[7] = this.state.collegeReadingSAT[7] ? this.state.collegeReadingSAT[7] : "No info :("}
                            </Text>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Math score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeMathSAT[7] = this.state.collegeMathSAT[7]  ? this.state.collegeMathSAT[7]  : "No info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[7]  = this.state.collegeNames[7] ? this.state.buttonStyle[7] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[7]  = this.state.collegeNames[7] ? this.state.imageContainer[7] : {height : 0, width : 0}}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerACT[7] = this.state.collegeNames[7]  ? this.state.higherLowerACT[7] : "No Info :("}
                            </Text>
                        </View>
                        <View style = {this.state.imageContainer[7]= this.state.collegeNames[7] ? this.state.imageContainer[7] : {height : 0, width : 0}}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerSAT[7] = this.state.collegeNames[7]  ? this.state.higherLowerSAT[7] : "No Info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[7]  = this.state.collegeNames[7] ? this.state.buttonStyle[7] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[7]  = this.state.collegeNames[7] ? this.state.imageContainer[7] : {height : 0, width : 0}}>
                            <Image
                            style={this.state.greenImage[7] = this.state.collegeNames[7] ? this.state.greenImage[7] : {height : 0, width : 0}}
                                source={
                                    this.state.imageACTs[7] = this.state.collegeNames[7] ? this.state.imageACTs[7] : this.state.imageACTs[0]
                                    }
                            />
                        </View>
                        <View style = {this.state.imageContainer[7]}>
                            <Image
                            style={this.state.greenImage[7] = this.state.collegeNames[7] ? this.state.greenImage[7] : {height : 0, width : 0}}
                                source={
                                    this.state.imageSATs[7] = this.state.collegeNames[7] ? this.state.imageSATs[7] : this.state.imageSATs[0]
                                }
                            />
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[7]  = this.state.collegeNames[7] ? this.state.buttonStyle[7] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[7]}>
                            <TouchableOpacity style = {this.state.optionsButton[7]= this.state.collegeNames[7] ? this.state.optionsButton[7] : {height : 0, width : 0}} onPress={() => this._goToURL(this.state.collegelinks[7])} >
                                <Text style = {styles.priceCalc}>
                                    Visit {this.state.collegeNames[7]}'s Website
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {this.state.imageContainer[7]}>
                            <TouchableOpacity  style = {this.state.optionsButton[7]= this.state.collegeNames[7] ? this.state.optionsButton[7] : {height : 0, width : 0}} onPress={() => this._goToURL(this.state.collegeNicheLinks[7])}>
                                <Text style = {styles.priceCalc}>
                                More Info on {this.state.collegeNames[7]}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {this.state.graphStyle[7] = this.state.collegeNames[7] ? this.state.graphStyle[7] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Black Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeBlacks[7] = isNaN(this.state.collegeBlacks[7]) ? 0 : this.state.collegeBlacks[7])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Black",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeBlacks[7] = isNaN(this.state.collegeBlacks[7]) ? 0 : this.state.collegeBlacks[7])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[7] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[7] = this.state.collegeNames[7] ? this.state.graphStyle[7] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            White Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeWhites[7] = isNaN(this.state.collegeWhites[7]) ? 0 : this.state.collegeWhites[7])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% White",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeWhites[7] = isNaN(this.state.collegeWhites[7]) ? 0 : this.state.collegeWhites[7])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[7] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[7] = this.state.collegeNames[7] ? this.state.graphStyle[7] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Asian Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeAsians[7] = isNaN(this.state.collegeAsians[7]) ? 0 : this.state.collegeAsians[7])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Asian",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeAsians[7] = isNaN(this.state.collegeAsians[7]) ? 0 : this.state.collegeAsians[7])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[7] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[7] = this.state.collegeNames[7] ? this.state.graphStyle[7] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Hispanic Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeHispanics[7] = isNaN(this.state.collegeHispanics[7]) ? 0 : this.state.collegeHispanics[7])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Hispanic",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeHispanics[7] = isNaN(this.state.collegeHispanics[7]) ? 0 : this.state.collegeHispanics[7])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[7] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {{height : 40}}>

                    </View>
                </View>
                <View style= {this.state.wholeView[8]= this.state.collegeNames[8] ? this.state.wholeView[8] : {height : 0, width : 0}}>
                    <View style= {this.state.topView[8]= this.state.collegeNames[8] ? this.state.topView[8] : {height : 0, width : 0}}>
                        <Text onPress={() => this._goToURL(this.state.collegeNicheLinks[8])} style = {styles.header}>
                            {this.state.collegeNames[8]}
                        </Text>
                        <Text style = {styles.weather}>
                            {this.state.collegecities[8]}, {this.state.collegeTemp[8]}° {this.state.collegeweathers[8]}
                            <MaterialCommunityIcons
                                style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "right",
                                color: "#fff"
                                }}
                                name = "weather-cloudy"
                                color = "#fff"
                                size= {15}
                            />
                        </Text>
                        <Text style = {styles.costOfAttendance}>
                            Average cost of attendance for your household income:
                        </Text>
                        <Text style = {styles.bigPrice}>
                            ${this.state.collegeprices[8]}
                        </Text>
                        <TouchableOpacity onPress={() => this._goToURL(this.state.collegepricecalculators[8])} style = {styles.priceCalcButton}>
                            <Text style = {styles.priceCalc }>
                                Check out {this.state.collegeNames[8]}'s Price Calculator
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.bottomView[8]  = this.state.collegeNames[8] ? this.state.bottomView[8] : {height : 0, width : 0}}>
                        <View style={this.state.collegeACTs[8]  = this.state.collegeNames[8] ? this.state.collegeACTs[8] : {height : 0, width : 0}}>
                            <Text style = {{textAlign: 'center', color: 'white'}}>
                                Average ACT score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeACTS[8] = this.state.collegeACTS[8] ? this.state.collegeACTS[8] : "No info :("}
                            </Text>
                        </View>
                        <View style={this.state.collegeSATs[8]  = this.state.collegeNames[8] ? this.state.collegeSATs[8] : {height : 0, width : 0}}>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Reading score:                        
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeReadingSAT[8] = this.state.collegeReadingSAT[8] ? this.state.collegeReadingSAT[8] : "No info :("}
                            </Text>
                            <Text style = {{maxWidth: screenWidth*.3, textAlign: 'center', marginTop: 15, color: 'white'}}>
                                Average SAT Math score:
                            </Text>
                            <Text style = {styles.scores}>
                                {this.state.collegeMathSAT[8] = this.state.collegeMathSAT[8]  ? this.state.collegeMathSAT[8]  : "No info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[8]  = this.state.collegeNames[8] ? this.state.buttonStyle[8] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[8]  = this.state.collegeNames[8] ? this.state.imageContainer[8] : {height : 0, width : 0}}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerACT[8] = this.state.collegeNames[8]  ? this.state.higherLowerACT[8] : "No Info :("}
                            </Text>
                        </View>
                        <View style = {this.state.imageContainer[8]= this.state.collegeNames[8] ? this.state.imageContainer[8] : {height : 0, width : 0}}>
                            <Text style = {styles.higherLower}>
                                {this.state.higherLowerSAT[8] = this.state.collegeNames[8]  ? this.state.higherLowerSAT[8] : "No Info :("}
                            </Text>
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[8]  = this.state.collegeNames[8] ? this.state.buttonStyle[8] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[8]  = this.state.collegeNames[8] ? this.state.imageContainer[8] : {height : 0, width : 0}}>
                            <Image
                            style={this.state.greenImage[8] = this.state.collegeNames[8] ? this.state.greenImage[8] : {height : 0, width : 0}}
                                source={
                                    this.state.imageACTs[8] = this.state.collegeNames[8] ? this.state.imageACTs[8] : this.state.imageACTs[0]
                                    }
                            />
                        </View>
                        <View style = {this.state.imageContainer[8]}>
                            <Image
                            style={this.state.greenImage[8] = this.state.collegeNames[8] ? this.state.greenImage[8] : {height : 0, width : 0}}
                                source={
                                    this.state.imageSATs[8] = this.state.collegeNames[8] ? this.state.imageSATs[8] : this.state.imageSATs[0]
                                }
                            />
                        </View>
                    </View>
                    <View style = {this.state.buttonStyle[8]  = this.state.collegeNames[8] ? this.state.buttonStyle[8] : {height : 0, width : 0}}>
                        <View style = {this.state.imageContainer[8]}>
                            <TouchableOpacity style = {this.state.optionsButton[8]= this.state.collegeNames[8] ? this.state.optionsButton[8] : {height : 0, width : 0}} onPress={() => this._goToURL(this.state.collegelinks[8])} >
                                <Text style = {styles.priceCalc}>
                                    Visit {this.state.collegeNames[8]}'s Website
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {this.state.imageContainer[8]}>
                            <TouchableOpacity  style = {this.state.optionsButton[8]= this.state.collegeNames[8] ? this.state.optionsButton[8] : {height : 0, width : 0}} onPress={() => this._goToURL(this.state.collegeNicheLinks[8])}>
                                <Text style = {styles.priceCalc}>
                                More Info on {this.state.collegeNames[8]}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {this.state.graphStyle[8] = this.state.collegeNames[8] ? this.state.graphStyle[8] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Black Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeBlacks[8] = isNaN(this.state.collegeBlacks[8]) ? 0 : this.state.collegeBlacks[8])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Black",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeBlacks[8] = isNaN(this.state.collegeBlacks[8]) ? 0 : this.state.collegeBlacks[8])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[8] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[8] = this.state.collegeNames[8] ? this.state.graphStyle[8] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            White Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeWhites[8] = isNaN(this.state.collegeWhites[8]) ? 0 : this.state.collegeWhites[8])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% White",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeWhites[8] = isNaN(this.state.collegeWhites[8]) ? 0 : this.state.collegeWhites[8])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[8] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[8] = this.state.collegeNames[8] ? this.state.graphStyle[8] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Asian Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeAsians[8] = isNaN(this.state.collegeAsians[8]) ? 0 : this.state.collegeAsians[8])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Asian",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeAsians[8] = isNaN(this.state.collegeAsians[8]) ? 0 : this.state.collegeAsians[8])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[8] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {this.state.graphStyle[8] = this.state.collegeNames[8] ? this.state.graphStyle[8] : {height : 0, width : 0}}>
                        <Text style = {styles.title}>
                            Hispanic Population
                        </Text>
                        <PieChart
                            data={[{value : (Math.round((parseFloat(this.state.collegeHispanics[8] = isNaN(this.state.collegeHispanics[8]) ? 0 : this.state.collegeHispanics[8])*100) * 10) / 10), color: "#0099cc", legendFontColor: "#0099cc", legendFontSize: 15, name: "% Hispanic",}, {value : (100 - ((Math.round((parseFloat(this.state.collegeHispanics[8] = isNaN(this.state.collegeHispanics[8]) ? 0 : this.state.collegeHispanics[8])*100) * 10) / 10))), color : "tomato", legendFontSize: 15, name: "% Other",  legendFontColor: "tomato"}]}
                            width={screenWidth}
                            height={this.state.collegeNames[8] ? 100 : 0}
                            chartConfig={{ 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            backgroundColor: "#e26a00",
                            }}
                            
                            bgColor = "tomato"
                            accessor="value"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            absolute
                            />
                    </View>
                    <View style = {{height : 40}}>

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
            </>
          );
      }
      
      
      else{
        return (
            <ScrollView style ={styles.pickerPage}>
            <View style = {{height: 200, justifyContent: 'center', alignItems: 'center'}}>
              <Text style = {{color: 'white', fontSize: 24}}>
                    No Results
              </Text>
              
            </View>
            </ScrollView>
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
//   wholeView: [{alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'}, {alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'},{alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'},{alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'},{alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'},{alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'},{alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'},{alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'},{alignItems: 'center', marginTop: 20,borderWidth: 0,borderRadius: 15,backgroundColor: '#343434'} ],
  header : {
      color: 'white', 
      fontWeight: '600',
      fontSize: 20,
      textAlign: 'center', 
      fontFamily: 'Montserrat-Medium'
  },
  costOfAttendance : {
      color: 'white',
      fontSize: 14,
      textAlign: 'center',
      paddingTop: 15, 
      fontFamily: 'Montserrat-Medium'
  },
  bigPrice : {
      fontSize: 30,
      color: 'white',
      marginTop: 10,
        fontFamily: 'Montserrat-Medium'
  },
  weather : {
      color : 'tomato',
      fontSize: 12,
      fontFamily: 'Montserrat-Medium'
  },
  scores : {
      fontSize : 26,
      color: 'tomato',
      marginTop: 15, 
      fontFamily: 'Montserrat-Medium'
  },
  priceCalc : {
      color : 'black',
      textAlign: 'center',
      lineHeight: 22, 
      fontFamily: 'Montserrat-Medium'
  },
  priceCalcButton : {
      backgroundColor: mainColors[Math.floor(Math.random() * 2)],
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
title : {
    fontSize: 18, 
    textAlign: 'center', 
    color : 'white',
     marginTop : 10,
     fontFamily: 'Montserrat-Medium'
},
graphStyle : {

},
buttonStyle : {display: 'flex', flexDirection: 'row', marginBottom: 20, marginTop: 20},
collegeSATs : {alignItems: 'center', minWidth: screenWidth*.5},
collegeACTs : {alignItems: 'center', minWidth: screenWidth*.5, justifyContent: 'center'}




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
export default CollegeRecommendations;
