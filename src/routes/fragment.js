import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {HomeScreen} from "../fragments/Home";
import ChatScreen from "../fragments/Chat";

const Tab = createNativeStackNavigator();

const AppTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                animation: "none"
            }}
            initialRouteName={"Home"}
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Chat" component={ChatScreen}/>
        </Tab.Navigator>
    )
}

export default AppTabs;