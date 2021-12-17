import React from 'react';
import {Container} from "./styles";
import {ScrollView, View} from "react-native";
import TopContent from "../../components/TopContent";
import ChatList from "../../components/Chat/ChatList";

const ChatScreen = () => {
    return (
        <Container>
            <View>
                <TopContent
                    title={"Mensagens"}
                    showSecondLine={false}
                />
            </View>
            <ScrollView>
                <ChatList/>
            </ScrollView>
        </Container>
    );
};

export default ChatScreen;
