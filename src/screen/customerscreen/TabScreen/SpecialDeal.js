
import React, { Component } from 'react'
import { TouchableOpacity, TextInput, ScrollViewBase } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ImageBackground, Image, FlatList, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../../constant/Color';

import { Header, Icon, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Loader from '../../../../Loader/index';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showpassword: true, isLoading: false,
            Data: [

            ],

        }
    }
    componentWillMount = async () => {
        var value = await AsyncStorage.getItem('user_token');
        // const data = await this.performTimeConsumingTask();
        // if (data !== null) {
        console.log('token', value)
        this.getDataUsingPost(value);
        // }
    }


    getDataUsingPost = (value) => {
        //POST json
        // let _data = { device_id: 'dwscngkdddnn44ffff', device_name:brand ,app_type: 2 ,push_token:'sjdsfbkkasbdbd' }
        this.setState({ isLoading: true })
        fetch('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:6060/api/v1/aurental/promotion_list', {
            method: "POST",
            // body: JSON.stringify(_data),
            // 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl9pZCI6OSwidHlwZSI6ImRldmljZSIsImlhdCI6MTYxODk3NzM0M30.FZB3CfNkAR4CYOUD6H54Ml0DvAAUGTKq7R_8fLUbdOM',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: value
            }
            // headers: {
            //   'Authorization': 'Bearer ' + user_token,
            //   Accept: 'application/json',
            //   'Content-Type': 'application/json'
            // },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("jso22222222222YASH", responseJson);
                this.setState({ isLoading: false })
                if (responseJson.status === 1) {
                    let user_info = responseJson.results
                    // let user_token = responseJson.token
                    // AsyncStorage.setItem('user_token', user_info)
                    console.log('dfd', user_info)
                    this.setState({ Data: user_info })
                    // // this.props.navigation.navigate('CustomerLogin')
                    // console.log('data111',this.state.user_data)
                }
            })
            .catch((error) => {
                this.setState({ isLoading: false })
                //   this.setState({ isLoading: false })
                console.error(error);
            });
    };
    renderTrainer = ({ item, index }) => (
        <View style={{ padding: 10, flex: 1, }}>
            <Image style={{ width: '100%', height: 140, marginVertical: 10, borderRadius: 5 }} source={{ uri: item.promo_banner }} />
            <Text style={{ fontSize: 16, color: Colors.dark_gry, fontWeight: 'bold' }}>{item.promo_title}</Text>
            <Text style={{ color: Colors.dark_gry }}>{item.promo_description}</Text>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>



                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <Header

                    statusBarProps={{ barStyle: 'dark-content' }}
                    height={80}
                    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
                    backgroundColor={Colors.text_white}
                    placement={"left"}
                    leftComponent={
                        <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', height: 25 }} onPress={() => this.props.navigation.goBack()}>
                            <Image style={{ width: 25, height: 25, tintColor: '#000', marginLeft: 10, marginTop: 5, resizeMode: 'contain' }} source={require('../../../../assets/icon/left.png')} />

                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={{ width: '100%', color: Colors.dark_gry, fontSize: 20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Special Deals</Text>

                    }
                // rightComponent={
                //     <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', height: 25 }} onPress={() => this.props.navigation.navigate('')}>
                //         <Image style={{ width: 30, height: 30, tintColor: '#000', marginRight: 10, marginTop: 5, resizeMode: 'contain' }} source={require('../../../../assets/icon/notification.png')} />

                //     </TouchableOpacity>
                // }
                />
                <View style={{ backgroundColor: '#000', width: '100%', height: 1, marginVertical: 1 }} />
                <FlatList
                    //  horizontal
                    style={{ width: '100%', flex: 1 }}

                    showsVerticalScrollIndicator={false}
                    data={this.state.Data}
                    renderItem={this.renderTrainer}
                // ListEmptyComponent={this.ListEmpty}
                />
                {this.state.isLoading ? <Modal transparent={true}><Loader /></Modal> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',


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