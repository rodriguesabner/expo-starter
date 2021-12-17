import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Routes} from "./src/routes";
import {IconlyProvider} from "react-native-iconly";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <IconlyProvider>
                <Routes/>
            </IconlyProvider>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: "100%"
    },
});
