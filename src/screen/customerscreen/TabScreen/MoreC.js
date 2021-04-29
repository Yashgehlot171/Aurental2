import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,Modal,StatusBar,
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
    componentWillMount = async () => {
      var value = await AsyncStorage.getItem('user_token');
      // const data = await this.performTimeConsumingTask();
      // if (data !== null) {
        console.log('token',value)
        this.getDataUsingPost(value);
      // }
    }


 getDataUsingPost = (value) => {
  //POST json
  // let _data = { device_id: 'dwscngkdddnn44ffff', device_name:brand ,app_type: 2 ,push_token:'sjdsfbkkasbdbd' }
  this.setState({ isLoading: true })
  fetch('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:6060/api/v1/aurental/get_user_profile', {
    method: "POST",
    // body: JSON.stringify(_data),
    // 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl9pZCI6OSwidHlwZSI6ImRldmljZSIsImlhdCI6MTYxODk3NzM0M30.FZB3CfNkAR4CYOUD6H54Ml0DvAAUGTKq7R_8fLUbdOM',
    headers: {"Content-type": "application/json; charset=UTF-8",
    Authorization:value
  }
    // headers: {
    //   'Authorization': 'Bearer ' + user_token,
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json'
    // },
  })
  .then((response) => response.json())
  .then((responseJson) => {
      console.log("jso22222222222YASH",responseJson );
      this.setState({ isLoading: false })
      if(responseJson.status===1){
          let user_info = responseJson.data
          // let user_token = responseJson.token
          // AsyncStorage.setItem('user_token', user_info)
          console.log('dfd',user_info)
          this.setState({user_data:user_info})
          // this.props.navigation.navigate('CustomerLogin')
          console.log('data111',this.state.user_data)
      }
  })
  .catch((error) => {
    
    this.setState({ isLoading: false })
    console.error(error);
  });
};
    render() {
        return (
   <View style={{flex:1,backgroundColor:'#fff'  }}>
     <SafeAreaView/>
     <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
         {/* <Header

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
    <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Booking</Text>

}

/>
<View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:10}}/> */}
{ this.state.user_data.map((item, key) => (
        <View style={{flex:1, alignItems:"center", justifyContent:'center' }}>
     
     <Image
        style={{height:70, width:70, alignSelf:"center", marginTop:45, marginBottom:15,borderRadius:35,backgroundColor:'#eee'}}
        // source={require('../../../../assets/car1.png')}
      />
      <Text numberOfLines={2} style={{textAlign:"center", fontSize:17, color:"gray", marginBottom:25}}>Customer Name: {item.user_name}</Text>
      <View style={{backgroundColor:"#f0eded", height:"33%", width:"75%", marginTop:5, alignItems:"center", marginBottom:10}}>
        <View style={{flexDirection:"row", marginTop:25}}>
          <Text style={{width:100}}>E-mail Address</Text>
          <Text numberOfLines={2} style={{marginLeft:35, color:"gray",width:100,fontSize:14}}>{item.email}</Text>
        </View>

        <View style={{flexDirection:"row", padding:5}}>
          <Text style={{width:100}}>Phone Number</Text>
          <Text style={{marginLeft:35, color:"gray",width:100}}>{item.mobile_no}</Text>
        </View>

        <View style={{flexDirection:"row", }}>
          <Text style={{width:100}}>Address</Text>
          <Text numberOfLines={1} style={{marginLeft:35, color:"gray",width:100}}>{item.address}</Text>
        </View>

        <View style={{flexDirection:"row",  padding:5,paddingBottom:10}}>
          <Text style={{alignSelf:"flex-start",width:100}}>Company</Text>
          <Text style={{marginLeft:35, color:"gray",width:100}}>null</Text>
        </View>
      
      
      </View>
      
   </View> 
))
}
<View style={{alignItems:'center'}}> 
<TouchableOpacity style={{height:40}}
          onPress={()=>{this.props.navigation.navigate('EditProfileDetails')}}
        >
        <Text style={{marginTop:20}}>Edit Profile</Text>
        <View style={{height:1, backgroundColor:"gray", width:70}}></View>
      </TouchableOpacity>
<TouchableOpacity 
      onPress={()=>{this.props.navigation.navigate('ChangePassword')}}
      style={{height:45, width:"75%", borderColor:"gray", borderWidth:1, borderRadius:5,marginTop:5,backgroundColor:Colors.introButton }}>
        <Text style={{textAlign:"center", marginTop:14,fontWeight:'bold',color:'#fff'}}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=>{this.props.navigation.navigate('Setting')}}
      style={{height:45, width:"75%", borderColor:"gray", borderWidth:1, borderRadius:5,marginTop:10,backgroundColor:Colors.introButton }}>
        <Text style={{textAlign:"center", marginTop:14,fontWeight:'bold',color:'#fff'}}>Settings</Text>
      </TouchableOpacity>

<TouchableOpacity 
      onPress={()=>{this.props.navigation.navigate('ChooseRole')}}
      style={{height:45, width:"75%", borderColor:"gray", borderWidth:1, borderRadius:5,marginTop:10,marginBottom:5 }}>
        <Text style={{textAlign:"center", marginTop:14,fontWeight:'bold'}}>Log Out</Text>
      </TouchableOpacity>


      </View>
{this.state.isLoading ? <Modal transparent={true}><Loader /></Modal> : null}
   </View>
  );
};

}