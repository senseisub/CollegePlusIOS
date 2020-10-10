/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {useState, Component} from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar, Platform, TouchableOpacity, Picker, AppNavigator, StackNavigator, TextInput, Label, Image, Linking } from 'react-native';
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
import CookieManager from 'react-native-cookies';
import {Dimensions } from "react-native";
import MultiSelect from 'react-native-multiple-select';
const screenWidth = Math.round(Dimensions.get('window').width);
let loadingImage = {width: 0, height : 0};
const mainColors = ['tomato', '#0099cc'];
let buttonStyle = {maxWidth: screenWidth * .4, backgroundColor: '#0099cc', borderRadius: 8, padding: 16, marginTop: 20};
let states = [{
  value: "Alabama", },
  { value: "Alaska", },
  { value: "Arizona", },
  { value: "Arkansas", },
  { value: "California", },
  { value: "Colorado", },
  { value: "Connecticut", },
  { value: "Delaware", },
  { value: "District of Columbia", },
  { value: "Florida", },
  { value: "Georgia", },
  { value: "Hawaii", },
  { value: "Idaho", },
  { value: "Illinois", },
  { value: "Indiana", },
  { value: "Iowa", },
  { value: "Kansas", },
  { value: "Kentucky", },
  { value: "Louisiana", },
  { value: "Maine", },
  { value: "Maryland", },
  { value: "Massachusetts", },
  { value: "Michigan", },
  { value: "Minnesota", },
  { value: "Mississippi", },
  { value: "Missouri", },
  { value: "Montana", },
  { value: "Nebraska", },
  { value: "Nevada", },
  { value: "New Hampshire", },
  { value: "New Jersey", },
  { value: "New Mexico", },
  { value: "New York", },
  { value: "North Carolina", },
  { value: "North Dakota", },
  { value: "Ohio", },
  { value: "Oklahoma", },
  { value: "Oregon", },
  { value: "Pennsylvania", },
  { value: "Rhode Island", },
  { value: "South Carolina", },
  { value: "South Dakota", },
  { value: "Tennessee", },
  { value: "Texas", },
  { value: "Utah", },
  { value: "Vermont", },
  { value: "Virginia", },
  { value: "Washington", },
  { value: "West Virginia", },
  { value: "Wisconsin", },
  { value: "Wyoming", }];

  let states2 = [{
    value: "Alabama", name: "Alabama"},
    { value: "Alaska", name: "Alaska"},
    { value: "Arizona", name: "Arizona"},
    { value: "Arkansas", name: "Arkansas"},
    { value: "California", name: "California"},
    { value: "Colorado", name: "Colorado"},
    { value: "Connecticut", name: "Connecticut"},
    { value: "Delaware", name: "Delaware"},
    { value: "District of Columbia", name: "District of Columbia"},
    { value: "Florida", name: "Florida"},
    { value: "Georgia", name: "Georgia"},
    { value: "Hawaii", name: "Hawaii"},
    { value: "Idaho", name: "Idaho"},
    { value: "Illinois", name: "Illinois"},
    { value: "Indiana", name: "Indiana"},
    { value: "Iowa", name: "Iowa"},
    { value: "Kansas", name: "Kansas"},
    { value: "Kentucky", name: "Kentucky"},
    { value: "Louisiana", name: "Louisiana"},
    { value: "Maine", name: "Maine"},
    { value: "Maryland", name: "Maryland"},
    { value: "Massachusetts", name: "Massachusetts"},
    { value: "Michigan", name: "Michigan"},
    { value: "Minnesota", name: "Minnesota"},
    { value: "Mississippi", name: "Mississippi"},
    { value: "Missouri", name: "Missouri"},
    { value: "Montana", name: "Montana"},
    { value: "Nebraska", name: "Nebraska"},
    { value: "Nevada", name: "Nevada"},
    { value: "New Hampshire", name: "New Hampshire"},
    { value: "New Jersey", name: "New Jersey"},
    { value: "New Mexico", name: "New Mexico"},
    { value: "New York", name: "New York"},
    { value: "North Carolina", name: "North Carolina"},
    { value: "North Dakota", name: "North Dakota"},
    { value: "Ohio", name: "Ohio"},
    { value: "Oklahoma", name: "Oklahoma"},
    { value: "Oregon", name: "Oregon"},
    { value: "Pennsylvania", name: "Pennsylvania"},
    { value: "Rhode Island", name: "Rhode Island"},
    { value: "South Carolina", name: "South Carolina"},
    { value: "South Dakota", name: "South Dakota"},
    { value: "Tennessee", name: "Tennessee"},
    { value: "Texas", name: "Texas"},
    { value: "Utah", name: "Utah"},
    { value: "Vermont", name: "Vermont"},
    { value: "Virginia", name: "Virginia"},
    { value: "Washington", name: "Washington"},
    { value: "West Virginia", name: "West Virginia"},
    { value: "Wisconsin", name: "Wisconsin"},
    { value: "Wyoming", name: "Wyoming"}];

let degreeTypes = [{value: "Certificate Degree (depends)"},{value: "Associate's Degree (2 yrs)"},{value: "Bachelor's Degree (4 yrs)"},{value: "Graduate Degree (1.5-2 yrs)"}];

let major = [{value: "Ethnic,Cultural, and Gender studies"},
            {value: "Communication Studies"},
            {value: "Business/Marketing"},
            {value: "Engineering Studies"},
            {value: "Legal Studies"},
            {value: "English Studies"}, 
            {value: "Biological Studies"},
            {value: "Computer Studies"},
            {value: "Construction"},
            {value: "Psychology"},
            {value: "Culinary"}, 
            {value: "Philosophy"}, 
            {value: "Arts"}, 
            {value: "Don't Know"}];

let hbcu = [{value: "No thank you"},{value: "Yes please"}];

let allWomens = [{value: "Not really"},{value: "Sure"}];

let universitySize = [{value: "Small (0-5000 people)"},
                      {value: "Medium (5000-15000 people)"},
                      {value: "Large (15000-30000 people)"}, 
                      {value: "Huge (30000- infinity and beyond)"}];

let householdIncome = [{value: "$0- $30,000"},
                       {value: "$30,001 - $48,000"},
                       {value: "$48,001 - $75,000"},
                       {value: "$75,001 - $110000"}, 
                       {value: "$110001+"}];

