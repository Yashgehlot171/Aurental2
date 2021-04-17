import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';

const RateDelivery = () => {
  return (
     <SafeAreaView style={{flex:1}}>
       {/* <ScrollView style={{flex:1}}> */}
         <Text style={{textAlign:"center", fontSize:20, marginTop:25, marginBottom:50, fontWeight:"600"}}>Rate Delivery</Text>
         <Text style={{color:"gray", marginLeft:20, marginBottom:1}}>Address</Text>
         <Text style={{color:"gray", marginLeft:20, fontSize:12, marginBottom:10}}>Lorem ipsum dolor sit amet,  consectetur  adipiscing elit.
          Pellentesque eleifend odio quis metus ornare, pretium
          maximus metus aliquet. Donec bibendum libero ligula, eget
          maximus purus dignissim quis.</Text>
          <Text style={{color:"gray", marginLeft:20, marginBottom:2}}>Parcel Type / Weight (L/W/H)</Text>
          <Text style={{color:"gray", marginLeft:20, marginBottom:3, fontSize:12}}>Technology / 1 kg (10/20/30 cm)</Text>
          <Text style={{color:"gray", marginLeft:20, marginBottom:1}}>Pickup Date</Text>
          <Text style={{color:"gray", marginLeft:20, marginBottom:50, fontSize:12}}>20 January 2021</Text>
          <View style={{height:1, backgroundColor:"gray", width:"60%", alignSelf:"center", marginBottom:50}}></View>
          <Text style={{color:"gray", marginBottom:10, fontSize:17, textAlign:"center",}}>Driver Name</Text>
          <View style={{height:"5%", backgroundColor:"gray", width:"10%", alignSelf:"center", marginBottom:40, borderRadius:50}}></View>
          <Text style={{color:"gray", marginBottom:50, fontSize:17, textAlign:"center",}}>Driver Rating</Text>
          <Text style={{color:"gray", marginBottom:10, fontSize:17, textAlign:"center",}}>Comment to driver</Text>
          
          <View style={{width:"90%", borderColor:"gray", borderWidth:1, alignSelf:"center", marginBottom:30, height:"10%"}}>
          </View>
          <TouchableOpacity style={{width:"70%", backgroundColor:"#296C94", height:"6%", alignSelf:"center", borderRadius:5}}>
            <Text style={{marginTop:10, textAlign:"center", fontWeight:"600", fontSize:15}}>Rate Delivery</Text>
          </TouchableOpacity>

       {/* </ScrollView> */}
     </SafeAreaView>
  );
};

export default RateDelivery;