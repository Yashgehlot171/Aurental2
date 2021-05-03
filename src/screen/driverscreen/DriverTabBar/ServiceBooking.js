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
const screenD19 = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={{flex:1,backgroundColor:'white'}}>

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
           <Text style={{ width: '100%', fontSize:20, textAlign: 'center', marginTop: 5, height: 40, fontWeight:"700", marginLeft:-7 }}>Service Booking</Text>

         }
         

      /> 
      <View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:5}}/>
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

      <View style={{height:90, backgroundColor:Colors.introButton, width:"75%", marginLeft:50, marginBottom:30, opacity:0.7}}>
        <Text style={{fontSize:25, textAlign:"center", marginTop:20, fontWeight:"bold"}}>200 days</Text>
        <Text style={{textAlign:"center",}}>Next service due to__mileage</Text>
      </View>

       

     
      <View style={{height:"5%", width:"75%", borderRadius:5, alignSelf:"center", backgroundColor:"#f0eded", marginTop:100, opacity:0.5}}>
        <TouchableOpacity>
          <Image
           style={{height:20, width:20, alignSelf:"flex-end", marginTop:10, marginRight:10, resizeMode:"contain"}}
            source={require('../../../../assets/icon/right.png')}
          />
        </TouchableOpacity>
        <Text style={{ marginTop:-20, marginLeft:10, fontWeight:"bold" }}>Contact Admin to Book Admin</Text>
      </View>
       
    </View>
  );
};

export default screenD19;