class CollegePickerScreen extends Component{
  constructor(props) {
    super(props);
    this.exampleRef = this.updateRef.bind(this, 'text');
    this.smallRef = React.createRef();
    this.state = {
      text: 'h', 
      college1 : "",
      state : "",
      degree : "",
      hbcu : "",
      women : "",
      size : "",
      major : "",
      income : "",
      collegeResultsURL: "",
      dataSource: [],
      firstResult: "",
      arr2 : [],
      linkcollege : "",
      linkcollege1 : "",
      linkcollege2 : "",
      act1 : 0,
      act2 : 0,
      act3 : 0,
      satreading1 : 0,
      satreading2 : 0,
      satreading3 : 0,
      satmath1 : 0,
      satmath2 : 0,
      satmath3 : 0,
      useract : 0,
      usersat : 0,
      collegelink1 : "",
      collegelink2 : "",
      collegelink3 : "",
      collegecity1 : "",
      collegecity2 : "",
      collegecity3 : "",
      city1 : "",
      city2 : "",
      city3 : "",
      collegestate1 : "",
      collegestate2 : "",
      collegestate3 : "",
      collegetemp1 : "",
      collegetemp2 : "",
      collegetemp3 : "",
      collegeweather1 : "",
      collegeweather2 : "",
      collegeweather3 : "",
      collegeprice1 : "",
      collegeprice2 : "",
      collegeprice3 : "",
      pricecalc1 : "",
      pricecalc2 : "",
      pricecalc3 : "",
      userState : "",
      userCity : "",
      loading: true,
      clickedin : false,
      isLoggedIn : false,
      username : '',
      password : '',
      cookies : {},
      blacks1 : "",
      blacks2 : "",
      blacks3 : "",
      whites1 : "",
      whites2 : "",
      whites3 : "",
      asians1 : "",
      asians2 : "",
      asians3 : "",
      hispanics1 : "",
      hispanics2 : "",
      hispanics3 : "",
      submitText : "Submit Answers",
      selectedItems : [],
      collegelinks : [],
      collegeprices : [],
      collegetemps : [],
      collegestates : [],
      collegecities : [],
      collegeweathers : [],
      collegepricecalculators : [],
      collegeBlacks : [],
      collegeWhites : [],
      collegeAsians : [],
      collegeHispanics : [],
      collegeACTS : [],
      collegeReadingSAT : [],
      collegeMathSAT : [],
      collegeNicheLinks : [],
      collegeNames : [],
      collegeTemp : [],
      index : 0,
      bools : []
    };
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

  UNSAFE_componentWillMount = async() => {
    console.log("here");
    await this.getCookies();
    this.setState({clickedin : false });
    this.setStateChosen(states[43].value);
    this.setDegree(degreeTypes[2].value);
    this.setMajor(major[2].value);
    this.setHBCU(hbcu[0].value);
    this.setWomens(allWomens[0].value);
    this.setSize(universitySize[1].value);
    this.setIncome(householdIncome[1].value);
    this.setState({useState : "Texas"});
    // console.log(this.state.cookies["collegePlusPassword"]);
    // this.setState({password : this.state.cookies["collegePlusPassword"]});
    // this.setState({username : this.state.cookies["collegePlusUsername"]});
    // console.log(this.state.username + " " + this.state.password);
    // this.callAPI(this.state.username, this.state.password);
  }

  onButtonClick(state){
  //   console.log("Clicked");
  //   state = $("#states").val();
  //   degree = $("#degrees").val();
  //   hbcu = $("#hbcus").val();
  //   women = $("#womens").val();
  //   size = $("#sizes").val();
  //   field = $("#fields").val();
  //   console.log(state);
  
  // let url1;
  
    let apikey = "BqsZbBBbY15kmLgw7gqce40EaoTpG0C0soJbpAen";
    if (this.state.major == "Don't Know" ){
      this.state.collegeResultsURL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?school.state_fips=" + state + "&school.degrees_awarded.predominant="+ this.state.degree+"&school.minority_serving.historically_black="+this.state.hbcu +"&school.women_only="+ this.state.women +"&2017.student.size__range="+ this.state.size +"&_fields=id,school.name,2017.student.size,school.state,school.city,school.school_url,2017.admissions.act_scores.midpoint.cumulative,2017.admissions.sat_scores.midpoint.critical_reading,2017.admissions.sat_scores.midpoint.math,2017.cost.net_price.private.by_income_level.75001-110000,2017.cost.net_price.private.by_income_level.48001-75000,2017.cost.net_price.private.by_income_level.30001-48000,2017.cost.net_price.private.by_income_level.0-30000,2017.cost.net_price.public.by_income_level.75001-110000,2017.cost.net_price.public.by_income_level.48001-75000,2017.cost.net_price.public.by_income_level.30001-48000,2017.cost.net_price.public.by_income_level.0-30000,2017.cost.net_price.private.by_income_level.110001-plus,2017.cost.net_price.public.by_income_level.110001-plus,2017.student.demographics.race_ethnicity.black,2017.student.demographics.race_ethnicity.white,2017.student.demographics.race_ethnicity.asian,2017.student.demographics.race_ethnicity.hispanic,school.price_calculator_url&api_key=KpR5yoDP2jV5lIr5F4yA91Y8YnFLk3BBM8qdfkhi";
      // console.log(url1);
    } 
    else {
      this.state.collegeResultsURL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?2017.academics."+ this.state.major +"=1&school.state_fips=" + state + "&school.degrees_awarded.predominant="+this.state.degree+"&school.minority_serving.historically_black="+this.state.hbcu +"&school.women_only="+ this.state.women +"&2017.student.size__range="+ this.state.size +"&_fields=id,school.name,2017.student.size,school.state,school.city,school.school_url,2017.admissions.act_scores.midpoint.cumulative,2017.admissions.sat_scores.midpoint.critical_reading,2017.admissions.sat_scores.midpoint.math,2017.cost.net_price.private.by_income_level.75001-110000,2017.cost.net_price.private.by_income_level.48001-75000,2017.cost.net_price.private.by_income_level.30001-48000,2017.cost.net_price.private.by_income_level.0-30000,2017.cost.net_price.public.by_income_level.75001-110000,2017.cost.net_price.public.by_income_level.48001-75000,2017.cost.net_price.public.by_income_level.30001-48000,2017.cost.net_price.public.by_income_level.0-30000,2017.cost.net_price.private.by_income_level.110001-plus,2017.cost.net_price.public.by_income_level.110001-plus,2017.student.demographics.race_ethnicity.black,2017.student.demographics.race_ethnicity.white,2017.student.demographics.race_ethnicity.asian,2017.student.demographics.race_ethnicity.hispanic,school.price_calculator_url&api_key=KpR5yoDP2jV5lIr5F4yA91Y8YnFLk3BBM8qdfkhi";
      // console.log(url1);
    } 
    // console.log(url1);
    // $.get(url, null, printSchool);
    // let url2 = "https://dataservice.accuweather.com/locations/v1/search?apikey=iJbbR5pbEqL3DgbJCaLuEkgROgIt3aeU&q=2345%20Amesbury%20Dr.%20Mesquite%2C%20TX";
    //   // $.get(url2, null, tempcontrol);
    //   console.log("https://dataservice.accuweather.com/currentconditions/v1/iJbbR5pbEqL3DgbJCaLuEkgROgIt3aeU");
    //   console.log(url2);
    //   console.log(collegecity1);
    //   console.log("https://api.openweathermap.org/data/2.5/weather?q="+collegecity1+",USA&appid=01e2ab091c2e3a0ab1eaca9b7e15f159");
    //   url2 = "https://api.openweathermap.org/data/2.5/weather?q="+collegecity1+",USA&appid=01e2ab091c2e3a0ab1eaca9b7e15f159";
    //   // $.get(url2, null, tempcontrol);
    // let url3 = "https://serpapi.com/playground?engine=google&q=smu&google_domain=google.com&ijn=0&tbm=isch";
    
  }

  onSelectedItemsChange = selectedItems => {
    while(selectedItems.length > 3){
      selectedItems.pop();
    }
    this.setState({ selectedItems });
  }

  onMultiChange(){
    if(this.state.selectedItems.length > 3){
      this.state.selectedItems.pop();
    }
  }

    render(){
      const { selectedItems } = this.state;

  return (
    
    <ScrollView style ={styles.pickerPage}>
    <View style = {{height: 200, justifyContent: 'center', alignItems: 'center'}}>
      <Text style = {{color: 'white', fontSize: 24}}>
        
      </Text>
      <Text style = {{maxWidth: 350, alignItems: 'center', textAlign: 'center', lineHeight:26}}>
        <Text style = {{color: 'white', fontSize: 18, textAlign: 'center', maxWidth: 375, fontFamily: 'Montserrat-Medium', lineHeight : 26}}>
          Don't know what college you want to attend?{'\n'}
          Don't know what college best fits your personality?{'\n'} </Text>
          <Text style = {{color: 'white', fontSize: 18, textAlign: 'center', maxWidth: 375, fontFamily: 'Montserrat-Bold'}}> CollegePicker</Text>
          <Text style = {{color: 'white', fontSize: 18, textAlign: 'center', maxWidth: 375, fontFamily: 'Montserrat-Medium'}}> recommends you a college based on your desires!{'\n'}
        </Text>
      </Text>
    </View>
    <View style = {{alignItems : 'center', marginTop: 25}}>
      <Text style ={styles.TextLabel}> Where do you reside? </Text>
      <Text style = {styles.littleText}>This will give colleges a better understanding where to recruit!</Text>

    </View>
    <View style = {{display: 'flex', flexDirection : 'row'}}>
      <View style = {{width: screenWidth * .5, alignItems : 'center'}}>
        <Text style ={styles.TextLabel}> City </Text>
        <TextInput label='Ex. 30'
                ref = {this.smallRef}
                // value={this.state.text}
                style={{ height: 60, borderColor: mainColors[Math.floor(Math.random() * 2)], borderWidth: 4, borderRadius: 15, width : screenWidth * .4, backgroundColor: "#fff", textAlign: 'center', fontFamily: 'Montserrat-Medium', color : "black", textColor : "black"}}
                onChangeText={(value) => {this.setState({userCity: value})}}
                />
      </View>
      <View style = {{width : screenWidth * .5, alignItems : 'center'}}>
        <Text style ={styles.TextLabel}> State </Text>
        <Dropdown label=''
        value = {states[43].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => {this.setState({userState : value})}}
        data={states}
        containerStyle = {{backgroundColor: mainColors[Math.floor(Math.random() * 2)], borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60,  width : screenWidth * .4, paddingLeft: 10}}
        baseColor = "#000000"
        dropdownOffset = {{top: 16, paddingLeft: 10}}
        pickerStyle = {{borderBottomColor: 'transparent'}}
        inputContainerStyle={{ borderBottomWidth: 0, minWidth: screenWidth * .8, maxWidth: screenWidth * 8 }}
        labelFontSize={0}
        selectedItemColor = "fff"
        itemTextStyle = {{ fontFamily: 'Montserrat-Medium'}}
        // titleTextStyle={{ textAlign: 'center' }}
        // renderAccessory ={() => null}
        />
      </View>
    </View>
    <View style = {styles.dropDownView}>
      <Text style ={styles.TextLabel}> What state do you want your university to be in? </Text>
      <Text style = {styles.littleText}>Staying in-state will allow you to access lower tuition fees for public schools and allow you to visit your family more often. However, moving out of state will allow for more independence and adventure, giving you more freedom to explore new cities and states!</Text>
      {/* <Text style = {{color : "white" , paddingBottom : 20}}>
        Hello
        {this.state.selectedItems[0]}, {this.state.selectedItems[1]}, {this.state.selectedItems[2]}
      </Text> */}
      <MultiSelect
            items={states2}
            uniqueKey="value"
            ref={(component) => { this.multiSelect = component }}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectText="Pick 3 States!"
            itemFontFamily	 = "Montserrat-Medium"
            selectedItemFontFamily = "Montserrat-Medium"
            searchInputPlaceholderText="Search Items..."
            // onChangeInput={ (text)=> console.log(text)}
            selectedItems={selectedItems}
            tagRemoveIconColor="black"
            tagBorderColor="black"
            tagTextColor="black"
            selectedItemTextColor="#fff"
            itemTextColor="#000"
            displayKey="name"
            textColor = "#000"
            searchInputStyle={{ color: 'black', borderRadius : 15 }}
            submitButtonColor="tomato"
            submitButtonText="Continue"
            searchInputStyle = {{color : "#000"}}
            styleMainWrapper	 = {{backgroundColor : '#0099cc', width : screenWidth * .9, borderRadius : 15, marginTop: 5}}
            styleItemsContainer = {{backgroundColor : '#0099cc'}}
            styleInputGroup = {{backgroundColor : '#0099cc', borderRadius : 15, width : screenWidth * .9, paddingTop : 5}}
            styleItemsContainer = {{backgroundColor : '#0099cc', width : screenWidth * .9, fontFamily : 'Montserrat-Medium'}}
            styleSelectorContainer = {{backgroundColor : '#0099cc', width : screenWidth * .9, borderRadius : 15}}
            styleListContainer = {{backgroundColor : '#0099cc', width : screenWidth * .9, borderRadius : 15}}
            styleDropdownMenu = {{backgroundColor : '#0099cc', width : screenWidth * .9, borderRadius : 15, height : 50}}
            styleDropdownMenuSubsection	= {{backgroundColor : '#0099cc', width : screenWidth * .8, borderRadius : 15, borderBottomColor : 'transparent', color : "#000"}}
            styleTextDropdown = {{color : "black", paddingLeft : 10, paddingTop: 10}}
            styleTextDropdownSelected = {{color : "white"}}
            // onChangeInput = {this.onMultiChange}
          />
              
    </View>
    <View style = {styles.dropDownView}>
      <Text style ={styles.TextLabel}> What kind of degree do you want to achieve? </Text>
      <Text style = {styles.littleText}>The degree you choose will alter how much school you do and what jobs you will be eligible for. A good idea is to look up the job description of your dream job and see what kind of degree they require. Most professional companies will require at least a Bachelor's degree. </Text>
      <Dropdown label=''
      value = {degreeTypes[2].value}
      ref = {this.smallRef}
      // value={this.state.text}
      onChangeText = {(value) => this.setDegree(value)}
      data={degreeTypes}
      containerStyle = {{backgroundColor: mainColors[Math.floor(Math.random() * 2)], borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, minWidth: screenWidth * .9, paddingLeft: 10}}
      baseColor = "#000000"
      dropdownOffset = {{top: 16}}
      pickerStyle = {{borderBottomColor: 'transparent'}}
      inputContainerStyle={{ borderBottomWidth: 0, minWidth: screenWidth * .8 }}
      labelFontSize={0}
      itemTextStyle = {{ fontFamily: 'Montserrat-Medium'}}
      />
    </View>
    <View style = {styles.dropDownView}>
      <Text style ={styles.TextLabel}> What kind of field are you interested in? </Text>
      <Text style = {styles.littleText}>If you select one of these we will let you know what schools at least have one major in this field </Text>
      <Dropdown label=''
      value = {major[2].value}
      ref = {this.smallRef}
      // value={this.state.text}
      onChangeText = {(value) => this.setMajor(value)}
      data={major}
      containerStyle = {{backgroundColor: mainColors[Math.floor(Math.random() * 2)], borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, minWidth: screenWidth * .9, paddingLeft: 10}}
      baseColor = "#000000"
      dropdownOffset = {{top: 16}}
      pickerStyle = {{borderBottomColor: 'transparent'}}
      inputContainerStyle={{ borderBottomWidth: 0, minWidth: screenWidth * .8, maxWidth: screenWidth * .9 }}
      labelFontSize={0}
      itemTextStyle = {{ fontFamily: 'Montserrat-Medium'}}
      />
    </View>
    <View style = {styles.dropDownView}>
      <Text style ={styles.TextLabel}> Do you want to go to a Historically Black College ? </Text>
      <Text style = {styles.littleText}>Historically black colleges and universities, or HBCUs, are schools that were founded on the belief that everyone deserves access to a college education. HBCUs provide a first rate education while providing a diverse and inclusive classroom. </Text>
      <Dropdown label=''
      value = {hbcu[0].value}
      ref = {this.smallRef}
      // value={this.state.text}
      onChangeText = {(value) => this.setHBCU(value)}
      data={hbcu}
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
      <Text style ={styles.TextLabel}> Do you want to go to all women's college? </Text> 
      <Text style = {styles.littleText}>All women colleges provide a space where women are supported and represented in all occupations and areas of study and where students can build a network of supportive female peers.</Text>
      <Dropdown label=''
      value = {allWomens[0].value}
      ref = {this.smallRef}
      // value={this.state.text}
      onChangeText = {(value) => this.setWomens(value)}
      data={allWomens}
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
      <Text style ={styles.TextLabel}> How big do you want your college to be ? </Text>
      <Text style = {styles.littleText}>Smaller colleges or universities will most likely offer smaller classes and a better chance to get to know your peers while bigger colleges or universities will offer more opportunities but may prove more of a challenge when getting to know your peers.</Text>
      <Dropdown label=''
      value = {universitySize[1].value}
      ref = {this.smallRef}
      // value={this.state.text}
      onChangeText = {(value) => this.setSize(value)}
      data={universitySize}
      containerStyle = {{backgroundColor: mainColors[Math.floor(Math.random() * 2)], borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, minWidth: screenWidth * .9, paddingLeft: 10}}
      baseColor = "#000"
      dropdownOffset = {{top: 16}}
      pickerStyle = {{borderBottomColor: 'transparent'}}
      inputContainerStyle={{ borderBottomWidth: 0, minWidth: screenWidth * .8, maxWidth: screenWidth * .9 }}
      labelFontSize={0}
      itemTextStyle = {{ fontFamily: 'Montserrat-Medium'}}
      />
    </View>
    <View  style = {styles.dropDownView}>
      <Text style ={styles.TextLabel}> What is your ACT score? </Text>
      <TextInput label='Ex. 30'
              ref = {this.smallRef}
              // value={this.state.text}
              style={{ height: 60, borderColor: mainColors[Math.floor(Math.random() * 2)], borderWidth: 4, borderRadius: 15, minWidth: 150, maxWidth: 200, backgroundColor: "#fff", textAlign: 'center', fontFamily: 'Montserrat-Medium', color : "black", textColor : "black"}}
              onChangeText={(value) => {this.setState({useract: value})}}
              keyboardType = "numeric"
              />
    </View>
    <View  style = {styles.dropDownView}>
      <Text style ={styles.TextLabel}> What is your SAT score? </Text>
      <TextInput label='Ex. 1290'
              ref = {this.smallRef}
              // value={this.state.text}
              style={{ height: 60, borderColor: mainColors[Math.floor(Math.random() * 2)], borderWidth: 4, borderRadius: 15, minWidth: 150, maxWidth: 200, backgroundColor: "#fff", textAlign: 'center', fontFamily: 'Montserrat-Medium', color : "black", textColor : "black"}}
              onChangeText={(value) => {this.setState({usersat: value})}}
              keyboardType = "numeric"
              />
    </View>
    <View style = {styles.dropDownView}>
      <Text style ={styles.TextLabel}> In which range is your household income? </Text>
      <Text style = {styles.littleText}>We want to show you the amount to expect to pay given how much your parents make.</Text>
      <Dropdown label=''
      value = {householdIncome[1].value}
      ref = {this.smallRef}
      // value={this.state.text}
      onChangeText = {(value) => {this.setIncome(value)}}
      data={householdIncome}
      containerStyle = {{backgroundColor: mainColors[Math.floor(Math.random() * 2)], borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, minWidth: screenWidth * .9, paddingLeft: 10}}
      baseColor = '#000'
      dropdownOffset = {{top: 16}}
      pickerStyle = {{borderBottomColor: 'transparent'}}
      inputContainerStyle={{ borderBottomWidth: 0, minWidth: screenWidth * .8, maxWidth: screenWidth * .9 }}
      labelFontSize={0}
      itemTextStyle = {{ fontFamily: 'Montserrat-Medium'}}
      />
    </View>
    <View>
      <Text style={{color: '#fff'}}>
        
      </Text>
    </View>
    <View style={{marginBottom: 35, flex: 1,marginTop: 10, alignItems: 'center'}}>
      <Image 
        style = {loadingImage}
        source = {
            require('./loadingAnimation.gif')
        }
      />
      <TouchableOpacity style={buttonStyle} onPress={()=> this.showResults()}>
        <Text style={{textAlign: 'center', fontFamily: 'Montserrat-Medium'}}>
          {this.state.submitText}
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
async getSchoolInfo(){
  if(this.state.clickedin){
    loadingImage = {width: 50, height : 50};
  }
  if(this.state.selectedItems.length == 0){
    this.onButtonClick(48);
    this.state.bools.push(false);
    fetch(this.state.collegeResultsURL)
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource: responseJson
      });
      this.setState({firstResult: this.state.dataSource["results"][0]["school.name"]});
      if(this.state.dataSource != null && this.state.dataSource.length != 0){
        this.printSchool2(responseJson, 0);
        loadingImage = {width: 0, height : 0};
          this.setState({loading : false, submitText : "See Results"});
        
      }
      loadingImage = {width: 0, height : 0};
    })
    .catch(error=>console.log(error)); //to catch the errors if any
  }
  else{
    for(var i =0 ; i < this.state.selectedItems.length; i++){
      console.log(this.state.selectedItems[i]);
      this.onButtonClick(this.setStateChosen(this.state.selectedItems[i]));
      console.log(this.setStateChosen(this.state.selectedItems[i]));
      // await this.makeGetRequest(this.state.collegeResultsURL);
      await fetch(this.state.collegeResultsURL)
      .then(response => response.json())
      .then(async(responseJson)=> {
        this.setState({
         dataSource: responseJson
        });
        await this.setState({firstResult: this.state.dataSource["results"][0]["school.name"]});
        if(responseJson != null && responseJson.length != 0){
          console.log("RESPONSE VALID");
          this.printSchool2(responseJson);
        }
      })
      .catch(error=>console.log(error)); //to catch the errors if any
    }
    console.log("/////////////////////////////////");
      console.log("ITS ALMOST DONE");
      loadingImage = {width: 0, height : 0};
      this.setState({loading : false, submitText : "See Results"});
    
  }

