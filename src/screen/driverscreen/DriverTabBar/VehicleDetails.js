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
          },
      ],
    };
  }

  render() {
  return (
    <ScrollView> 
   <View style={{flex:1,}}>   
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
                <Text style={styles.time}>{item.ID}</Text>
                <Text style={styles.time}>{item.Name}</Text>
                </View>

                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={styles.time}>{item.date}</Text>
                <Text style={styles.time}>{item.date}</Text>
                <Text style={styles.time}>{item.description}</Text>
                </View>

                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={styles.time}>{item.height}</Text>
                <Text style={styles.time}>{item.height}</Text>
                <Text style={styles.time}>{item.description1}</Text>
                </View>

                <View style={{flexDirection:"row", justifyContent:"space-between", width:300}}>
                <Text style={styles.time}>{item.length}</Text>
                <Text style={styles.time}>{item.length}</Text>
                <Text style={styles.time}>{item.length1}</Text>
                </View>

                <View style={{flexDirection:"row", justifyContent:"space-between", width:280}}>
                <Text style={styles.time}>{item.wide}</Text>
                <Text style={styles.time}>{item.wide}</Text>
                <Text style={styles.time}>{item.wide1}</Text>
                </View>

                <View style={{flexDirection:"row", justifyContent:"space-between",width:150}}>
                <Text style={styles.time}>{item.volume}</Text>
                <Text style={styles.time}>{item.volume}</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between", width:150}}>
                <Text style={styles.time}>{item.volume}</Text>
                <Text style={styles.time}>{item.volume}</Text>
                </View>
 
                 
              </View>
            )}}/>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('MyVehicle')}>
                  <Text style={{textAlign:"center", marginTop:100}}>Edit Vehicle</Text>
                 </TouchableOpacity>
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

