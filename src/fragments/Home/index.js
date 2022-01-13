import React from "react";
import {Container, WrapperContent} from "./styles";
import TopContent from "../../components/TopContent";
import {ScrollView} from "react-native";

const HomeScreen = () => {
    return (
        <Container>
            <ScrollView
                showsVerticalScrollIndicator={false}
                overScrollMode={'never'}
            >
                <WrapperContent>
                    <TopContent
                        title={"Boa noite,"}
                        showSecondLine={true}
                        subTitle={"Abner 👋"}
                    />

                </WrapperContent>
            </ScrollView>
        </Container>
    );
}

export {HomeScreen}