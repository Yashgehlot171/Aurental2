
import React, { Component } from 'react'
import { TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ImageBackground, Image, ActivityIndicator ,Modal} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../constant/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header, Icon, Avatar } from 'react-native-elements';
import Loader from '../../../Loader/index';
import CheckBox from 'react-native-check-box';
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
            showpassword: true,isLoading: false
        }
    }
    validation = () => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (this.state.email === '' && this.state.password === '' && this.state.name === '' && this.state.mobile === '' && this.state.address === '') {
            // this.setState({ isLoading: false })
            alert('Please Enter all field')
        }
        else if (this.state.email === '') {
            alert('Please Enter your Email Id')
        }
        else if (this.state.mobile === '') {
            alert('Please Enter your Mobile Number')
        }
        else if (this.state.password === '') {
            alert('Please Enter your Password ')
        }
        else if (this.state.name === '') {
            alert('Please Enter your Name')
        }
        else if (this.state.address === '') {
            alert('Please Enter your address ')
        }
        else if (reg.test(this.state.email) === false) {
            alert('Please Enter Correct Email Id')
        }
        else if (phoneno.test(this.state.mobile) === false) {
            alert('Please Enter Correct Mobile No')
        }
        else {
            this.loadIntialState();
        }
    }

            loadIntialState = async () => {
              
                  var value = await AsyncStorage.getItem('user_token');
                console.log('token',value)
                this.getDataUsingPost(value);
            }

    getDataUsingPost = (value) => {
        //POST json
        this.setState({ isLoading: true })
        // {console.log('token------',token)}
        let _data = { email:this.state.email, password:this.state.password ,user_type:1 ,mobile_no:this.state.mobile,user_name:this.state.name,address:this.state.address }
        console.log('signup reucst data',_data);
        console.log('Authorization token',value)
        fetch('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:6060/api/v1/aurental/sign_up', {
          method: "POST",
          body: JSON.stringify(_data),
          headers: {"Content-type": "application/json; charset=UTF-8",
          Authorization:this.props.navigation.getParam('token')
        }
        })
       
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("RESPONSE SIGNUP",responseJson );
            this.setState({ isLoading: false })
            if(responseJson.status===1){
                this.setState({ isLoading: false })
                // let user_info = responseJson.data
                // let user_token = responseJson.token
                let user_token = responseJson.token
                AsyncStorage.setItem('user_token', user_token)
                this.props.navigation.navigate('CustomerApp')
            }
            else if(responseJson.status===0){
                alert(responseJson.message)
                            }
        })
        .catch((error) => {
            this.setState({ isLoading: false })
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
<ScrollView>
                        <View style={{alignItems:'center',justifyContent:'center',marginTop:5,flex:1,padding:10}}>
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
                                    <TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(optionaladdress) => this.setState({ optionaladdress })}
                                    value={this.state.optionaladdress}
                                    placeholder="Mobile Number"
                                    keyboardType="phone-pad"
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none'/>
                                    <TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(optionaladdress) => this.setState({ optionaladdress })}
                                    value={this.state.optionaladdress}
                                    placeholder="Company"
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none'/>

                                <View style={{alignSelf: 'center', width: '80%', backgroundColor:Colors.gry_color, color: Colors.dark_gry, marginTop: 40,padding:15}}>
                                    <Text style={{fontSize:18,color:'grey'}}>Identify Document</Text>
                                    <Text style={{color:"grey",fontSize:12}}>Take a photo on you document to verify your identity</Text>
                                    <TouchableOpacity style={styles.button_Style}
                                      onPress={() => { this.props.navigation.navigate('') }}>
                                      <Text style={{ fontSize:16, color: Colors.introButtonLabel }}>Photo Document </Text>
                                    </TouchableOpacity>
                                </View>

                                <Text style={{ fontSize:16, color: Colors.dark_gry,fontWeight:'bold' ,textAlign:'left',alignSelf:'flex-start',padding:7, marginTop:20}}>Work Details</Text>
                                
                                <TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(optionaladdress) => this.setState({ optionaladdress })}
                                    value={this.state.optionaladdress}
                                    placeholder="Working days"
                                    keyboardType="phone-pad"
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none'/>

                                    <View style={{flexDirection:"row", justifyContent:"space-evenly", width:"100%"}}>
                                    <TextInput
                                    style={{alignSelf: 'center',
                                    width: '46%',
                                    // borderWidth: 1,
                                    backgroundColor:Colors.gry_color,
                              
                                    borderBottomWidth: 0,
                                    height: 45,
                                    color: Colors.dark_gry,
                                    marginTop: 10,paddingLeft:10, marginLeft:-5}}
                                    onChangeText={(optionaladdress) => this.setState({ optionaladdress })}
                                    value={this.state.optionaladdress}
                                    placeholder="Start Time"
                                    keyboardType="phone-pad"
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none'/>

                                   <TextInput
                                    style={{alignSelf: 'center',
                                    width: '46%',
                                    // borderWidth: 1,
                                    backgroundColor:Colors.gry_color,
                              
                                    borderBottomWidth: 0,
                                    height: 45,
                                    color: Colors.dark_gry,
                                    marginTop: 10,paddingLeft:10, marginRight:-5}}
                                    onChangeText={(optionaladdress) => this.setState({ optionaladdress })}
                                    value={this.state.optionaladdress}
                                    placeholder="End Time"
                                    keyboardType="phone-pad"
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none'/>
                                    </View>


                                    <TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(optionaladdress) => this.setState({ optionaladdress })}
                                    value={this.state.optionaladdress}
                                    placeholder="Start Location"
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none'/>

                                  <TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(optionaladdress) => this.setState({ optionaladdress })}
                                    value={this.state.optionaladdress}
                                    placeholder="End Location"
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none'/>
                                     
                                     <View style={{flexDirection:"row", justifyContent:"space-evenly", width:"100%"}}>
                                     <CheckBox
                                     style={{padding:15,color:'grey',marginLeft:5}}
                                       isChecked={this.state.termsCheck}
                                      onClick={() => {
                                        this.setState({termsCheck: !this.state.termsCheck});
                                           }}
                                          />
                                    <Text style={{color:"grey", padding:15,marginRight:15}}>By proceeding, I agree that Aurental can collet, use, and disclose 
                                         the informationprovided by me in accordance with the Privacy 
                                         Policy and I fully comply with Terms & Conditions which I have 
                                         read and understand.</Text>
                                     </View>
                                     
                        <View style={{alignItems:'center',marginTop:10}}>
                        <TouchableOpacity style={styles.button_Style}
                           onPress={() => { this.props.navigation.navigate('SignUpComplete') }}
                            >
                                <Text style={{ fontSize:16, color: Colors.introButtonLabel }}>Sign Up </Text>
                            </TouchableOpacity>
                         
                       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                           <View style={{backgroundColor:Colors.dark_gry,width:'40%',height:1}}></View>
                           <Text style={{marginTop:-8,color:Colors.dark_gry,marginHorizontal:10}}>or</Text>
                           <View style={{backgroundColor:Colors.dark_gry,width:'40%',height:1}}></View>
                       </View>

                       <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 25, width: '90%' }}>
                                    <View style={{ width: 90, height: 60, borderWidth: 1, borderColor: '#CCC', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ width: 50, height: 35, resizeMode: 'contain', }} source={require('../../../assets/apple.png')} />
                                    </View>
                                    <View style={{ width: 90, height: 60, borderWidth: 1, borderColor: '#CCC', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ width: 50, height: 35, resizeMode: 'contain', }} source={require('../../../assets/FB.png')} />
                                    </View>
                                    <View style={{ width: 90, height: 60, borderWidth: 1, borderColor: '#CCC', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ width: 50, height: 35, resizeMode: 'contain', }} source={require('../../../assets/google.png')} />
                                    </View>
                                </View>
                        </View>
                        </View>
                        <View style={{justifyContent:'flex-end',alignItems:'center',marginBottom:10}}>
                           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CustomerLogin')}}>
                            <Text style={{fontSize:16,color:Colors.dark_gry}}>I have an account?<Text  style={{fontSize:16,color:Colors.introButton}}> Log In.</Text> </Text></TouchableOpacity>
                        </View>
                        </ScrollView>
                        </View>
                        {this.state.isLoading ? <Modal transparent={true}><Loader /></Modal> : null}
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