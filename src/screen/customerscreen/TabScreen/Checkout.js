
import React, { Component } from 'react'
import { TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ImageBackground, Image, AsyncStorage, ActivityIndicator } from 'react-native';
import Colors from '../../../constant/Color';
import { Header, Icon, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showpassword: true
        }
    }

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
    <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Confirm Delivery</Text>

}

/>
<View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:10}}/>

                     <View style={{flex:1,padding:21,}}>
<ScrollView>
                     <Text style={{color:Colors.dark_gry,fontSize:16,}}>Your delivery receipt has been made! Complete the payment to activate your Delivery ID.</Text>
                     <Text style={{color:Colors.dark_gry,fontSize:16,marginVertical:10,textAlign:'center'}}>Delivery ID : 1234567890</Text>
                     <Text style={{color:Colors.dark_gry,fontSize:16,marginVertical:10,fontWeight:'bold',textAlign:'center',marginBottom:10}}>Copy</Text>
                      
 
                     <Text style={{color:Colors.dark_gry,fontSize:22,marginVertical:10,textAlign:'center'}}>$200.00</Text>
                

                     <Text style={{color:Colors.dark_gry,fontSize:16,marginVertical:10,textAlign:'center'}}>SGD</Text>
                      
                     <Text style={{color:Colors.dark_gry,fontSize:16,fontWeight:'bold',marginTop:10}}>Aurental Singapore</Text>
   
                     <TextInput
                                    style={[styles.auth_textInput2,]}
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
                                    placeholder="Description"
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none' />
                                                            <TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
                                    placeholder="E-mail Address"
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none' />
                     <Text style={{color:Colors.dark_gry,fontSize:16,fontWeight:'bold',marginVertical:15}}>Subtotal</Text>
                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                     <Text style={{color:Colors.dark_gry,fontSize:16,marginBottom:5}}>Package delivery (1kg, 12km)</Text>
                     <Text style={{color:Colors.dark_gry,fontSize:16,marginVertical:5}}>$ 10.00</Text>
                     </View>

                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                     <Text style={{color:Colors.dark_gry,fontSize:16,marginBottom:5}}>Service</Text>
                     <Text style={{color:Colors.dark_gry,fontSize:16,marginVertical:5}}>$ 5.00</Text>
                     </View>
                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                     <Text style={{color:Colors.dark_gry,fontSize:16,marginBottom:5}}>GST</Text>
                     <Text style={{color:Colors.dark_gry,fontSize:16,marginVertical:5}}>$ 10.00</Text>
                     </View>

                     <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                     <Text style={{color:Colors.dark_gry,fontSize:16,marginBottom:5,fontWeight:'bold'}}>TOTAL</Text>
                     <Text style={{color:Colors.dark_gry,fontSize:16,marginVertical:5,fontWeight:'bold'}}>$ 25.00</Text>
                     </View>
                     <View style={{alignItems:'center'}}>
                     <Image style={{ width: 110, height: 111,  marginLeft: 10, marginTop: 5, resizeMode: 'contain' }} source={require('../../../../assets/qr.png')} />
                         <TouchableOpacity style={{borderColor:'#000',width:'90%',height:45,borderWidth:1,justifyContent:'center',alignItems:'center'}}
                         onPress={()=>{this.props.navigation.navigate('Paid')}}>
                             <Text style={{color:Colors.text_black}}>Waiting</Text>
                         </TouchableOpacity>
                     </View>
                     </ScrollView>
                        </View>
                 
             
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
    auth_textInput2: {

        alignSelf: 'center',
        width: '95%',
        // borderWidth: 1,
        backgroundColor:Colors.gry_color,
  
        borderBottomWidth: 0,
        height: 100,
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