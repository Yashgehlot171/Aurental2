import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BottomTabBarDriver from './BottomTabBarDriver';
//tabscreen
import HomeD from '../screen/driverscreen/DriverTabBar/HomeD'
import HistoryD from '../screen/driverscreen/DriverTabBar/HistoryD'
import VehicleD from '../screen/driverscreen/DriverTabBar/VehicleD'
import NotificationD from '../screen/driverscreen/DriverTabBar/NotificationD'
import MoreD from '../screen/driverscreen/DriverTabBar/MoreD'
import ItemPickup from '../screen/driverscreen/DriverTabBar/ItemPickup'
import MyVehicle from '../screen/driverscreen/DriverTabBar/MyVehicle';
import RequestVehicle from '../screen/driverscreen/DriverTabBar/RequestVehicle';
import RequestSubmit from '../screen/driverscreen/DriverTabBar/RequestSubmit';
import Accident from '../screen/driverscreen/DriverTabBar/Accident';
import ServiceBooking from '../screen/driverscreen/DriverTabBar/ServiceBooking';
import VehicleDetails from '../screen/driverscreen/DriverTabBar/VehicleDetails';
import Wallet from '../screen/driverscreen/DriverTabBar/Wallet';
import Transaction from '../screen/driverscreen/DriverTabBar/Transaction'
import CourierDetail from '../screen/driverscreen/DriverTabBar/CourierDetail'
import ScheduleDelivery from '../screen/customerscreen/TabScreen/ScheduleDelivery';
import RateDelivery from '../screen/customerscreen/TabScreen/RateDelivery';
import DeliveryContact from '../screen/customerscreen/TabScreen/DeliveryContact';
import Checkout from '../screen/customerscreen/TabScreen/Checkout';
import ConfirmDelivery from '../screen/customerscreen/TabScreen/ConfirmDelivery';
import Paid from '../screen/customerscreen/TabScreen/Paid';
 
const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 750,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { position, layout, scene, index, scenes } = sceneProps
            const toIndex = index
            const thisSceneIndex = scene.index
            const height = layout.initHeight
            const width = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                outputRange: [width, 0, 0]
            })

            // Since we want the card to take the same amount of time
            // to animate downwards no matter if it's 3rd on the stack
            // or 53rd, we interpolate over the entire range from 0 - thisSceneIndex
            const translateY = position.interpolate({
                inputRange: [0, thisSceneIndex],
                outputRange: [height, 0]
            })

            const slideFromRight = { transform: [{ translateX }] }
            const slideFromBottom = { transform: [{ translateY }] }

            const lastSceneIndex = scenes[scenes.length - 1].index

            // Test whether we're skipping back more than one screen
            if (lastSceneIndex - toIndex > 1) {
                // Do not transoform the screen being navigated to
                if (scene.index === toIndex) return
                // Hide all screens in between
                if (scene.index !== lastSceneIndex) return { opacity: 0 }
                // Slide top screen down
                return slideFromBottom
            }

            return slideFromRight
        },
    }
}

// const ServiceFormStack = createStackNavigator({

// }, { initialRouteName: 'ServiceChild' });

const HomeDStack = createStackNavigator(
    {
        HomeD: {
            screen: HomeD,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
        ItemPickup: {
            screen: ItemPickup,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
    //     ScheduleDelivery: {
    //         screen: ScheduleDelivery,
    //         navigationOptions: ({ navigation }) => ({
    //             header: null,
    //         })
    //     },
    //     ConfirmDelivery: {
    //         screen: ConfirmDelivery,
    //         navigationOptions: ({ navigation }) => ({
    //             header: null,
    //         })
    //     },
    //     Checkout: {
    //         screen: Checkout,
    //         navigationOptions: ({ navigation }) => ({
    //             header: null,
    //         })
    //     },
        // MyVehicle: {
        //     screen: MyVehicle,
        //     navigationOptions: ({ navigation }) => ({
        //         header: null,
        //     })
        // },
    //    Paid: {
    //         screen: Paid,
    //         navigationOptions: ({ navigation }) => ({
    //             header: null,
    //         })
    //     },
    }, {
    initialRouteName: 'HomeD'
}
)

const HistoryDStack = createStackNavigator(
    {
        HistoryD: {
            screen: HistoryD,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        // RateDelivery: {
        //     screen: RateDelivery,
        //     navigationOptions: ({ navigation }) => ({
        //         header: null
        //     })
        // },
        // DeliveryContact: {
        //     screen: DeliveryContact,
        //     navigationOptions: ({ navigation }) => ({
        //         header: null
        //     })
        // },
    }, {
    initialRouteName: 'HistoryD'
}
)

const VehicleDStack = createStackNavigator(
    {
        VehicleD: {
            screen: VehicleD,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        MyVehicle: {
            screen: MyVehicle,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
        RequestVehicle: {
            screen: RequestVehicle,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
        RequestSubmit: {
            screen: RequestSubmit,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
        Accident: {
            screen: Accident,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
        ServiceBooking: {
            screen: ServiceBooking,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
        VehicleDetails: {
            screen: VehicleDetails,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
         
    }, {
    initialRouteName: 'VehicleD'
}
) 

const NotificationDStack = createStackNavigator(
    {
        NotificationD: {
            screen: NotificationD,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
     
    }, {
    initialRouteName: 'NotificationD'
}
)
const MoreDStack = createStackNavigator(
    {
        MoreD: {
            screen: MoreD,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },

        Wallet: {
            screen: Wallet,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        Transaction: {
            screen: Transaction,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        CourierDetail: {
            screen: CourierDetail,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
         
    }, {
    initialRouteName: 'MoreD'
}
)


export default createBottomTabNavigator({
    HomeD: {
        screen: HomeDStack,
        navigationOptions: ({ navigation }) => ({
            header: null,
            // tabBarIcon: ({focused,tintColor}) => <Image style={{width:20,height:20}} resizeMode='contain' source={focused?require('../assets/images/Tabs/trending_3x.png'):require('../assets/images/Tabs/trending_3x.png')} />
        })
    },
    HistoryD: {
        screen: HistoryDStack,
        navigationOptions: ({ navigation }) => ({
            header: null,
        })
    },

    VehicleD: {
        screen: VehicleDStack,
        navigationOptions: ({ navigation }) => ({
            header: null,
        })
    },
    NotificationD: {
        screen: NotificationDStack,
        navigationOptions: ({ navigation }) => ({
            header: null,
        })
    },
    MoreD: {
        screen: MoreDStack,
        navigationOptions: ({ navigation }) => ({
            header: null,
        })
    },
 

},
    {

        tabBarComponent: BottomTabBarDriver,
        initialRouteName: 'HomeD',
        resetOnBlur: true

    });
