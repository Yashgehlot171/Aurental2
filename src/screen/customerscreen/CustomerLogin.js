
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
            <View style={styles.container}>


                <SafeAreaView style={{ flex: 1, }}>
                    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

                    <View style={{ flex: 1, }}>
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
    <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Login</Text>

}

/>
                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5, flex: 1 }}>
                            <Image style={{ width: 220, height: 150, resizeMode: 'cover', marginTop: 15 }} source={require('../../../assets/appIcon2.jpg')} />

                            <TextInput
                                style={[styles.auth_textInput,]}
                                onChangeText={(email) => this.setState({ email })}
                                value={this.state.email}
                                placeholder="E-mail Address"
                                placeholderTextColor={Colors.dark_gry}
                                autoCapitalize='none' />


                            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ width: '95%', backgroundColor: Colors.gry_color, marginTop: 5, height: 45, flexDirection: 'row' }}>
                                    <TextInput
                                        style={[styles.auth_textInput1,]}
                                        onChangeText={(password) => this.setState({ password })}
                                        value={this.state.password}
                                        placeholder="Password"
                                        secureTextEntry={this.state.showpassword}
                                        placeholderTextColor={Colors.dark_gry}
                                        autoCapitalize='none' />

                                    {(this.state.showpassword == true) ?
                                        <View>
                                            <TouchableOpacity
                                                style={{ width: 30, height: 30 }}
                                                onPress={() => {
                                                    this.setState({ showpassword: false })
                                                }}>
                                                <Image
                                                    source={require('../../../assets/icon/eye-pass.png')}
                                                    style={{ width: 25, height: 21, marginTop: 10, resizeMode: 'contain', }}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        <TouchableOpacity
                                            style={{ width: 30, height: 30 }}
                                            onPress={() => {
                                                this.setState({ showpassword: true })
                                            }}>
                                            <Image
                                                source={require('../../../assets/icon/eye-pass.png')}
                                                style={{ width: 25, height: 21, marginTop: 10, resizeMode: 'contain', tintColor: Colors.introButton }}
                                            />
                                        </TouchableOpacity>
                                    }
                                </View>

                            </View>
                            <TouchableOpacity style={{ alignItems: 'flex-end', alignSelf: 'flex-end', marginTop: 5, marginRight: 5 }}
                                onPress={() => { this.props.navigation.navigate('ForgotPassword', { token: this.props.navigation.getParam('token') }) }}
                            >
                                <Text style={{ fontSize: 16, color: Colors.dark_gry }}>Forgot Password?</Text>
                            </TouchableOpacity>


                            <View style={{ alignItems: 'center', marginTop: 25 }}>
                                <TouchableOpacity style={styles.button_Style}
                                    onPress={() => {
                                        this.validation()
                                        //    this.props.navigation.navigate('CustomerApp')
                                    }}
                                >
                                    <Text style={{ fontSize: 16, color: Colors.introButtonLabel }}>Log in </Text>
                                </TouchableOpacity>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ backgroundColor: Colors.dark_gry, width: '40%', height: 1 }}></View>
                                    <Text style={{ marginTop: -8, color: Colors.dark_gry, marginHorizontal: 10 }}>OR</Text>
                                    <View style={{ backgroundColor: Colors.dark_gry, width: '40%', height: 1 }}></View>
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

                            <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('CustomerSignUp', { token: this.props.navigation.getParam('token') }) }}>
                                    <Text style={{ fontSize: 16, color: Colors.introButton }}>Don't have an account? Sign Up</Text></TouchableOpacity>
                            </View>
                        </View>
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
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    auth_textInput: {

        alignSelf: 'center',
        width: '95%',
        // borderWidth: 1,
        margin:5,
        backgroundColor: Colors.gry_color,

        borderBottomWidth: 0,
        height: 45,
        color: Colors.dark_gry,
        marginTop: 10, paddingLeft: 10

    },
    auth_textInput1: {
margin:5,
        alignSelf: 'center',
        width: '90%',
        // borderWidth: 1,
        backgroundColor: Colors.gry_color,
        paddingLeft: 10,
        borderBottomWidth: 0,
        height: 45,
        color: Colors.dark_gry,


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