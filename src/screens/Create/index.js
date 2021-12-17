import React from 'react';
import {
    ButtonText,
    ButtonWrapper,
    Container,
    LeftWrapperButton,
    ProfileImage,
    TextTitle,
    Username,
    WrapperHeader,
    WrapperMenu,
    WrapperProfile
} from "./styles";
import {ScrollView, View, Text, TextInput} from "react-native";
import TopContent from "../../components/TopContent";
import {Activity, ArrowLeft, ArrowRight, Heart, Logout, Search, Setting, User} from "react-native-iconly";
import {useNavigation} from "@react-navigation/core";

const CreateScreen = () => {
    const navigation = useNavigation();

    const handleBackScreen = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <TopContent
                title={<WrapperHeader>
                    <ArrowLeft
                        onPress={handleBackScreen}
                        color="#000"
                        set={"curved"}
                        style={{marginRight: 10}}
                    />
                    <TextTitle>Novo Produto</TextTitle>
                </WrapperHeader>}
                showSecondLine={false}
            />

            <ScrollView>
                <WrapperProfile>
                    <ProfileImage
                        source={{
                            uri: "data:image/png;base64,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"
                        }}
                    />

                    <Username>
                        Escolha uma foto
                    </Username>
                </WrapperProfile>

                <View>
                    <Text>Nome do Produto</Text>
                    <TextInput
                        placeholder="Nome"
                    />

                    <Text>Voce deseja doar?</Text>
                    <TextInput
                        placeholder="Checkbox"
                    />

                    <Text>Qual o valor?</Text>
                    <TextInput
                        placeholder="R$ 300,00"
                    />
                </View>
            </ScrollView>
        </Container>
    );
};

export default CreateScreen;