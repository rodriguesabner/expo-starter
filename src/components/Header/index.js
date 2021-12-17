import React from "react"
import {TouchableOpacity, View} from "react-native"
import {Container, Layout, ProfileImage} from "./styles"
import {Search} from "react-native-iconly";
import {useNavigation} from "@react-navigation/core";

const Header = () => {
    const navigation = useNavigation();

    const handleNavigateToSearch = () => {
        navigation.navigate("Search");
    }

    return (
        <Layout>
            <Container>
                <Search color="#000" onPress={() => handleNavigateToSearch()}/>

                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => navigation.navigate("Profile")}
                >
                    <ProfileImage
                        source={{uri: "https://avatars.githubusercontent.com/u/40338524?v=4"}}
                    />
                </TouchableOpacity>
            </Container>
        </Layout>
    )
}

export default Header;