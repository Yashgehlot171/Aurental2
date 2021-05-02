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

const screenD10 = () => {
  return (
    <View style={{flex:1,}}> 
      <Text style={{fontSize:15, marginTop:30, marginBottom:5, marginLeft:50}}>Payment</Text>
       
      <View style={{height:90, borderColor:"gray", width:"75%", borderWidth:1, marginLeft:50, marginBottom:30}}>
        <Text style={{fontSize:25, textAlign:"center", marginTop:20}}>S $0.00</Text>
        <Text style={{textAlign:"center",color:"grey"}}>You've earned</Text>
      </View>

      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"grey", fontWeight:"600"}}>Tracking Number</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>1234567890</Text>

      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"grey", fontWeight:"600"}}>Service</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
       
      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"grey", fontWeight:"600"}}>Delivery Location</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque eleifend odio quis metus ornare, pretium
      maximus metus aliquet.</Text> 

      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"grey", fontWeight:"600"}}>Receiver</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>Jonathan Doe</Text>

      <Text style={{fontSize:15, marginBottom:5, marginLeft:25, color:"grey", fontWeight:"600"}}>Package Image</Text>
   
      <View style={{flexDirection:"row", marginBottom:25}}> 
        <View style={{height:70, backgroundColor:"gray", width:70, marginLeft:29,}}>
        </View>

        <View style={{height:70, backgroundColor:"gray", width:70, marginLeft:10,}}>
        </View>

        <View style={{height:70, backgroundColor:"gray", width:70, marginLeft:10,}}>
        </View>
      </View>

      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"grey", fontWeight:"600"}}>Signature</Text>
      <View style={{height:120, borderColor:"gray", width:"85%", marginBottom:25, borderWidth:1, marginLeft:29,}}>
      </View>

      <TouchableOpacity>
        <Text style={{textAlign:"center",}}>Report an Issue</Text>
      </TouchableOpacity>
      <View style={{height:1, width:110, alignSelf:"center", backgroundColor:"grey"}}></View>

    </View>
  );
};

export default screenD10;
