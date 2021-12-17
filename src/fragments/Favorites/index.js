import React from 'react';
import {Container} from "./styles";
import {ScrollView, View} from "react-native";
import TopContent from "../../components/TopContent";

const FavoriteScreen = () => {
    return (
        <Container>
            <ScrollView>
                <View>
                    <TopContent
                        title={"Favoritos"}
                        showSecondLine={false}
                    />
                </View>
            </ScrollView>
        </Container>
    );
};

export default FavoriteScreen;
