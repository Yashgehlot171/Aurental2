import * as React from "react"
import { AsyncStorage, Animated, Text, View, Image, TouchableOpacity, Keyboard, SafeAreaView } from "react-native";
import Colors from '../constant/Color';
import Avatar from 'react-native-elements';

const Tab = ({ title, activeImage, unactiveImage, onPress, isFocused, isShowBadge, badge_value, color}) => {
    return (
        <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
            <View
                style={{ alignItems: 'center' }}
            >
                <Image style={isFocused ? {
                    width: 28, height: 28,
                    //  tintColor:Colors.active_color
                } : {
                    width: 26, height: 26,
                        //  tintColor:Colors.unactive_color
                    }} resizeMode='contain' source={isFocused ? activeImage : unactiveImage} />

                <Text
                    numberOfLines={1}
                    style={{  fontSize: 12, textAlign: 'center', marginTop: 5, color: isFocused ? Colors.text_white : Colors.dark_gry, }}
                >{title}</Text>
                {/* {isShowBadge && <View style={{position:'absolute',top:-5}}><Avatar rounded size={20} title={badge_value} containerStyle={{marginLeft:40}} overlayContainerStyle={{backgroundColor:Colors.green_text}} titleStyle={{color:'#fff'}} /></View>} */}
            </View>
        </TouchableOpacity>
    )
}

//large tab bar icon

const Tablarge = ({ title, activeImage, unactiveImage, onPress, isFocused, isShowBadge, badge_value, color }) => {
    return (
        <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
            <View
                style={{ alignItems: 'center' }}
            >
                <Image style={isFocused ? {
                    width: 60, height: 60, marginBottom: 11,
                    //  tintColor:Colors.buttom_color
                } : {
                    width: 60, height: 60, marginBottom: 11,
                        //  tintColor:'#fff'
                    }} resizeMode='contain' source={isFocused ? activeImage : unactiveImage} />
            {/* <Text
                    numberOfLines={1}
                    style={{  fontSize: 12, textAlign: 'center', marginTop: 5, color: isFocused ? Colors.buttom_color : Colors.unactive_tabColor, }}
                >{title}</Text> */}
                {/* {isShowBadge && <View style={{position:'absolute',top:-5}}><Avatar rounded size={15} title={badge_value} containerStyle={{marginLeft:40}} overlayContainerStyle={{backgroundColor:Colors.orange_dark}} titleStyle={{color:Colors.black_color}} /></View>} */}
            </View>
        </TouchableOpacity>
    )
}

class ServiceTabBar extends React.Component {

    state = {
        isVisible: true
    }
    componentWillMount() {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)
        this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)
    }
    componentWillUnmount() {
        this.keyboardWillShowSub.remove()
        this.keyboardWillHideSub.remove()
    }
    keyboardWillShow = event => {
        this.setState({
            isVisible: false
        })
    }
    keyboardWillHide = event => {
        this.setState({
            isVisible: true
        })
    }

    render() {
        // console.log('props',props);
        const { navigation } = this.props
        const navigationState = navigation.state;
        return (this.state.isVisible ?
            <View>
                    {/* <View style={{ height:1.5,backgroundColor: '#ABABAB',opacity:1,width:'100%'}} /> */}
                <View style={{
                    height: 65,
                    //   backgroundColor: Colors.tab_color,
                    paddingLeft: 10,
                    paddingRight: 10,
                    flexDirection: "row",
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    shadowOffset: {
                        width: 0,
                        height: -2
                    },
                    shadowRadius: 4,
                    shadowOpacity: 0.4,
                    shadowColor: '#ccc',
                    elevation: 10,
                    backgroundColor: '#000',
                }}>
                    {navigationState.routes.map((route, index) => {
                        if (route.routeName === 'HomeC') {
                          return (
                            <Tab
                              title={'Home'}
                            
                              activeImage={require('../../assets/icon/homeActive.png')}
                              unactiveImage={require('../../assets/icon/homeInactive.png')}
                              onPress={() => {
                                // this.props.refreshMore();
                                navigation.navigate(route.routeName)
                              }}
                              isFocused={navigationState.index == index}
                            //   color="#1DE62A"
                            />
                          )
                            } 
                        else if (route.routeName === 'BookingC') {
                            return (
                                <Tab
                                    title={'Booking'}

                                    activeImage={require('../../assets/icon/bookingActive.png')}
                                    unactiveImage={require('../../assets/icon/bookingInactive.png')}
                                    onPress={() => {
                                        // this.props.refreshMore();
                                        navigation.navigate(route.routeName)
                                    }}
                                    isFocused={navigationState.index == index}
                                //   color="#1DE62A"
                                />
                            )
                        }
                        else if (route.routeName === 'NotificationC') {
                            return (
                                <Tab
                                title={'Notification'}

                                activeImage={require('../../assets/icon/notificationActive.png')}
                                unactiveImage={require('../../assets/icon/notification.png')}
                                onPress={() => {
                                    // this.props.refreshMore();
                                    navigation.navigate(route.routeName)
                                }}
                                isFocused={navigationState.index == index}
                            //   color="#1DE62A"
                            />
                            )
                        }
                        else if (route.routeName === 'MoreC') {
                            return (
                                <Tab
                                    title={'More'}

                                    activeImage={require('../../assets/icon/moreActive.png')}
                                    unactiveImage={require('../../assets/icon/moreInactive.png')}
                                    onPress={() => {
                                        // this.props.refreshMore();
                                        navigation.navigate(route.routeName)
                                    }}
                                    isShowBadge
                                    badge_value={3}
                                    isFocused={navigationState.index == index}
                                //   color="#1DE62A"
                                />
                            )
                        }
                        // else if (route.routeName === 'ProfileScreen') {
                        //     return (
                        //         <Tab
                        //             title={'Profile'}

                        //             activeImage={require('../Assets/tabicon/profileUnactive.png')}
                        //             unactiveImage={require('../Assets/tabicon/profileUnactive.png')}
                        //             onPress={() => {
                        //                 // this.props.refreshMore();
                        //                 navigation.navigate(route.routeName)
                        //             }}
                        //             // isShowBadge
                        //             // badge_value={3}
                        //             isFocused={navigationState.index == index}
                        //         //   color="#1DE62A"
                        //         />
                        //     )
                        // }

                    })}
                </View>
                <SafeAreaView style={{backgroundColor:'#ffffff'}} />
            </View>
            : null
        )
    }
}

export default ServiceTabBar;