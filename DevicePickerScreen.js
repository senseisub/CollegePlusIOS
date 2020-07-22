/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {useState, Component} from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar, Platform, TouchableOpacity, Picker, AppNavigator, StackNavigator, Linking } from 'react-native';
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
const mainColors = ['tomato', '#0099cc'];

class DevicePickerScreen extends Component{

  constructor(props) {
    super(props);
    this.exampleRef = this.updateRef.bind(this, 'text');
    this.smallRef = React.createRef();
    this.state = {
      text: 'h',
      username : '',
      password : '',
      cookies : {},
      isLoggedIn : false,
      clickedin : false,
      ques1 : "0",
      ques2 : '1',
      ques3 : '1',
      ques4 : "0",
      ques5 : '1',
      ques6 : '1',
      ques7 : "0",
      ques8 : '1',
      ques9 : '1',
      ques10 : '1',
      laptops : {
        thinkpads: {
          p1:{
            i7: {
              value:"ThinkPad P1 Gen 2 (15) Laptop Workstation",
              url:"https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-p/P1-Gen-2/p/22WS2WPP102",
              num: 0,
              img: "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-p1-2nd-hero.png?context=bWFzdGVyfHJvb3R8MjE3NTk2fGltYWdlL3BuZ3xoYTYvaGYwLzEwMDUzMTQwMzgxNzI2LnBuZ3wyMDRlMTcxOGQ3YmVhZmZiYmE1NmQzMDllZDBkYTg0ZGRmZWJlZjU4MDBlOTc2ODNjMGIzYTRkZGUwNDNhYTZi",
            },
            } ,
          x1:{
            i7:{
              value:"ThinkPad X1 Carbon Gen 7 (14) laptop",
              url:"https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-x/X1-Carbon-Gen-7/p/22TP2TXX17G",
              num: 0,
              img: "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-7th-gen-hero.png?context=bWFzdGVyfHJvb3R8NjczMDB8aW1hZ2UvcG5nfGg4My9oMjIvMTA1MDA1OTY2Mjk1MzQucG5nfDE2ZGViMmU4ZTk5ZDg5NTBkMGQxZjBmZmQwZWYwNDIyOTUxNTFhMDk4NzJiZDhiNmY1NGY2ZDllYTgyYzA5YTI",
            },
      
          },
          yoga:{
            i7:{
              value:"Yoga C940 (14) Laptop",
                url:"https://www.lenovo.com/us/en/laptops/yoga/yoga-900-series/Lenovo-Yoga-C940-14IIL/p/88YGC901221",
                num: 0,
                img: "https://www.lenovo.com/medias/lenovo-laptop-yoga-c930-hero.png?context=bWFzdGVyfHJvb3R8MzMwNzc4fGltYWdlL3BuZ3xoYjkvaDUxLzk4MjI4MDczMjY3NTAucG5nfGZkYjUzNjQyN2JlMTk0MjU4MWFiNWFlOWQ0NmI0YjU2MmI0MzkwNmViOGE4ZTcwOTNhNmQzOGIxYWRmZDI3NDA",
            },
          },
      
      
        },
        surface:{
          surfaces:{
            i5:{
              value:"Surface Laptop 3",
                url:"https://www.microsoft.com/en-us/p/surface-laptop-3/8vfggh1r94tm?activetab=overview",
              num: 0,
              img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2v60k?ver=802f",
            },
          },
          pro:{
            i7:{
              value:"Surface Pro 7",
                url:"https://www.microsoft.com/en-us/p/surface-pro-7/8n17j0m5zzqs?activetab=overview",
                num: 0,
                img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2GUWJ?ver=2120",
            },
          },
          book:{
            i7:{
            value:"Surface Book 3",
              url:"https://www.microsoft.com/en-us/p/surface-book-3/8xbw9g3z71f1?activetab=pivot%3aoverviewtab",
              num: 0,
              img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1FU5k?ver=cec9",
            },
          },
        },
        macbook:{
          air:{
            i5:{
              value:"Apple Macbook Air",
                url:"https://www.apple.com/shop/buy-mac/macbook-air",
                num: 0,
                img: "https://cdn11.bigcommerce.com/s-bfusds1gyq/images/stencil/500x659/products/518/1180/MBA13_201810_SLV__70680.1562854162.png?c=2",
            },
          },
          pro:{
            i7:{
              value:"Apple Macbook Pro",
                url:"https://www.apple.com/shop/buy-mac/macbook-pro/13-inch",
                num: 0,
                img: "https://cdn.pocket-lint.com/r/s/1200x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs.jpg",
            },
          },
        },
        pixel:{
          pixelbook:{
            i5:{
              value:"Google Pixelbook",
                url:"https://store.google.com/product/google_pixelbook",
                num: 0,
                img: "https://lh3.googleusercontent.com/uMVyiVMEKr9SYnY8g90tGVwKAuAAZrC2urEVASlb9G89PBhEqeuE1PD01PWppV_RbZIr=w1000",
              },
            i7:{
              value:"Google Pixelbook",
                url:"https://store.google.com/product/google_pixelbook",
                num: 0,
                img: "https://lh3.googleusercontent.com/uMVyiVMEKr9SYnY8g90tGVwKAuAAZrC2urEVASlb9G89PBhEqeuE1PD01PWppV_RbZIr=w1000",
            },
          },
        },
        chromebook:{
          dell:{
            celeron:{
              value:"Dell - 11.6 Chromebook",
                url:"https://www.bestbuy.com/site/dell-11-6-chromebook-intel-celeron-4gb-memory-16gb-emmc-flash-memory-black/6293618.p?skuId=6293618&ref=212&loc=1&extStoreId=477&ref=212&loc=1&ds_rl=1260666&ds_rl=1260576&ds_rl=1266837&ds_rl=1266837&gclid=Cj0KCQjwyerpBRD9ARIsAH-ITn8iXDx2X5yYYU3QlbgHQAzjSITOI6Pke7rD20Ao7JZN-MrxJEreL8UaAnSZEALw_wcB&gclsrc=aw.ds",
                num: 0,
                img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6293/6293618_sd.jpg;maxHeight=640;maxWidth=550",
            },
          },
          samsung:{
            celeron:{
              value:"Samsung - 11.6 Chromebook",
                url:"https://www.bestbuy.com/site/samsung-11-6-chromebook-intel-celeron-4gb-memory-32gb-emmc-flash-memory-night-charcoal/6239912.p?skuId=6239912&ref=212&loc=1&extStoreId=470&ref=212&loc=1&ds_rl=1260666&ds_rl=1260576&ds_rl=1266837&ds_rl=1266837&gclid=Cj0KCQjwyerpBRD9ARIsAH-ITn_gsEdVak0oK40lC9EmAIYhrskBBfuhH84ccc0w7I1et9NjcSkyuS8aAlnUEALw_wcB&gclsrc=aw.ds",
                num: 0,
                img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6239/6239912_sd.jpg;maxHeight=640;maxWidth=550",
            },
          },
      
      
        },
        dell:{
          xps:{
            i7:{
              value:"XPS 15 2-in-1 Laptop",
                url:"https://www.dell.com/en-us/shop/cty/pdp/spd/xps-15-9500-laptop?gacd=9694607-1007-5761040-0-0&dgc=st&&gclid=CjwKCAjw26H3BRB2EiwAy32zhdy_xK6wvC_g6hL6YgHlZRZbzXfzqNcwuIEuyPl2KevUsp6LMZctvhoCHbkQAvD_BwE&gclsrc=aw.ds",
                num: 0,
                img: "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/xps_15_9500/pdp/notebook_laptop_xps_15_9500_npl_pdp_mod_05.jpg?qlt=95&amp;fit=constrain,1&amp;hei=470&amp;wid=920&amp;fmt=jpg",
              },
            i5:{
              value:"XPS 15 2-in-1 Laptop",
                url:"https://www.dell.com/en-us/shop/cty/pdp/spd/xps-15-9500-laptop?gacd=9694607-1007-5761040-0-0&dgc=st&&gclid=CjwKCAjw26H3BRB2EiwAy32zhdy_xK6wvC_g6hL6YgHlZRZbzXfzqNcwuIEuyPl2KevUsp6LMZctvhoCHbkQAvD_BwE&gclsrc=aw.ds",
                num: 0,
                img: "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/xps_15_9500/pdp/notebook_laptop_xps_15_9500_npl_pdp_mod_05.jpg?qlt=95&amp;fit=constrain,1&amp;hei=470&amp;wid=920&amp;fmt=jpg",
            },
          },
        },
        hp:{
          spectre:{
            i7:{
              value:"HP Spectre x360 13 inch",
                url:"https://store.hp.com/us/en/pdp/hp-spectre-x360-laptop-13t-touch-7al88av-1?jumpid=ma_2017-spectre-family_product-tile_hp-spectre-x-360_11_7al88av-1_hp-spectre-x360-lapt",
                num: 0,
                img: "https://cnet1.cbsistatic.com/img/Lt6RzR_6J4woW1QgVpaScsXCnm8=/1200x675/2019/11/27/bb5014cc-9049-4ccf-b946-f8cc33449b8e/hp-spectre-x360-13-late-2019-20.jpg",
            },
      
          },
          envy:{
            i7:{
              value:"HP ENVY Laptop -13t",
                  url:"https://store.hp.com/us/en/pdp/hp-envy-laptop-13t-ba000-8mx92av-1",
                  num: 0,
                  img: "https://cdn.mos.cms.futurecdn.net/LFGXuEaG2jnCv8nG3XPN7E.jpg",
            },
          },
        },
        acer:{
          swift1:{
            celeron:{
              value:"Swift 1 Laptop",
                  url:"https://www.acer.com/ac/en/US/content/series/swift1",
                  num: 0,
                  img: "https://static.acer.com/up/Resource/Acer/Laptops/Swift_1/Overview/20180315/swift_1_overview_features_large.jpg",
            },
          },
          swift3:{
            i7:{
              value:"Swift 3 Laptop",
                  url:"https://www.acer.com/ac/en/US/content/series/swift3",
                  num: 0,
                  img: "https://static.acer.com/up/Resource/Acer/Laptops/Swift_3/SF313-52_SF314-57/20200109/Swift-3_ksp-02_2560-Athena.jpg",
            },
          },
        }
      
      
        // surface: {
      
        // }
      }
    }
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
       let { text } = this.state;
      let ques1 = [{
          value: '$2000+',
        }, {
          value: '$1500-$2000',
        }, {
          value: '$1000-$1500',
        }, {
          value: '$500-$1000',
        }, {
          value: '$250-$500',
        }, {
          value: '$0-$250',
        }];

      let ques2 = [{
          value: 'Windows',
        }, {
          value: 'Mac OS',
        }, {
          value: 'Chrome OS',
        }];

      let ques3 = [{
          value: 'Yes, it needs to look pretty',
        }, {
          value: "No, it doesn't matter,"
        }];
      
      let ques4 = [{
          value: 'Yes, I love a good keyboard',
        }, {
          value: "No, it doesn't matter"
        }];

      let ques5 = [{
          value: 'Yes, of course',
        }, {
          value: "No, it doesn't matter"
        }];

      let ques6 = [{
          value: 'Just browsing the web',
        }, {
          value: 'Engineering stuff',
        }, {
          value: 'Typing papers',
        }, {
          value: 'Computer Science stuff',
        }, {
          value: 'Datasets like Google Sheets and Excel',
        }, {
          value: 'Heavy video editing',
        }, {
          value: 'Just media Consumption',
        }];

      let ques7 = [{
          value: 'Yes',
        }, {
          value: "No"
        }];

      let ques8 = [{
          value: 'Super powerful',
        }, {
          value: 'Decently powerful',
        }, {
          value: "Doesn't really matter",
        }];

      let ques9 = [{
          value: 'Yes of course!',
        }, {
          value: "No not really"
        }];

      let ques10 = [{
          value: 'Yes I do',
        }, {
          value: "No I don't"
        }];

      return (
        <ScrollView style ={styles.pickerPage}>
        <View style = {{height: 200, justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: 'white', fontSize: 24}}>
          </Text>
          <Text style = {{maxWidth: 350, alignItems: 'center', textAlign: 'center', lineHeight:26}}>
            <Text style = {{color: 'white', fontSize: 18, textAlign: 'center', maxWidth: 375, fontFamily: 'Montserrat-Medium', lineHeight:26}}>
            Don't know what laptop you need for college?{'\n'}</Text>
              <Text style = {{color: 'white', fontSize: 18, textAlign: 'center', maxWidth: 375, fontWeight: 'bold', fontFamily: 'Montserrat-Bold'}}> DevicePicker</Text>
              <Text style = {{color: 'white', fontSize: 18, textAlign: 'center', maxWidth: 375, fontFamily: 'Montserrat-Medium'}}> is a CollegePlus feature to help you figure out what laptop is necessary for your use at college. There are laptops ranging from Chromebooks to Windows to Macs!{'\n'}
            </Text>
          </Text>
        </View>
        <View style = {styles.dropDownView}>
        <Text style ={styles.TextLabel}> What's your budget ? </Text>
        <Dropdown label=''
        value = {ques1[0].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => this.question1function(value)}
        data={ques1}
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
        <Text style ={styles.TextLabel}> What platform do you prefer? </Text> 
        <Dropdown label=''
        value = {ques2[0].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => this.question2function(value)}
        data={ques2}
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
        <Text style ={styles.TextLabel}> Do you care about aesthetics? </Text>
        <Dropdown label=''
        value = {ques3[1].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => this.question3function(value)}
        data={ques3}
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
        <Text style ={styles.TextLabel}> Do you want a nice keyboard? </Text>
        <Dropdown label=''
        value = {ques4[1].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => {this.question4function(value)}}
        data={ques4}
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
        <Text style ={styles.TextLabel}> Which of these describe the workload you will exhibit during its use? </Text>
        <Dropdown label=''
        value = {ques6[1].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => {this.question5function(value)}}
        data={ques6}
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
        <Text style ={styles.TextLabel}> Do you want a convertible laptop? </Text>
        <Dropdown label=''
        value = {ques7[1].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => {this.question7function(value)}}
        data={ques7}
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
        <Text style ={styles.TextLabel}> How powerful do you want your laptop? </Text>
        <Dropdown label=''
        value = {ques8[1].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => {this.question8function(value)}}
        data={ques8}
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
        <Text style ={styles.TextLabel}> Do you use HDMI cables, ethernet cables, SD cards, or flash drives often. </Text>
        <Dropdown label=''
        value = {ques9[1].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => {this.question9function(value)}}
        data={ques9}
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
        <Text style ={styles.TextLabel}> Do you work offline a lot? </Text>
        <Dropdown label=''
        value = {ques10[1].value}
        ref = {this.smallRef}
        // value={this.state.text}
        onChangeText = {(value) => {this.question10function(value)}}
        data={ques10}
        containerStyle = {{backgroundColor: mainColors[Math.floor(Math.random() * 2)], borderRadius: 15, textColor: '#000000', borderBottomColor: 'transparent', minHeight: 60, minWidth: screenWidth * .9, paddingLeft: 10}}
        baseColor = '#000'
        dropdownOffset = {{top: 16}}
        pickerStyle = {{borderBottomColor: 'transparent'}}
        inputContainerStyle={{ borderBottomWidth: 0, minWidth: screenWidth * .8, maxWidth: screenWidth * .9 }}
        labelFontSize={0}
        itemTextStyle = {{ fontFamily: 'Montserrat-Medium'}}

        />
      </View>
      <View style = {{alignItems : 'center', marginTop : 20}}>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=> {this.setState({clickedin : true}); this.compute()}}>
            <Text style={{textAlign: 'center', fontFamily: "Montserrat-Medium"}}>
              See Results
            </Text>
          </TouchableOpacity>
      </View>
        <View style = {{height : 30}}>

        </View>
        <View>
          <Text style = {{fontFamily : 'Quicksand', fontSize : 16, color : 'white', paddingBottom : 15, paddingTop : 15, textAlign : 'center'}} onPress = {() => this._goToURL("https://collegeplus.us")}>
            College<Text style = {{color : 'tomato'}}>Plus™</Text>
          </Text>
        </View>
        </ScrollView>
      );
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

