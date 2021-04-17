
import React, { Component } from 'react'
import { TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ImageBackground, Image, ActivityIndicator } from 'react-native';
import Colors from '../constant/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';
import BASE_URL from '../constant/BaseUrl';
// or ES6+ destructured imports

import { getUniqueId, getManufacturer } from 'react-native-device-info';
let brand = DeviceInfo.getBrand();
let deviceId = DeviceInfo.getDeviceId();
let deviceToken = DeviceInfo.getDeviceToken();




export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showpassword: true
        }
    }
   getDataUsingPost = () => {
    //POST json
    let _data = { device_id: 'dwscngkdddnn44ffff', device_name:brand ,app_type: 2 ,push_token:'sjdsfbkkasbdbd' }
    
    fetch('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:6060/api/v1/aurental/device_register', {
      method: "POST",
      body: JSON.stringify(_data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log("jso22222222222n",responseJson );

        if(responseJson.status===1){
            let user_info = responseJson.data
            let user_token = responseJson.token
            AsyncStorage.setItem('user_token', user_token)
            console.log('dfd',user_token)
            this.props.navigation.navigate('CustomerLogin')
        }
    })
    .catch((error) => {
      
    //   this.setState({ isLoading: false })
      console.error(error);
    });
  };
    // onLoginPressHandle =  () => {
    
    //     let _data = { device_id: 'dwscngkdddnn44ffff', device_name:'moto' ,app_type: 2 ,push_token:'sjdsfbkkasbdbd' }
    
    //     fetch('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:6060/api/v1/aurental/device_register', {
    //       method: "POST",
    //       body: JSON.stringify(_data),
    //       headers: {"Content-type": "application/json; charset=UTF-8"}
    //     })
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //           this.setState({ isLoading: false })
    //           console.log("responseJson onLoginPressHandle", responseJson)
    //           if (responseJson.status=== 1) {
    //             let user_info = responseJson.data
    //             let user_token = responseJson.token
    //             console.log("Token",user_token)
    //             AsyncStorage.setItem('user_token', user_token)
    //             AsyncStorage.setItem('user_info', JSON.stringify(user_info))
    //             // Toast.show('Login successfully', {
    //             //   shadow: true,
    //             //   animation: true, duration: Toast.durations.SHORT, opacity: 0.8,
    //             //   position: Toast.positions.BOTTOM,
    //             // });
    //             alert('dfgdfgdfg')
    //             this.props.navigation.navigate('Main')
    //           } if (responseJson.code === 0) {
    //               alert('device not register')
    //             // Toast.show(responseJson.message, {
    //             //   shadow: true,
    //             //   animation: true, duration: Toast.durations.SHORT, opacity: 0.8,
    //             //   position: Toast.positions.BOTTOM,
    //             // });
    //           }
    //         })
    //         .catch((error) => {
    //             alert('fgvf')
    //         //   this.setState({ isLoading: false })
    //           console.error(error);
    //         });
        
    //   };
    

    render() {
        return (
            <View style={styles.container}>


                  <SafeAreaView style={{ flex: 1 ,}}>
                        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                     
                     <View style={{flex:1,padding:14,alignItems:'center',justifyContent:'center'}}>
                     
                           <Image style={{ width: 80, height: 80,marginLeft:5, resizeMode: 'contain',marginVertical:25 }} source={require('../../assets/car.png')} />
                           <TouchableOpacity style={styles.button_Style}
    onPress={() => { alert('working')}}
                            >
                                <Text style={{ fontSize:16, color: Colors.introButtonLabel }}>Are you a driver? </Text>
                            </TouchableOpacity>

                            <Image style={{ width: 80, height: 80,marginLeft:5, resizeMode: 'contain',marginVertical:25 }} source={require('../../assets/product.png')} />
                           <TouchableOpacity style={styles.button_Style}
   
       onPress={() => { 
           this.getDataUsingPost();
        // this.props.navigation.navigate('CustomerLogin')

         }}
                            >
                                <Text style={{ fontSize:16, color: Colors.introButtonLabel }}>Have parcel to deliver?</Text>
                            </TouchableOpacity>
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

// React Native Fetch – To make HTTP API call in React Native
// https://aboutreact.com/react-native-http-networking/

// import React in our code
// import React from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   TouchableOpacity,
//   Text,
// } from 'react-native';

// const App = () => {
//   const getDataUsingGet = () => {
//     //GET request
//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//       method: 'GET',
//       //Request Type
//     })
//       .then((response) => response.json())
//       //If response is in json then in success
//       .then((responseJson) => {
//         //Success
//         alert(JSON.stringify(responseJson));
//         console.log(responseJson);
//       })
//       //If response is not in json then in error
//       .catch((error) => {
//         //Error
//         alert(JSON.stringify(error));
//         console.error(error);
//       });
//   };

//   const getDataUsingPost = () => {
//     //POST json
//     var dataToSend = {title: 'foo', body: 'bar', userId: 1};
//     //making data to send on server
//     var formBody = [];
//     for (var key in dataToSend) {
//       var encodedKey = encodeURIComponent(key);
//       var encodedValue = encodeURIComponent(dataToSend[key]);
//       formBody.push(encodedKey + '=' + encodedValue);
//     }
//     formBody = formBody.join('&');
//     //POST request
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST', //Request Type
//       body: formBody, //post body
//       headers: {
//         //Header Defination
//         'Content-Type': 
//           'application/x-www-form-urlencoded;charset=UTF-8',
//       },
//     })
//       .then((response) => response.json())
//       //If response is in json then in success
//       .then((responseJson) => {
//         alert(JSON.stringify(responseJson));
//         console.log(responseJson);
//       })
//       //If response is not in json then in error
//       .catch((error) => {
//         alert(JSON.stringify(error));
//         console.error(error);
//       });
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <View style={styles.container}>
//           {/*Running GET Request*/}
//           <TouchableOpacity
//             style={styles.buttonStyle}
//             onPress={getDataUsingGet}>
//             <Text style={styles.textStyle}>
//               Get Data Using GET
//             </Text>
//           </TouchableOpacity>
//           {/*Running POST Request*/}
//           <TouchableOpacity
//             style={styles.buttonStyle}
//             onPress={getDataUsingPost}>
//             <Text style={styles.textStyle}>
//               Get Data Using POST
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <Text
//           style={{
//             fontSize: 18,
//             textAlign: 'center',
//             color: 'grey'
//           }}>
//           React Native Fetch
//         </Text>
//         <Text
//           style={{
//             fontSize: 16,
//             textAlign: 'center',
//             color: 'grey'
//           }}>
//           www.aboutreact.com
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   textStyle: {
//     fontSize: 18,
//     color: 'white',
//   },
//   buttonStyle: {
//     alignItems: 'center',
//     backgroundColor: '#f4511e',
//     padding: 10,
//     marginVertical: 10,
//   },
// });

// export default App;