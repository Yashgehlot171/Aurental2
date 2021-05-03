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
import { Header, Icon, Avatar } from 'react-native-elements';
export default class LogoutScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id:1, 
          ID: "Vehicle 1",
          Name:"Owned Vehicle",
          date:"Vehicle No",
          description: "View Vehicle Document", 
          description1: "View Vehicle AR Scan", 
          height:"Height",
          length:"Length",
          length1:"Vehicle's Courier",
          wide:"Wide",
          wide1:"80/100",
          volume:"Volume",
        }, 
        { id:1, 
            ID: "Vehicle 1",
            Name:"Owned Vehicle",
            date:"Vehicle No",
            description: "View Vehicle Document", 
            description1: "View Vehicle AR Scan", 
            height:"Height",
            length:"Length",
            length1:"Vehicle's Courier",
            wide:"Wide",
            wide1:"80/100",
            volume:"Volume",
            url:'../../../../assets/icon/right.png'
          },
      ],
    };
  }

  render() {
  return (
     
   <View style={{flex:1, backgroundColor:"white"}}> 
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
           <Text style={{ width: '100%', fontSize:20, textAlign: 'center', marginTop: 5, height: 40, fontWeight:"700", marginLeft:-7 }}>Vehicle Details</Text>

         }
         

      /> 
      <View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:5}}/> 
      <ScrollView> 
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
                <View style={{flexDirection:"row",}}>
                <Text style={{fontSize:15, fontWeight:"bold",}}>{item.ID}</Text>
                <Text style={{fontSize:13, marginLeft:30, opacity:0.9}}>{item.Name}</Text>
                 
                {/* <Image
                 style={{height:15, width:12,}}
                source={require('../../../../assets/icon/right.png')}
                /> */}
                </View>

                <Image
                 style={{height:15, width:12, alignSelf:"flex-end", marginTop:-20}}
                source={require('../../../../assets/icon/right.png')}
                />

                <View style={{flexDirection:"row", marginTop:20,}}>
                <Text style={{fontSize:13, opacity:0.9}}>{item.date}</Text>
                <Text style={styles.time}>{item.date}</Text>
                <Text style={styles.time}>{item.description}</Text>
                </View>

                <View style={{flexDirection:"row",marginTop:10, marginBottom:3, width:320, justifyContent:"space-between"}}>
                <Text style={{fontSize:13, opacity:0.9}}>{item.height}</Text>
                <Text style={{fontSize:13, color:"gray", marginLeft:20}}>{item.height}</Text>
                <Text style={styles.time}>{item.description1}</Text>
                </View>

                <View style={{flexDirection:"row", marginBottom:3, width:290, justifyContent:"space-between"}}>
                <Text style={{fontSize:13, opacity:0.9}}>{item.length}</Text>
                <Text style={{fontSize:13, color:"gray", marginLeft:20}}>{item.length}</Text>
                <Text style={styles.time}>{item.length1}</Text>
                </View>

                <View style={{flexDirection:"row", marginBottom:5, width:250, justifyContent:"space-between"}}>
                <Text style={{fontSize:13, opacity:0.9}}>{item.wide}</Text>
                <Text style={{fontSize:13, color:"gray", marginLeft:20}}>{item.wide}</Text>
                <Text style={styles.time}>{item.wide1}</Text>
                </View>

                <View style={{flexDirection:"row", justifyContent:"space-between",width:140, marginBottom:10}}>
                <Text style={{fontSize:13, opacity:0.9}}>{item.volume}</Text>
                <Text style={styles.time}>{item.volume}</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between", width:140}}>
                <Text style={{fontSize:13, opacity:0.9}}>{item.volume}</Text>
                <Text style={{fontSize:13, color:"gray", }}>{item.volume}</Text>
                </View>
 
                 
              </View>
            )}}/>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('MyVehicle')}>
                  <Text style={{textAlign:"center", fontWeight:"bold", color:"grey", fontSize:16 }}>Edit Vehicle</Text>
                 </TouchableOpacity>
                 </ScrollView>
   </View> 
  );
  }
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'red'
  },
  notificationList:{
    // marginTop:20,
    padding:10,
  },
  notificationBox: {
    padding:20,
    // marginTop:5,
    marginBottom:30,
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
    fontSize:13,
    color:"gray",
    marginLeft:30
  }
});

