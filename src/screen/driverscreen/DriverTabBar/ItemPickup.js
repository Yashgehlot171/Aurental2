import React, { useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Picker,
  ScrollView
} from 'react-native';
import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../../constant/Color';

const screenD9 = ( { navigation} ) => {
  return (
    <View style={{flex:1, backgroundColor:"white"}}> 

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
    <Text style={{ width: '100%', fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -7, height: 40, fontWeight:"700" }}>Item Picker</Text>

}

/>
<View style={{ backgroundColor: '#000', width: '100%', height: 0.3, marginVertical: 3 }} />

       <ScrollView> 
      <Text style={{fontSize:16, marginBottom:3, marginLeft:25, fontWeight:"600", marginTop:30}}>Tracking Number</Text>
      <Text style={{fontSize:14, marginBottom:20, marginLeft:25, color:"gray"}}>1234567890</Text>

      <Text style={{fontSize:16, marginBottom:3, marginLeft:25, fontWeight:"600"}}>Service</Text>
      <Text style={{fontSize:14, marginBottom:20, marginLeft:25, color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
       
      <Text style={{fontSize:16, marginBottom:3, marginLeft:25, fontWeight:"600"}}>Delivery Location</Text>
      <Text style={{fontSize:14, marginBottom:20, marginLeft:25, color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque eleifend odio quis metus ornare, pretium
      maximus metus aliquet.</Text> 

      <Text style={{fontSize:16, marginBottom:3, marginLeft:25, color:"grey", fontWeight:"600"}}>Receiver</Text>
      <Text style={{fontSize:14, marginBottom:20, marginLeft:25, color:"gray"}}>Jonathan Doe</Text>

      <Text style={{fontSize:16, marginBottom:5, marginLeft:25, color:"grey", fontWeight:"600"}}>Package Image</Text>
   
      <View style={{flexDirection:"row", marginBottom:25}}> 
        <View style={{height:70, backgroundColor:"gray", width:70, marginLeft:29, opacity:0.5, borderRadius:5}}>
        </View>

        <View style={{height:70, backgroundColor:"gray", width:70, marginLeft:10, opacity:0.5, borderRadius:5 }}>
        </View>

        <View style={{height:70, backgroundColor:"gray", width:70, marginLeft:10, opacity:0.5, borderRadius:5}}>
        </View>
      </View>

      <Text style={{fontSize:16, marginBottom:3, marginLeft:25, color:"grey", fontWeight:"600"}}>Signature</Text>
      <View style={{height:120, borderColor:"gray", width:"85%", marginBottom:105, borderWidth:1, marginLeft:29,}}>
      </View>

      <TouchableOpacity>
        <Text style={{textAlign:"center", fontWeight:"700",  }}>Report an Issue</Text>
      </TouchableOpacity>
      {/* <View style={{height:1, backgroundColor:"red", width:60, alignSelf:"center"}}></View> */}
      <View style={{height:2, width:105, alignSelf:"center", backgroundColor:"grey", marginBottom:50}}></View>
      </ScrollView>
    </View>
  );
};

export default screenD9;
