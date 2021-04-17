/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
 } from 'react-native';
 import AppNavigator from './src/navigations/AppNavigation';
 import { MenuProvider } from 'react-native-popup-menu';
 
 
 
 export default  class App extends React.Component {
   // componentDidMount() {
   //     SplashScreen.hide();
   // }
   
   render(){
   return (
     <MenuProvider>
       <StatusBar barStyle="light-content" />
       <View style={styles.scrollView}>
         {/* <SafeAreaView style={{ backgroundColor: '#000' }}> */}
           <View style={{flex:1}}>
             <AppNavigator />
           </View>
         {/* </SafeAreaView> */}
       </View>
     </MenuProvider>
   );
   }
 };
 
 const styles = StyleSheet.create({
   scrollView: {
     backgroundColor: 'white',
     height: '100%',
     width: '100%'
   },
 
 });
 