  // console.log(this.state.collegeResultsURL);
  // fetch(this.state.collegeResultsURL)
  // .then(response => response.json())
  // .then((responseJson)=> {
  //   this.setState({
  //    dataSource: responseJson
  //   });
  //   this.setState({firstResult: this.state.dataSource["results"][0]["school.name"]});
  //   if(this.state.dataSource != null && this.state.dataSource.length != 0){
  //     this.setSchools();
  //     loadingImage = {width: 0, height : 0};
  //   }
  //   loadingImage = {width: 0, height : 0};
  // })
  // .catch(error=>console.log(error)); //to catch the errors if any
  // loadingImage = {width: 0, height : 0};
  if(this.state.bools[0] && this.state.bools[this.state.bools.length-1]){
    console.log("OUT OF THE LOOp ABOUT TO GO INTO TEMP");
    this.temp();
  }

}

makeGetRequest(path){
  return new Promise(function(resolve, reject){
    fetch(path)
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource: responseJson
      });
      this.setState({firstResult: this.state.dataSource["results"][0]["school.name"]});
      if(responseJson != null && responseJson.length != 0){
        console.log("RESPONSE VALID");
        this.printSchool2(responseJson);
        resolve(responseJson["results"]);
        loadingImage = {width: 0, height : 0};
      }
    })
    .catch(error => reject(error));
  });
}

