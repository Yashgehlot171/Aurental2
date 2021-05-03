import React, { useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Picker
} from 'react-native';
import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../../constant/Color';
const screenD15 = ( { navigation} ) => {

  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}> 
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
    <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -7, height: 40 }}>Request Vehicle</Text>

}

/>
<View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:5}}/>
        <TextInput
                style={{height: 40, backgroundColor:"#f0eded", width:"85%", alignSelf:"center", marginTop:30, marginBottom:20}}
                placeholder="Name"
              />

             <TextInput
                style={{height: 40, backgroundColor:"#f0eded", width:"85%", alignSelf:"center", marginBottom:20}}
                placeholder="Email Address"
              />

              <TextInput
                style={{height: 40, backgroundColor:"#f0eded", width:"85%", alignSelf:"center", marginBottom:20}}
                placeholder="Phone Number"
              />

             <TextInput
                style={{height: 40, backgroundColor:"#f0eded", width:"85%", alignSelf:"center", marginBottom:20}}
                placeholder="Driving License"
              />

              <TextInput
                style={{height: 40, backgroundColor:"#f0eded", width:"85%", alignSelf:"center", marginBottom:20}}
                placeholder="Address"
              />

              <View  style={{height:40,width:"85%", alignSelf:"center", backgroundColor:"#f0eded", marginBottom:15}}>
                <Picker style={{color:'#6D6B6B', height: 45, width: "100%"}}  
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                  <Picker.Item label = "Vehicle Type" value = "Category 1" />
                  <Picker.Item label = "Category 1" value = "Category 1" />
                  <Picker.Item label = "Category 2" value = "Category 2" />
                  <Picker.Item label = "Category 3" value = "Category 3" />
                </Picker>
              </View>

              <Text style={{color:"gray", marginLeft:30,fontWeight:"700", marginBottom:10}}>driving License Document</Text>

              <View style={{height:"10%", borderColor:"gray", width:"20%", marginBottom:70, borderWidth:1, marginLeft:29}}>
                <Text style={{fontSize:20, textAlign:"center", marginTop:25}}>+</Text>
              </View>

    <TouchableOpacity style={{height:"5%", width:"75%", borderRadius:5, alignSelf:"center", backgroundColor:"green" }}
    onPress={() => navigation.navigate('RequestSubmit')}>
      <Text style={{textAlign:"center", marginTop:10, color:"white",  }}>Submit</Text>
    </TouchableOpacity>
   </View>
  );
};

export default screenD15;
