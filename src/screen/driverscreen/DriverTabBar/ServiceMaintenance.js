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

const screenD21 = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={{flex:1,}}> 
      <View  style={{height:40,width:"85%", alignSelf:"center", backgroundColor:"#f0eded", marginBottom:35, marginTop:30}}>
        <Picker style={{color:'#6D6B6B', height: 45, width: "100%"}}  
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label = "Vehicle" value = "Category 1" />
          <Picker.Item label = "Category 1" value = "Category 1" />
          <Picker.Item label = "Category 2" value = "Category 2" />
          <Picker.Item label = "Category 3" value = "Category 3" />
        </Picker>
      </View>

      <View style={{height:90, backgroundColor:"#f0eded", width:"75%", marginLeft:50, marginBottom:45,}}>
        <Text style={{fontSize:25, textAlign:"center", marginTop:20}}>June 2021</Text>
        <Text style={{textAlign:"center",color:"grey"}}>Next service due to__mileage</Text>
      </View>

      <Text style={{fontSize:15, marginBottom:3, marginLeft:25, fontWeight:"600"}}>Booked Service Maintenance</Text>
      <Text style={{fontSize:14, marginBottom:3, marginLeft:25, color:"gray"}}>Location</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
       
      <Text style={{fontSize:14, marginBottom:3, marginLeft:25, color:"gray"}}>Service Date</Text>
      <Text style={{fontSize:13, marginBottom:20, marginLeft:25, color:"gray"}}>20 January 2021, 01:11 PM</Text>

      <Text style={{fontSize:14, marginBottom:3, marginLeft:25, color:"gray"}}>Description</Text>
      <Text style={{fontSize:13, marginBottom:3, marginLeft:25, color:"gray"}}>Location</Text>

      <View style={{height:"5%", width:"75%", borderRadius:5, alignSelf:"center", backgroundColor:"grey", marginTop:200, opacity:0.5,}}>
        <TouchableOpacity>
          <Image
           style={{height:20, width:20, alignSelf:"flex-end", marginTop:10, marginRight:10, resizeMode:"contain",}}
            source={require('./assets/Pat111.png')}
          />
        </TouchableOpacity>
        <Text style={{ marginTop:-20, color:"black", marginLeft:10  }}>Contact Admin to Book Admin</Text>
      </View>
       
    </View>
  );
};

export default screenD21;
