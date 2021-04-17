
import React, { Component } from 'react'
import { TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ImageBackground, Image, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../constant/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmpassword:'',
            name:'',
            mobile:'',
            address:'',
            optionaladdress:'',
            showpassword: true
        }
    }
    validation = () => {
        if(this.state.email == ''  && this.state.password == ''){
        alert('Please Enter All Fields')
        }
        else if(this.state.email == ''){
            alert('Please Enter Email')
            }
          
            else if(this.state.password == ''){
                alert('Please Enter Password')
                }
                else if(this.state.mobile == ''){
                    alert('Please Enter Mobile No')
                    }
                    else if(this.state.password !== this.state.confirmpassword){
                        alert('Password and confirm password not same')
                        }
                else{
                 this.loadIntialState();
                }
            }

            loadIntialState = async () => {
              
                  var value = await AsyncStorage.getItem('user_token');
                // console.log('token',value)
                this.getDataUsingPost(value);
            }

    getDataUsingPost = (value) => {
        //POST json
       
        // {console.log('token------',token)}
        let _data = { email:this.state.email, password:this.state.password ,user_type:1 ,mobile_no:this.state.mobile }
        
        fetch('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:6060/api/v1/aurental/sign_up', {
          method: "POST",
          body: JSON.stringify(_data),
          headers: {"Content-type": "application/json; charset=UTF-8",
          Authorization:value
        }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("jso22222222222n",responseJson );
    
            if(responseJson.status===1){
                // let user_info = responseJson.data
                // let user_token = responseJson.token
               
                this.props.navigation.navigate('CustomerApp')
            }
            else if(responseJson.status===0){
                alert(responseJson.message)
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
                     
                     <View style={{flex:1,}}>
<ScrollView>
                      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
                        <TouchableOpacity style={{width:30,height:24,}} onPress={()=>{
                            this.props.navigation.goBack()
                        }}>
                           <Image style={{ width: 23, height: 24,marginLeft:5, resizeMode: 'contain',tintColor:Colors.dark_gry }} source={require('../../../assets/icon/left.png')} />
                           </TouchableOpacity>
                           <Text style={{fontSize:18,fontWeight:'bold',color:Colors.text_black,}}>Sign Up</Text>
                           <Text style={{fontSize:18,fontWeight:'bold',color:Colors.text_black,}}></Text>
                           
                           </View> 
                        <View style={{alignItems:'center',justifyContent:'center',marginTop:5,flex:1}}>
                        <Image style={{ width: 230, height: 100, resizeMode: 'cover',  }} source={require('../../../assets/appIcon2.jpg')} />
                      
                          <TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
                                    placeholder="E-mail Address"
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none' />

<TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(mobile) => this.setState({ mobile })}
                                    value={this.state.mobile}
                                    placeholder="Mobile Number"
                                    keyboardType="phone-pad"
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none' />
                            <View style={{ width: '100%', flexDirection: 'row' }}>
                               <View style={{marginRight:-20,width:'100%'}}>
                                <TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(password) => this.setState({ password })}
                                    value={this.state.password}
                                    placeholder="Password"
                                    secureTextEntry={this.state.showpassword}
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none' />
</View>
                                {(this.state.showpassword == true) ?
                                    <View>
                                        <TouchableOpacity

                                            onPress={() => {
                                                this.setState({ showpassword: false })
                                            }}>
                                            <Image
                                                source={require('../../../assets/icon/eye-pass.png')}
                                                style={{ width: 25, height: 21, marginTop: 20, marginLeft:-25,resizeMode:'contain'  }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    <TouchableOpacity

                                        onPress={() => {
                                            this.setState({ showpassword: true })
                                        }}>
                                        <Image
                                            source={require('../../../assets/icon/eye-pass.png')}
                                            style={{ width: 25, height: 21, marginTop: 20, marginLeft:-25,resizeMode:'contain',tintColor:Colors.introButton }}
                                        />
                                    </TouchableOpacity>
}

                            </View>
                            <View style={{ width: '100%', flexDirection: 'row' }}>
                               <View style={{marginRight:-20,width:'100%'}}>
                                <TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(confirmpassword) => this.setState({ confirmpassword })}
                                    value={this.state.confirmpassword}
                                    placeholder="Confirm Password"
                                    secureTextEntry={this.state.showpassword}
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none' />
</View>
                                {(this.state.showpassword == true) ?
                                    <View>
                                        <TouchableOpacity

                                            onPress={() => {
                                                this.setState({ showpassword: false })
                                            }}>
                                            <Image
                                                source={require('../../../assets/icon/eye-pass.png')}
                                                style={{ width: 25, height: 21, marginTop: 20, marginLeft:-25,resizeMode:'contain'  }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    <TouchableOpacity

                                        onPress={() => {
                                            this.setState({ showpassword: true })
                                        }}>
                                        <Image
                                            source={require('../../../assets/icon/eye-pass.png')}
                                            style={{ width: 25, height: 21, marginTop: 20, marginLeft:-25,resizeMode:'contain',tintColor:Colors.introButton }}
                                        />
                                    </TouchableOpacity>
}

                            </View>
                       
                                <Text style={{ fontSize:16, color: Colors.dark_gry,fontWeight:'bold' ,textAlign:'left',alignSelf:'flex-start',padding:7}}>Personal Information</Text>
                    
                                <TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(name) => this.setState({ name })}
                                    value={this.state.name}
                                    placeholder="Name"
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none' />
                                                              <TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(address) => this.setState({ address })}
                                    value={this.state.address}
                                    placeholder="Address"
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none' />
                                                              <TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(optionaladdress) => this.setState({ optionaladdress })}
                                    value={this.state.optionaladdress}
                                    placeholder="Optional Address"
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none' />
                        
                        <View style={{alignItems:'center',marginTop:10}}>
                        <TouchableOpacity style={styles.button_Style}
       onPress={() => { this.validation() }}
                            >
                                <Text style={{ fontSize:16, color: Colors.introButtonLabel }}>Sign Up </Text>
                            </TouchableOpacity>
                         
                       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                           <View style={{backgroundColor:Colors.dark_gry,width:'40%',height:1}}></View>
                           <Text style={{marginTop:-8,color:Colors.dark_gry,marginHorizontal:10}}>or</Text>
                           <View style={{backgroundColor:Colors.dark_gry,width:'40%',height:1}}></View>
                       </View>

                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <Image style={{ width:80, height:35, resizeMode: 'contain', marginVertical: 25 ,}} source={require('../../../assets/apple.png')} />
                            <Image style={{ width:80, height:35, resizeMode: 'contain', marginVertical: 25 ,}} source={require('../../../assets/FB.png')} />
                            <Image style={{ width:80, height:35, resizeMode: 'contain', marginVertical: 25 ,}} source={require('../../../assets/google.png')} />
                       </View>
                        </View>
                        </View>
                        <View style={{justifyContent:'flex-end',alignItems:'center'}}>
                           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CustomerLogin')}}>
                            <Text style={{fontSize:16,color:Colors.dark_gry}}>I have an account?<Text  style={{fontSize:16,color:Colors.introButton}}> Sign In.</Text> </Text></TouchableOpacity>
                        </View>
                        </ScrollView>
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
        width: '95%',
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