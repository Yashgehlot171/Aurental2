import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,Modal,StatusBar
} from 'react-native';
import Colors from '../../../constant/Color';
import { Header, Icon, Avatar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../../Loader/index';
import { SafeAreaView } from 'react-native';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showpassword: true,
            user_data:[],isLoading: false
        }
    }

    render() {
        return (
   <View style={{flex:1,backgroundColor:'#fff'  }}>
  <SafeAreaView/>
  <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
  <Header

statusBarProps={{ barStyle: 'dark-content' }}
height={85}
containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
backgroundColor={Colors.text_white}
placement={"left"}
leftComponent={
    <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', height: 25 }} onPress={() => this.props.navigation.goBack()}>
        <Image style={{ width: 25, height: 25, tintColor: '#000', marginLeft: 10, marginTop: 5, resizeMode: 'contain' }} source={require('../../../../assets/icon/left.png')} />

    </TouchableOpacity>
}
centerComponent={
    <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Settings</Text>

}

/>
<View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:10}}/>

<View style={{alignItems:'center',justifyContent:'center',flex:1}}> 
{/* <Text style={{textAlign:"center", marginTop:14,marginBottom:25,fontSize:22,fontWeight:'bold'}}>Settings</Text> */}
<TouchableOpacity 
      onPress={()=>{this.props.navigation.navigate('AboutUs')}}
      style={{height:45, width:"75%", borderColor:"gray", borderWidth:1, borderRadius:5,backgroundColor:Colors.introButton }}>
        <Text style={{textAlign:"center", marginTop:14,color:'#fff',fontWeight:'bold'}}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>{this.props.navigation.navigate('PrivacyPolicy')}}
      style={{height:45, width:"75%", borderColor:"gray", borderWidth:1, borderRadius:5,marginTop:20,backgroundColor:Colors.introButton }}>
        <Text style={{textAlign:"center", marginTop:14,color:'#fff',fontWeight:'bold'}}>Privacy Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>{this.props.navigation.navigate('TermsConditions')}}
      style={{height:45, width:"75%", borderColor:"gray", borderWidth:1, borderRadius:5,marginTop:20 ,backgroundColor:Colors.introButton}}>
        <Text style={{textAlign:"center", marginTop:14,color:'#fff',fontWeight:'bold'}}>Terms & Conditions</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>{this.props.navigation.navigate('ContactUs')}}
      style={{height:45, width:"75%", borderColor:"gray", borderWidth:1, borderRadius:5,marginTop:20,backgroundColor:Colors.introButton }}>
        <Text style={{textAlign:"center", marginTop:14,color:'#fff',fontWeight:'bold'}}>Contact Us</Text>
      </TouchableOpacity>
      </View>
{this.state.isLoading ? <Modal transparent={true}><Loader /></Modal> : null}
   </View>
  );
};

}