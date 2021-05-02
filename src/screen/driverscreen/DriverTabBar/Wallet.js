import React, { Component } from 'react';  
import {ScrollView, View, Image, Text,TouchableOpacity } from 'react-native';  

import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../../constant/Color';
  
export default class Wallet extends Component {  
    onPressButton() {  
        alert('You clicked the button!')  
    }  
  
    render() {  
        return (  
            
          <View> 

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
    <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -7, height: 40 }}>Wallet</Text>

}

/>
            <View style={{height:120, backgroundColor:"black", justifyContent:"center", marginBottom:20,}}>
              <Text style={{color:"white", textAlign:"center", fontSize:30}}>S $0.00</Text>
              <Text style={{color:"white", textAlign:"center", }}>Wallet Balance</Text>
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-around", marginBottom:5}}>
              <View style={{height:80, width:"23%", borderColor:"red", borderWidth:1, borderRadius:5, justifyContent:"center"}}>
                  <TouchableOpacity
                  onPress={()=>{this.props.navigation.navigate('Transaction')}}>
                   <Image
                     style={{height:30, width:30, alignSelf:"center",}}
                      source={require('../../../../assets/icon/transaction.png')}
                  />
               </TouchableOpacity>
              </View>
              
              <View style={{height:80, width:"23%", borderColor:"red", borderWidth:1, borderRadius:5, justifyContent:"center"}}>
                  <TouchableOpacity
                  onPress={()=>{this.props.navigation.navigate('')}}>
                   <Image
                     style={{height:30, width:30, alignSelf:"center",}}
                      source={require('../../../../assets/icon/statistics.png')}
                  />
               </TouchableOpacity>
              </View>

              <View style={{height:80, width:"23%", borderColor:"red", borderWidth:1, borderRadius:5, justifyContent:"center"}}>
                  <TouchableOpacity
                  onPress={()=>{this.props.navigation.navigate('')}}>
                   <Image
                     style={{height:30, width:30, alignSelf:"center",}}
                      source={require('../../../../assets/icon/transaction.png')}
                  />
               </TouchableOpacity>
              </View>
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-around", marginBottom:25}}>
            <Text style={{ }}>Transaction</Text>
            <Text style={{ }}>Statics</Text>
            <Text style={{ }}>Cash Out</Text>
            </View>
            
            <Text style={{marginLeft:15, marginBottom:10 }}>Bank Info</Text>

            <ScrollView  horizontal={true}>   
                <View style={[{ width:330,height: 170,padding: 10,  borderColor:"red", marginLeft:15, borderRadius:10, borderWidth:1 }]}>  
                    <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontWeight:"bold"}}>Mohamed Salah</Text>
                        <Image
                         style={{height:20, width:20,}}
                         source={require('../../../../assets/icon/Rightarrow.png')}
                        />
                    </View>
                    <Text style={{marginBottom:3}}>+65 8960 6085</Text>
                    <Text style={{}}>MohamedSalah@gmail.com</Text>
                </View>  

                <View style={[{ width:330,height: 170,padding: 10, marginLeft:15, borderRadius:10, marginRight:15, borderColor:"red", borderWidth:1, justifyContent:"center"}]}>  
                     <Text style={{textAlign:"center", }}>+ ADD New Bank Account</Text>
                </View> 
            </ScrollView> 

            <Text style={{textAlign:"center", marginTop:150 }}>Here comes the info tip on the bottom if any</Text> 
            </View>
        );  
    }  
}  
 