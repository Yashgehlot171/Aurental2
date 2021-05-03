
import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput
} from 'react-native';
import Colors from '../../../constant/Color';
import { Header, Icon, Avatar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      name: '',
      address: '',
      mobile: '',
      wieght:'',
      Lenght: '',
      width: '',
      height: '',
      showpassword: true,price:''
    }
  }
validation = () => {
  if(this.state.Lenght == '' && this.state.width == '' && this.state.height == ''){
      alert('Please Enter Your Product Size')
      }
    
          else{
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
 
  // {console.log('token------',token)}
  let _data = {weight:this.state.wieght,
    width:this.state.width,height:this.state.height,length:this.state.Lenght,
    delivery_address_latitude:'21.03',delivery_address_longitude:'78.43' }
  
  fetch('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:6060/api/v1/aurental/courier_rate', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8",
    Authorization:value
  }
  })
  .then((response) => response.json())
  .then((responseJson) => {
      console.log("jso22222222222n",responseJson );

      if(responseJson.status===1){
          // let user_info = responseJson.data
          // let user_token = responseJson.token
         this.setState({price:responseJson.courier_rate})
      }
      else if(responseJson.status===0){
          // alert(responseJson.message)
          // this.props.navigation.navigate('ConfirmDelivery')
                      }
  })
  .catch((error) => {
    
  //   this.setState({ isLoading: false })
    console.error(error);
  });
};
render() {
  return (
<View  style={{flex:1,backgroundColor:'#fff'}}>
    <Header

    statusBarProps={{ barStyle: 'dark-content' }}
    height={80}
    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
    backgroundColor={Colors.text_white}
    placement={"left"}
    leftComponent={
        <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', height: 25 }} >
            <Image style={{ width: 25, height: 25, tintColor: '#000', marginLeft: 10, marginTop: 5, resizeMode: 'contain' }} source={require('../../../../assets/icon/left.png')} />
    
        </TouchableOpacity>
    }
    centerComponent={
        <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Courier Rates Calculator</Text>
    
    }
    
    />
    <View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:1}}/>
    
  
       <ScrollView style={{flex:1}}>
         <Text style={{color:"gray", marginLeft:20, fontSize:12, marginBottom:50, marginTop:50, fontSize:13, padding:2}}>Lorem ipsum dolor sit amet,  consectetur  adipiscing elit.
          Pellentesque eleifend odio quis metus ornare, pretium
          maximus metus aliquet. Donec bibendum libero ligula,</Text>
          <View style={{alignItems:'center' }}>
      

    
            <TextInput
                style={{ height: 45, backgroundColor: "#F4F4F4", width: 90,alignItems:'center'  }}
                placeholder="1"
                onChangeText={(wieght) => this.setState({ wieght })}
                value={this.state.wieght}
              />
        
          </View>
          <Text style={{fontSize:17, textAlign:"center", color:"gray", marginBottom:50}}>Kilogram</Text>
          <Text style={{fontSize:16, textAlign:"center", color:"gray", marginBottom:20}}>Item Dimension</Text>

          <View style={{width:"83%", backgroundColor:"#f0eded", alignSelf:"center", height:399, marginBottom:30}}>
            <Text style={{padding:5, marginLeft:5, fontSize:15}}>AR Scan</Text>
            <Text style={{marginLeft:12, fontSize:10, marginBottom:30}}>Insert information about AR Scan here fornew application user</Text>

            <TouchableOpacity style={{width:250, backgroundColor:"#87CEEB", height:35, alignSelf:"center", borderRadius:5, marginBottom:40}}>
             <Text style={{marginTop:5, textAlign:"center", fontWeight:"600", fontSize:15, color:"#fff"}}>AR Scan</Text>
           </TouchableOpacity>
           
           <Text style={{marginLeft:10, fontSize:15, fontSize:16, color:"gray", marginBottom:5 }}>Or you can manually input the dimension</Text>
           <Text style={{marginLeft:10, fontSize:12, marginLeft:10, color:"gray", marginBottom:30}}>You can input your package  dimension manually here</Text>
           <View style={{ flexDirection: "row", marginBottom: 12 }}>
              <TextInput
                style={{ height: 40, backgroundColor: "#fff", width: 150, marginLeft: 50 }}
                placeholder="Length"
                onChangeText={(Lenght) => this.setState({ Lenght })}
                value={this.state.Lenght}
              />
              <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 5, color: "#aaa" }}>cm</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 12 }}>
              <TextInput
                style={{ height: 40, backgroundColor: "#fff", width: 150, marginLeft: 50 }}
                placeholder="Width"
                onChangeText={(width) => this.setState({ width })}
                value={this.state.width}
              />
              <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 5, color: "#aaa" }}>cm</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 12 }}>
              <TextInput
                style={{ height: 40, backgroundColor: "#fff", width: 150, marginLeft: 50 }}
                placeholder="Height"
                onChangeText={(height) => this.setState({ height })}
                value={this.state.height}
              />
              <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 5, color: "#aaa" }}>cm</Text>
            </View>
          </View>

          <Text style={{fontSize:15, color:"gray", textAlign:"center", marginBottom:15}}>Delivery Address</Text>
          
          <TextInput
                style={{height: 40, width:"83%", borderColor:"gray", borderWidth:1, alignSelf:"center", marginBottom:50,paddingLeft:5}}
                placeholder="Input Address.."
            />
          
          <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={{  width: 280, height: 50, backgroundColor: Colors.introButton,
    borderRadius: 5, marginVertical: 25, alignItems: 'center',
    justifyContent: 'center'}}
    onPress={()=>{this.validation();}}
    >
                <Text style={{ marginTop: 0, textAlign: "center", fontWeight: "600", fontSize: 15, color: "#fff" }}>Rate Calculate</Text>
              </TouchableOpacity>
            </View>
          <Text style={{fontSize:15, color:"gray", textAlign:"center", marginBottom:5}}>Delivery Fee</Text>

          <View style={{height:50, borderColor:"gray", width:120, alignSelf:"center", marginBottom:30, borderWidth:1}}>
            <Text style={{fontSize:20, textAlign:"center", marginTop:10, color:"gray"}}>$   {this.state.price}</Text>
          </View>

          <Text style={{fontSize:15, color:"gray", textAlign:"center", marginBottom:5}}>SGD</Text>
           
           <Text style={{color:"gray", padding:10, textAlign:"center", marginBottom:30}}>Today's Courier Rates:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend odio quis metus ornare, pretium maximus metus aliquet.</Text>
          
           <Text style={{color:"gray", padding:10, textAlign:"center", marginBottom:30}}>(Courier Rates may change each day)</Text>
       </ScrollView>
       </View>
  );
};}
