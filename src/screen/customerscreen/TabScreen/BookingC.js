
import React, { Component } from 'react'
import { TouchableOpacity, TextInput, ScrollViewBase } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ImageBackground, Image, FlatList } from 'react-native';
import Colors from '../../../constant/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header, Icon, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { ButtonGroup } from 'react-native-elements';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showpassword: true,
            selectedIndex: 0,
            DayselectedIndex: 0,
            JobType: '',
            selectedStartDate: null,
            order_history:[],
            status:'',
            Data: [
                {
                    headingText: 'Rent Commercial Vans & Lorries with Vibrance',
                    titleText: 'Short Term Leases Available, Daily, Weekly, or Monthly',
                    image:require('../../../../assets/car1.png')
                },
                {
                    headingText: 'Rent Commercial Vans & Lorries with Vibrance',
                    image:require('../../../../assets/car2.png'),
                    titleText: 'Short Term Leases Available, Daily, Weekly, or Monthly',
                },
                {
                    headingText: 'Rent Commercial Vans & Lorries with Vibrance',
                  
                    titleText: 'Short Term Leases Available, Daily, Weekly, or Monthly',
                    image:require('../../../../assets/car1.png')
                },
                {
                    headingText: 'Rent Commercial Vans & Lorries with Vibrance',
                 
                    titleText: 'Short Term Leases Available, Daily, Weekly, or Monthly',
                    image:require('../../../../assets/car2.png')
                },
                {
                    headingText: 'Rent Commercial Vans & Lorries with Vibrance',
                  
                    titleText: 'Short Term Leases Available, Daily, Weekly, or Monthly',
                    image:require('../../../../assets/car2.png')
                },
             
            ],

        }
        this.updateIndex = this.updateIndex.bind(this)

    }
    componentWillMount = async () => {
        var value = await AsyncStorage.getItem('user_token');
        // const data = await this.performTimeConsumingTask();
        // if (data !== null) {
          console.log('token',value)
          this.getDataUsingPost(value);
        // }
      }
  
  
   getDataUsingPost = (value) => {
    //POST json
    // let _data = { device_id: 'dwscngkdddnn44ffff', device_name:brand ,app_type: 2 ,push_token:'sjdsfbkkasbdbd' }
    
    fetch('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:6060/api/v1/aurental/aurental/order_list_histoy', {
      method: "POST",
      // body: JSON.stringify(_data),
      // 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl9pZCI6OSwidHlwZSI6ImRldmljZSIsImlhdCI6MTYxODk3NzM0M30.FZB3CfNkAR4CYOUD6H54Ml0DvAAUGTKq7R_8fLUbdOM',
      headers: {"Content-type": "application/json; charset=UTF-8",
      Authorization:value
    }
      // headers: {
      //   'Authorization': 'Bearer ' + user_token,
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json'
      // },
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log("jso22222222222YASH",responseJson );
        let status = responseJson.status
        console.log('status',status)
        this.setState({status:status})
        if(responseJson.status===1){
            let user_info = responseJson.results
            let status = responseJson.status
            console.log('status',status)
            // let user_token = responseJson.token
            // AsyncStorage.setItem('user_token', user_info)
            console.log('dfd',user_info)
            this.setState({order_history:user_info})
            // // this.props.navigation.navigate('CustomerLogin')
            // console.log('data111',this.state.user_data)
        }
    })
    .catch((error) => {
      
    //   this.setState({ isLoading: false })
      console.error(error);
    });
  };
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
        if (selectedIndex === 0) {
            //   this.Search_JOB("UPCOMING");
            // this.setState({ Nav_Screen: 'JobDetails' })
        } else if (selectedIndex === 1) {

            //   this.Search_JOB("RECURRING");
            // this.setState({ Nav_Screen: 'RecurringJobDetails' })
        } else if (selectedIndex === 2) {
            //   this.Search_JOB("COMPLETED");
            // this.setState({ Nav_Screen: 'CompletedJobDetails' })
        }
    }
    renderOngoing = ({ item, index }) => (
        <View style={{ margin: 5,marginHorizontal:10, flex: 1,backgroundColor:Colors.gry_color ,padding:15}}>
     
     <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('DeliveryContact')}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
 <Text style={{fontSize:16,color:Colors.dark_gry,fontWeight:'bold'}}>Delivery ID : 1234567890</Text>
