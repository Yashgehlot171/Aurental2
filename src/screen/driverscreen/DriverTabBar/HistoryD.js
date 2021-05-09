
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
  
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
        if (selectedIndex === 0) {

            //   this.Search_JOB("UPCOMING");
            // this.setState({ Nav_Screen: 'JobDetails' })
        } else if (selectedIndex === 1) {
   
            //   this.Search_JOB("RECURRING");
            // this.setState({ Nav_Screen: 'RecurringJobDetails' })
        } else if (selectedIndex === 2) {
         {
          this.props.navigation.navigate('Completed')
         }
            //   this.Search_JOB("COMPLETED");
            // this.setState({ Nav_Screen: 'CompletedJobDetails' })
        }
    }
    renderOngoing = ({ item, index }) => (
        <View style={{ margin: 5,marginHorizontal:10, flex: 1,backgroundColor:Colors.gry_color ,padding:15}}>
     
     <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('CourierDetail')}}>
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
     
      <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('CourierDetail')}}>
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

    render() {
        const buttons = ['Active', 'Pending','Completed']

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
                            <Image style={{ width: 25, height: 25, tintColor:Colors.dark_gry, marginLeft: 10, marginTop: 5, resizeMode: 'contain' }} source={require('../../../../assets/icon/left.png')} />

                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={{ width: '100%', fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 , fontWeight:"700"}}>Task</Text>

                    }
                    rightComponent={
                        <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', height: 25 }} onPress={() => this.props.navigation.navigate('')}>
                            <Image style={{ width: 30, height: 30, tintColor: '#000', marginRight: 10, marginTop: 5, resizeMode: 'contain' }} source={require('../../../../assets/icon/gps.png')} />

                        </TouchableOpacity>
                    }
                   
                />
                <View style={{backgroundColor:'#000',width:'100%',height:0.3,marginVertical:3}}/>
                <ScrollView>
                <View style={{backgroundColor:'#000',width:'100%',height:160,padding:15}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',}}>
<Text style={{color:'#fff'}}>Start time 00:00</Text>
<Text style={{color:'#fff'}}>End time 00:00</Text>
                  </View>
                  <View style={{width:'100%',height:55,borderColor:'#fff',borderRadius:5,borderWidth:0.5,marginVertical:8}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{backgroundColor:'#fff',height:55,width:95,borderRadius:5,alignItems:'center',justifyContent:'center'}}>
                      <Text style={{color:'#000',fontWeight:'bold'}}>12 Items</Text>
                    </View>
<Text style={{color:'#fff',marginVertical:17}}>Total Time 00:00</Text>
<Text style={{color:'#fff',marginVertical:17,marginRight:10}}>17 Jan 2021</Text>
                  </View>
                  <View style={{alignItems:'center',marginTop:10}}>
                  <TouchableOpacity style={{backgroundColor:'green',width:120,height:40,borderRadius:5,justifyContent:'center'}}>
                  <Text style={{color:'#fff',textAlign:'center',}}>Start</Text>
                  </TouchableOpacity>
                  </View>
                  </View>
                  
                </View>
                <ButtonGroup
                                onPress={this.updateIndex}
                                selectedIndex={selectedIndex}
                                buttons={buttons}
                                containerStyle={{ borderWidth: 0, marginTop: 0, marginLeft: 0, marginRight: 0, borderRadius: 0, backgroundColor: '#fff' }}
                                buttonStyle={{}}
                                innerBorderStyle={{ width: 0, }}
                                selectedButtonStyle={{ marginHorizontal: 5, marginTop: 4, borderBottomColor: '#1F292D', borderBottomWidth: 2, backgroundColor: '#fff' }}
                                selectedTextStyle={{ color: '#000' }}
                                textStyle={{ color: "#000", fontSize: 16 }}
                            />           
                
                             {selectedIndex == 0 ?
                                <View style={{flex:1}}>
                                  <View style={{alignItems:'center' ,paddingHorizontal:15}}>
                              <Text style={{textAlign:'center'}}>Your Location</Text>
                            
                              <Image style={{ width: 25, height: 25,   marginTop: 5, resizeMode: 'contain' }} source={require('../../../../assets/icon/dot_circle.png')} />
                              <Image style={{ width: 25, height: 25,   resizeMode: 'contain' }} source={require('../../../../assets/icon/dot_line3.png')} />
                              <Text style={{textAlign:'center'}}>20 min</Text>
                              <Image style={{ width: 25, height: 25,   resizeMode: 'contain' }} source={require('../../../../assets/icon/dot_line3.png')} />
                              <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('RouteScreen')}} >
                             <View style={{backgroundColor:Colors.introButton,width:'100%',alignSelf:'center', height:50,flexDirection:'row',justifyContent:'space-between',padding:5,borderRadius:5}}>
                        
                             <Text style={{marginTop:12,color:'#fff'}}>Item 1</Text>
                             <View style={{width:1,height:40,backgroundColor:'#fff',marginTop:0}}>
                               </View>
                             <Text style={{marginTop:12,color:'#fff'}}>Name -Unit No, Road, & Pincode</Text>
                             <View style={{backgroundColor:'#fff',borderRadius:4,width:60,height:30,marginTop:5,alignItems:'center',justifyContent:'center'}}>
                             <Text style={{color:'#000',}}>S$ 7</Text>
                             </View>
                             <Image style={{ width: 20, height: 20, tintColor:Colors.white_Button, marginLeft: 10, marginTop: 10, resizeMode: 'contain' }} source={require('../../../../assets/icon/right-arrow.png')} />

                                </View>
                                </TouchableOpacity>
                                <Image style={{ width: 25, height: 25,   resizeMode: 'contain' }} source={require('../../../../assets/icon/dot_line3.png')} />
                              <Text style={{textAlign:'center'}}>11 min</Text>
                              <Image style={{ width: 25, height: 25,   resizeMode: 'contain' }} source={require('../../../../assets/icon/dot_line3.png')} />
                            
                              <View style={{backgroundColor:Colors.gry_color,width:'88%',alignSelf:'center', height:50,flexDirection:'row',justifyContent:'space-between',padding:5,borderRadius:5}}>
                             <Text style={{marginTop:12,color:'#000',fontWeight:'bold'}}>Item 2</Text>
                             <View style={{width:1,height:40,backgroundColor:'#000',marginTop:0}}>
                               </View>
                             <Text style={{marginTop:12,color:'#000',fontSize:12}}>Name -Unit No, Road, & Pincode</Text>
                             <View style={{backgroundColor:'#BBE0E5',borderRadius:15,width:50,height:25,marginTop:8,alignItems:'center',justifyContent:'center'}}>
                             <Text style={{color:'#000',fontSize:12}}>S$ 7</Text>
                             </View>
                             <Image style={{ width: 20, height: 20, tintColor:'#000', marginTop: 11, resizeMode: 'contain' }} source={require('../../../../assets/icon/right-arrow.png')} />

                                </View>
                                <Image style={{ width: 25, height: 25,   resizeMode: 'contain' }} source={require('../../../../assets/icon/dot_line3.png')} />
                              <Text style={{textAlign:'center'}}>20 min</Text>
                              <Image style={{ width: 25, height: 25,   resizeMode: 'contain' }} source={require('../../../../assets/icon/dot_line3.png')} />
                            
                              <View style={{backgroundColor:Colors.gry_color,width:'88%',alignSelf:'center', height:50,flexDirection:'row',justifyContent:'space-between',padding:5,borderRadius:5}}>
                             <Text style={{marginTop:12,color:'#000',fontWeight:'bold'}}>Item 3</Text>
                             <View style={{width:1,height:40,backgroundColor:'#000',marginTop:0}}>
                               </View>
                             <Text style={{marginTop:12,color:'#000',fontSize:12}}>Name -Unit No, Road, & Pincode</Text>
                             <View style={{backgroundColor:'#BBE0E5',borderRadius:15,width:50,height:25,marginTop:8,alignItems:'center',justifyContent:'center'}}>
                             <Text style={{color:'#000',fontSize:12}}>S$ 7</Text>
                             </View>
                             <Image style={{ width: 20, height: 20, tintColor:'#000', marginTop: 11, resizeMode: 'contain' }} source={require('../../../../assets/icon/right-arrow.png')} />

                                </View>
                                <Image style={{ width: 25, height: 25,   resizeMode: 'contain' }} source={require('../../../../assets/icon/dot_line3.png')} />
                              <Text style={{textAlign:'center'}}>20 min</Text>
                              <Image style={{ width: 25, height: 25,   resizeMode: 'contain' }} source={require('../../../../assets/icon/dot_line3.png')} />
                            
                              <View style={{backgroundColor:Colors.gry_color,width:'88%',alignSelf:'center', height:50,flexDirection:'row',justifyContent:'space-between',padding:5,borderRadius:5}}>
                             <Text style={{marginTop:12,color:'#000',fontWeight:'bold'}}>Item 4</Text>
                             <View style={{width:1,height:40,backgroundColor:'#000',marginTop:0}}>
                               </View>
                             <Text style={{marginTop:12,color:'#000',fontSize:12}}>Name -Unit No, Road, & Pincode</Text>
                             <View style={{backgroundColor:'#BBE0E5',borderRadius:15,width:50,height:25,marginTop:8,alignItems:'center',justifyContent:'center'}}>
                             <Text style={{color:'#000',fontSize:12}}>S$ 7</Text>
                             </View>
                             <Image style={{ width: 20, height: 20, tintColor:'#000', marginTop: 11, resizeMode: 'contain' }} source={require('../../../../assets/icon/right-arrow.png')} />

                                </View>
                              </View>

                                    </View>
                                    :null}
                                     {selectedIndex == 1 ?
                                <View style={{flex:1}}>
 
                                    <FlatList
                            //  horizontal
                            style={{ width: '100%', flex: 1 }}

                            showsVerticalScrollIndicator={false}
                            data={this.state.Data}
                            renderItem={this.renderHistory}
                        // ListEmptyComponent={this.ListEmpty}
                        />
                                   
                                    </View>
                                    :null}
                                    
                                  
                                     </ScrollView>
            
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