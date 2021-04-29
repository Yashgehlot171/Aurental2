import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BottomTabBar from './BottomTabBar';
//tabscreen
import HomeC from '../screen/customerscreen/TabScreen/HomeC'
import BookingC from '../screen/customerscreen/TabScreen/BookingC'
import NotificationC from '../screen/customerscreen/TabScreen/NotificationC'
import MoreC from '../screen/customerscreen/TabScreen/MoreC'
import Setting from '../screen/customerscreen/TabScreen/Setting';
import PrivacyPolicy from '../screen/customerscreen/TabScreen/PrivacyPolicy';
import AboutUs from '../screen/customerscreen/TabScreen/AboutUs';
import ContactUs from '../screen/customerscreen/TabScreen/ContactUs'
import TermsConditions from '../screen/customerscreen/TabScreen/TermsConditions'
import ChangePassword from '../screen/customerscreen/TabScreen/ChangePassword'
import EditProfileDetails from '../screen/customerscreen/TabScreen/EditProfileDetails'
import SpecialDeal from '../screen/customerscreen/TabScreen/SpecialDeal'
import CourierCalculator from '../screen/customerscreen/TabScreen/CourierCalculator';
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

const HomeCStack = createStackNavigator(
    {
        HomeC: {
            screen: HomeC,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
        SpecialDeal: {
            screen: SpecialDeal,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
        ScheduleDelivery: {
            screen: ScheduleDelivery,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
        ConfirmDelivery: {
            screen: ConfirmDelivery,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
        Checkout: {
            screen: Checkout,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
        CourierCalculator: {
            screen: CourierCalculator,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
       Paid: {
            screen: Paid,
            navigationOptions: ({ navigation }) => ({
                header: null,
            })
        },
    }, {
    initialRouteName: 'HomeC'
}
)

const BookingCStack = createStackNavigator(
    {
        BookingC: {
            screen: BookingC,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        RateDelivery: {
            screen: RateDelivery,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        DeliveryContact: {
            screen: DeliveryContact,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
    }, {
    initialRouteName: 'BookingC'
}
)

const NotificationCStack = createStackNavigator(
    {
        NotificationC: {
            screen: NotificationC,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
     
    }, {
    initialRouteName: 'NotificationC'
}
)
const MoreCStack = createStackNavigator(
    {
        MoreC: {
            screen: MoreC,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        Setting: {
            screen: Setting,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        PrivacyPolicy: {
            screen: PrivacyPolicy,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        AboutUs: {
            screen: AboutUs,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        ContactUs: {
            screen: ContactUs,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        TermsConditions: {
            screen: TermsConditions,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        ChangePassword: {
            screen: ChangePassword,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        EditProfileDetails: {
            screen: EditProfileDetails,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
    }, {
    initialRouteName: 'MoreC'
}
)


export default createBottomTabNavigator({
    HomeC: {
        screen: HomeCStack,
        navigationOptions: ({ navigation }) => ({
            header: null,
            // tabBarIcon: ({focused,tintColor}) => <Image style={{width:20,height:20}} resizeMode='contain' source={focused?require('../assets/images/Tabs/trending_3x.png'):require('../assets/images/Tabs/trending_3x.png')} />
        })
    },
    BookingC: {
        screen: BookingCStack,
        navigationOptions: ({ navigation }) => ({
            header: null,
        })
    },


    NotificationC: {
        screen: NotificationCStack,
        navigationOptions: ({ navigation }) => ({
            header: null,
        })
    },
    MoreC: {
        screen: MoreCStack,
        navigationOptions: ({ navigation }) => ({
            header: null,
        })
    },
 

},
    {

        tabBarComponent: BottomTabBar,
        initialRouteName: 'HomeC',
        resetOnBlur: true

    });
