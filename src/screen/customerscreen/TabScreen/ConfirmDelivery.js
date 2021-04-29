
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
    <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Confirm Delivery</Text>

}

/>
<View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:1}}/>

                     <View style={{flex:1,padding:21,paddingTop:-10}}>
<ScrollView>
                     <Text style={{color:Colors.dark_gry,fontSize:16,fontWeight:'bold'}}>Receiver Name</Text>
                     <Text style={{color:Colors.dark_gry,fontSize:16,marginVertical:10}}>Jane Doe</Text>
                     <Text style={{color:Colors.dark_gry,fontSize:16,marginVertical:10,fontWeight:'bold'}}>Address</Text>
                      
                     <Text style={{color:Colors.dark_gry,fontSize:16,marginVertical:5,marginBottom:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
                     <Text style={{color:Colors.dark_gry,fontSize:16,fontWeight:'bold'}}>Receiver Phone Name</Text>
                     <Text style={{color:Colors.dark_gry,fontSize:16,marginVertical:10}}>123456789012</Text>
                
                     <Text style={{color:Colors.dark_gry,fontSize:16,fontWeight:'bold'}}>Parcel Type / Weight (L/W/H)</Text>
                     <Text style={{color:Colors.dark_gry,fontSize:16,marginVertical:10}}>Techno (10/20/30 cm)</Text>
                      
                     <Text style={{color:Colors.dark_gry,fontSize:16,fontWeight:'bold'}}>pickup Date</Text>
                     <Text style={{color:Colors.dark_gry,fontSize:16,marginVertical:10}}>20 january 2021</Text>
                       
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
                         <TouchableOpacity 
                                         onPress={()=>{this.props.navigation.navigate('Checkout')}}
                         style={styles.button_Style}>
                             <Text style={{color:Colors.text_white}}>Checkout</Text>
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