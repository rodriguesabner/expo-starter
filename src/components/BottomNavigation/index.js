import React, {useEffect, useState} from "react";
import {Chat, Heart, Home, Plus, User} from "react-native-iconly";
import {Container, Layout} from "./styles";
import {useRoute,} from "@react-navigation/native";
import {useNavigation} from "@react-navigation/core";

const BottomNavigation = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [selectedRoute, setSelectedRoute] = useState("Home");

    useEffect(() => {
        if (route?.params?.screen) {
            const selectedScreen = route.params.screen;
            setSelectedRoute(selectedScreen);
        }

        return () => {
            setSelectedRoute("Home");
        }
    }, [route]);

    const handleChooseFragment = (path) => {
        navigation.navigate('Main', {
            screen: path,
        });
    };

    const handleChooseScreen = (path) => {
        navigation.navigate(path);
    }

    const isSelected = (path) => selectedRoute === path;

    return (
        <Layout>
            <Container>
                <Home
                    set={"curved"}
                    color={isSelected("Home") ? "#2846c2" : "#999"}
                    filled={isSelected("Home")}
                    onPress={() => handleChooseFragment("Home")}
                />
                <Heart
                    set={"curved"}
                    color={isSelected("Favorite") ? "#2846c2" : "#999"}
                    filled={isSelected("Favorite")}
                    onPress={() => handleChooseFragment("Favorite")}
                />
                <Plus
                    set={"curved"}
                    color={isSelected("Create") ? "#2846c2" : "#999"}
                    filled={isSelected("Create")}
                    onPress={() => handleChooseScreen("Create")}
                />
                <Chat
                    set={"curved"}
                    color={isSelected("Chat") ? "#2846c2" : "#999"}
                    filled={isSelected("Chat")}
                    onPress={() => handleChooseFragment("Chat")}
                />
                <User
                    set={"curved"}
                    color={"#999"}
                    onPress={() => handleChooseScreen("Profile")}
                />
            </Container>
        </Layout>
    )
}

export default BottomNavigation;