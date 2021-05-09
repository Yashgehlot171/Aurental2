import React, { Component } from 'react';  
import { ImageBackground } from 'react-native';
import {ScrollView, View, Image, Text,TouchableOpacity } from 'react-native';  

import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../../constant/Color';
  
export default class Wallet extends Component {  
 
  
    render() {  
        return (  
            
          <View style={{flex:1,backgroundColor:'#fff'}}> 

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
    <Text style={{ width: '100%', fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -7, height: 40, fontWeight:"bold" }}>Route</Text>

}

/>
<View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:1}}/>

<ImageBackground  
 style={{ width:'100%', height:'100%', marginBottom: 5,resizeMode:'cover' ,flex:1 }}
  source={require('../../../../assets/Route.png')}
>

</ImageBackground>

</View>
        )
}
}