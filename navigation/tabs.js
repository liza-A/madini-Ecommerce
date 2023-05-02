import React from "react";
import {
    Image,
    Platform,
    View
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import CartIcon from "../components/CartIcon";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Profile from "../screens/Profile";
import CartScreen  from "../screens/CartScreen";
import {HomeScreen} from '../screens/HomeScreen.js'
import ConfirmAndPay from "../screens/ConfirmAndPay";
import { ProductDetailScreen } from "../screens/ProductDetailScreen";
const Tab = createBottomTabNavigator()

const Tabs = ({navigation}) => {

    return (
        <Tab.Navigator
        initialRouteName={"Home"}
        screenOptions={{headerShown: false, tabBarShowLabel: false}}
        >

<Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                       <View style={{justifyContent:'center'}}>
                         <Image
                            source={require('../assets/logo.png')}
                            resizeMode="contain"
                            style={{
                                width: 200,
                                height: 200,
                               
                            }}
                        />
                       </View>
                    ),
                   
                }}
            />

{/* <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/wallet.png')}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                               
                            }}
                        />
                    ),
                    tabBarStyle: { display: "none" },
                }}
            /> */}


            


            
            
            
            

            
            
            {/* <Tab.Screen
                name="ConfirmAndPay"
                component={ConfirmAndPay}
                options={{
                    // tabBarIcon: ({ focused }) => (
                    //     <Image
                    //         source={icons.heart}
                    //         resizeMode="contain"
                    //         style={{
                    //             width: 35,
                    //             height: 35,
                    //             tintColor: focused ? COLORS.primary : COLORS.black
                    //         }}
                    //     />
                    // ),
                    tabBarStyle: { display: "none" },
                }}
            /> */}


            {/* <Tab.Screen
                name="ProductDetailScreen"
                component={ProductDetailScreen}
                options={{
                    // tabBarIcon: ({ focused }) => (
                    //     <Image
                    //         source={icons.profile}
                    //         resizeMode="contain"
                    //         style={{
                    //             width: 35,
                    //             height: 35,
                    //             tintColor: focused ? COLORS.primary : COLORS.black
                    //         }}
                    //     />
                    // ),
                    tabBarStyle: { display: "none" },
                }}
            /> */}

<Tab.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        // <Image
                        //     source={require('../assets/carticon.png')}
                        //     resizeMode="contain"
                        //     style={{
                        //         width: 40,
                        //         height: 40,
                        //     }}
                        // />
                        // <Ionicons name="cart-outline" size={40} color="pink" />
                        <CartIcon onPressCart={() => navigation.navigate("CartScreen")}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;