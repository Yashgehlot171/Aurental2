import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView
} from 'react-native';
import Colors from '../../../constant/Color';
export default class LogoutScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id:1, 
          ID: "Delivery ID : 1234567890",
          Name:"Sender Name",
          date:"01-01-2021",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie massa sit amet condimentum interdum. Donec sit amet mauris nibh", 
        }, 
        { id:2, 
          ID: "Delivery ID : 1234567890",
          Name:"Sender Name",
          date:"01-01-2021",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie massa sit amet condimentum interdum. Donec sit amet mauris nibh", 
        },
        { id:3, 
          ID: "Delivery ID : 1234567890",
          Name:"Sender Name",
          date:"01-01-2021",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie massa sit amet condimentum interdum. Donec sit amet mauris nibh", 
        },
        { id:4, 
          ID: "Delivery ID : 1234567890",
          Name:"Sender Name",
          date:"01-01-2021",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie massa sit amet condimentum interdum. Donec sit amet mauris nibh", 
        },
        { id:5, 
          ID: "Delivery ID : 1234567890",
          Name:"Sender Name",
          date:"01-01-2021",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie massa sit amet condimentum interdum. Donec sit amet mauris nibh", 
        },
        { id:6, 
          ID: "Delivery ID : 1234567890",
          Name:"Sender Name",
          date:"01-01-2021",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie massa sit amet condimentum interdum. Donec sit amet mauris nibh", 
        },
      ],
    };
  }

  render() {
  return (
    <ScrollView> 
   <View style={{flex:1,backgroundColor:'#fff'}}>
     <Image
        style={{height:70, width:70, alignSelf:"center", marginTop:45, marginBottom:15}}
        source={require('../../../../assets/icon/submitted.png')}
      />
      <Text style={{textAlign:"center", fontSize:17, color:"gray", marginBottom:25}}>Driver Name</Text>
      <View style={{alignItems:"center", flex:1}}> 
      <View style={{backgroundColor: Colors.gry_color, height:200, width:"75%", marginTop:5, alignItems:"center", marginBottom:60}}>
        <View style={{flexDirection:"row", marginTop:25}}>
          <Text style={{}}>E-mail Address</Text>
          <Text style={{marginLeft:35, color:"gray"}}>E-mail Address</Text>
        </View>

        <View style={{flexDirection:"row", padding:5}}>
          <Text style={{}}>Phone Number</Text>
          <Text style={{marginLeft:35, color:"gray"}}>Phone Number</Text>
        </View>

        <View style={{flexDirection:"row", }}>
          <Text style={{}}>Address</Text>
          <Text style={{marginLeft:35, color:"gray"}}>Address</Text>
        </View>

        <View style={{flexDirection:"row",  padding:5}}>
          <Text style={{alignSelf:"flex-start"}}>Company</Text>
          <Text style={{marginLeft:35, color:"gray"}}>Company</Text>
        </View>

        <TouchableOpacity>
        <Text style={{marginTop:20}}>Edit Profile</Text>
       </TouchableOpacity>

       <View style={{height:1, backgroundColor:"gray", width:70}}></View>
      </View>
      </View>
<View style={{alignItems:'center',justifyContent:'center',padding:10}}>
      <TouchableOpacity style={{backgroundColor:Colors.introButton ,height:40,width:'85%',borderRadius:5}}
      onPress={()=>{this.props.navigation.navigate('Wallet')}}>
        <Text style={{textAlign:"center", color:"#fff",marginTop:8}}>Wallet</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity
      onPress={()=>{this.props.navigation.navigate('Auth')}}>
        <Text style={{textAlign:"center", color:"red"}}>Sign Out</Text>
      </TouchableOpacity>
      <View style={{height:1, backgroundColor:"red", width:60, alignSelf:"center"}}></View>
     
      <Text style={{fontSize:15, color:"gray", marginLeft:15, fontWeight:"700"}}>Rating</Text>
      <FlatList 
          style={styles.notificationList} 
          enableEmptySections={true}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <View style={styles.notificationBox}>
                
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={{ fontSize:14, color:Colors.dark_gry, fontSize:17}}>{item.ID}</Text>
                <View style={{flexDirection:"row"}}>
                <Image style={{height:17, width:17,}} source={require('../../../../assets/icon/star(fill).png')}/>
                <Image style={{height:17, width:17,}} source={require('../../../../assets/icon/star(fill).png')}/>
                <Image style={{height:17, width:17,}} source={require('../../../../assets/icon/star(fill).png')}/>
                <Image style={{height:17, width:17,}} source={require('../../../../assets/icon/star(fill).png')}/>
                <Image style={{height:17, width:17,}} source={require('../../../../assets/icon/star(fill).png')}/>
                </View>
                </View>

                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={styles.time}>{item.Name}</Text>
                <Text style={styles.time}>{item.date}</Text>
                </View>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            )}}/>
   </View> 
   </ScrollView>
  );
  }
};

const styles = StyleSheet.create({
  container:{
    // backgroundColor:'#DCDCDC'
  },
  notificationList:{
    // marginTop:20,
    padding:10,
  },
  notificationBox: {
    padding:20,
    // marginTop:5,
    marginBottom:5,
    backgroundColor: Colors.gry_color,
    // flexDirection: 'row',
    borderRadius:10,
  },
  icon:{
    width:45,
    height:45,
  },
  description:{
    fontSize:14,
    color:Colors.dark_gry
    // marginLeft:10,
  },
  time:{
    fontSize:15,
    color:Colors.dark_gry
  }
});

