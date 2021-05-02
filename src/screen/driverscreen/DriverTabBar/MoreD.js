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
   <View style={{flex:1,}}>
     <Image
        style={{height:70, width:70, alignSelf:"center", marginTop:45, marginBottom:15}}
        source={require('../../../../assets/icon/submitted.png')}
      />
      <Text style={{textAlign:"center", fontSize:17, color:"gray", marginBottom:25}}>Driver Name</Text>
      <View style={{alignItems:"center", flex:1}}> 
      <View style={{backgroundColor:"#f0eded", height:200, width:"75%", marginTop:5, alignItems:"center", marginBottom:60}}>
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

      <TouchableOpacity
      onPress={()=>{this.props.navigation.navigate('Wallet')}}>
        <Text style={{textAlign:"center", color:"red"}}>Wallet</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{textAlign:"center", color:"red"}}>Sign Out</Text>
      </TouchableOpacity>
      <View style={{height:1, backgroundColor:"red", width:60, alignSelf:"center"}}></View>
     
      <Text style={{fontSize:15, color:"gray", marginLeft:15}}>Rating</Text>
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
                <Text style={styles.time}>{item.ID}</Text>
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
    backgroundColor: '#f0eded',
    // flexDirection: 'row',
    borderRadius:10,
  },
  icon:{
    width:45,
    height:45,
  },
  description:{
    fontSize:13,
    // color: "#3498db",
    // marginLeft:10,
  },
  time:{
    fontSize:10,
    color:"gray"
  }
});

