import React, { Component } from 'react'
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
export default class screenD11 extends Component {
    render() {
  return (
    <View style={{flex:1, backgroundColor:"white",}}> 
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
    <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -7, height: 40 }}>Vehicle</Text>

}

/>
<View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:5}}/>
<TouchableOpacity onPress={() => this.props.navigation.navigate('MyVehicle')}>
       <View style={{height:50, width:"85%", backgroundColor:"#f0eded", alignSelf:"center", marginTop:30,flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:15, fontWeight:"700", marginTop:15, marginLeft:20,}}>My vehicle</Text>

           <Image
              style={{height:15, width:12, marginTop:17, marginRight:15}}
              source={require('../../../../assets/icon/right.png')}
           />
  </View>
       </TouchableOpacity>
       <View style={{height:50, width:"85%", backgroundColor:"#f0eded", alignSelf:"center", marginTop:30,flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:15, fontWeight:"700", marginTop:15, marginLeft:20,}}>Breakdown</Text>
        <TouchableOpacity>
           <Image
              style={{height:15, width:12, marginTop:17, marginRight:15}}
              source={require('../../../../assets/icon/right.png')}
           />
        </TouchableOpacity>
       </View>
       <TouchableOpacity  onPress={() => this.props.navigation.navigate('Accident')}>
       <View style={{height:50, width:"85%", backgroundColor:"#f0eded", alignSelf:"center", marginTop:30,flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:15, fontWeight:"700", marginTop:15, marginLeft:20,}}>Accident</Text>

           <Image
              style={{height:15, width:12, marginTop:17, marginRight:15}}
              source={require('../../../../assets/icon/right.png')}
           />

       </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('ServiceBooking')}>
       <View style={{height:50, width:"85%", backgroundColor:"#f0eded", alignSelf:"center", marginTop:30,flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:15, fontWeight:"700", marginTop:15, marginLeft:20,}}>Server Booking</Text>

           <Image
              style={{height:15, width:12, marginTop:17, marginRight:15}}
              source={require('../../../../assets/icon/right.png')}
           />
     
       </View>
       </TouchableOpacity>
    </View>
  );
    }
};

