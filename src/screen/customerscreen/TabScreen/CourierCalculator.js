import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput
} from 'react-native';
import Colors from '../../../constant/Color';
import { Header, Icon, Avatar } from 'react-native-elements';
const Screen15 = () => {
  return (
<View  style={{flex:1,backgroundColor:'#fff'}}>
    <Header

    statusBarProps={{ barStyle: 'dark-content' }}
    height={80}
    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
    backgroundColor={Colors.text_white}
    placement={"left"}
    leftComponent={
        <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', height: 25 }} >
            <Image style={{ width: 25, height: 25, tintColor: '#000', marginLeft: 10, marginTop: 5, resizeMode: 'contain' }} source={require('../../../../assets/icon/left.png')} />
    
        </TouchableOpacity>
    }
    centerComponent={
        <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Courier Rates Calculator</Text>
    
    }
    
    />
    <View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:1}}/>
    
  
       <ScrollView style={{flex:1}}>
         <Text style={{color:"gray", marginLeft:20, fontSize:12, marginBottom:50, marginTop:50, fontSize:13, padding:2}}>Lorem ipsum dolor sit amet,  consectetur  adipiscing elit.
          Pellentesque eleifend odio quis metus ornare, pretium
          maximus metus aliquet. Donec bibendum libero ligula,</Text>
          <View style={{height:50, borderColor:"gray", width:120, alignSelf:"center", marginBottom:10, borderWidth:1}}>
            <Text style={{fontSize:20, textAlign:"center", marginTop:10, color:"gray"}}>01</Text>
          </View>

          <Text style={{fontSize:17, textAlign:"center", color:"gray", marginBottom:50}}>Kilogram</Text>
          <Text style={{fontSize:16, textAlign:"center", color:"gray", marginBottom:20}}>Item Dimension</Text>

          <View style={{width:"83%", backgroundColor:"#f0eded", alignSelf:"center", height:399, marginBottom:30}}>
            <Text style={{padding:5, marginLeft:5, fontSize:15}}>AR Scan</Text>
            <Text style={{marginLeft:12, fontSize:10, marginBottom:30}}>Insert information about AR Scan here fornew application user</Text>

            <TouchableOpacity style={{width:250, backgroundColor:"#87CEEB", height:35, alignSelf:"center", borderRadius:5, marginBottom:40}}>
             <Text style={{marginTop:5, textAlign:"center", fontWeight:"600", fontSize:15, color:"#fff"}}>AR Scan</Text>
           </TouchableOpacity>
           
           <Text style={{marginLeft:10, fontSize:15, fontSize:16, color:"gray", marginBottom:5 }}>Or you can manually input the dimension</Text>
           <Text style={{marginLeft:10, fontSize:12, marginLeft:10, color:"gray", marginBottom:30}}>You can input your package  dimension manually here</Text>
            <View style={{flexDirection:"row", marginBottom:12}}> 
              <TextInput
                style={{height: 40, backgroundColor:"white", width:150, marginLeft:50,paddingLeft:5}}
                placeholder="40"
            />
            <Text style={{fontSize:20, marginLeft:20, marginTop:5, color:"gray"}}>CM</Text>
           </View>
           <View style={{flexDirection:"row", marginBottom:12}}> 
              <TextInput
                style={{height: 40, backgroundColor:"white", width:150, marginLeft:50,paddingLeft:5}}
                placeholder="40"
            />
            <Text style={{fontSize:20, marginLeft:20, marginTop:5, color:"gray"}}>CM</Text>
           </View>
           <View style={{flexDirection:"row", marginBottom:12}}> 
              <TextInput
                style={{height: 40, backgroundColor:"white", width:150, marginLeft:50,paddingLeft:5}}
                placeholder="40"
            />
            <Text style={{fontSize:20, marginLeft:20, marginTop:5, color:"gray"}}>CM</Text>
           </View>
          </View>

          <Text style={{fontSize:15, color:"gray", textAlign:"center", marginBottom:15}}>Delivery Address</Text>
          
          <TextInput
                style={{height: 40, width:"83%", borderColor:"gray", borderWidth:1, alignSelf:"center", marginBottom:50,paddingLeft:5}}
                placeholder="Input Address.."
            />
          
          <Text style={{fontSize:15, color:"gray", textAlign:"center", marginBottom:5}}>Delivery Fee</Text>

          <View style={{height:50, borderColor:"gray", width:120, alignSelf:"center", marginBottom:30, borderWidth:1}}>
            <Text style={{fontSize:20, textAlign:"center", marginTop:10, color:"gray"}}>$    10.00</Text>
          </View>

          <Text style={{fontSize:15, color:"gray", textAlign:"center", marginBottom:5}}>SGD</Text>
           
           <Text style={{color:"gray", padding:10, textAlign:"center", marginBottom:30}}>Today's Courier Rates:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend odio quis metus ornare, pretium maximus metus aliquet.</Text>
          
           <Text style={{color:"gray", padding:10, textAlign:"center", marginBottom:30}}>(Courier Rates may change each day)</Text>
       </ScrollView>
       </View>
  );
};

export default Screen15;