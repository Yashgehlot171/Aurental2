import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,Modal,StatusBar,StyleSheet,TextInput
} from 'react-native';
import Colors from '../../../constant/Color';
import { Header, Icon, Avatar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WebView } from 'react-native-webview';
import Loader from '../../../../Loader/index';
import { SafeAreaView } from 'react-native';
// import ImagePicker, { openCamera } from 'react-native-image-crop-picker';
// import {
//   Menu,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
//   renderers,
// } from 'react-native-popup-menu';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name:'',
            mobile:'',
            address:'',
            optionaladdress:'',
            showpassword: true,
            user_image:'',
            user_data:'',
            isLoading: false
        }
    }
    componentDidMount = async () => {
   this.setState({user_data:this.props.navigation.getParam('user_data')})
//    this.setState({name:this.state.user_data.user_name})
        // }
      }
  

    validation = () => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (this.state.email === ''  && this.state.name === '' && this.state.mobile === '' && this.state.address === '') {
            // this.setState({ isLoading: false })
            alert('Please Enter all field')
        }
        else if (this.state.email === '') {
            alert('Please Enter your Email Id')
        }
        else if (this.state.mobile === '') {
            alert('Please Enter your Mobile Number')
        }
     
        else if (this.state.name === '') {
            alert('Please Enter your Name')
        }
        else if (this.state.address === '') {
            alert('Please Enter your address ')
        }
        else if (reg.test(this.state.email) === false) {
            alert('Please Enter Correct Email Id')
        }
        else if (phoneno.test(this.state.mobile) === false) {
            alert('Please Enter Correct Mobile No')
        }
        else {
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
        this.setState({ isLoading: true })
        // {console.log('token------',token)}
        let _data = { email:this.state.email,mobile_no:this.state.mobile,user_name:this.state.name,address:this.state.address }
        console.log('signup reucst data',_data);
        console.log('Authorization token',value)
        fetch('http://ec2-54-251-142-179.ap-southeast-1.compute.amazonaws.com:6060/api/v1/aurental/update_profile', {
          method: "POST",
          body: JSON.stringify(_data),
          headers: {"Content-type": "application/json; charset=UTF-8",
          Authorization:value
        }
        })
       
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("RESPONSE ",responseJson );
            this.setState({ isLoading: false })
            if(responseJson.status===1){
                this.setState({ isLoading: false })
                // let user_info = responseJson.data
                // let user_token = responseJson.token
                let user_token = responseJson.token
                AsyncStorage.setItem('user_token', user_token)
                this.props.navigation.navigate('More')
                alert(responseJson.message)
            }
            else if(responseJson.status===0){
                alert(responseJson.message)
                            }
        })
        .catch((error) => {
            this.setState({ isLoading: false })
        //   this.setState({ isLoading: false })
          console.error(error);
        });
      };

    //   Pick_Image = () => {
    //     ImagePicker.openPicker({
    //       width: 400,
    //       height: 400,
    //       cropping: true
    //     }).then(image => {
    //       console.log("imageData", image);
    
    //       var imageData = {
    //         name: image.path.substring(image.path.lastIndexOf('/') + 1),
    //         type: image.mime,
    //         uri:
    //           Platform.OS === "android" ? image.path : image.path.replace("file://", "")
    //       }
    //       console.log("imageData--imageData", imageData);
    //       this.setState({
    //         user_image: imageData.uri,
    //         ImgData: imageData
    //       });
    //     });
    //   }
    
    //   captureImage = () => {
    //     ImagePicker.openCamera({
    //       width: 400,
    //       height: 400,
    //       cropping: true
    //     }).then(image => {
    //       console.log("imageData", image);
    
    //       var imageData = {
    //         name: image.path.substring(image.path.lastIndexOf('/') + 1),
    //         type: image.mime,
    //         uri:
    //           Platform.OS === "android" ? image.path : image.path.replace("file://", "")
    //       }
    //       console.log("imageData--imageData", imageData);
    //       this.setState({
    //         user_image: imageData.uri,
    //         ImgData: imageData
    //       });
    //     });
    //   }
    render() {
        return (
   <View style={{flex:1,backgroundColor:'#fff'  }}>
       {/* <SafeAreaView/>
       <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
       */}
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
    <Text style={{ width: '100%', color: Colors.dark_gry, fontSize:20, textAlign: 'center', marginTop: 5, marginLeft: -5, height: 40 }}>Edit Profile</Text>

}

/>
<View style={{backgroundColor:'#000',width:'100%',height:0.5,marginVertical:10}}/>
<View style={{padding:18}}>

<TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(name) => this.setState({ name })}
                                    value={this.state.name}
                                    placeholder={this.state.user_data.user_name}
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none' />
                                    
<TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(mobile) => this.setState({ mobile })}
                                    value={this.state.mobile}
                                    placeholder={this.state.user_data.mobile_no}
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none' />

                                                                        
<TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
                                    placeholder={this.state.user_data.email}
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none' />

                                                              <TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(address) => this.setState({ address })}
                                    value={this.state.address}
                                    placeholder={this.state.user_data.address}
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none' />
                                                              <TextInput
                                    style={[styles.auth_textInput,]}
                                    onChangeText={(optionaladdress) => this.setState({ optionaladdress })}
                                    value={this.state.optionaladdress}
                                    placeholder={this.state.user_data.address}
                                    placeholderTextColor={Colors.dark_gry}
                                    autoCapitalize='none' />


<TouchableOpacity 
      onPress={()=>{
          this.validation();
      }}
      style={{height:45, width:"95%", borderColor:"gray", borderWidth:1, borderRadius:5,marginTop:30,backgroundColor:Colors.introButton,marginLeft:10 }}>
        <Text style={{textAlign:"center", marginTop:14,fontWeight:'bold',color:'#fff'}}>Update Profile</Text>
      </TouchableOpacity>

</View>
 </View>
  );
};

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor:'#fff',
        alignItems: 'center',

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