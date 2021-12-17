import React, {useEffect} from 'react';
import {TouchableOpacity, View} from "react-native";
import faker from 'faker';
import {Image, LastMessage, Layout, Username, WrapperMessage, WrapperPerson} from "./styles";
import {ArrowRight} from "react-native-iconly";
import {useNavigation} from "@react-navigation/core";

const ChatList = () => {
    const navigation = useNavigation();

    useEffect(() => {
        return () => {
        };
    }, []);

    function limitText(string, limit) {
        const dots = "...";
        if (string.length > limit) {
            string = string.substring(0, limit) + dots;
        }

        return string;
    }

    return (
        <Layout>
            <TouchableOpacity
                onPress={() => navigation.navigate('ChatMessage', {
                    user: {
                        name: faker.name.findName(),
                        avatar: "https://avatars.githubusercontent.com/u/40338524?v=4"
                    }
                })}
            >
                <WrapperMessage>
                    <WrapperPerson>
                        <Image
                            source={{uri: faker.image.image()}}
                        />
                        <View>
                            <Username>
                                {faker.name.findName()}
                            </Username>

                            <LastMessage
                                numberOfLines={1}
                            >
                                {limitText(faker.lorem.sentence(), 30)}
                            </LastMessage>
                        </View>
                    </WrapperPerson>

                    <ArrowRight color={"#666"} set={"curved"}/>
                </WrapperMessage>
            </TouchableOpacity>
        </Layout>
    );
};

export default ChatList;
