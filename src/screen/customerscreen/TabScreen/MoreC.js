import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../../constant/Color';
import { Header, Icon, Avatar } from 'react-native-elements';
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
   <View style={{flex:1,backgroundColor:'#fff'  }}>
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

        <View style={{flex:1, alignItems:"center", justifyContent:'center' }}>
     
     <Image
        style={{height:70, width:70, alignSelf:"center", marginTop:45, marginBottom:15,borderRadius:35}}
        source={require('../../../../assets/car1.png')}
      />
      <Text style={{textAlign:"center", fontSize:17, color:"gray", marginBottom:25}}>Coustomer Name</Text>
      <View style={{backgroundColor:"#f0eded", height:"30%", width:"75%", marginTop:5, alignItems:"center", marginBottom:60}}>
        <View style={{flexDirection:"row", marginTop:25}}>
          <Text style={{}}>E-mail Address</Text>
          <Text style={{marginLeft:35, color:"gray"}}>E-mail Address</Text>
        </View>

        <View style={{flexDirection:"row", padding:5}}>
          <Text style={{}}>Phone Number</Text>
          <Text style={{marginLeft:35, color:"gray"}}>Phone Number</Text>
        </View>

        <View style={{flexDirection:"row", }}>
          <Text style={{}}>Address</Text>
          <Text style={{marginLeft:35, color:"gray"}}>Address</Text>
        </View>

        <View style={{flexDirection:"row",  padding:5}}>
          <Text style={{alignSelf:"flex-start"}}>Company</Text>
          <Text style={{marginLeft:35, color:"gray"}}>Company</Text>
        </View>
        <TouchableOpacity>
        <Text style={{marginTop:20}}>Edit Profile</Text>
      </TouchableOpacity>
      <View style={{height:1, backgroundColor:"gray", width:70}}></View>
      </View>
      <TouchableOpacity 
      onPress={()=>{this.props.navigation.navigate('ChooseRole')}}
      style={{height:45, width:"75%", borderColor:"gray", borderWidth:1, borderRadius:5 }}>
        <Text style={{textAlign:"center", marginTop:14}}>Log Out</Text>
      </TouchableOpacity>
   </View> 
   </View>
  );
};

}