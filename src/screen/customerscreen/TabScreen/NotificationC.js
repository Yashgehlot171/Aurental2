import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,TouchableOpacity
} from 'react-native';
import Colors from '../../../constant/Color';
import { Header, Icon, Avatar } from 'react-native-elements';
export default class NotificationsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id:1, 
          description: "Your item (Delivery ID: 1234567890) has been received by (RECEIVER NAME) on the receiver location.",
          time: "2021-01-22  01:44 pm",
        }, 
        { id:2, 
          description: "Your item (Delivery ID: 1234567890) has been received by (RECEIVER NAME) on the receiver location.",
          time: "2021-01-22  01:44 pm"
        },
        { id:3, 
          description: "Your item (Delivery ID: 1234567890) has been received by (RECEIVER NAME) on the receiver location.",
          time: "2021-01-22  01:44 pm"
        },
        { id:4, 
          description: "Your item (Delivery ID: 1234567890) has been received by (RECEIVER NAME) on the receiver location.",
          time: "2021-01-22  01:44 pm"
        },
        { id:5, 
          description: "Your item (Delivery ID: 1234567890) has been received by (RECEIVER NAME) on the receiver location.",
          time: "2021-01-22  01:44 pm"
        },
        { id:6, 
          description: "Your item (Delivery ID: 1234567890) has been received by (RECEIVER NAME) on the receiver location.",
          time: "2021-01-22  01:44 pm"
        },
      ],
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
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
    <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -7, height: 40 }}>Notification</Text>

}

/>
<View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:10}}/>
          <View style={{padding:18}}>
        <Text style={{marginLeft:15,}}>Today</Text>
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
                <Text style={styles.time}>{item.time}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            )}}/>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex:1,backgroundColor:'#fff'
    // backgroundColor:'#DCDCDC'
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  notificationBox: {
    padding:20,
    marginTop:5,
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