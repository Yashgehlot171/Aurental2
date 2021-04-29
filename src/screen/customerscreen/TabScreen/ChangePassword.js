import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity, Modal, StatusBar, TextInput, StyleSheet, SafeAreaView
} from 'react-native';
import Colors from '../../../constant/Color';
import { Header, Icon, Avatar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../../Loader/index';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldpassword: '',
            password: '',
            showpassword: true,
            user_data: [], isLoading: false
        }
    }


    validation = () => {

        if (this.state.oldpassword === '') {
            alert('Please Enter your Old Password')
        }

        else if (this.state.password === '') {
            alert('Please Enter your New Password')
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
        //POST json
        // console.log('dfgfdgdgdg',token)
        // let token =  AsyncStorage.getItem('user_token');
        
        this.setState({ isLoading: true })
        let _data = { password: this.state.password, }

        fetch('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:6060/api/v1/aurental/reset_password', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: value
            }

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("jso22222222222n", responseJson);

                this.setState({ isLoading: false })
                if (responseJson.status === 1) {
                    let user_info = responseJson.data
                    let user_token = responseJson.token
                    AsyncStorage.setItem('user_token', user_token)
                    this.props.navigation.navigate('More')
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
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
                        <Text style={{ width: '100%', color: Colors.dark_gry, fontSize: 20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Change Password</Text>

                    }

                />
                <View style={{ backgroundColor: '#000', width: '100%', height: 0.5, marginVertical: 10 }} />

                <View style={{ padding: 21, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                 
                    <View style={{ width: '95%', backgroundColor: Colors.gry_color, marginTop: 5, height: 45, flexDirection: 'row' }}>
                        <TextInput
                            style={[styles.auth_textInput1,]}
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                            placeholder="Enter New Password"
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
                                        source={require('../../../../assets/icon/eye-pass.png')}
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
                                    source={require('../../../../assets/icon/eye-pass.png')}
                                    style={{ width: 25, height: 21, marginTop: 10, resizeMode: 'contain', tintColor: Colors.introButton }}
                                />
                            </TouchableOpacity>
                        }
                    </View>
                    <View style={{ marginTop: 10, width: '100%', marginLeft: 13, }}>
                        <TouchableOpacity
                            onPress={() => {
                                //  this.props.navigation.navigate('PrivacyPolicy')
                                this.validation();
                                }}
                            style={{ height: 45, width: "95%", borderColor: "gray", borderWidth: 1, borderRadius: 5, marginTop: 20, backgroundColor: Colors.introButton }}>
                            <Text style={{ textAlign: "center", marginTop: 14, color: '#fff', fontWeight: 'bold' }}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {this.state.isLoading ? <Modal transparent={true}><Loader /></Modal> : null}
            </View>
        );
    };

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
        backgroundColor: Colors.gry_color,

        borderBottomWidth: 0,
        height: 45,
        color: Colors.dark_gry,
        marginTop: 10, paddingLeft: 10

    },
    auth_textInput1: {

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