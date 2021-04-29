import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,Modal,StatusBar
} from 'react-native';
import Colors from '../../../constant/Color';
import { Header, Icon, Avatar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WebView } from 'react-native-webview';
import Loader from '../../../../Loader/index';
import { SafeAreaView } from 'react-native';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showpassword: true,
            user_data:[],isLoading: false
        }
    }
  
    render() {
        return (
   <View style={{flex:1,backgroundColor:'#fff'  }}>
       {/* <SafeAreaView/>
       <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
       */}
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
    <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Terms & Conditions</Text>

}

/>
<View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:10}}/>


<WebView style={{padding:10,marginHorizontal:15}} source={{ uri: 'http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:6060/content/terms_and_conditions.html' }} />

   </View>
  );
};

}