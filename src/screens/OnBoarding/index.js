import React from 'react';
import {AppName, Layout, Title, WrapperButton, WrapperWelcome} from "./styles";
import {View} from "react-native";
import {StatusBar} from "expo-status-bar";
import Button from "../../components/Button";
import {useNavigation} from "@react-navigation/core";

const OnBoardingScreen = () => {
    const navigation = useNavigation();

    function onPress() {
        // navigation.navigate('Main', {
        //     screen: 'Home',
        // });

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
                    Bem vindo ao
                </Title>
                <AppName>
                    IBaby 🐣
                </AppName>
            </WrapperWelcome>

            <View/>

            <WrapperButton>
                <Button
                    title={"Iniciar"}
                    onPress={onPress}
                />
            </WrapperButton>
        </Layout>
    );
};

export default OnBoardingScreen;