<Text style={{color:Colors.dark_gry}}>Status</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:5}}>
 <Text style={{fontSize:16,color:Colors.dark_gry,}}>Receiver Name : Receiver</Text>
<Text style={{color:Colors.dark_gry}}>Item delivering</Text>
</View>

 <Text style={{fontSize:16,color:Colors.dark_gry,fontWeight:'bold',marginBottom:10,marginTop:5}}>Item Type : Parcel</Text>
<Text style={{color:Colors.dark_gry}}>(L/W/H)</Text>
</TouchableOpacity>
    </View>
    )

    renderHistory = ({ item, index }) => (
        <View style={{ margin: 5,marginHorizontal:10, flex: 1,backgroundColor:Colors.gry_color ,padding:15}}>
            
     <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('RateDelivery')}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
     <Text style={{fontSize:16,color:Colors.dark_gry,fontWeight:'bold'}}>Delivery ID : {item.order_code}</Text>
<Text style={{color:Colors.dark_gry}}>Status</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:5}}>
     <Text style={{fontSize:16,color:Colors.dark_gry,}}>Receiver Name : {item.receiver_name}</Text>
<Text style={{color:Colors.dark_gry}}>Item delivering</Text>
</View>

     <Text style={{fontSize:16,color:Colors.dark_gry,fontWeight:'bold',marginBottom:10,marginTop:5}}>Item Type : {item.package_name}</Text>
<Text style={{color:Colors.dark_gry}}>(L/W/H)</Text>
</TouchableOpacity>
        </View>
    )

    render() {
        const buttons = ['Ongoing', 'History']

        const { selectedIndex, DayselectedIndex } = this.state
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
                        <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Booking</Text>

                    }
                   
                />
                <View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:1}}/>
                <ButtonGroup
                                onPress={this.updateIndex}
                                selectedIndex={selectedIndex}
                                buttons={buttons}
                                containerStyle={{ borderWidth: 0, marginTop: 0, marginLeft: 0, marginRight: 0, borderRadius: 0, backgroundColor: '#fff' }}
                                buttonStyle={{}}
                                innerBorderStyle={{ width: 0, }}
                                selectedButtonStyle={{ marginHorizontal: 5, marginTop: 4, borderBottomColor: '#1F292D', borderBottomWidth: 2, backgroundColor: '#fff' }}
                                selectedTextStyle={{ color: '#1F292D' }}
                                textStyle={{ color: "#8B9193", fontSize: 16 }}
                            />           
                
                             {selectedIndex == 0 ?
                                <View style={{flex:1}}>
                                      <View style={{backgroundColor:'#ccc',width:'100%',height:1.5,marginTop:-5}}/>
                                      <FlatList
                            //  horizontal
                            style={{ width: '100%', flex: 1 }}

                            showsVerticalScrollIndicator={false}
                            data={this.state.Data}
                            renderItem={this.renderOngoing}
                        // ListEmptyComponent={this.ListEmpty}
                        />
                                    </View>
                                    :null}
                                     {selectedIndex == 1 ?
                                <View style={{flex:1}}>
                                   
                                   
                                                                          <View style={{backgroundColor:'#ccc',width:'100%',height:1.5,marginTop:-5}}/>
                                   {(this.state.status==0)?
                                   <Text style={{marginTop:40,fontSize:22,textAlign:'center'}}>No History Data found</Text>:
                                      <FlatList
                            //  horizontal
                            style={{ width: '100%', flex: 1 }}

                            showsVerticalScrollIndicator={false}
                            data={this.state.order_history}
                            renderItem={this.renderHistory}
                        // ListEmptyComponent={this.ListEmpty}
                        />
                                   }
                                    </View>
                                    :null}
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor:'#fff',
      

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