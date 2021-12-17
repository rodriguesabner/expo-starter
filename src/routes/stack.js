import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import OnBoardingScreen from "../screens/OnBoarding";
import Main from "../screens/Main";
import ProfileScreen from "../screens/Profile";
import {BackHandler} from "react-native";
import SearchScreen from "../screens/Search";
import ChatMessage from "../screens/ChatMessage";
import ProductScreen from "../screens/Product";
import CreateScreen from "../screens/Create";

const StackRoutes = createNativeStackNavigator();

const StackROutes = () => {

    return (
        <StackRoutes.Navigator
            screenOptions={{
                headerShown: false,
                animation: "none"
            }}
            // screenListeners={({route, navigation, current}) => ({
            //     focus: () => {
            //         BackHandler.addEventListener("hardwareBackPress", () => {
            //             if (route.name === "Profile") {
            //                 navigation.goBack()
            //                 return false;
            //             }
            //             return true;
            //         });
            //     },
            //     blur: () => {
            //         BackHandler.removeEventListener("hardwareBackPress");
            //     },
            // })}
            initialRouteName={'OnBoarding'}
        >
            <StackRoutes.Screen name="OnBoarding" component={OnBoardingScreen}/>
            <StackRoutes.Screen name="Main" component={Main}/>
            <StackRoutes.Screen name="Create" component={CreateScreen}/>
            <StackRoutes.Screen name="Profile" component={ProfileScreen}/>
            <StackRoutes.Screen name="Search" component={SearchScreen}/>
            <StackRoutes.Screen name="ChatMessage" component={ChatMessage}/>
            <StackRoutes.Screen name="ProductView" component={ProductScreen}/>
        </StackRoutes.Navigator>
    )
}

export default StackROutes;