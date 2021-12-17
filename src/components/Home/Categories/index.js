import React, {useState} from 'react';
import {
    CircleContent,
    CounterTitle,
    Header,
    ImageCategory,
    Layout,
    Title,
    TitleWrapper,
    WrapperCategory,
    WrapperCircle
} from "./styles";
import {FlatList, StyleSheet, Text, TouchableWithoutFeedback} from "react-native";

const Categories = ({title, additionalText}) => {
    const [products, setProducts] = useState([{
        id: 1,
        title: "Carrinho de Bebê",
        type: "Doação",
        qtdAds: "30.000",
        background: "#f6cdcd",
        image: "https://www.iconshock.com/3D/general/png/thumbnails/game_baby-toy-plaything-bauble-trinket.png"
    }, {
        id: 2,
        title: "Chupeta",
        type: "Doação",
        qtdAds: "30.000",
        background: "#dde1f3"
    }, {
        id: 3,
        title: "Berços",
        type: "Doação",
        qtdAds: "30.000",
        background: "#cbf1b7"
    }, {
        id: 4,
        title: "Produtos de Beleza",
        type: "Doação",
        qtdAds: "30.000",
        background: "#f1c9f3"
    }, {
        id: 5,
        title: "Fraldas",
        type: "Doação",
        qtdAds: "30.000",
        background: "#f5ede5"
    }]);

    return (
        <Layout>
            <Header>
                <TitleWrapper>
                    <Text style={styles.leftText}>{title}</Text>
                    <Text style={styles.rightText}>{additionalText}</Text>
                </TitleWrapper>

                <TouchableWithoutFeedback>
                    <Text style={styles.link}>
                        Ver todas
                    </Text>
                </TouchableWithoutFeedback>
            </Header>

            <FlatList
                data={products}
                horizontal={true}
                overScrollMode={'never'}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <WrapperCategory>
                        <WrapperCircle>
                            <CircleContent background={item.background}/>
                            <ImageCategory source={{uri: item.image}}/>
                        </WrapperCircle>

                        <Title>
                            {item.title}
                        </Title>
                        <CounterTitle>
                            {item.qtdAds}
                        </CounterTitle>
                    </WrapperCategory>
                )}
            />
        </Layout>
    );

};

const styles = StyleSheet.create({
    leftText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000"
    },
    rightText: {
        fontSize: 20,
        marginLeft: 5,
    },
    link: {
        color: "blue"
    }
})

export default Categories;
