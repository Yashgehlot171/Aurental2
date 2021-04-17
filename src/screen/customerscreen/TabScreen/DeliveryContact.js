import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';

const ContactDelivery = () => {
  return (
     <SafeAreaView style={{flex:1}}>
       {/* <ScrollView style={{flex:1}}> */}
         <Text style={{textAlign:"center", fontSize:20, marginTop:25, marginBottom:0, fontWeight:"600"}}>Item has been sent.</Text>
         <Text style={{textAlign:"center", fontSize:8, marginTop:5, marginBottom:50, color:"gray"}}>Confirm your delivery by signing delow</Text>
         <Text style={{color:"gray", marginLeft:20, marginBottom:1}}>Delivery ID</Text>
         <Text style={{color:"gray", marginLeft:20, marginBottom:15, fontSize:14, marginTop:3}}>1234567890</Text>
         <Text style={{color:"gray", marginLeft:20, marginBottom:1}}>Address</Text>
         <Text style={{color:"gray", marginLeft:20, fontSize:12, marginBottom:20}}>Lorem ipsum dolor sit amet,  consectetur  adipiscing elit.
          Pellentesque eleifend odio quis metus ornare, pretium
          maximus metus aliquet. Donec bibendum libero ligula, eget
          maximus purus dignissim quis.</Text>
          <Text style={{color:"gray", marginLeft:20, marginBottom:2}}>Parcel Type / Weight (L/W/H)</Text>
          <Text style={{color:"gray", marginLeft:20, marginBottom:20, fontSize:12}}>Technology / 1 kg (10/20/30 cm)</Text>
          <Text style={{color:"gray", marginLeft:20, marginBottom:1}}>Pickup Date</Text>
          <Text style={{color:"gray", marginLeft:20, marginBottom:50, fontSize:12}}>20 January 2021</Text>
          <View style={{height:"15%", borderColor:"gray", width:"90%", alignSelf:"center", marginBottom:50, borderWidth:1}}></View>
          <TouchableOpacity style={{width:"70%", backgroundColor:"#296C94", height:"5%", alignSelf:"center", borderRadius:5}}>
            <Text style={{marginTop:10, textAlign:"center", fontWeight:"600", fontSize:15, color:"#fff"}}>Sign and Confirm Delivery</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{marginTop:40, textAlign:"center", fontWeight:"600", fontSize:15, color:"gray", fontWeight:"700"}}>Contact Delivery</Text>
          </TouchableOpacity>

       {/* </ScrollView> */}
     </SafeAreaView>
  );
};

export default ContactDelivery;