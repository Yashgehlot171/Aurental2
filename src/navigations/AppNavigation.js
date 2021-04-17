import React from 'react';
import { AsyncStorage, View, Image, Text, Animated, Easing, TouchableOpacity, SafeAreaView } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from '../screen/SplashScreen';
import CustomerLogin from '../screen/customerscreen/CustomerLogin';
import CustomerSignUp from '../screen/customerscreen/CustomerSignUp';
import ForgotPassword from '../screen/customerscreen/ForgotPassword';
import ChooseRole from '../screen/ChooseRole';
// import FirstScreen from '../Screens/FirstScreen';
// import ChooseScreen from '../Screens/ChooseScreen';
// import LoginScreen from '../Screens/LoginScreen';
// import RegisterScreen from '../Screens/RegisterScreen';
// import OtpScreen from '../Screens/OtpScreen';
import BottomTabNavigator from '../navigations/BottomTabNavigator';
import App from '../screen/customerscreen/TabScreen/MoreC';
// import IcoCalculation from '../Screens/TabScreen/HomeScreen/IcoCalculation';
const SplashStack = createStackNavigator(
    {
      Splash: {
        screen:Splash,
        navigationOptions: ({navigation}) => ({
          header: null
        })
      }
    }, {
    initialRouteName: 'Splash'
  }
  )

   const AuthStack = createStackNavigator({
    ChooseRole: {
      screen: ChooseRole,
      navigationOptions:()=>({
        header: null,
     
      }) 
    },
    CustomerLogin: {
            screen: CustomerLogin,
            navigationOptions:()=>({
              header: null,
           
            }) 
          },
          CustomerSignUp: {
            screen: CustomerSignUp,
            navigationOptions:()=>({
              header: null,
           
            }) 
          },
          ForgotPassword: {
            screen: ForgotPassword,
            navigationOptions:()=>({
              header: null,
           
            }) 
          },
          initialRouteName: 'CustomerLogin'
        })

       
        const AppStack = createStackNavigator({
          BottomTabNavigator: {
            screen : BottomTabNavigator,
            navigationOptions:{
              header:null,
            }
          },
        
         
        },
          {
            initialRouteName: 'BottomTabNavigator',
           
          }
        ) 
      

    export default createAppContainer(createSwitchNavigator({
        Splash: Splash,
       
      Auth :AuthStack,
      CustomerApp:AppStack

      }),
        {
          initialRouteName: 'AuthStack',
        }
      );