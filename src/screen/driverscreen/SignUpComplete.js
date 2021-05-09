
import React, { Component } from 'react'
import { TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ImageBackground, Image, ActivityIndicator,Modal } from 'react-native';
import Colors from '../../constant/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../Loader/index';
import { Header, Icon, Avatar } from 'react-native-elements';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showpassword: true,isLoading: false
        }
    }

    //     validation = () => {
    // if(this.state.email == ''  && this.state.password == ''){
    // alert('Please Enter Email and Password')
    // }
    // else if(this.state.email == ''){
    //     alert('Please Enter Email')
    //     }
    //     else if(this.state.password == ''){
    //         alert('Please Enter Password')
    //         }
    //         else{
    //             // this.props.navigation.navigate('CustomerApp')
    //             this.loadIntialState();
    //         }
    //     }

    validation = () => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (this.state.email === '' && this.state.password === '' && this.state.name === '' && this.state.mobile === '') {
            // this.setState({ isLoading: false })
            alert('Please Enter all field')
        }
        else if (this.state.email === '') {
            alert('Please Enter your Email Id')
        }

        else if (this.state.password === '') {
            alert('Please Enter your Password')
        }

        else if (reg.test(this.state.email) === false) {
            alert('Please Enter Correct Email Id')
        }

        else {
            this.loadIntialState();
        }
    }


    loadIntialState = async () => {

        var value = await AsyncStorage.getItem('user_token');
        // console.log('token',value)
        this.getDataUsingPost(value);
    }
    getDataUsingPost = (value) => {
        this.setState({ isLoading: true })
        let _data = { email: this.state.email, password: this.state.password, }

        fetch('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:6060/api/v1/aurental/login', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: this.props.navigation.getParam('token')
            }

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("response", responseJson);
                this.setState({ isLoading: false })
                if (responseJson.status === 1) {
                    let user_info = responseJson.data
                    let user_token = responseJson.token
                    AsyncStorage.setItem('user_token', user_token)
                    this.props.navigation.navigate('CustomerApp')
                }
                else if (responseJson.status === 0) {
                    alert(responseJson.message)
                }
            })
            .catch((error) => {

                  this.setState({ isLoading: false })
                console.error(error);
            });
    };

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>

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
    <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Sign Up</Text>

}

/>
<View style={{ flex: 1 }}>
      <View style={{ flex: 1,  }} />
      <Text style={{fontSize:30,textAlign:'center',color:Colors.dark_gry,alignItems:'center',marginHorizontal:15}}>
          Set your account to complete your profile
      </Text>
      <View style={{ flex: 3, }} />
      <View style={{alignItems:'center'}}>
     <View style={{alignItems:'center',width:'65%'}}>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Image style={{ width: 18, height: 18, tintColor:Colors.dark_gry, marginRight: 10, resizeMode: 'contain' }} source={require('../../../assets/icon/left.png')} />
<Text style={{textAlign:'center',color:Colors.dark_gry,fontSize:16,fontWeight:'bold',marginTop:-3}}>Prev</Text>
<View style={{height:30,width:1,backgroundColor:'#000',marginHorizontal:10,marginTop:-5}}/>
<TouchableOpacity onPress ={()=>{this.props.navigation.navigate('DriverApp')}}> 
<Text style={{textAlign:'center',color:'#000',fontSize:16,fontWeight:'bold',marginTop:-3}}>Next</Text>
</TouchableOpacity>
<Image style={{ width: 18, height: 18, tintColor:Colors.dark_gry, marginLeft: 10,  resizeMode: 'contain' }} source={require('../../../assets/icon/right-arrow.png')} />
</View>
</View>
     </View>
      <View style={{ flex: 2,}} />
      <TouchableOpacity>
          <Text style={{color:Colors.dark_gry,textAlign:'center',fontSize:16,marginBottom:15}}>Don't have an account? <Text style={{color:Colors.introButton}}>Sign Up</Text></Text>
      </TouchableOpacity>
    </View>
</View>
)
}
}