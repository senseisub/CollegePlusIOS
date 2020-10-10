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
import {Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get('window').width);
import { WebView } from "react-native-webview";
import YoutubePlayer from 'react-native-youtube-iframe';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
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
class ResourceScreen extends Component{

  constructor(props) {
    super(props);
    this.exampleRef = this.updateRef.bind(this, 'text');
    this.playerRef = React.createRef();
    this.state = {
      text: 'h',
      playing : false
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

    render(){
       let { text } = this.state;
       const dateYear =  new Date().getFullYear().toString()
       const FAFSA = dateYear + '-06-29'
      //  const [playing, setPlaying] = useState(true);
      let data = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pear',
      }];

  return (
    <ScrollView style ={styles.pickerPage}>
      <View style = {{alignItems : 'center', marginBottom : 50, marginTop : 30}}>
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{maxWidth: screenWidth * .8, alignItems: 'center', textAlign: 'center'}}>
            <Text style = {{color: 'white', fontSize: 24, textAlign: 'center', maxWidth: 375, fontFamily : "Montserrat-Medium"}}>
              We want you to be successful ! {'\n\n'}
            </Text>
            <Text style = {{color: 'white', fontSize: 15, textAlign: 'center', maxWidth: screenWidth * .8, lineHeight : 24, fontFamily : "Quicksand"}}>
            Working hard in school can pay off in the long run! This is why we want you to have all the resources possible to help you be successful! This page is split up by categories like SAT advice, scholarships, studying hacks, resume help, and other important dates. If you are a senior you'll want to scroll down to the important dates section to learn more about when dates are due.
            </Text>
          </Text>
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center', marginTop : 20}}>
          <Image style = {{width: screenWidth * .7, height: screenWidth * .7}} source={{uri: "https://media.giphy.com/media/L0O3TQpp0WnSXmxV8p/giphy-downsized.gif"}} />
        </View>
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
      <View style = {{ marginBottom : 50, marginTop : 30}}>
        <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom : 15}}>
            <Text style = {{maxWidth: screenWidth * .8, alignItems: 'center', textAlign: 'center', marginTop : 20}}>
              <Text style = {{color: 'white', fontSize: 24, textAlign: 'center', maxWidth: 375, fontFamily : "Montserrat-Medium"}}>
                Important Dates ! {'\n\n'}
              </Text>
              <Text style = {{color: 'white', fontSize: 15, textAlign: 'center', maxWidth: screenWidth * .8, lineHeight : 24, fontFamily : "Quicksand"}}>
              Below is a calendar with important dates such as regular decision and early action decision deadlines, notifications of the FAFSA opening, and SAT dates and registration details. To stay on top of your deadlines, make sure to copy the essential and relevant events to your own calendar.
              </Text>
            </Text>
        </View>
        <CalendarList
              // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
          markingType={'period'}

              // Enable horizontal scrolling, default = false
          horizontal={true}
          // Enable paging on horizontal, default = false
          pagingEnabled={true}
          // Collection of dates that have to be marked. Default = {}
          markedDates={{
            
              '2020-10-01' : {selected: true, marked: true, selectedColor: 'blue'},
            '2020-11-01': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2020-11-02': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2020-11-03': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2020-11-04': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2020-11-05': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2020-11-06': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2020-11-07': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2020-11-08': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2020-11-09': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2020-11-10': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2020-11-11': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2020-11-12': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2020-11-13': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2020-11-14': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2020-11-15': {color: '#70d7c7', marked: true, selectedColor: 'red'},

            '2021-01-01': {color: '#cc66ff', marked: true, selectedColor: 'red'},

            '2020-08-01': {color : "#ff6666" , marked: true},

            '2020-08-29': {color : "#99ff66" , marked: true, dotColor: 'red'},
            '2020-09-26': {color : "#99ff66" , marked: true, dotColor: 'red'},
            '2020-10-03': {color : "#99ff66" , marked: true, dotColor: 'red'},
            '2020-11-07': {color : "#99ff66" , marked: true, dotColor: 'red'},
            '2020-12-05': {color : "#99ff66" , marked: true, dotColor: 'red'},
            '2021-03-13': {color : "#99ff66" , marked: true, dotColor: 'red'},
            '2021-05-08': {color : "#99ff66" , marked: true, dotColor: 'red'},
            '2021-06-05': {color : "#99ff66" , marked: true, dotColor: 'red'},
            ////////////////////////////////////////////////////////////////////
            '2021-10-01' : {selected: true, marked: true, selectedColor: 'blue'},
            '2021-11-01': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2021-11-02': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2021-11-03': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2021-11-04': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2021-11-05': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2021-11-06': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2021-11-07': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2021-11-08': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2021-11-09': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2021-11-10': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2021-11-11': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2021-11-12': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2021-11-13': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2021-11-14': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2021-11-15': {color: '#70d7c7', marked: true, selectedColor: 'red'},

            '2022-01-01': {color: '#cc66ff', marked: true, selectedColor: 'red'},

            '2021-08-01': {color : "#ff6666" , marked: true, dotColor: 'red', activeOpacity: 0},
            ////////////////////////////////////////////////////////////////////////
            '2022-10-01' : {selected: true, marked: true, selectedColor: 'blue'},
            '2022-11-01': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2022-11-02': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2022-11-03': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2022-11-04': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2022-11-05': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2022-11-06': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2022-11-07': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2022-11-08': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2022-11-09': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2022-11-10': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2022-11-11': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2022-11-12': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2022-11-13': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2022-11-14': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2022-11-15': {color: '#70d7c7', marked: true, selectedColor: 'red'},

            '2023-01-01': {color: '#cc66ff', marked: true, selectedColor: 'red'},

            '2022-08-01': {color : "#ff6666" , marked: true, dotColor: 'red', activeOpacity: 0},
            ////////////////////////////////////////////////////////////////////////
            '2023-10-01' : {selected: true, marked: true, selectedColor: 'blue'},
            '2023-11-01': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2023-11-02': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2023-11-03': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2023-11-04': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2023-11-05': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2023-11-06': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2023-11-07': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2023-11-08': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2023-11-09': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2023-11-10': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2023-11-11': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2023-11-12': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2023-11-13': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2023-11-14': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2023-11-15': {color: '#70d7c7', marked: true, selectedColor: 'red'},

            '2024-01-01': {color: '#cc66ff', marked: true, selectedColor: 'red'},

            '2023-08-01': {color : "#ff6666" , marked: true, dotColor: 'red', activeOpacity: 0},
            ////////////////////////////////////////////////////////////////////////
            '2024-10-01' : {selected: true, marked: true, selectedColor: 'blue'},
            '2024-11-01': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2024-11-02': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2024-11-03': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2024-11-04': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2024-11-05': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2024-11-06': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2024-11-07': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2024-11-08': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2024-11-09': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2024-11-10': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2024-11-11': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2024-11-12': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2024-11-13': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2024-11-14': {color: '#70d7c7', marked: true, selectedColor: 'red'},
            '2024-11-15': {color: '#70d7c7', marked: true, selectedColor: 'red'},

            '2025-01-01': {color: '#cc66ff', marked: true, selectedColor: 'red'},

            '2024-08-01': {color : "#ff6666" , marked: true, dotColor: 'red', activeOpacity: 0},
          }}
        />
        <View style = {{display : "flex", flexDirection : "row", marginTop : 15}}>
          <View style = {{width : screenWidth * .2}}>
            <View style = {{backgroundColor : "#70d7c7", flex : 1, borderRadius : 15, overflow : "hidden"}}>

            </View>
          </View>
          <View style = {{width : screenWidth * .8}}>
            <Text style = {{paddingLeft : 15, color : "white"}}>
              Early Decision Application window
            </Text>
          </View>
        </View>
        <View style = {{display : "flex", flexDirection : "row", marginTop : 15}}>
          <View style = {{width : screenWidth * .20}}>
            <View style = {{backgroundColor : "#cc66ff", flex : 1, borderRadius : 15, overflow : "hidden"}}>

            </View>
          </View>
          <View style = {{width : screenWidth * .8}}>
            <Text style = {{paddingLeft : 15, color : "white"}}>
              Regular Decision Application opens
            </Text>
          </View>
        </View>
        <View style = {{display : "flex", flexDirection : "row", marginTop : 15}}>
          <View style = {{width : screenWidth * .2}}>
            <View style = {{backgroundColor : "#ff6666", flex : 1, borderRadius : 15, overflow : "hidden"}}>

            </View>
          </View>
          <View style = {{width : screenWidth * .8}}>
            <Text style = {{paddingLeft : 15, color : "white"}}>
              The Common App opens
            </Text>
          </View>
        </View>
        <View style = {{display : "flex", flexDirection : "row", marginTop : 15}}>
          <View style = {{width : screenWidth * .2}}>
            <View style = {{backgroundColor : "#99ff66", flex : 1, borderRadius : 15, overflow : "hidden"}}>

            </View>
          </View>
          <View style = {{width : screenWidth * .8}}>
            <Text style = {{paddingLeft : 15, color : "white"}}>
              SAT Testing Day
            </Text>
          </View>
        </View>
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
      <View>
        <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom : 50}}>
          <Text style = {{maxWidth: screenWidth * .8, alignItems: 'center', textAlign: 'center', marginTop : 20}}>
            <Text style = {{color: 'white', fontSize: 24, textAlign: 'center', maxWidth: 375, fontFamily : "Montserrat-Medium"}}>
                SAT Tips and Tricks {'\n\n'}
            </Text>
            <Text style = {{color: 'white', fontSize: 15, textAlign: 'center', maxWidth: 375, fontFamily : "Montserrat-Medium"}}>
                Why are they important? {'\n\n'}
            </Text>
            <Text style = {{color: 'white', fontSize: 15, textAlign: 'center', maxWidth: screenWidth * .8, lineHeight : 24, fontFamily : "Quicksand"}}>
                Many colleges require you to submit either your SAT or ACT score, making it a requirement to apply. This makes taking the SAT a must. Many schools use SAT scores to narrow decisions on who is and not accepted. Because many high schools across the US vary in difficulty and class options, the SAT is really the only way to measure aptitude for students across the nation. A good SAT score will set you apart from other students who are applying for the same scholarships as you.
              Depending on what school you're applying to your SAT score may be less or more important. Big schools will likely place more of an emphasis and may even have cut off scores. Smaller colleges, like liberal arts schools, will have more of a holistic review. Holistic review is when a college looks at all parts of your application as if they have equal value rather than placing a higher emphasis on one piece (like the SAT). Now that you understand why working hard to achieve a good score is essential, let's move on to what steps to take.
            </Text>
          </Text>
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
        <YoutubePlayer
          ref={this.playerRef}
          height={300}
          width={400}
          videoId={"tn6etIzUeU4"}
          play={this.state.playing}
          onChangeState={event => console.log(event)}
          onReady={() => console.log("ready")}
          onError={e => console.log(e)}
          onPlaybackQualityChange={q => console.log(q)}
          volume={50}
          playbackRate={1}
          playerParams={{
            cc_lang_pref: "us",
            showClosedCaptions: true
          }}
        />
        </View>
      </View>
      <View>
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
      </View>

      <View style = {{alignItems : 'center', marginBottom : 50}}>
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{maxWidth: screenWidth * .8, alignItems: 'center', textAlign: 'center', marginTop : 20}}>
            <Text style = {{color: 'white', fontSize: 24, textAlign: 'center', maxWidth: 375, fontFamily : "Montserrat-Medium", marginTop : 20}}>
              How to improve my score? {'\n\n'}
            </Text>
            <Text style = {{color: 'white', fontSize: 15, textAlign: 'center', maxWidth: screenWidth * .8, lineHeight : 24, fontFamily : "Quicksand"}}>
              <Text>-- Make a Khan Academy account <Text onPress = {() => this._goToURL("www.khanacademy.org/sat")} style = {{color : "tomato"}}> here.</Text> Khan is a free online resource that, just like CollegePlus, is looking to support you in any way possible. That will make studying a whole lot easier. Khan will make you a study calendar, provide you with free SAT video lessons, and most importantly, practice tests! 20 hours of practice on Khan Academy is associated with an average 115-point score increase from the PSAT/NMSQT to the SAT. So please, for goodness sake, take advantage of this great free resource! {'\n\n'}</Text>
              <Text>-- Practice, practice, practice. Take as many practice tests as you can. Make sure you simulate ALL conditions of the test. Don't just wake up whenever and take the practice test in your pajamas. Wake up, put real clothes on, and take the practice SAT as if you would like the real thing. This is the best way to actually gauge what you do well and not so well. After you're done practicing, go through the questions you got wrong and try them again. If you solve it correctly, write down in a binder what mistake you made and how you can improve the way you approach the problem next time. If you don't solve it correctly that is totally okay! Look at the problem solution and work the problem out alongside the explanation. Keep track of all your practice questions, it is a good idea to review them occasionally. {'\n\n'}</Text>
              <Text>-- Stay positive! Conquering the test is really just a matter of practice and positivity. You can do what you set your mind to!  {'\n\n'}</Text>            
            </Text>
          </Text>
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom : 20, width : screenWidth * .7, overflow: 'hidden', borderRadius : 20}}>
          <Image style = {{width: screenWidth * .7, height: screenWidth * .7, borderRadius : 25}} source={{uri: "https://media.giphy.com/media/PgnGYxwubWEYU/giphy-downsized.gif"}} />
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom : 20}}>
          <TouchableOpacity style = {{backgroundColor : '#0099cc', maxWidth : screenWidth * .7, padding : 16, borderRadius : 15}}><Text style= {{textAlign : 'center', fontFamily : "Montserrat-Medium"}}>Improve your Math Score</Text></TouchableOpacity>
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom : 20}}>
          <TouchableOpacity style = {{backgroundColor : 'tomato', maxWidth : screenWidth * .7, padding : 16, borderRadius : 15}}><Text style= {{textAlign : 'center', fontFamily : "Montserrat-Medium"}}>Improve your Reading Score</Text></TouchableOpacity>
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style = {{backgroundColor : '#0099cc', maxWidth : screenWidth * .7, padding : 16, borderRadius : 15}}><Text style= {{textAlign : 'center', fontFamily : "Montserrat-Medium"}}>Crush the Essay</Text></TouchableOpacity>
        </View>
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
      <View style = {{alignItems : 'center', marginBottom : 50}}>
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{maxWidth: screenWidth * .8, alignItems: 'center', textAlign: 'center', marginTop : 20}}>
            <Text style = {{color: 'white', fontSize: 24, textAlign: 'center', maxWidth: 375, fontFamily : "Montserrat-Medium"}}>
            Do I have to use my SAT scores? {'\n\n'}
            </Text>
            <Text style = {{color: 'white', fontSize: 15, textAlign: 'center', maxWidth: screenWidth * .8, lineHeight : 24, fontFamily : "Quicksand"}}>
              <Text>No you absolutely do not! Many of the wonderful schools I applied to did not even require the SAT. Though there are not quite as many as SAT-requiring schools, you should most definitely apply if you don't feel too confident about your scores. Schools know that you are more than a number! Learn more about options for going test optional below.{'\n\n'}</Text>
            </Text>
          </Text>
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom : 20}}>
          <TouchableOpacity style = {{backgroundColor : 'tomato', maxWidth : screenWidth * .7, padding : 16, borderRadius : 15}}><Text style= {{textAlign : 'center',fontFamily : "Montserrat-Medium"}}>Click here for a guide to Test Optional and Test Flexible schools</Text></TouchableOpacity>
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom : 20}}>
          <TouchableOpacity style = {{backgroundColor : '#0099cc', maxWidth : screenWidth * .7, padding : 16, borderRadius : 15}}><Text style= {{textAlign : 'center', fontFamily : "Montserrat-Medium"}}>Click here to see the best test optional schools</Text></TouchableOpacity>
        </View>
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
      <View style = {{alignItems : 'center', marginBottom : 50}}>
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{maxWidth: screenWidth * .8, alignItems: 'center', textAlign: 'center', marginTop : 20}}>
            <Text style = {{color: 'white', fontSize: 24, textAlign: 'center', maxWidth: 375, fontFamily : "Montserrat-Medium"}}>
              Scholarships {'\n\n'}
            </Text>
            <Text style = {{color: 'white', fontSize: 15, textAlign: 'center', maxWidth: screenWidth * .8, lineHeight : 24, fontFamily : "Quicksand"}}>
              <Text>How much you pay for college can make a significant impact on what colleges you apply to and ultimately what you choose. Here at CollegePlus, we recommend that you always apply no matter what you think the net price may be because you never know what financial opportunities you will have to support you. Below are some tips for finding and applying for scholarships.</Text>
              <Text>-- Look for local scholarships at your school, banks, credit unions, insurance companies, law firms. Often times, there are plenty of memorial scholarships offered in local communities. All you have to do is look.{'\n\n'}</Text>
              <Text>-- Find your niche, once you know what it is you want to study look for scholarships that are specific to you. An example is a scholarship for women wishing to study tech. {'\n\n'}</Text> 
              <Text>-- When you are looking at colleges, make sure you understand the difference between need-based aid and merit-based aid. If your family is in a lower-income bracket your best bet is to apply to schools that offer only need-based aid.  Need-based aid schools will most likely provide you with the most financial support. {'\n\n'}</Text>            
              <Text>-- When applying for scholarships, it might be helpful to keep a Google Drive folder of all the essays you have written. Frequently you can reuse your essays, saving you hours of rewriting the same essay. However, do not copy and paste, make sure to tailor the essay to the prompt. {'\n\n'}</Text> 
              <Text>-- Apply for the FAFSA early! This does not count as a scholarship, but it is free money from the government so you should really take advantage of the opportunity. {'\n\n'}</Text>                                             
            </Text>
          </Text>
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom : 20}}>
          <TouchableOpacity style = {{backgroundColor : 'tomato', maxWidth : screenWidth * .7, padding : 16, borderRadius : 15}}><Text style= {{textAlign : 'center', fontFamily : "Montserrat-Medium"}}>Start looking for scholarship</Text></TouchableOpacity>
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom : 20, width : screenWidth * .7, overflow: 'hidden', borderRadius : 20}}>
          <Image style = {{width: screenWidth * .7, height: screenWidth * .7, borderRadius : 25}} source={{uri: "https://media.giphy.com/media/JpG2A9P3dPHXaTYrwu/giphy.gif"}} />
        </View>
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
      <View style = {{alignItems : 'center', marginBottom : 50}}>
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{maxWidth: screenWidth * .8, alignItems: 'center', textAlign: 'center', marginTop : 20}}>
            <Text style = {{color: 'white', fontSize: 24, textAlign: 'center', maxWidth: 375, fontFamily : "Montserrat-Medium"}}>
              Studying Hacks {'\n\n'}
            </Text>
            <Text style = {{color: 'white', fontSize: 15, textAlign: 'center', maxWidth: screenWidth * .8, lineHeight : 24, fontFamily : "Quicksand"}}>
        <Text>Staying on top of your grades is essential, and studying is the best way to do that! Studying is really a matter of figuring out what works and doesn't work for you. If you don't already, get a planner and keep track of all the important dates for your classes like tests and other weighted assignments. Check your grades often and early! You really don't want to reach the end of a term and be surprised by your grades. To make sure I would always get the grades I wished I would use the  <Text onPress = {() => this._goToURL("https://www.benegg.net/grade_calculator.html")} style = {{color : "tomato"}}> Ben Eggleston Calculator</Text>. That way I could anticipate how much studying I would need to do to get the grade I wanted. {'\n\n'}</Text>
              <Text>-- A first good tip for a successful studying session is to remove all distractions, especially your phone. Put it in another room and forget about it. If you have it nearby you, you will be tempted to check it which will break your focus flow.{'\n\n'}</Text>
              <Text>-- Make sure you eat enough before and sleep enough before you study, nobody wants to do Algebra hangry. This has something to do with a theory called <Text onPress = {() => this._goToURL("https://www.simplypsychology.org/maslow.html")} style = {{color : "tomato"}} > Maslow's Hierarchy of Needs. </Text> {'\n\n'}</Text> 
              <Text>-- Take notes during class and review them after. I am a kinesthetic learner, so I learn by doing things with my hand like rewriting notes I took earlier. Many people will be tempted to retype their notes for aesthetic purposes, but I personally feel like rewriting my notes by hand helps me remember them. Especially for history. Click <Text onPress = {() => this._goToURL("https://www.how-to-study.com/learning-style-assessment/")} style = {{color : "tomato"}} >here </Text> to learn about your learning style and tips to help your learning style specifically. {'\n\n'}</Text>            
              <Text>-- Just like your grades, you need to keep up with studying. Cramming the day before a big test is a big no-no. Not only will you reduce the amount of sleep you get, but you also are most likely not going to remember all the material if you ONLY study the night before. You should study the night before, but the best way to retain information is to three times a week review the content you have learned and go to tutoring if you do not understand a problem. That brings me to my next point. {'\n\n'}</Text> 
              <Text>-- Please ask for help. Nobody is beyond help. Not even that friend of yours whose the Valedictorian and probably going to Harvard. We have all been there, and the sooner you ask for help, the more time you have to review content. Teachers are paid to help you learn and if they to do not do an excellent job of teaching during class, or you need more support let them know. Teachers love to know that their students are concerned about their own success and will go out of their way to support you any way they can! Don't be discouraged if your teacher is sassy though. If they do not want to help just ask another teacher who teaches the same subject. {'\n\n'}</Text>     
              <Text>-- Use technical resources! I love quizlet for subjects like History or Biology.<Text onPress = {() => this._goToURL("https://quizlet.com/")} style = {{color : "tomato"}}> Quizlet </Text>is an online platform and app you can download on your phone that will allow you to create and share flashcards. It will also allow you to test yourself using the flashcards you create, which I highly recommend. {'\n\n'}</Text>                                             
              <Text>-- Location and people also are essential. If you feel like you can focus best by yourself, then don't be afraid to tell your friends you're busy. However, if you learn best in groups, create a study group full of focused peers in your class who will actually study with you, and not distract you. Don't study somewhere distracting, libraries or coffee shops are great places or anywhere else you that is quiet. I also recommend you don't study on your bed, you wanna keep that space for relaxing and resting. {'\n\n'}</Text>                                             
              <Text>-- At the end of the day, work hard, and it will pay off. A friend once told me, "Sleep more than you study, study more than you party, and party as much as you can." (When we say party we mean genuine time spent with friends, by the way, nothing illegal). Working hard is important, but you should have a proper school-life balance. {'\n\n'}</Text>                                                                                     
            </Text>
          </Text>
        </View>
        <View style = {{alignItems : 'center', marginBottom : 15, marginTop : 15}}>
          <Text style = {{fontSize : 16, maxWidth : screenWidth * .8, color : 'white', textAlign : 'center', fontFamily : "Quicksand"}}>
             Below we have put some of our favorite Spotify playlists to get you started along with a youtube playlist with some other helpful hacks.
          </Text>
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom : 20, display : 'flex', flexDirection : 'row'}}>  
          <View style = {{alignItems: 'center', width : screenWidth * .5}}>
            <View style = {{width: screenWidth * .4, borderRadius : 15, overflow : 'hidden'}}>
              <WebView
                style = {{width: screenWidth * .4, height : 300}}
                source = {{ uri:
                  'https://open.spotify.com/embed/playlist/37i9dQZF1DX9sIqqvKsjG8' }}
              />
            </View>
          </View>
          <View style = {{alignItems : 'center', width : screenWidth * .5}}>
            <View style = {{width: screenWidth * .4, borderRadius : 15, overflow : 'hidden'}}>
              <WebView
              style = {{width: screenWidth * .4, height : 300}}
                source = {{ uri:
                  'https://open.spotify.com/embed/playlist/37i9dQZF1DX8NTLI2TtZa6' }}
              />
            </View>
          </View>
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom : 20, display : 'flex', flexDirection : 'row'}}>  
          <View style = {{alignItems: 'center', width : screenWidth * .5}}>
            <View style = {{width: screenWidth * .4, borderRadius : 15, overflow : 'hidden'}}>
              <WebView
                style = {{width: screenWidth * .4, height : 300}}
                source = {{ uri:
                  'https://open.spotify.com/embed/playlist/37i9dQZF1DWYRcvdDwEl3O' }}
              />
            </View>
          </View>
          <View style = {{alignItems : 'center', width : screenWidth * .5}}>
            <View style = {{width: screenWidth * .4, borderRadius : 15, overflow : 'hidden'}}>
              <WebView
              style = {{width: screenWidth * .4, height : 300}}
                source = {{ uri:
                  'https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO' }}
              />
            </View>
          </View>
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center', height: 250}}>
          <WebView
              style = {{width: screenWidth * .95, maxHeight : 250}}
                source = {{ uri:
                  'https://www.youtube.com/embed/videoseries?list=PLCbVnL9xzCZg9TPnwY171oObCS_uql-0_' }}
              />
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom : 20, width : screenWidth * .7, overflow: 'hidden', borderRadius : 20, marginTop : 20}}>
          <Image style = {{width: screenWidth * .7, height: screenWidth * .7, borderRadius : 25}} source={{uri: "https://media.giphy.com/media/fhAwk4DnqNgw8/giphy.gif"}} />
        </View>
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
      <View style = {{alignItems : 'center'}}>
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{maxWidth: screenWidth * .8, alignItems: 'center', textAlign: 'center', marginTop : 20}}>
            <Text style = {{color: 'white', fontSize: 24, textAlign: 'center', maxWidth: 375, fontFamily : "Montserrat-Medium"}}>
                Resume Help {'\n\n'}
            </Text>
          </Text>
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center', marginBottom : 20}}>
          <TouchableOpacity style = {{backgroundColor : '#0099cc', maxWidth : screenWidth * .7, padding : 16, borderRadius : 15}} onPress = {() => this._goToURL("www.resumehelp.com/resume/how-it-works")}><Text style= {{textAlign : 'center', fontFamily : "Montserrat-Medium"}}>Click here to build a resume</Text></TouchableOpacity>
        </View>
      </View>
      <View style = {{height : 60}}>

      </View>
      <View>
        <Text style = {{fontFamily : 'Quicksand', fontSize : 16, color : 'white', paddingBottom : 15, paddingTop : 15, textAlign : 'center'}} onPress = {() => this._goToURL("collegeplus.us")}>
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
  );
}
}
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1A1A1A',
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
export default ResourceScreen;
