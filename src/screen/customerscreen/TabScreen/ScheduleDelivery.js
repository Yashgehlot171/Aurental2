
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
import DatePicker from 'react-native-datepicker';
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
      weight:"",date:'',
      showpassword: true
    }
  }
  validation = () => {
    if(this.state.name == ''  && this.state.address == '' && this.state.mobile == ''){
    alert('Please Enter All Details')
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
            console.log('token',value)
            this.getDataUsingPost(value);
        }

getDataUsingPost = (value) => {
    //POST json
   
    // {console.log('token------',token)}
    let _data = { receiver_name:this.state.name, receiver_address:this.state.address ,
      receiver_mobile:this.state.mobile ,pickup_date:this.state.date,package_weight:this.state.weight, }
    
    fetch('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:6060/api/v1/aurental/add_order', {
      method: "POST",
      body: JSON.stringify(_data),
      headers: {"Content-type": "application/json; charset=UTF-8",
      Authorization:value
    }
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log("add__order response",responseJson );

        if(responseJson.status===1){
            // let user_info = responseJson.data
            // let user_token = responseJson.token
           
            this.props.navigation.navigate('ConfirmDelivery',{name:this.state.name, address:this.state.address ,
              mobile:this.state.mobile ,pickup_date:this.state.date,package_weight:this.state.weight,})
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
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
            <Text style={{ width: '100%', color: Colors.dark_gry, fontSize: 20, textAlign: 'center', marginTop: 5, marginLeft: -7, height: 30 }}>Schedule a delivery</Text>

          }

        />
      <View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:5}}/>

        <ScrollView style={{ flex: 1 }}>
          <TextInput
            style={{ height: 40, backgroundColor: Colors.gry_color, width: "85%", alignSelf: "center", marginTop: 30, marginBottom: 20 }}
            placeholder="Name"
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
          />

          <TextInput
            style={{ height: 70, backgroundColor: Colors.gry_color, width: "85%", alignSelf: "center", marginBottom: 20 }}
            placeholder="Address"
            onChangeText={(address) => this.setState({ address })}
            value={this.state.address}
          />

          <TextInput
            style={{ height: 40, backgroundColor:Colors.gry_color, width: "85%", alignSelf: "center", marginBottom: 20 }}
            placeholder="Mobile Number (Receiver)"
            onChangeText={(mobile) => this.setState({ mobile })}
            value={this.state.mobile}
          />

          <View style={{ height: 40, width: "85%", alignSelf: "center", backgroundColor: Colors.gry_color, marginBottom: 20 }}>
            <Picker style={{ color: '#aaa', height: 45, width: "100%",fontSize:14,fontWeight:'normal' }}
            // selectedValue={selectedValue}
            >
              <Picker.Item label="Item Package Type" value="Category 1" />
              <Picker.Item label="Food and Beverages" value="Food and Beverages" />
              <Picker.Item label="Documents or  Parcels" value="Documents or  Parcels" />
              <Picker.Item label="package_name" value="package_name" />
            </Picker>
          </View>
<View   style={{width:'85%',backgroundColor:Colors.gry_color,borderRadius:5,marginLeft:30,marginBottom:15}}> 
          <DatePicker
          style={{width:'85%', backgroundColor:Colors.gry_color,borderRadius:5,marginLeft:30,marginRight:10,borderWidth:0}}
          date={this.state.date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2020-01-01"
          maxDate="2050-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position:'relative',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              width:200,
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {this.setState({date:date})
            // setDate(date);
          }}
        />
</View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginLeft: 35, color: "#aaa", fontSize: 15, marginTop: 9 }}>Parcel Weight</Text>

    
            <TextInput
                style={{ height: 40, backgroundColor: "#F4F4F4", width: 80, marginLeft: 50,paddingLeft:30 }}
                placeholder="Enter "
                onChangeText={(weight) => this.setState({ weight })}
                value={this.state.weight}
              />
        

            <Text style={{ marginLeft: 25, color: "#aaa", fontSize: 15, marginTop: 9 }}>Kg</Text>
          </View>

          <Text style={{ color: "#aaa", fontSize: 12, textAlign: "right", marginRight: 15, marginBottom: 30 }}>Delivery fee will be calculated based from Couries user</Text>

          <View style={{ width: "83%", backgroundColor: Colors.gry_color, alignSelf: "center",  marginBottom: 30 }}>
            <Text style={{ padding: 5, marginLeft: 5, fontSize: 15 }}>AR Scan</Text>
            <Text style={{ marginLeft: 12, fontSize: 10, marginBottom: 30 }}>Insert information about AR Scan here fornew application user</Text>

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.button_Style}>
                <Text style={{ marginTop: 0, textAlign: "center", fontWeight: "600", fontSize: 15, color: "#fff" }}>AR Scan</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ marginLeft: 10, fontSize: 15, fontSize: 16, color: "#aaa", marginBottom: 5 }}>Or you can manually input the dimension</Text>
            <Text style={{ marginLeft: 10, fontSize: 12, marginLeft: 10, color: "#aaa", marginBottom: 30 }}>You can input your package  dimension manually here</Text>
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