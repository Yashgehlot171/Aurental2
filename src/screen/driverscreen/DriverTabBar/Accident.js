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
import Colors from '../../../constant/Color';
import { Header, Icon, Avatar } from 'react-native-elements';
const screenD18 = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={{flex:1, backgroundColor:"white"}}> 
                 <Header

statusBarProps={{ barStyle: 'dark-content' }}
height={85}
containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
backgroundColor={Colors.text_white}
placement={"left"}
leftComponent={
    <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', height: 25 }} onPress={() => {}}>
        <Image style={{ width: 25, height: 25, tintColor: '#000', marginLeft: 10, marginTop: 5, resizeMode: 'contain' }} source={require('../../../../assets/icon/left.png')} />

    </TouchableOpacity>
}
centerComponent={
    <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -7, height: 40 }}>Accident</Text>

}

/>
<View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:5}}/>
     
      <View  style={{height:40,width:"85%", alignSelf:"center", backgroundColor:"#f0eded", marginBottom:15, marginTop:30}}>
        <Picker style={{color:'#6D6B6B', height: 45, width: "100%"}}  
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label = "Vehicle" value = "Category 1" />
          <Picker.Item label = "Category 1" value = "Category 1" />
          <Picker.Item label = "Category 2" value = "Category 2" />
          <Picker.Item label = "Category 3" value = "Category 3" />
        </Picker>
      </View>

      <TextInput
        style={{height: 100, backgroundColor:"#f0eded", width:"85%", alignSelf:"center", marginBottom:20}}
        placeholder="Description"
      />
     <View style={{height: 40, backgroundColor:"#f0eded", width:"85%", alignSelf:"center", marginBottom:20, flexDirection:"row",justifyContent:"space-between"}}>
        <TextInput
          // style={{height: 40, backgroundColor:"#f0eded", width:"85%", alignSelf:"center", marginBottom:20}}
          placeholder="Vehicle Location"
       />

        <Image style={{ width: 25, height: 25, tintColor: '#000', marginRight: 10, marginTop: 5, resizeMode: "contain" }} 
          source={require('../../../../assets/icon/gps-black.png')}
         />
     </View>
      
     <Text style={{fontSize:15, marginBottom:3, marginLeft:25, color:"grey", fontWeight:"700"}}>Vehicle Detail</Text>
     <View style={{height:70, borderColor:"gray", width:70, marginBottom:75, borderWidth:1, marginLeft:29, marginBottom:40}}>
        <Text style={{fontSize:20, textAlign:"center", marginTop:20}}>+</Text>
      </View>

      <TouchableOpacity style={{height:"7%", width:"75%", borderRadius:5, alignSelf:"center", backgroundColor:"green", marginTop:50 }}>
      <Text style={{textAlign:"center", marginTop:10, color:"white",  }}>Send Notification to Admin</Text>
    </TouchableOpacity>

    </View>
  );
};

export default screenD18;
