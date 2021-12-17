import React from 'react';
import {SafeAreaView, StyleSheet} from "react-native";
import BottomNavigation from "../../components/BottomNavigation";
import {StatusBar} from "expo-status-bar";
import Fragments from "../../routes/fragment";
import Header from "../../components/Header";

const Main = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
            <Header/>
            <Fragments/>
            <BottomNavigation/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: "100%"
    },
});

export default Main;