    setDatastore(device1, device2, device3){
      console.log("DATASTORE");
  
        if(this.state.isLoggedIn){
          device1 = device1.replace(new RegExp(' ', 'g'), '+');
          device2 = device2.replace(new RegExp(' ', 'g'), '+');
          device3 = device3.replace(new RegExp(' ', 'g'), '+');
          let url = "https://collegeplus.us/setData?username=" + this.state.username + "&password=" + this.state.password + "&colleges=&collegeweathers=&collegetemps=&collegecities=&collegestates=&collegelinks=&major1=&major2=&major3=&device1="+ device1 +"&device2="+ device2 +"&device3="+ device3 +"&gpa=&usersat=&useract=&gpa=&userCity=&userState=&apiKey=seunsSpecificKey21382947";
          if(this.state.password == "~"){
            url = "https://collegeplus.us/setData?username=" + this.state.username + "&password=" + this.state.password + "&colleges=&collegeweathers=&collegetemps=&collegecities=&collegestates=&collegelinks=&major1=&major2=&major3=&device1="+ device1 +"&device2="+ device2 +"&device3="+ device3 +"&gpa=&usersat=&useract=&gpa=&userCity=&userState=&apple=TRUE&apiKey=seunsSpecificKey21382947";
          }
          else{
            url = "https://collegeplus.us/setData?username=" + this.state.username + "&password=" + this.state.password + "&colleges=&collegeweathers=&collegetemps=&collegecities=&collegestates=&collegelinks=&major1=&major2=&major3=&device1="+ device1 +"&device2="+ device2 +"&device3="+ device3 +"&gpa=&usersat=&useract=&gpa=&userCity=&userState=&apple=FALSE&apiKey=seunsSpecificKey21382947";
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
        case "$2000+":
          this.setState({ques1 : "0"});
          break;
        case "$1500-$2000":
          this.setState({ques1 : "1"});
          break;
        case "$1000-$1500":
          this.setState({ques1 : "2"});
          break;
        case "$500-$1000":
          this.setState({ques1 : "3"});
          break;
        case "$250-$500":
          this.setState({ques1 : "4"});
          break;
        case "$0-$250":
          this.setState({ques1 : "5"});
          break;
        default:
          break;
      }
  }

  question2function(value){
    switch(value){
      case "Windows":
        this.setState({ques2 : "0"});
        break;
      case "Mac OS":
        this.setState({ques2 : "1"});
        break;
      case "Chrome OS":
        this.setState({ques2 : "2"});
        break;
      default:
        break;
    }
  }

  question3function(value){
    switch(value){
      case "Yes, it needs to look pretty":
        this.setState({ques3 : "0"});
        break;
      case "No, it doesn't matter":
        this.setState({ques3 : "1"});
        break;
      default:
        break;
    }
  }

  question4function(value){
    switch(value){
      case "Yes, I love a good keyboard":
        this.setState({ques4 : "0"});
        break;
      case "No, it doesn't matter":
        this.setState({ques4 : "1"});
        break;
      default:
        break;
    }
  }

  question5function(value){
    switch(value){
      case "Yes, of course":
        this.setState({ques5 : "0"});
        break;
      case "No, it doesn't matter":
        this.setState({ques5 : "1"});
        break;
      default:
        break;
    }
  }

  question6function(value){
    switch(value){
      case "Just browsing the web":
        this.setState({ques6 : "0"});
        break;
      case "Engineering stuff":
        this.setState({ques6 : "1"});
        break;
      case "Typing papers":
        this.setState({ques6 : "2"});
        break;
      case "Computer Science stuff":
        this.setState({ques6 : "3"});
        break;
      case "Datasets like Google Sheets and Excel":
        this.setState({ques6 : "4"});
        break;
      case "Heavy video editing":
        this.setState({ques6 : "5"});
        break;
      case "Just media Consumption":
        this.setState({ques6 : "6"});
        break;
      default:
        break;
    }
  }

  question7function(value){
    switch(value){
      case "Yes":
        this.setState({ques7 : "0"});
        break;
      case "No":
        this.setState({ques7 : "1"});
        break;
      default:
        break;
    }
  }

  question8function(value){
    switch(value){
      case "Super powerful":
        this.setState({ques8 : "0"});
        break;
      case "Decently powerful":
        this.setState({ques8 : "1"});
        break;
      case "Doesn't really matter":
        this.setState({ques8 : "2"});
        break;
      default:
        break;
    }
  }

  question9function(value){
    switch(value){
      case "Yes of course!":
        this.setState({ques9 : "0"});
        break;
      case "No not really":
        this.setState({ques9 : "1"});
        break;
      default:
        break;
    }
  }

  question10function(value){
    switch(value){
      case "Yes I do":
        this.setState({ques10 : "0"});
        break;
      case "No I don't":
        this.setState({ques10 : "1"});
        break;
      default:
        break;
    }
  }

    compute(){
      const { navigate } = this.props.navigation;

      if(this.state.ques1 =="0"){
        this.state.laptops.thinkpads.p1.i7.num=this.state.laptops.thinkpads.p1.i7.num+5;
        this.state.laptops.thinkpads.x1.i7.num=this.state.laptops.thinkpads.x1.i7.num+5;
        this.state.laptops.macbook.pro.i7.num=this.state.laptops.macbook.pro.i7.num+5;
      }
      if(this.state.ques1 =="1"){
        this.state.laptops.thinkpads.yoga.i7.num=this.state.laptops.thinkpads.yoga.i7.num+5;
        this.state.laptops.surface.pro.i7.num=this.state.laptops.surface.pro.i7.num+5;
        this.state.laptops.macbook.air.i5.num=this.state.laptops.macbook.air.i5.num+5;
      }
      if(this.state.ques1 =="2"){
        this.state.laptops.thinkpads.yoga.i7.num=this.state.laptops.thinkpads.yoga.i7.num+5;
        this.state.laptops.dell.xps.i7.num=this.state.laptops.thinkpads.p1.i7.num+5;
        this.state.laptops.hp.spectre.i7.num=this.state.laptops.hp.spectre.i7.num+5;
        this.state.laptops.dell.xps.i5.num=this.state.laptops.dell.xps.i5.num+5;
        this.state.laptops.pixel.pixelbook.i7.num=this.state.laptops.pixel.pixelbook.i7.num+5;
      }
      if(this.state.ques1 =="3"){
        this.state.laptops.hp.envy.i7.num=this.state.laptops.hp.envy.i7.num+5;
        this.state.laptops.pixel.pixelbook.i5.num=this.state.laptops.pixel.pixelbook.i5.num+5;
        this.state.laptops.acer.swift3.i7.num=this.state.laptops.acer.swift3.i7.num+5;
        this.state.laptops.surface.surfaces.i5.num=this.state.laptops.surface.surfaces.i5.num+5;
      }
      if(this.state.ques1 =="4"){
        this.state.laptops.acer.swift3.i7.num=this.state.laptops.acer.swift3.i7.num+5;
      }
      if(this.state.ques1 =="5"){
        this.state.laptops.acer.swift1.celeron.num=this.state.laptops.acer.swift1.celeron.num+5;
        this.state.laptops.chromebook.samsung.celeron.num=this.state.laptops.chromebook.samsung.celeron.num+5;
        this.state.laptops.chromebook.dell.celeron.num=this.state.laptops.chromebook.dell.celeron.num+5;
      }
      /////////////////
      if(this.state.ques2 =="0"){
        this.state.laptops.thinkpads.p1.i7.num = this.state.laptops.thinkpads.p1.i7.num+3;
        this.state.laptops.thinkpads.x1.i7.num = this.state.laptops.thinkpads.x1.i7.num+3;
        this.state.laptops.thinkpads.yoga.i7.num =  this.state.laptops.thinkpads.yoga.i7.num+3;
        this.state.laptops.surface.surfaces.i5.num = this.state.laptops.surface.surfaces.i5.num+3;
        this.state.laptops.surface.pro.i7.num = this.state.laptops.surface.pro.i7.num+3;
          this.state.laptops.surface.book.i7.num = this.state.laptops.surface.book.i7.num+3;
          this.state.laptops.dell.xps.i7.num = this.state.laptops.dell.xps.i7.num+3;
          this.state.laptops.dell.xps.i5.num = this.state.laptops.dell.xps.i5.num+3;
            this.state.laptops.hp.spectre.i7.num = this.state.laptops.hp.spectre.i7.num+3;
            this.state.laptops.hp.envy.i7.num = this.state.laptops.hp.envy.i7.num+3;
            this.state.laptops.acer.swift1.celeron.num = this.state.laptops.acer.swift1.celeron.num+3;
              this.state.laptops.acer.swift3.i7.num = this.state.laptops.acer.swift3.i7.num+3;
      }
      if(this.state.ques2 =="1"){
        this.state.laptops.macbook.air.i5.num= this.state.laptops.macbook.air.i5.num+3;
        this.state.laptops.macbook.pro.i7.num = this.state.laptops.macbook.pro.i7.num+3;
      }
      if(this.state.ques2 =="2"){
        this.state.laptops.pixel.pixelbook.i5.num = this.state.laptops.pixel.pixelbook.i5.num+3;
        this.state.laptops.chromebook.samsung.celeron.num = this.state.laptops.chromebook.samsung.celeron.num+3;
        this.state.laptops.chromebook.dell.celeron.num = this.state.laptops.chromebook.dell.celeron.num+3;
        this.state.laptops.pixel.pixelbook.i7.num = this.state.laptops.pixel.pixelbook.i7.num+3;

      }
      ///////////////////
      if(this.state.ques3 =="0"){
        this.state.laptops.surface.surfaces.i5.num++;
        this.state.laptops.surface.pro.i7.num++;
          this.state.laptops.surface.book.i7.num++;
          this.state.laptops.macbook.air.i5.num++;
            this.state.laptops.macbook.pro.i7.num++;
            this.state.laptops.pixel.pixelbook.i5.num++;
            this.state.laptops.dell.xps.i7.num++;
              this.state.laptops.dell.xps.i5.num++;
              this.state.laptops.hp.spectre.i7.num++;

      }
      if(this.state.ques3 =="1"){
        this.state.laptops.acer.swift1.celeron.num++;
        this.state.laptops.acer.swift3.i7.num++;
        this.state.laptops.chromebook.dell.celeron.num++;
        this.state.laptops.chromebook.samsung.celeron.num++;
        this.state.laptops.hp.envy.i7.num++;

      }
      ////////////////////////
      if(this.state.ques4 =="0"){
        this.state.laptops.pixel.pixelbook.i5.num++;
        this.state.laptops.pixel.pixelbook.i7.num++;
        this.state.laptops.thinkpads.p1.i7.num++;
          this.state.laptops.thinkpads.x1.i7.num++;
          this.state.laptops.thinkpads.yoga.i7.num++;

      }
      if(this.state.ques4 =="1"){
        this.state.laptops.surface.surfaces.i5.num++;
        this.state.laptops.surface.pro.i7.num++;
          this.state.laptops.surface.book.i7.num++;
          this.state.laptops.macbook.air.i5.num++; 
            this.state.laptops.macbook.pro.i7.num++;
            this.state.laptops.dell.xps.i7.num++;
              this.state.laptops.dell.xps.i5.num++;
              this.state.laptops.hp.spectre.i7.num++;
              this.state.laptops.acer.swift1.celeron.num++;
          this.state.laptops.acer.swift3.i7.num++;
          this.state.laptops.chromebook.dell.celeron.num++;
          this.state.laptops.chromebook.samsung.celeron.num++;
      }

      if(this.state.ques5 =="0"){
        this.state.laptops.surface.surfaces.i5.num++;
        this.state.laptops.surface.pro.i7.num++;
          this.state.laptops.surface.book.i7.num++;
          this.state.laptops.macbook.air.i5.num++;
            this.state.laptops.macbook.pro.i7.num++;
            this.state.laptops.dell.xps.i7.num++;
              this.state.laptops.dell.xps.i5.num++;
              this.state.laptops.hp.spectre.i7.num++;
              this.state.laptops.pixel.pixelbook.i5.num++;
                this.state.laptops.pixel.pixelbook.i7.num++;
        this.state.laptops.thinkpads.p1.i7.num++;
          this.state.laptops.thinkpads.x1.i7.num++;
          this.state.laptops.thinkpads.yoga.i7.num++;

      }
      if(this.state.ques5 =="1"){
              this.state.laptops.acer.swift1.celeron.num++;
          this.state.laptops.acer.swift3.i7.num++;
          this.state.laptops.chromebook.dell.celeron.num++;
          this.state.laptops.chromebook.samsung.celeron.num++;
      }

      if(this.state.ques6 =="0"){
          this.state.laptops.acer.swift1.celeron.num++;
          this.state.laptops.acer.swift3.i7.num++;
          this.state.laptops.chromebook.dell.celeron.num++;
          this.state.laptops.chromebook.samsung.celeron.num++;

      }
      if(this.state.ques6 =="1"){
        this.state.laptops.surface.surfaces.i5.num++;
        this.state.laptops.surface.pro.i7.num++;
          this.state.laptops.surface.book.i7.num++;
          this.state.laptops.macbook.air.i5.num++;
            this.state.laptops.macbook.pro.i7.num++;
            this.state.laptops.dell.xps.i7.num++;
              this.state.laptops.dell.xps.i5.num++;
              this.state.laptops.hp.spectre.i7.num++;
        this.state.laptops.thinkpads.p1.i7.num++;
          this.state.laptops.thinkpads.x1.i7.num++;
          this.state.laptops.thinkpads.yoga.i7.num++;


      }
      if(this.state.ques6 =="2"){
          this.state.laptops.acer.swift1.celeron.num++;
          this.state.laptops.acer.swift3.i7.num++;
          this.state.laptops.chromebook.dell.celeron.num++;
          this.state.laptops.chromebook.samsung.celeron.num++;
      }

      if(this.state.ques6 =="3"){
        this.state.laptops.surface.surfaces.i5.num++;
        this.state.laptops.surface.pro.i7.num++;
          this.state.laptops.surface.book.i7.num++;
          this.state.laptops.macbook.air.i5.num++;
            this.state.laptops.macbook.pro.i7.num++;
            this.state.laptops.dell.xps.i7.num++;
              this.state.laptops.dell.xps.i5.num++;
              this.state.laptops.hp.spectre.i7.num++;
        this.state.laptops.thinkpads.p1.i7.num++;
          this.state.laptops.thinkpads.x1.i7.num++;
          this.state.laptops.thinkpads.yoga.i7.num++;
      }
      if(this.state.ques6 =="4"){
        this.state.laptops.surface.surfaces.i5.num++;
        this.state.laptops.surface.pro.i7.num++;
          this.state.laptops.surface.book.i7.num++;
          this.state.laptops.macbook.air.i5.num++;
            this.state.laptops.macbook.pro.i7.num++;
            this.state.laptops.dell.xps.i7.num++;
              this.state.laptops.dell.xps.i5.num++;
              this.state.laptops.hp.spectre.i7.num++;
        this.state.laptops.thinkpads.p1.i7.num++;
          this.state.laptops.thinkpads.x1.i7.num++;
          this.state.laptops.thinkpads.yoga.i7.num++;
          this.state.laptops.pixel.pixelbook.i5.num++;
          this.state.laptops.pixel.pixelbook.i7.num++;
      }
      if(this.state.ques6 =="5"){
            this.state.laptops.macbook.pro.i7.num++;
            this.state.laptops.dell.xps.i7.num++;
              this.state.laptops.hp.spectre.i7.num++;
        this.state.laptops.thinkpads.p1.i7.num++;
          this.state.laptops.thinkpads.x1.i7.num++;
          this.state.laptops.thinkpads.yoga.i7.num++;
      }
      if(this.state.ques6 =="6"){
        this.state.laptops.surface.surfaces.i5.num++;
          this.state.laptops.macbook.air.i5.num++;
              this.state.laptops.dell.xps.i5.num++;
          this.state.laptops.pixel.pixelbook.i5.num++;
          this.state.laptops.acer.swift1.celeron.num++;
            this.state.laptops.acer.swift3.i7.num++;
            this.state.laptops.chromebook.dell.celeron.num++;
            this.state.laptops.chromebook.samsung.celeron.num++;
      }
      if(this.state.ques7 =="0"){
        this.state.laptops.pixel.pixelbook.i5.num++;
        this.state.laptops.pixel.pixelbook.i7.num++;
        this.state.laptops.thinkpads.yoga.i7.num++;
        this.state.laptops.hp.spectre.i7.num++;
        this.state.laptops.surface.surfaces.i5.num++;
          this.state.laptops.surface.pro.i7.num++;
          this.state.laptops.surface.book.i7.num++;
      }
      // if(this.state.ques7 =="1"){
      //   this.state.laptops.pixel.pixelbook.i5.num++;
      //   this.state.laptops.pixel.pixelbook.i7.num++;
      //   this.state.laptops.thinkpads.yoga.i7.num++;
      //   this.state.laptops.hp.spectre.i7.num++;
      //   this.state.laptops.surface.surfaces.i5.num++;
      //     this.state.laptops.surface.pro.i7.num++;
      //     this.state.laptops.surface.book.i7.num++;
      // }
      if(this.state.ques8=="0"){
        this.state.laptops.surface.pro.i7.num++;
        this.state.laptops.surface.book.i7.num++;
        this.state.laptops.macbook.pro.i7.num++;
        this.state.laptops.dell.xps.i7.num++;
        this.state.laptops.hp.spectre.i7.num++;
        this.state.laptops.pixel.pixelbook.i7.num++;
        this.state.laptops.thinkpads.p1.i7.num++;
        this.state.laptops.thinkpads.x1.i7.num++;
        this.state.laptops.thinkpads.yoga.i7.num++;
        this.state.laptops.acer.swift3.i7.num++;
      }
      if(this.state.ques8 =="1"){
        this.state.laptops.surface.surfaces.i5.num++;
        this.state.laptops.macbook.air.i5.num++;
        this.state.laptops.dell.xps.i5.num++;
        this.state.laptops.pixel.pixelbook.i5.num++;
      }
      if(this.state.ques8 =="2"){
        this.state.laptops.acer.swift1.celeron.num++;
        this.state.laptops.chromebook.dell.celeron.num++;
        this.state.laptops.chromebook.samsung.celeron.num++;
      }
      if(this.state.ques9 =="0"){
        this.state.laptops.thinkpads.p1.i7.num++;
        this.state.laptops.thinkpads.x1.i7.num++;
        this.state.laptops.thinkpads.yoga.i7.num++;
        this.state.laptops.acer.swift1.celeron.num++;
          this.state.laptops.acer.swift3.i7.num++;
          this.state.laptops.chromebook.dell.celeron.num++;
          this.state.laptops.chromebook.samsung.celeron.num++;
      }
      if(this.state.ques9=="1"){
        this.state.laptops.surface.surfaces.i5.num++;
        this.state.laptops.surface.pro.i7.num++;
          this.state.laptops.surface.book.i7.num++;
          this.state.laptops.macbook.air.i5.num++;
            this.state.laptops.macbook.pro.i7.num++;
            this.state.laptops.dell.xps.i7.num++;
              this.state.laptops.dell.xps.i5.num++;
              this.state.laptops.hp.spectre.i7.num++;
      }
      
      if(this.state.ques10 =="0"){
        this.state.laptops.surface.surfaces.i5.num++;
        this.state.laptops.surface.pro.i7.num++;
          this.state.laptops.surface.book.i7.num++;
          this.state.laptops.macbook.air.i5.num++;
            this.state.laptops.macbook.pro.i7.num++;
            this.state.laptops.dell.xps.i7.num++;
              this.state.laptops.dell.xps.i5.num++;
              this.state.laptops.hp.spectre.i7.num++;
              this.state.laptops.thinkpads.p1.i7.num++;
          this.state.laptops.thinkpads.x1.i7.num++;
          this.state.laptops.thinkpads.yoga.i7.num++;
          this.state.laptops.acer.swift1.celeron.num++;
          this.state.laptops.acer.swift3.i7.num++;
      }
      if(this.state.ques10 =="1"){
        this.state.laptops.chromebook.dell.celeron.num++;
        this.state.laptops.chromebook.samsung.celeron.num++;
      }
      var mainList = [this.state.laptops.thinkpads.p1.i7, this.state.laptops.thinkpads.x1.i7, this.state.laptops.thinkpads.yoga.i7, this.state.laptops.surface.surfaces.i5, this.state.laptops.surface.pro.i7, this.state.laptops.surface.book.i7, this.state.laptops.macbook.air.i5, this.state.laptops.macbook.pro.i7, this.state.laptops.pixel.pixelbook.i5, this.state.laptops.pixel.pixelbook.i7, this.state.laptops.chromebook.dell.celeron, this.state.laptops.chromebook.samsung.celeron, this.state.laptops.dell.xps.i7, this.state.laptops.dell.xps.i5, this.state.laptops.hp.spectre.i7, this.state.laptops.hp.envy.i7, this.state.laptops.acer.swift1.celeron, this.state.laptops.acer.swift3.i7];
      var comparisonList  = [this.state.laptops.thinkpads.p1.i7, this.state.laptops.thinkpads.x1.i7, this.state.laptops.thinkpads.yoga.i7, this.state.laptops.surface.surfaces.i5, this.state.laptops.surface.pro.i7, this.state.laptops.surface.book.i7, this.state.laptops.macbook.air.i5, this.state.laptops.macbook.pro.i7, this.state.laptops.pixel.pixelbook.i5, this.state.laptops.pixel.pixelbook.i7, this.state.laptops.chromebook.dell.celeron, this.state.laptops.chromebook.samsung.celeron, this.state.laptops.dell.xps.i7, this.state.laptops.dell.xps.i5, this.state.laptops.hp.spectre.i7, this.state.laptops.hp.envy.i7, this.state.laptops.acer.swift1.celeron, this.state.laptops.acer.swift3.i7];
      var realTop3 = [];
      while(realTop3.length < 3){
        var tempMax =  0;
        for(var i = 0; i < comparisonList.length; i++){
          if(comparisonList[i].num > comparisonList[tempMax].num){
            tempMax = i;
          }
          if(i == (comparisonList.length - 1)){
            realTop3.push(comparisonList[tempMax]);
            comparisonList.splice(tempMax, 1);
          }
        }
      }
      this.setDatastore(realTop3[0].value, realTop3[1].value, realTop3[2].value);
      console.log(realTop3[2]);
      if(realTop3.length>2){
        navigate("DeviceRecommendations", {firstPickname : realTop3[0].value, firstPickurl : realTop3[0].url, firstPickImage : realTop3[0].img, secondPickname : realTop3[1].value, secondPickurl : realTop3[1].url, secondPickImage : realTop3[1].img, thirdPickname : realTop3[2].value, thirdPickurl : realTop3[2].url, thirdPickImage : realTop3[2].img});
      }
      else if(realTop3.length>1){
        navigate("DeviceRecommendations", {firstPickname : realTop3[0], firstPickurl : realTop3[0].url, firstPickImage : realTop3[0].img, secondPickname : realTop3[1].value, secondPickurl : realTop3[1].url, secondPickImage : realTop3[1].img});
      }
      else if(realTop3.length>0){
        navigate("DeviceRecommendations", {firstPickname : realTop3[0], firstPickurl : realTop3[0].url, firstPickImage : realTop3[0].img});
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
    fontFamily : "Montserrat-Medium"
  },
   buttonStyle : {
     maxWidth: screenWidth * .4, 
     backgroundColor: '#0099cc', 
     borderRadius: 8, 
     padding: 16, 
     marginTop: 20
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
export default DevicePickerScreen;
