import React, {useRef, useState} from 'react';
import {FlatList, Image} from "react-native";
import {ArrowLeft, Image2, Send} from "react-native-iconly";
import TopContent from "../../components/TopContent";
import {TextTitle, WrapperHeader} from "../Profile/styles";
import {ButtonSend, Container, Input, Layout, Message, WrapperBottom, WrapperInput} from "./styles";

const ChatMessage = ({route, navigation}) => {
    const {user} = route.params;

    const [messages, setMessages] = useState([{
        id: 1,
        id_user: 1,
        message: 'Oii, td bem? fiquei interessado no produto. Ainda está vendendo?',
        date: '2020-01-01',
    }, {
        id: 2,
        id_user: 2,
        message: 'Olá, bem. estou sim. Aceito troca tb',
        date: '2020-01-01',
    }, {
        id: 3,
        id_user: 1,
        message: 'Showwwwww, vamos lá. Pode me passar mais algumas infos? Esotu um pouco cuiroso 😂',
        date: '2020-01-01',
    }, {
        id: 4,
        id_user: 1,
        message: 'Tipo, quanto tempo de uso o produto tem? Ja foi utilizado antes? Está em bom estado?',
        date: '2020-01-01',
    }, {
        id: 5,
        id_user: 1,
        message: 'Se puder mandar msg tbm, agradeço',
        date: '2020-01-01',
    }, {
        id: 6,
        id_user: 2,
        message: 'Ok. vamos fazer assim, tenta enviar uma mensagem pra mim. Clica no campo de enviar uma mensagem, digita alguma coisa e aperta o botão de enviar. Aí nós conversamos, pode ser?!',
        date: '2020-01-01',
    }]);
    const [message, setMessage] = useState("");
    const endListChat = useRef(null);

    const sendMessage = () => {
        if (message !== "") {
            setMessages([...messages, {
                id: messages.length + 1,
                id_user: 1,
                message: message,
                date: '2020-01-01',
            }]);

            setMessage("");
        }
    };

    return (
        <Layout>
            <TopContent
                title={
                    <WrapperHeader>
                        <ArrowLeft
                            onPress={() => navigation.goBack()}
                            color="#000"
                            set={"curved"}
                            style={{marginRight: 10}}
                        />
                        <Image
                            source={{uri: user.avatar}}
                            style={{width: 30, height: 30, borderRadius: 25, marginRight: 10}}
                        />
                        <TextTitle>{user.name}</TextTitle>
                    </WrapperHeader>
                }
                showSecondLine={false}
            />

            <Container>
                <FlatList
                    overScrollMode={'never'}
                    showsVerticalScrollIndicator={false}
                    data={messages}
                    ref={endListChat}
                    onContentSizeChange={() => endListChat.current.scrollToEnd()}
                    onLayout={() => endListChat.current.scrollToEnd()}
                    renderItem={({item}) =>
                        <Message isMe={item.id_user === 1}>
                            {item.message}
                        </Message>
                    }
                />

                <WrapperBottom>
                    <WrapperInput>
                        <Input
                            placeholder={"Digite uma mensagem..."}
                            value={message}
                            onChangeText={setMessage}
                        />
                        <Image2 color={"#000"} set={"two-tone"}/>
                    </WrapperInput>

                    <ButtonSend
                        activeOpacity={1}
                        onPress={() => sendMessage()}
                    >
                        <Send color={"#fff"} set={"bulk"}/>
                    </ButtonSend>
                </WrapperBottom>
            </Container>
        </Layout>
    );
};

export default ChatMessage;
