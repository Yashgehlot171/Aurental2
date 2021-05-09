
import React, { Component } from 'react'
import { TouchableOpacity, TextInput, ScrollViewBase } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ImageBackground, Image, FlatList } from 'react-native';
import Colors from '../../../constant/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header, Icon, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { ButtonGroup } from 'react-native-elements';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showpassword: true,
            selectedIndex: 0,
            DayselectedIndex: 0,
            JobType: '',
            selectedStartDate: null,
            order_history: [],
            status: '',
            Data: [
                {
                    headingText: 'Rent Commercial Vans & Lorries with Vibrance',
                    titleText: 'Short Term Leases Available, Daily, Weekly, or Monthly',
                    image: require('../../../../assets/car1.png')
                },
                {
                    headingText: 'Rent Commercial Vans & Lorries with Vibrance',
                    image: require('../../../../assets/car2.png'),
                    titleText: 'Short Term Leases Available, Daily, Weekly, or Monthly',
                },
                {
                    headingText: 'Rent Commercial Vans & Lorries with Vibrance',

                    titleText: 'Short Term Leases Available, Daily, Weekly, or Monthly',
                    image: require('../../../../assets/car1.png')
                },
                {
                    headingText: 'Rent Commercial Vans & Lorries with Vibrance',

                    titleText: 'Short Term Leases Available, Daily, Weekly, or Monthly',
                    image: require('../../../../assets/car2.png')
                },
                {
                    headingText: 'Rent Commercial Vans & Lorries with Vibrance',

                    titleText: 'Short Term Leases Available, Daily, Weekly, or Monthly',
                    image: require('../../../../assets/car2.png')
                },

            ],

        }


    }




    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>


                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <Header

                    statusBarProps={{ barStyle: 'dark-content' }}
                    height={80}
                    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
                    backgroundColor={Colors.text_white}
                    placement={"left"}
                    leftComponent={
                        <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', height: 25 }} onPress={() => this.props.navigation.goBack()}>
                            <Image style={{ width: 25, height: 25, tintColor: Colors.dark_gry, marginLeft: 10, marginTop: 5, resizeMode: 'contain' }} source={require('../../../../assets/icon/left.png')} />

                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={{ width: '100%', color: Colors.dark_gry, fontSize: 20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Completed</Text>

                    }

                />
                <View style={{ backgroundColor: '#000', width: '100%', height: 0.3, marginVertical: 3 }} />
                <View style={{backgroundColor:'#000',width:'100%',height:120,padding:15}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',}}>
<Text style={{color:'#fff'}}>Start time 00:00</Text>
<Text style={{color:'#fff'}}>End time 00:00</Text>
                  </View>
                  <View style={{width:'100%',height:55,borderColor:'#fff',borderRadius:5,borderWidth:0.5,marginVertical:8}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{backgroundColor:'#fff',height:55,width:95,borderRadius:5,alignItems:'center',justifyContent:'center'}}>
                      <Text style={{color:'#000',fontWeight:'bold'}}>12 Items</Text>
                    </View>
<Text style={{color:'#fff',marginVertical:17}}>Start time 00:00</Text>
<Text style={{color:'#fff',marginVertical:17,marginRight:10}}>End time 00:00</Text>
                  </View>
                 
                  </View>
                  
                </View>
                <View style={{flex:1,padding:21}}> 
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}> 
                    <Text>Item 1</Text>
                    <Text>09:00 AM</Text>
                </View>
                <View style={{ backgroundColor: Colors.gry_color, width: '100%', alignSelf: 'center', height: 50, flexDirection: 'row', justifyContent: 'space-between', padding: 5, borderRadius: 5, marginTop: 5 }}>
                    <Image style={{ width: 20, height: 20, tintColor: '#000', marginTop: 11, resizeMode: 'contain', marginLeft: 5 }} source={require('../../../../assets/icon/check.png')} />

                   
                    <Text style={{ marginTop: 12, color: '#000', fontSize: 15 ,fontWeight:'bold' }}>Name , Address</Text>
                    <Text style={{ color: '#000', fontSize: 12 }}></Text>

                    <Image style={{ width: 20, height: 20, tintColor: '#000', marginTop: 11, resizeMode: 'contain' }} source={require('../../../../assets/icon/right-arrow.png')} />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}> 
                    <Text>Item 2</Text>
                    <Text>09:00 AM</Text>
                </View>
                <View style={{ backgroundColor: Colors.gry_color, width: '100%', alignSelf: 'center', height: 50, flexDirection: 'row', justifyContent: 'space-between', padding: 5, borderRadius: 5, marginTop: 5 }}>
                    <Image style={{ width: 20, height: 20, tintColor: '#000', marginTop: 11, resizeMode: 'contain', marginLeft: 5 }} source={require('../../../../assets/icon/check.png')} />

                   
                    <Text style={{ marginTop: 12, color: '#000', fontSize: 15 ,fontWeight:'bold' }}>Name , Address</Text>

                    <Text style={{ color: '#000', fontSize: 12 }}></Text>

                    <Image style={{ width: 20, height: 20, tintColor: '#000', marginTop: 11, resizeMode: 'contain' }} source={require('../../../../assets/icon/right-arrow.png')} />

                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}> 
                    <Text>Item 3</Text>
                    <Text>09:00 AM</Text>
                </View>
                <View style={{ backgroundColor: Colors.gry_color, width: '100%', alignSelf: 'center', height: 50, flexDirection: 'row', justifyContent: 'space-between', padding: 5, borderRadius: 5, marginTop: 5 }}>
                    <Image style={{ width: 20, height: 20, tintColor: '#000', marginTop: 11, resizeMode: 'contain', marginLeft: 5 }} source={require('../../../../assets/icon/check.png')} />

                   
                    <Text style={{ marginTop: 12, color: '#000', fontSize: 15 ,fontWeight:'bold' }}>Name , Address</Text>

                    <Text style={{ color: '#000', fontSize: 12 }}></Text>

                    <Image style={{ width: 20, height: 20, tintColor: '#000', marginTop: 11, resizeMode: 'contain' }} source={require('../../../../assets/icon/right-arrow.png')} />

                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}> 
                    <Text>Item 4</Text>
                    <Text>09:00 AM</Text>
                </View>
                <View style={{ backgroundColor: Colors.gry_color, width: '100%', alignSelf: 'center', height: 50, flexDirection: 'row', justifyContent: 'space-between', padding: 5, borderRadius: 5, marginTop: 5 }}>
                    <Image style={{ width: 20, height: 20, tintColor: '#000', marginTop: 11, resizeMode: 'contain', marginLeft: 5 }} source={require('../../../../assets/icon/check.png')} />

                   
                    <Text style={{ marginTop: 12, color: '#000', fontSize: 15 ,fontWeight:'bold' }}>Name , Address</Text>

                    <Text style={{ color: '#000', fontSize: 12 }}></Text>

                    <Image style={{ width: 20, height: 20, tintColor: '#000', marginTop: 11, resizeMode: 'contain' }} source={require('../../../../assets/icon/right-arrow.png')} />

                </View>
            </View>
            </View>
        )
    }
}