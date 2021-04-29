import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../../constant/Color';
import { Header, Icon, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
const screen11 = () => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}> 
     <ScrollView>
   <View style={{alignItems:"center",  }}>
     <Image
        style={{height:70, width:70, alignSelf:"center", marginTop:105, marginBottom:35}}
        source={require('../../../../assets/icon/submitted.png')}
      />
      <Text style={{textAlign:"center", fontSize:22, color:"gray",fontWeight:'bold'}}>Delivery has been paid.</Text>
      <Text style={{textAlign:"center", fontSize:13, color:"gray", marginBottom:75,padding:20}}>Your delivery has been paid. The deliveree will soon

pickup your item to deliver.</Text>

      <View style={{height:1, backgroundColor:"gray", width:"60%", alignSelf:"center", marginBottom:30}}></View>
   </View> 
   <Text style={{color:"gray", marginLeft:20, marginBottom:5}}>Delivery ID</Text>
   <Text style={{color:"gray", marginLeft:20, marginBottom:10, fontSize:12}}>1234567890</Text>
   <Text style={{color:"gray", marginLeft:20, marginBottom:1}}>Address</Text>
         <Text style={{color:"gray", marginLeft:20, fontSize:12, marginBottom:10}}>Lorem ipsum dolor sit amet,  consectetur  adipiscing elit.
          Pellentesque eleifend odio quis metus ornare, pretium
          maximus metus aliquet. Donec bibendum libero ligula, eget
          maximus purus dignissim quis.</Text>
          <Text style={{color:"gray", marginLeft:20, marginBottom:2}}>Parcel Type / Weight (L/W/H)</Text>
          <Text style={{color:"gray", marginLeft:20, marginBottom:10, fontSize:12}}>Technology / 1 kg (10/20/30 cm)</Text>
          <Text style={{color:"gray", marginLeft:20, marginBottom:1}}>Delivery Date</Text>
          <Text style={{color:"gray", marginLeft:20, marginBottom:10, fontSize:12}}>20 January 2021</Text>

          <Text style={{color:"gray", marginLeft:20, marginBottom:1}}>Collection Date (estimation)</Text>
          <Text style={{color:"gray", marginLeft:20, marginBottom:50, fontSize:12}}>22-24 January 2021</Text>


          <TouchableOpacity style={{height:45, width:"75%", borderRadius:5, alignSelf:"center", backgroundColor:"#296C94",marginBottom:5 }}>
        <Text style={{textAlign:"center", marginTop:14,color:'#fff',fontWeight:'bold'}}>Back to Home</Text>
      </TouchableOpacity>
      </ScrollView>
   </View>
  );
};

export default screen11;