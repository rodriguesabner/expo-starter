import React from "react";
import { View, Text } from "react-native";
import {Layout, GreetingsTitle, UsernameText, SubtitleText} from "./styles"

const TopContent = ({title, showSecondLine, subTitle, ...props}) => {
    return (
        <Layout {...props}>
            <View>
                <GreetingsTitle>
                    {title}
                </GreetingsTitle>

                {
                    showSecondLine &&
                    <SubtitleText>
                        {subTitle}
                    </SubtitleText>
                }

            </View>
        </Layout>
    )
}

export default TopContent;