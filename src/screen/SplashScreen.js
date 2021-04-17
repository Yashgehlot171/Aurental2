import React, { Component } from 'react'
import { Platform, StyleSheet,StatusBar, Text, View, Alert, ImageBackground, Image, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class App extends Component {


    // componentDidMount() {
    //     setTimeout(() => {
    //         //  this._retrieveData();{}
    //         {
    //             this.props.navigation.navigate("ChooseRole");
    //         }
    //     }, 3000)
    // }
    componentWillMount = async () => {
        // const data = await this.performTimeConsumingTask();
        // if (data !== null) {
          this.loadIntialState();
        // }
      }
    
      performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            3000
          )
        )
      }
    loadIntialState = async () => {
        try {
          var value = await AsyncStorage.getItem('user_token');
          if (value == null) {
            this.props.navigation.navigate('ChooseRole');
          } else {
            this.props.navigation.navigate('CustomerApp')
          }
        }
        catch (error) {
          this.props.navigation.replace('ChooseRole');
        }
      }

    render() {
        return (
            <View style={styles.container}>
                  <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
              
                  <ImageBackground style={{width:'100%',height:'100%',flex:1, }}resizeMode='contain' source={require('../../assets/appIcon2.jpg')}>


                    <View style={{
                        flex: 1, justifyContent:'center',alignItems:'center'
                    }} >
{/*                 
                <Image  style={{width:'100%',height:150,resizeMode:'contain',marginTop:30}} source={require('../Assets/fya_logoActive.png')}></Image> */}
                {/* <Image  style={{width:'100%',height:65,resizeMode:'contain',marginTop:5}} source={require('../Assets/planet.png')}></Image> */}


            </View>
            </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',backgroundColor:'#fff'
      
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    headerStyle: {
        width: 150,
        height: 150,
    },
});