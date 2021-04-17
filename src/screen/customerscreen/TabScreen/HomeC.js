
import React, { Component } from 'react'
import { TouchableOpacity, TextInput, ScrollViewBase } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ImageBackground, Image, AsyncStorage, ActivityIndicator } from 'react-native';
import Colors from '../../../constant/Color';

import { Header, Icon, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showpassword: true
        }
    }

    render() {
        return (
            <View style={styles.container}>


                 
                        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                        <Header

                    statusBarProps={{ barStyle: 'dark-content' }}
                    height={80}
                    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
                    backgroundColor={Colors.text_white}
                    placement={"left"}
                    leftComponent={
                        <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', height: 25 }} onPress={() => this.props.navigation.navigate('CourierCalculator')}>
                            <Image style={{ width: 30, height: 30, tintColor: '#000', marginLeft: 10, marginTop: 5, resizeMode: 'contain' }} source={require('../../../../assets/icon/calculator.png')} />

                        </TouchableOpacity>
                    }
                    centerComponent={

                        <Image style={{ width:'100%', height: 30, resizeMode:'contain', }} source={require('../../../../assets/logo.jpg')} />
                    }
                    rightComponent={
                        <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', height: 25 }} onPress={() => this.props.navigation.navigate('')}>
                            <Image style={{ width: 30, height: 30, tintColor: '#000', marginRight: 10, marginTop: 5, resizeMode: 'contain' }} source={require('../../../../assets/icon/notification.png')} />

                        </TouchableOpacity>
                    }
                />
                <View style={{backgroundColor:'#000',width:'100%',height:1,marginVertical:10}}/>
                <ScrollView>
                     <View style={{flex:1,padding:14,alignItems:'center',}}>

                     <Text style={{fontSize:20,fontWeight:'bold'}}>Welcome!</Text>
                     <Text style={{fontSize:16,color:Colors.dark_gry,marginVertical:10,marginBottom:5}}>Got any package to deliver?</Text>
                        
                       
                <View style={{height:120}}>

                </View>
             <TouchableOpacity 
             onPress={()=>{this.props.navigation.navigate('ScheduleDelivery')}}
             style={styles.button_Style}>
                 <Text style={{color:Colors.text_white,fontWeight:'bold',fontSize:16}}>Schedule a courier pickup</Text>
             </TouchableOpacity>
             </View>
             <View style={{flex:1,padding:18}}>
<View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
    <Text style={{color:Colors.dark_gry}}>Special Deals</Text>
   <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SpecialDeal')}}>
    <Text style={{color:Colors.introButton}}>View All</Text>
    </TouchableOpacity>
</View>
<Image style={{ width:'100%', height: 120, marginVertical:10 }} source={require('../../../../assets/car1.png')} />
<Text style={{fontWeight:'bold',fontSize:16,color:Colors.dark_gry}}>Rent Commercial Vans & Lorries with Vibrance</Text>
<Text style={{color:Colors.dark_gry}}>Short Term Leases Available, Daily, Weekly, or Monthly</Text>
<Image style={{ width:'100%', height: 120, marginVertical:10 }} source={require('../../../../assets/car2.png')} />

</View> 
</ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor:'#fff',
      

    },
    auth_textInput: {

        alignSelf: 'center',
        width: '95%',
        // borderWidth: 1,
        backgroundColor:Colors.gry_color,
  
        borderBottomWidth: 0,
        height: 45,
        color: Colors.dark_gry,
        marginTop: 10,paddingLeft:10

    },
    button_Style: {
        width: 280, height: 50, backgroundColor: Colors.introButton,
        borderRadius: 5, marginVertical: 25, alignItems: 'center',
        justifyContent: 'center'
    },
    white_button_Style: {
        width: 280, height: 50, backgroundColor: Colors.white_Button,
        borderRadius: 25, marginVertical: 15, alignItems: 'center',
        justifyContent: 'center'
    }
});