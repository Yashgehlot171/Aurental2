
import React, { Component } from 'react'
import { TouchableOpacity, TextInput, ScrollViewBase } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ImageBackground, Image, AsyncStorage, FlatList } from 'react-native';
import Colors from '../../../constant/Color';

import { Header, Icon, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showpassword: true,
            Data: [
                {
                    headingText: 'Rent Commercial Vans & Lorries with Vibrance',
                    titleText: 'Short Term Leases Available, Daily, Weekly, or Monthly',
                    image:require('../../../../assets/car1.png')
                },
                {
                    headingText: 'Rent Commercial Vans & Lorries with Vibrance',
                    image:require('../../../../assets/car2.png'),
                    titleText: 'Short Term Leases Available, Daily, Weekly, or Monthly',
                },
                {
                    headingText: 'Rent Commercial Vans & Lorries with Vibrance',
                  
                    titleText: 'Short Term Leases Available, Daily, Weekly, or Monthly',
                    image:require('../../../../assets/car1.png')
                },
                {
                    headingText: 'Rent Commercial Vans & Lorries with Vibrance',
                 
                    titleText: 'Short Term Leases Available, Daily, Weekly, or Monthly',
                    image:require('../../../../assets/car2.png')
                },
                {
                    headingText: 'Rent Commercial Vans & Lorries with Vibrance',
                  
                    titleText: 'Short Term Leases Available, Daily, Weekly, or Monthly',
                    image:require('../../../../assets/car2.png')
                },
             
            ],

        }
    }

    renderTrainer = ({ item, index }) => (
        <View style={{ padding: 5, flex: 1, }}>
            <Image style={{ width:'100%', height: 120, marginVertical:10 }}  source={item.image}/>
<Text style={{fontSize:16,color:Colors.dark_gry,fontWeight:'bold'}}>{item.headingText}</Text>
<Text style={{color:Colors.dark_gry}}>{item.titleText}</Text>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>


                 
                        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
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
                        <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Special Deals</Text>

                    }
                    // rightComponent={
                    //     <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', height: 25 }} onPress={() => this.props.navigation.navigate('')}>
                    //         <Image style={{ width: 30, height: 30, tintColor: '#000', marginRight: 10, marginTop: 5, resizeMode: 'contain' }} source={require('../../../../assets/icon/notification.png')} />

                    //     </TouchableOpacity>
                    // }
                />
                <View style={{backgroundColor:'#000',width:'100%',height:1,marginVertical:10}}/>
                <FlatList
                            //  horizontal
                            style={{ width: '100%', flex: 1 }}

                            showsVerticalScrollIndicator={false}
                            data={this.state.Data}
                            renderItem={this.renderTrainer}
                        // ListEmptyComponent={this.ListEmpty}
                        />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor:'#fff',
      

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