
import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Picker,
  StyleSheet
} from 'react-native';
import Colors from '../../../constant/Color'

import { Header, Icon, Avatar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
// const Screen7 = () => {

//   const [selectedValue, setSelectedValue] = useState("java");
//   return (
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      name: '',
      address: '',
      mobile: '',
      Lenght: '',
      width: '',
      height: '',
      showpassword: true
    }
  }
  validation = () => {
    if(this.state.name == ''  && this.state.address == '' && this.state.mobile == ''){
    alert('Please Enter All Fields')
    }
    else if(this.state.Lenght == '' && this.state.width == '' && this.state.height == ''){
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
    let _data = { receiver_name:this.state.name, receiver_address:this.state.address ,receiver_mobile:this.state.mobile ,pickup_date:'2021-04-20,',package_weight:'1' }
    
    fetch('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:6060/api/v1/aurental/add_order', {
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
           
            this.props.navigation.navigate('ConfirmDelivery')
        }
        else if(responseJson.status===0){
            // alert(responseJson.message)
            this.props.navigation.navigate('ConfirmDelivery')
                        }
    })
    .catch((error) => {
      
    //   this.setState({ isLoading: false })
      console.error(error);
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
            <Text style={{ width: '100%', color: Colors.dark_gry, fontSize: 20, textAlign: 'center', marginTop: 5, marginLeft: -7, height: 40 }}>Notification</Text>

          }

        />
        <View style={{ backgroundColor: '#000', width: '100%', height: 0.5, marginVertical: 10 }} />

        <ScrollView style={{ flex: 1 }}>
          <TextInput
            style={{ height: 40, backgroundColor: "#f0eded", width: "85%", alignSelf: "center", marginTop: 30, marginBottom: 20 }}
            placeholder="Name"
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
          />

          <TextInput
            style={{ height: 70, backgroundColor: "#f0eded", width: "85%", alignSelf: "center", marginBottom: 20 }}
            placeholder="Address"
            onChangeText={(address) => this.setState({ address })}
            value={this.state.address}
          />

          <TextInput
            style={{ height: 40, backgroundColor: "#f0eded", width: "85%", alignSelf: "center", marginBottom: 20 }}
            placeholder="Mobile Number (Receiver)"
            onChangeText={(mobile) => this.setState({ mobile })}
            value={this.state.mobile}
          />

          <View style={{ height: 40, width: "85%", alignSelf: "center", backgroundColor: "#f0eded", marginBottom: 20 }}>
            <Picker style={{ color: '#6D6B6B', height: 45, width: "100%" }}
            // selectedValue={selectedValue}
            >
              <Picker.Item label="Select Category" value="Category 1" />
              <Picker.Item label="Category 1" value="Category 1" />
              <Picker.Item label="Category 2" value="Category 2" />
              <Picker.Item label="Category 3" value="Category 3" />
            </Picker>
          </View>

          <View style={{ height: 40, width: "85%", alignSelf: "center", backgroundColor: "#f0eded", marginBottom: 20 }}>
            <Picker style={{ color: '#6D6B6B', height: 45, width: "100%" }}
            >
              <Picker.Item label="Select Category" value="Category 1" />
              <Picker.Item label="Category 1" value="Category 1" />
              <Picker.Item label="Category 2" value="Category 2" />
              <Picker.Item label="Category 3" value="Category 3" />
            </Picker>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginLeft: 35, color: "gray", fontSize: 15, marginTop: 9 }}>Parcel Weight</Text>

            <View style={{ height: 40, borderColor: "gray", width: 100, alignSelf: "center", marginBottom: 10, marginLeft: 60, backgroundColor: "#f0eded" }}>
              <Text style={{ fontSize: 20, textAlign: "center", marginTop: 10, color: "gray" }}>1</Text>
            </View>

            <Text style={{ marginLeft: 25, color: "gray", fontSize: 15, marginTop: 9 }}>Kg</Text>
          </View>

          <Text style={{ color: "gray", fontSize: 12, textAlign: "right", marginRight: 15, marginBottom: 30 }}>Delivery fee will be calculated based from Couries user</Text>

          <View style={{ width: "83%", backgroundColor: "#f0eded", alignSelf: "center", height: 399, marginBottom: 30 }}>
            <Text style={{ padding: 5, marginLeft: 5, fontSize: 15 }}>AR Scan</Text>
            <Text style={{ marginLeft: 12, fontSize: 10, marginBottom: 30 }}>Insert information about AR Scan here fornew application user</Text>

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.button_Style}>
                <Text style={{ marginTop: 0, textAlign: "center", fontWeight: "600", fontSize: 15, color: "#fff" }}>AR Scan</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ marginLeft: 10, fontSize: 15, fontSize: 16, color: "gray", marginBottom: 5 }}>Or you can manually input the dimension</Text>
            <Text style={{ marginLeft: 10, fontSize: 12, marginLeft: 10, color: "gray", marginBottom: 30 }}>You can input your package  dimension manually here</Text>
            <View style={{ flexDirection: "row", marginBottom: 12 }}>
              <TextInput
                style={{ height: 40, backgroundColor: "white", width: 150, marginLeft: 50 }}
                placeholder="Length"
                onChangeText={(Lenght) => this.setState({ Lenght })}
                value={this.state.Lenght}
              />
              <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 5, color: "gray" }}>cm</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 12 }}>
              <TextInput
                style={{ height: 40, backgroundColor: "white", width: 150, marginLeft: 50 }}
                placeholder="Width"
                onChangeText={(width) => this.setState({ width })}
                value={this.state.width}
              />
              <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 5, color: "gray" }}>cm</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 12 }}>
              <TextInput
                style={{ height: 40, backgroundColor: "white", width: 150, marginLeft: 50 }}
                placeholder="Height"
                onChangeText={(height) => this.setState({ height })}
                value={this.state.height}
              />
              <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 5, color: "gray" }}>cm</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => { this.validation(); }}
              style={styles.button_Style}>
              <Text style={{ marginTop: 3, textAlign: "center", fontWeight: "600", fontSize: 15, color: "#fff" }}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
  button_Style: {
    width: 280, height: 50, backgroundColor: Colors.introButton,
    borderRadius: 5, marginVertical: 25, alignItems: 'center',
    justifyContent: 'center'
  },
});