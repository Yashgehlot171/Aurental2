
import React, { Component } from 'react'
import { TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ImageBackground, Image, ActivityIndicator } from 'react-native';
import Colors from '../../constant/Color';
import { Header, Icon, Avatar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showpassword: true
        }
    }

    validation = () => {
if(this.state.email == '' ){
alert('Please Enter Email Address ')
}

   
        else{
            // this.props.navigation.navigate('CustomerApp')
            this.loadIntialState();
        }
    }
    loadIntialState = async () => {
              
        var value = await AsyncStorage.getItem('user_token');
      // console.log('token',value)
      this.getDataUsingPost(value);
  }
    getDataUsingPost = () => {
        //POST json
        // console.log('dfgfdgdgdg',token)
        // let token =  AsyncStorage.getItem('user_token');
        let _data = { email:this.state.email,  }
        
        fetch('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:6060/api/v1/aurental/forgot_password', {
          method: "POST",
          body: JSON.stringify(_data),
          headers: {"Content-type": "application/json; charset=UTF-8",
          Authorization:this.props.navigation.getParam('token')
        }

        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("jso22222222222n",responseJson );
    
            if(responseJson.status===1){
                let user_info = responseJson.data
                let user_token = responseJson.token
                AsyncStorage.setItem('user_token', user_token)
                this.props.navigation.navigate('CustomerLogin')
            }
        })
        .catch((error) => {
          
        //   this.setState({ isLoading: false })
          console.error(error);
        });
      };

    render() {
        return (
            <View style={styles.container}>


                  <SafeAreaView style={{ flex: 1 ,}}>
                        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                  
                     <Header

statusBarProps={{ barStyle: 'dark-content' }}
height={85}
containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
backgroundColor={Colors.text_white}
placement={"left"}
leftComponent={
    <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', height: 25 }} onPress={() => this.props.navigation.goBack()}>
        <Image style={{ width: 25, height: 25, tintColor: '#000', marginLeft: 10, marginTop: 5, resizeMode: 'contain' }} source={require('../../../assets/icon/left.png')} />

    </TouchableOpacity>
}
centerComponent={
    <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Forgot Password</Text>

}

/>
                        <View style={{alignItems:'center',justifyContent:'center',marginTop:5,flex:1}}>
                        <Image style={{ width: 220, height: 150, resizeMode:'cover', marginTop:15 }} source={require('../../../assets/appIcon2.jpg')} />
                      
                          <TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
                                    placeholder="E-mail Address"
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none' />

                          
                        <View style={{alignItems:'center',marginTop:25}}>
                        <TouchableOpacity style={styles.button_Style}
       onPress={() => { this.validation() }}
                            >
                                <Text style={{ fontSize:16, color: Colors.introButtonLabel }}>Submit </Text>
                            </TouchableOpacity>
                       
                        </View>
                        </View>
                      
                    </SafeAreaView>
             
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor:'#fff',
        alignItems: 'center',

    },
    auth_textInput: {

        alignSelf: 'center',
        width: '80%',
        // borderWidth: 1,
        backgroundColor:Colors.gry_color,
  
        borderBottomWidth: 0,
        height: 45,
        color: Colors.dark_gry,
        marginTop: 10,paddingLeft:10

    },
    button_Style: {
        width: 280, height: 50, backgroundColor: Colors.introButton,
        borderRadius: 5, marginVertical: 25, alignItems: 'center',
        justifyContent: 'center'
    },
    white_button_Style: {
        width: 280, height: 50, backgroundColor: Colors.white_Button,
        borderRadius: 25, marginVertical: 15, alignItems: 'center',
        justifyContent: 'center'
    }
});