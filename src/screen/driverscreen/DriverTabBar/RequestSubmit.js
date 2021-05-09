import React, { useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Picker,
  StyleSheet
} from 'react-native';
import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../../constant/Color';
const screenD16 = ( { navigation} ) => {
    return(
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
    <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -7, height: 40 }}>Request</Text>

}

/>
<View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:5}}/>
            <View style={{alignItems:"center", marginBottom:105 }}>
               <Image
                    style={{height:70, width:70, alignSelf:"center", marginTop:105, marginBottom:35}}
                    source={require('../../../../assets/icon/submitted.png')}
                />
                <Text style={{textAlign:"center", fontSize:25, color:"gray",fontWeight:"700"}}>Submitted</Text>
                <Text style={{textAlign:"center", fontSize:13, color:"gray", marginBottom:75,padding:20}}>We will get back to you in 2 business days</Text>
           </View> 
           <TouchableOpacity style={styles.button_Style}
           onPress={() => navigation.navigate('HomeD')}>
             <Text style={{textAlign:"center", color:"white"}}>Back to Home</Text>
           </TouchableOpacity>
       </View> 
    )
}
 
export default screenD16;

const styles = StyleSheet.create({
    button_Style: {
      width: 280, height: 50, backgroundColor: Colors.introButton,
      borderRadius: 5, alignSelf: 'center',
      justifyContent: 'center'
  },
  })