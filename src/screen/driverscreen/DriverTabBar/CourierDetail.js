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
const screenD22 = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={{flex:1, backgroundColor:"white"}}> 

<Header

statusBarProps={{ barStyle: 'dark-content' }}
height={80}
containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
backgroundColor={Colors.text_white}
placement={"left"}
leftComponent={
    <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', height: 25 }} onPress={() => this.props.navigation.goBack()}>
        <Image style={{ width: 25, height: 25, tintColor: '#000', marginLeft: 10, marginTop: 5, resizeMode: 'contain' }} source={require('../../../../assets/icon/left.png')} />

    </TouchableOpacity>
}
centerComponent={
    <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Courier Detail</Text>

}

/>
      <ScrollView> 
      <Text style={{fontSize:14, marginBottom:3, marginLeft:25, color:"gray", marginTop:40}}>Tracking Number</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>1234567890</Text>

      <Text style={{fontSize:16, marginBottom:3, marginLeft:25, fontWeight:"600"}}>Sender Dentail</Text>
      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"gray"}}>Name</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
       
      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"gray"}}>Phone Number</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>+65 123 456 789</Text>

      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"gray"}}>Email Address</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>sender@email.com</Text>

      <Text style={{fontSize:16, marginBottom:3, marginLeft:25, fontWeight:"600"}}>Sender Dentail</Text>
      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"gray"}}>Name</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
       
      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"gray"}}>Phone Number</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>+65 123 456 789</Text>

      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"gray"}}>Email Address</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>sender@email.com</Text>

      <Text style={{fontSize:16, marginBottom:5, marginLeft:25, fontWeight:"600"}}>Receiver Dentail</Text>
      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"gray"}}>Parcel Type / Weight (L/W/H)</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>Technology / 1 kg (10/20/30 cm)</Text>

      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"gray"}}>Pickup Date</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>20 January 2021</Text>

      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"gray"}}>Description</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>

      <Text style={{fontSize:16, marginBottom:3, marginLeft:25, fontWeight:"600"}}>Delivery Address</Text>
      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"gray"}}>Unit NO / Block</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>12/1</Text>

      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"gray"}}>Street & Pincode</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit & 1234560</Text>
       
      <View  style={{height:40,width:"86%", alignSelf:"center", backgroundColor:"#f0eded", marginBottom:35, marginTop:15}}>
        <Picker style={{color:'#6D6B6B', height: 45, width: "100%"}}  
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label = "Picked Up" value = "Category 1" />
          <Picker.Item label = "Category 1" value = "Category 1" />
          <Picker.Item label = "Category 2" value = "Category 2" />
          <Picker.Item label = "Category 3" value = "Category 3" />
        </Picker>
      </View>

      <Text style={{fontSize:13, marginBottom:2, marginLeft:25, color:"gray"}}>Sender Signature</Text>
      <View style={{height:200, width:"86%",borderColor:"grey", borderWidth:1, alignSelf:"center", marginBottom:10}}></View>
      
        <View style={{flexDirection:"row",marginBottom:30}}>
        <TouchableOpacity style={{height:40, width:80, borderWidth:1, borderColor:"grey", borderRadius:5, marginLeft:25}}>
           <Text style={{color:"grey", textAlign:"center", marginTop:8}}>Clear</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{height:40, width:80, backgroundColor:"green", borderRadius:5, marginLeft:180}} >
        <Text style={{color:"white", textAlign:"center", marginTop:8,}}>Save</Text>
        </TouchableOpacity>
        </View>

        <Text style={{fontSize:10, marginBottom:5, marginLeft:25, color:"grey", fontWeight:"700"}}>Upload Images</Text>
        
        <View style={{flexDirection:"row"}}>
        <View style={{height:70, borderColor:"gray", width:70, marginBottom:75, borderWidth:1, marginLeft:29, marginBottom:50}}>
          <Text style={{fontSize:20, textAlign:"center", marginTop:20}}>+</Text>
        </View>
        
        <View style={{height:70, borderColor:"gray", width:70, marginBottom:75, borderWidth:1, marginLeft:29, marginBottom:50}}>
          <Text style={{fontSize:20, textAlign:"center", marginTop:20}}>+</Text>
        </View>
        
        <View style={{height:70, borderColor:"gray", width:70, marginBottom:75, borderWidth:1, marginLeft:29, marginBottom:50}}>
          <Text style={{fontSize:20, textAlign:"center", marginTop:20}}>+</Text>
        </View>
        </View>
        
        <TouchableOpacity style={{width:250, backgroundColor:"#87CEEB", height:35, alignSelf:"center", borderRadius:5, marginBottom:40}}>
          <Text style={{marginTop:5, textAlign:"center", fontWeight:"600", fontSize:15, color:"#fff"}}>Submit</Text>
        </TouchableOpacity>

      </ScrollView>  
    </View>
  );
};

export default screenD22;
