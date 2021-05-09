import React, { useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Picker,
  ScrollView,
  StyleSheet
} from 'react-native';
import Colors from '../../../constant/Color';
import { Header, Icon, Avatar } from 'react-native-elements';
const screenD12 = ( { navigation} ) => {

  const [selectedValue, setSelectedValue] = useState("java");
  const [selectedValue1, setSelectedValue1] = useState("java");
  const [selectedValue2, setSelectedValue2] = useState("java");
  return (
 
    <View style={{flex:1,backgroundColor:"white"}}> 
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
    <Text style={{ width: '100%', fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -7, height: 40,  fontWeight:"700" }}>Vehicle</Text>

}

/>
<View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:5}}/>
<ScrollView style ={{backgroundColor:'#fff'}}> 
      <Text style={{color:"grey", textAlign:"center", fontSize:17, marginTop:20, marginBottom:30}}>Are you a driver with no vehicle</Text>
      
      <TouchableOpacity style={styles.button_Style}
      onPress={() => navigation.navigate('RequestVehicle')}>
      <Text style={{textAlign:"center", fontSize: 16, color: Colors.introButtonLabel  }}>Request a vehicle</Text>
      </TouchableOpacity>
       
      <View style={{flexDirection:"row", marginVertical:45}}> 
      <View style={{backgroundColor:"gray", width:"40%", height:1, opacity:0.5, alignSelf:"center", marginLeft:30}}></View>
       <Text style={{color:"grey", textAlign:"center", marginLeft:10, marginTop:-3, color:"grey"}}>or</Text> 
      <View style={{backgroundColor:"gray", width:"40%", height:1, opacity:0.5, alignSelf:"center", marginLeft:10}}></View>
      </View>
      
      <Text style={{color:"grey", marginLeft:30, fontSize:17, marginBottom:30}}>Fill the form if you have a vehicle</Text>
      <Text style={{color:"grey", marginLeft:30, fontSize:16, marginBottom:15, fontWeight:"700", fontSize:12}}>Owner Detail</Text>

        <TextInput
                style={{height: 40, backgroundColor: Colors.gry_color, width:"85%", alignSelf:"center", marginBottom:20, color:"#6D6B6B"}}
                placeholder="E-mail Address"
                keyboardType="email-address"
              />

             <TextInput
                style={{height: 40, backgroundColor: Colors.gry_color, width:"85%", alignSelf:"center", marginBottom:20}}
                placeholder="Mobile Number"
                keyboardType="number-pad"
              />

              <TextInput
                style={{height: 40, backgroundColor: Colors.gry_color, width:"85%", alignSelf:"center", marginBottom:20}}
                placeholder="Password"
              />

             <TextInput
                style={{height: 40, backgroundColor: Colors.gry_color, width:"85%", alignSelf:"center", marginBottom:30}}
                placeholder="Password"
              />
              
              <Text style={{color:"grey", marginLeft:30, fontSize:16, marginBottom:15, fontWeight:"700", fontSize:12}}>Vehicle Detail</Text>

              <View  style={{height:40,width:"85%", alignSelf:"center", backgroundColor: Colors.gry_color, marginBottom:20}}>
                <Picker style={{color:'#6D6B6B', height: 45, width: "100%"}}  
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                  <Picker.Item label = "Vehicle Type" value = "Category 1" />
                  <Picker.Item label = "Category 1" value = "Category 1" />
                  <Picker.Item label = "Category 2" value = "Category 2" />
                  <Picker.Item label = "Category 3" value = "Category 3" />
                </Picker>
              </View>

              <TextInput
                style={{height: 40, backgroundColor: Colors.gry_color, width:"85%", alignSelf:"center", marginBottom:30}}
                placeholder="Vehicle Type"
              />

             <TextInput
                style={{height: 40, backgroundColor: Colors.gry_color, width:"85%", alignSelf:"center", marginBottom:30}}
                placeholder="Owner ID Type"
              />

             <View  style={{height:40,width:"85%", alignSelf:"center", backgroundColor: Colors.gry_color, marginBottom:20}}>
                <Picker style={{color:'#6D6B6B', height: 45, width: "100%"}}  
                  selectedValue1={selectedValue1}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}>
                  <Picker.Item label = "Owner ID Number (last 4 characters" value = "Category 1" />
                  <Picker.Item label = "Category 1" value = "Category 1" />
                  <Picker.Item label = "Category 2" value = "Category 2" />
                  <Picker.Item label = "Category 3" value = "Category 3" />
                </Picker>
              </View>

              <View style={{height:50, borderColor:"gray", width:"85%", marginBottom:20, borderWidth:1, marginLeft:29}}>
                <TouchableOpacity>
                  <Text style={{fontSize:16, textAlign:"center", marginTop:12, color:"#6D6B6B", fontWeight:"700"}}>+ Additional info</Text>
                </TouchableOpacity>
              </View>

              <Text style={{color:"gray", marginLeft:30,fontWeight:"700", marginBottom:10}}>Venhicle Document</Text>

              <View style={{height:90, borderColor:"gray", width:"23%", marginBottom:25, borderWidth:1, marginLeft:29}}>
                <Text style={{fontSize:20, textAlign:"center", marginTop:25}}>+</Text>
              </View>

          <View style={{width:"83%", backgroundColor: Colors.gry_color, alignSelf:"center", height:529, marginBottom:30}}>
            <Text style={{padding:5, marginLeft:5, fontSize:15, color:"grey"}}>AR Scan</Text>
            <Text style={{marginLeft:12, fontSize:10, marginBottom:30, color:"grey"}}>Use AR to capture vehicle size and capacity</Text>

            <TouchableOpacity style={styles.button_Style} onPress={() => navigation.navigate('Camera')}>
             <Text style={{textAlign:"center", fontWeight:"600", fontSize:16, color:"#fff"}}>AR Scan</Text>
           </TouchableOpacity>
           
           <Text style={{marginLeft:10, fontSize:15, fontSize:16, color:"gray", marginBottom:5, marginTop:30 }}>Or you can manually input the dimension</Text>
           <Text style={{marginLeft:10, fontSize:12, marginLeft:10, color:"gray", marginBottom:10}}>Enter vehicle size and capacity manually</Text>
            
            <Image
             style={{height:200, width:"85%", alignSelf:"center", marginBottom:15}}
             source={require('../../../../assets/image1.png')}
           />
           
            <View style={{flexDirection:"row", marginBottom:10}}> 
               
            <TouchableOpacity style={{width:85, backgroundColor:"#fff", height:35, borderRadius:5, marginLeft:25}}>
             <Text style={{marginTop:5, textAlign:"center", fontWeight:"600", fontSize:15, color:"grey"}}>Height</Text>
           </TouchableOpacity>

           <TouchableOpacity style={{width:85, backgroundColor:"#fff", height:35, borderRadius:5,marginLeft:10}}>
             <Text style={{marginTop:5, textAlign:"center", fontWeight:"600", fontSize:15, color:"red"}}>Length</Text>
           </TouchableOpacity>

           <TouchableOpacity style={{width:85, backgroundColor:"#fff", height:35, borderRadius:5, marginLeft:10}}>
             <Text style={{marginTop:5, textAlign:"center", fontWeight:"600", fontSize:15, color:"green"}}>Wide</Text>
           </TouchableOpacity>

           </View>

           <TouchableOpacity style={{width:"85%", backgroundColor:"#fff", height:40, alignSelf:"center", borderRadius:5, marginBottom:40}}>
             <Text style={{marginTop:7, textAlign:"center", fontWeight:"600", fontSize:15, color:"grey"}}>Capacity</Text>
           </TouchableOpacity>

          </View>

          <Text style={{color:"gray", marginLeft:30,fontWeight:"700", marginBottom:10, fontSize:17}}>Addition Iformation</Text>
          
          <View  style={{height:40,width:"85%", alignSelf:"center", backgroundColor: Colors.gry_color, marginBottom:20}}>
                <Picker style={{color:'#6D6B6B', height: 45, width: "100%"}}  
                  selectedValue2={selectedValue2}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}>
                  <Picker.Item label = "Document" value = "Category 1" />
                  <Picker.Item label = "Category 1" value = "Category 1" />
                  <Picker.Item label = "Category 2" value = "Category 2" />
                  <Picker.Item label = "Category 3" value = "Category 3" />
                </Picker>
              </View>

              <View style={{height:90, borderColor:"gray", width:"85%", marginBottom:25, borderWidth:1, marginLeft:29, marginBottom:50}}>
                <Text style={{fontSize:20, textAlign:"center", marginTop:25}}>+</Text>
              </View>

              <TouchableOpacity style={{height:40, width:"75%", borderRadius:5, alignSelf:"center", backgroundColor:"green", marginBottom:50 }}
              onPress={() => navigation.navigate('RequestSubmit')}>
                 <Text style={{textAlign:"center", marginTop:10, color:"white", fontWeight:"bold" }}>Submit</Text>
              </TouchableOpacity>
              </ScrollView>
            </View>
      
  );
};

export default screenD12;

const styles = StyleSheet.create({
  button_Style: {
    width: 280, height: 50, backgroundColor: Colors.introButton,
    borderRadius: 5, alignSelf: 'center',
    justifyContent: 'center'
},
})
