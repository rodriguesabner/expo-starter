import React from 'react';
import {AppName, Layout, Title, WrapperButton, WrapperWelcome} from "./styles";
import {View} from "react-native";
import {StatusBar} from "expo-status-bar";
import Button from "../../components/Button";
import {useNavigation} from "@react-navigation/core";

const OnBoardingScreen = () => {
    const navigation = useNavigation();

    function onPress() {
        navigation.reset({
            index: 0,
            routes: [{name: 'Main'}],
        });
    }

    return (
        <Layout>
            <StatusBar style="light"/>
            <WrapperWelcome>
                <Title>
                    Welcome at
                </Title>
                <AppName>
                    AppName
                </AppName>
            </WrapperWelcome>

            <View/>

            <WrapperButton>
                <Button
                    title={"Get Started"}
                    onPress={onPress}
                />
            </WrapperButton>
        </Layout>
    );
};

export default OnBoardingScreen;