async printSchool2(response, where){
  var json = response;
  var arr = [];
  var length = json["results"].length > 3 ? 3 : json["results"].length;
  console.log(json);
  for(var i =0; i < length; i++){
    console.log(i);
    var randy = Math.floor(Math.random() * (json["results"].length))
    if(!arr.includes(randy)){
      arr.push(randy);
      this.state.collegeNames.push(json["results"][randy]["school.name"]);
      this.state.collegeACTS.push(json["results"][randy]["2017.admissions.act_scores.midpoint.cumulative"]);
      this.state.collegeReadingSAT.push(json["results"][randy]["2017.admissions.sat_scores.midpoint.critical_reading"]);
      this.state.collegeMathSAT.push(json["results"][randy]["2017.admissions.sat_scores.midpoint.math"]);
      this.state.collegelinks.push(json["results"][randy]["school.school_url"]);
      this.state.collegecities.push(json["results"][randy]["school.city"]);
      await this.temp2(this.state.collegecities[this.state.collegecities.length-1]);
      // console.log(city);
    //   let url2 = "https://api.openweathermap.org/data/2.5/weather?q="+this.state.collegecities[this.state.collegecities.length-1]+",USA&appid=01e2ab091c2e3a0ab1eaca9b7e15f159";
    //   await fetch(url2)
    //   .then(response => response.json())
    //   .then((responseJson)=> {
    // // var json = response; 
    //     console.log(responseJson["main"]["temp"]);
    //     var celsius = responseJson["main"]["temp"] - 273;
    //     var fahrenheit = (celsius*(9/5)) + 32;
    //     this.state.collegeTemp.push(parseInt(fahrenheit,10).toString());
    //     this.state.collegeweathers.push(responseJson["weather"][0]["description"]);

    //   })
      this.state.collegestates.push(json["results"][randy]["school.state"]);
      this.state.collegeBlacks.push(json["results"][randy]["2017.student.demographics.race_ethnicity.black"]);
      this.state.collegeWhites.push(json["results"][randy]["2017.student.demographics.race_ethnicity.white"]);
      this.state.collegeAsians.push(json["results"][randy]["2017.student.demographics.race_ethnicity.asian"]);
      this.state.collegeHispanics.push(json["results"][randy]["2017.student.demographics.race_ethnicity.hispanic"]);
      console.log(json["results"][randy]["2017.cost.net_price.public.by_income_level.110001-plus"])
      console.log(json["results"][randy]["2017.cost.net_price.private.by_income_level.110001-plus"]);
      if(this.state.income == "0-30000"){
        if(json["results"][randy]["2017.cost.net_price.public.by_income_level.0-30000"] != null){
          this.state.collegeprices.push(json["results"][randy]["2017.cost.net_price.public.by_income_level.0-30000"]);
        }
        else{
          this.state.collegeprices.push(json["results"][randy]["2017.cost.net_price.private.by_income_level.0-30000"]);
        }
      }
      if(this.state.income == "30001-48000"){
        if(json["results"][randy]["2017.cost.net_price.public.by_income_level.30001-48000"] != null){
          this.state.collegeprices.push(json["results"][randy]["2017.cost.net_price.public.by_income_level.30001-48000"]);
        }
        else{
          this.state.collegeprices.push(json["results"][randy]["2017.cost.net_price.private.by_income_level.30001-48000"]);
        }
      }
      if(this.state.income == "48001-75000"){
        if(json["results"][randy]["2017.cost.net_price.public.by_income_level.48001-75000"] != null){
          this.state.collegeprices.push(json["results"][randy]["2017.cost.net_price.public.by_income_level.48001-75000"]);
        }
        else{
          this.state.collegeprices.push(json["results"][randy]["2017.cost.net_price.private.by_income_level.48001-75000"]);
        }
      }
      if(this.state.income == "75001-110000"){
        if(json["results"][randy]["2017.cost.net_price.public.by_income_level.75001-110000"] != null){
          this.state.collegeprices.push(json["results"][randy]["2017.cost.net_price.public.by_income_level.75001-110000"]);
        }
        else{
          this.state.collegeprices.push(json["results"][randy]["2017.cost.net_price.private.by_income_level.75001-110000"]);
        }
      }
      if(this.state.income == "110001"){
        if(json["results"][randy]["2017.cost.net_price.public.by_income_level.110001-plus"] != null){
          this.state.collegeprices.push(json["results"][randy]["2017.cost.net_price.public.by_income_level.110001-plus"]);
        }
        else{
          this.state.collegeprices.push(json["results"][randy]["2017.cost.net_price.private.by_income_level.110001-plus"]);
        }
      }
      this.state.collegepricecalculators.push(json["results"][randy]["school.price_calculator_url"]);
      await this.state.collegeNicheLinks.push(this.state.collegeNames[this.state.collegeNames.length - 1]);
      if(this.state.collegeNicheLinks[this.state.collegeNicheLinks.length -1].includes("-")){
        this.state.collegeNicheLinks[this.state.collegeNicheLinks.length -1] = this.state.collegeNicheLinks[this.state.collegeNicheLinks.length -1].replace("-", "---");
      }
      if(this.state.collegeNicheLinks[this.state.collegeNicheLinks.length -1].includes(" at ")){
        this.state.collegeNicheLinks[this.state.collegeNicheLinks.length -1] = this.state.collegeNicheLinks[this.state.collegeNicheLinks.length -1].replace(" at ", "-");
      }
      this.state.collegeNicheLinks[this.state.collegeNicheLinks.length -1] = this.state.collegeNicheLinks[this.state.collegeNicheLinks.length -1].replace(/ /g, "-");
    
      if(this.state.collegeNicheLinks[this.state.collegeNicheLinks.length -1].includes("'")){
        this.state.collegeNicheLinks[this.state.collegeNicheLinks.length -1] = this.state.collegeNicheLinks[this.state.collegeNicheLinks.length -1].replace( "'", "");
      }
      this.setState({index : this.state.index+1});
      // let url2 = "https://api.openweathermap.org/data/2.5/weather?q="+this.state.collegecities[this.state.collegecities.length-1]+",USA&appid=01e2ab091c2e3a0ab1eaca9b7e15f159";
      // $.get(url2, null, tempcontrol);
      // if(i == json["results"].length-1){
      //   this.state.bools[where] = true;
      // }
    }
    else{
      i--;
    }
  }
  // index = og+3;
  // if(this.state.selectedItems.length == 1 && index >= 3){

  //   this.setState({loading : false});
  //   loadingImage = {width : 0, height :0};
  //   await temp();
  //   if(finished){
  //     $("#myform").submit();
  //   }
  // }
  // else if(this.state.selectedItems.length == 2 && index >= 6){
  //   this.setState({loading : false});
  //   loadingImage = {width : 0, height :0};
  //   await temp();
  //   if(finished){
  //     $("#myform").submit();
  //   }
  // }
  // else if(this.state.selectedItems.length == 3 && index >= 9){
  //   await temp();
  //   if(finished){
  //     $("#myform").submit();
  //   }
  // }
  // return;
}


  setStateChosen(temp){
    switch(temp) {
      case 'Alabama':
        this.setState({state: "1"});
        return "1";
        break;
      case 'Alaska':
        this.setState({state: "2"});
        return "2";
        break;
      case 'Arizona':
        this.setState({state: "4"});
        return "4";
        break;
      case 'Arkansas':
        this.setState({state: "5"});
        return "5";
        break;
      case 'California':
        this.setState({state: "6"});
        return "6";
        break;
      case 'Colorado':
        this.setState({state: "8"});
        return "8";
        break;
      case 'Connecticut':
        this.setState({state: "9"});
        return "9";
        break;
      case 'Delaware':
        this.setState({state: "10"});
        return "10";
        break;
      case 'District Of Columbia':
        this.setState({state: "11"});
        return "11";
        break;
      case 'Florida':
        this.setState({state: "12"});
        return "12";
        break;
      case 'Georgia':
        this.setState({state: "13"});
        return "13";
        break;
      case 'Hawaii':
        this.setState({state: "15"});
        return "15"
        break;
      case 'Idaho':
        this.setState({state: "16"});
        return "16";
        break;
      case 'Illinois':
        this.setState({state: "17"});
        return "17";
        break;
      case 'Indiana':
        this.setState({state: "18"});
        return "18";
        break;
      case 'Iowa':
        this.setState({state: "19"});
        return "19";
        break;
      case 'Kansas':
        this.setState({state: "20"});
        return "20";
        break;
      case 'Kentucky':
        this.setState({state: "21"});
        return "21";
        break;
      case 'Louisiana':
        this.setState({state: "22"});
        return "22";
        break;
      case 'Maine':
        this.setState({state: "23"});
        return "23";
        break;
      case 'Maryland':
        this.setState({state: "24"});
        return "24";
        break;
      case 'Massachusetts':
        this.setState({state: "25"});
        return "25";
        break;
      case 'Michigan':
        this.setState({state: "26"});
        return "26";
        break;
      case 'Minnesota':
        this.setState({state: "27"});
        return "27";
        break;
      case 'Mississippi':
        this.setState({state: "28"});
        return "28";
        break;
      case 'Missouri':
        this.setState({state: "29"});
        return "29";
        break;
      case 'Montana':
        this.setState({state: "30"});
        return "30";
        break;
      case 'Nebraska':
        this.setState({state: "31"});
        return "31";
        break;
      case 'Nevada':
        this.setState({state: "32"});
        return "32";
        break;
      case 'New Hampshire':
        this.setState({state: "33"});
        return "33";
        break;
      case 'New Jersey':
        this.setState({state: "34"});
        return "34";
        break;
      case 'New Mexico':
        this.setState({state: "35"});
        return "35";
        break;
      case 'New York':
        this.setState({state: "36"});
        return "36";
        break;
      case 'North Carolina':
        this.setState({state: "37"});
        return "37";
        break;
      case 'North Dakota':
        this.setState({state: "38"});
        return "38";
        break;
      case 'Ohio':
        this.setState({state: "39"});
        return "39";
        break;
      case 'Oklahoma':
        this.setState({state: "40"});
        return "40";
        break;
      case 'Oregon':
        this.setState({state: "41"});
        return "41";
        break;
      case 'Pennsylvania':
        this.setState({state: "42"});
        return "42";
        break;
      case 'Rhode Island':
        this.setState({state: "44"});
        return "44";
        break;
      case 'South Carolina':
        this.setState({state: "45"});
        return "45";
        break;
      case 'South Dakota':
        this.setState({state: "46"});
        return "46";
        break;
      case 'Tennessee':
        this.setState({state: "47"});
        return "47";
        break;
      case 'Texas':
        this.setState({state: "48"});
        return "48";
        break;
      case 'Utah':
        this.setState({state: "49"});
        return "49";
        break;
      case 'Vermont':
        this.setState({state: "50"});
        return "50";
        break;
      case 'Virginia':
        this.setState({state: "51"});
        return "51";
        break;
      case 'Washington':
        this.setState({state: "53"});
        return "53";
        break;
      case 'West Virginia':
        this.setState({state: "54"});
        return "54";
        break;
      case 'Wisconsin':
        this.setState({state: "55"});
        return "55";
        break;
      case 'Wyoming':
        this.setState({state: "56"});
        return "56";
        break;
      default:
        this.setState({state: '1'});
    }
  }

  setDegree(temp){
      switch(temp){
        case "Certificate Degree (depends)":
          this.setState({degree: "1"});
          break;
        case "Associate's Degree (2 yrs)":
          this.setState({degree: "2"});
          break;
        case "Bachelor's Degree (4 yrs)":
          this.setState({degree: "3"});
          break;
        case "Graduate Degree (1.5-2 yrs)":
          this.setState({degree: "4"});
          break;
        default:
          this.setState({degree: "1"});
        
      }
  }
  
  setMajor(temp){
    switch(temp){
      case "Ethnic,Cultural, and Gender studies":
        this.setState({major: "program.bachelors.ethnic_cultural_gender"});
        break;
      case "Communication Studies":
        this.setState({major: "program.bachelors.communication"});
        break;
      case "Business/Marketing":
        this.setState({major: "program.bachelors.business_marketing"});
        break;
      case "Engineering Studies":
        this.setState({major: "program.bachelors.engineering"});
        break;
      case "Legal Studies":
        this.setState({major: "program.bachelors.legal"});
        break;
      case "Biological Studies":
        this.setState({major: "program.bachelors.biological"});
        break;
      case "English Studies":
        this.setState({major: "program.bachelors.english"});
        break;
      case "Computer Studies":
        this.setState({major: "program.bachelors.computer"});
        break;
      case "Construction":
        this.setState({major: "program.bachelors.construction"});
        break;
      case "Psychology":
        this.setState({major: "program.bachelors.psychology"});
        break;
      case "Culinary":
        this.setState({major: "program.bachelors.personal_culinary"});
        break;
      case "Philosophy":
        this.setState({major: "program.bachelors.philosophy_religious"});
        break;
      case "Arts":
        this.setState({major: "program.bachelors.visual_performing"});
        break;
      case "Don't Know":
        this.setState({major: "Don't Know"});
        break;
      default:
        this.setState({major: "1"});
      
    }
  }
  setHBCU(temp){
      switch(temp){
          case "No thank you":
            this.setState({hbcu: "0"});
            break;
          case "Yes please":
            this.setState({hbcu: "1"});
            break;
          default:
            this.setState({hbcu: "0"});
      }
  }

  setWomens(temp){
    switch(temp){
        case "Not really":
          this.setState({women: "0"});
          break;
        case "Sure":
          this.setState({women: "1"});
          break;
        default:
          this.setState({women: "0"});
    }
  }
  setSize(temp){
    switch(temp){
        case "Small (0-5000 people)":
          this.setState({size: "0..5001"});
          break;
        case "Medium (5000-15000 people)":
          this.setState({size: "5002..15001"});
          break;
        case "Large (15000-30000 people)":
          this.setState({size: "15002..30000"});
          break;
        case "Huge (30000- infinity and beyond)":
          this.setState({size: "30001.."});
          break;
        default:
          this.setState({size: "0"});
    }
  }

  setIncome(temp){
    switch(temp){
        case "$0- $30,000":
          this.setState({income: "0-30000"});
          break;
        case "$30,001 - $48,000":
          this.setState({income: "30001-48000"});
          break;
        case "$48,001 - $75,000":
          this.setState({income: "48001-75000"});
          break;
        case "$75,001 - $110000":
          this.setState({income: "75001-110000"});
          break;
        case "$110001+":
          this.setState({income: "110001"});
          break;
        default:
          this.setState({income: "0"});
    }

  }

  temp(){
    console.log(this.state.collegecities);
    for(var i = 0; i < this.state.collegecities.length ; i++){
      let url2 = "https://api.openweathermap.org/data/2.5/weather?q="+this.state.collegecities[i]+",USA&appid=01e2ab091c2e3a0ab1eaca9b7e15f159";
      fetch(url2)
      .then(response => response.json())
      .then((responseJson)=> {
        console.log(i);
    // var json = response; 
        console.log(responseJson["main"]["temp"]);
        var celsius = responseJson["main"]["temp"] - 273;
        var fahrenheit = (celsius*(9/5)) + 32;
        this.state.collegeTemp[i] = parseInt(fahrenheit,10).toString();
        this.state.collegeweathers[i] = responseJson["weather"][0]["description"] ;
        if(i == this.state.collegecities.length-1){
          this.setState({loading : false, submitText : "See Results"});
        }
      })
    }

  }

  temp2(city){
    console.log(city);
      let url2 = "https://api.openweathermap.org/data/2.5/weather?q="+city+",USA&appid=01e2ab091c2e3a0ab1eaca9b7e15f159";
      fetch(url2)
      .then(response => response.json())
      .then((responseJson)=> {
    // var json = response; 
        console.log(responseJson["main"]["temp"]);
        var celsius = responseJson["main"]["temp"] - 273;
        var fahrenheit = (celsius*(9/5)) + 32;
        this.state.collegeTemp.push(parseInt(fahrenheit,10).toString());
        this.state.collegeweathers.push(responseJson["weather"][0]["description"]);

      })

  }
  
  tempcontrol(json , i){
    console.log(i);
    // var json = response; 
    console.log(json["main"]["temp"]);
    var celsius = json["main"]["temp"] - 273;
    var fahrenheit = (celsius*(9/5)) + 32;
      this.state.collegeTemp[i] = parseInt(fahrenheit,10).toString();
      this.state.collegeweathers[i] = json["weather"][0]["description"] ;
  
  }

  getCookies =async () => {
    CookieManager.get('https://collegeplus.us')
    .then((res) => {
      console.log('CookieManager.get =>', res); // => 'user_session=abcdefg; path=/;'
      this.setState({cookies : res});
      this.setState({password : res["collegePlusPassword"]});
      this.setState({username : res["collegePlusUsername"]});
      if(Object.keys(res).length === 0 && res.constructor === Object){
        this.setState({isLoggedIn : false});
      }
      else{
        this.setState({isLoggedIn : true});
      }

    });
    await console.log(this.state.username);
  }

  async setDatastore(){
    console.log("DATASTORE");

      if(this.state.isLoggedIn){
        let colleges = [];
        for(var i = 0; i < this.state.collegeNames.length ; i++){
          colleges.push(this.state.collegeNames[i].replace(new RegExp(' ', 'g'), '+'));
        }
        for(var i = 0; i < this.state.collegeNames.length ; i++){
          colleges[i] = colleges[i].replace(new RegExp('&', 'g'), '');
        }
        for(var i = 0; i < this.state.collegecities.length ; i++){
          this.state.collegecities[i] = this.state.collegecities[i].replace(' ', '+');
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
        
        let url = "https://collegeplus.us/setData?username=" + this.state.username + "&password=" + this.state.password + "&college1="+ this.state.collegecities[0] + "&college2=" +  this.state.collegeNames[1] + "&college3=" + this.state.collegeNames[2] + "&collegeweather1="+ this.state.collegeNames[0] + "&collegeweather2=" + this.state.collegeweathers[1] + "&collegeweather3=" + this.state.collegeweather[2] + "&collegetemp1="+ this.state.collegeTemp[0] + "&collegetemp2=" + this.state.collegeTemp[1] + "&collegetemp3=" + this.state.collegeTemp[2] + "&collegecity1="+ this.state.collegecities[0] + "&collegecity2=" + this.state.collegecities[1] + "&collegecity3=" + this.state.collegecities[2] + "&collegestate1="+ this.state.collegestates[0] + "&collegestate2=" + this.state.collegestates[1] + "&collegestate3=" + this.state.collegestates[2] + "&collegelink1="+ this.state.collegelinks[0] + "&collegelink2=" + this.state.collegelinks[1] + "&collegelink3=" + this.state.collegelink[2] + "&major1=&major2=&major3=&device1=&device2=&device3=&gpa=&usersat="+usersat+"&useract="+useract+"&gpa=&userCity="+ this.state.userCity +"&userState="+ this.state.userState +"&apiKey=seunsSpecificKey21382947";
        await console.log(url);
        fetch(url)
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

  async showResults(){
    const { navigate } = this.props.navigation;
    loadingImage = {width: 50, height : 50};
    this.setState({submitText : ". . ."});
    if(!this.state.clickedin){
      console.log("IN SHOW RESULTS");
      this.getSchoolInfo();
    }
    // await this.setDatastore();
    this.setState({clickedin : true}); 
    console.log(this.state.username);
    if(!this.state.loading){
        loadingImage = {width: 0, height : 0};
        this.setState({clickedin : false});
        navigate("CollegeRecommendations", {Results: this.state.firstResult, arr2 : this.state.arr2,
        linkcollege : this.state.linkcollege,
        linkcollege1 : this.state.linkcollege1,
        linkcollege2 : this.state.linkcollege2,
        act1 : this.state.act1,
        act2 : this.state.act2,
        act3 : this.state.act3,
        satreading1 : this.state.satreading1,
        satreading2 : this.state.satreading2,
        satreading3 : this.state.satreading3,
        satmath1 : this.state.satmath1,
        satmath2 : this.state.satmath2,
        satmath3 : this.state.satmath3,
        useract : this.state.useract,
        usersat : this.state.usersat,
        collegelink1 : this.state.collegelink1,
        collegelink2 : this.state.collegelink2,
        collegelink3 : this.state.collegelink3,
        collegecity1 : this.state.collegecity1,
        collegecity2 : this.state.collegecity2,
        collegecity3 : this.state.collegecity3,
        collegestate1 : this.state.collegestate1,
        collegestate2 : this.state.collegestate2,
        collegestate3 : this.state.collegestate3,
        collegetemp1 : this.state.collegetemp1,
        collegetemp2 : this.state.collegetemp2,
        collegetemp3 : this.state.collegetemp3,
        collegeweather1 : this.state.collegeweather1,
        collegeweather2 : this.state.collegeweather2,
        collegeweather3 : this.state.collegeweather3,
        collegeprice1 : this.state.collegeprice1,
        collegeprice2 : this.state.collegeprice2,
        collegeprice3 : this.state.collegeprice3,
        pricecalc1 : this.state.pricecalc1,
        pricecalc2 : this.state.pricecalc2,
        pricecalc3 : this.state.pricecalc3,
        userState : this.state.userState,
        userCity : this.state.userCity,
        city1 : this.state.city1,
        city2 : this.state.city2,
        city3 : this.state.city3,
        blacks1 : this.state.blacks1,
        blacks2 : this.state.blacks2,
        blacks : this.state.blacks3,
        whites1 : this.state.whites1,
        whites2 : this.state.whites2,
        whites3 : this.state.whites3,
        asians1 : this.state.asians1,
        asians2 : this.state.asians2,
        asians3 : this.state.asians3,
        hispanics1 : this.state.hispanics1,
        hispanics2 : this.state.hispanics2,
        hispanics3 : this.state.hispanics3,
        collegelinks : this.state.collegelinks,
        collegeprices : this.state.collegeprices,
        collegetemps : this.state.collegetemps,
        collegestates : this.state.collegestates,
        collegecities : this.state.collegecities,
        collegeweathers : this.state.collegeweathers,
        collegepricecalculators : this.state.collegepricecalculators,
        collegeBlacks : this.state.collegeBlacks,
        collegeWhites : this.state.collegeWhites,
        collegeAsians : this.state.collegeAsians,
        collegeHispanics : this.state.collegeHispanics,
        collegeACTS : this.state.collegeACTS,
        collegeReadingSAT : this.state.collegeReadingSAT,
        collegeMathSAT : this.state.collegeMathSAT,
        collegeNicheLinks : this.state.collegeNicheLinks,
        collegeNames : this.state.collegeNames,
        collegeTemp : this.state.collegeTemp,
      });
    }
    else{

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
  //  height: STATUSBAR_HEIGHT,
 },
 appBar: {
   backgroundColor:'#ffff00',
  //  height: APPBAR_HEIGHT,
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
    backgroundColor: '#343434',
    elevation: 0,
    shadowOpacity: 0,
  },
  TextLabel : {
    color : 'white',
    marginTop : 10,
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center', 
    fontFamily: 'Montserrat-Medium'
  },
  littleText : {
    maxWidth: screenWidth * .8,
    color: 'white',
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 14, 
    fontFamily: 'Quicksand',
    fontWeight : '900'
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
export default CollegePickerScreen;
