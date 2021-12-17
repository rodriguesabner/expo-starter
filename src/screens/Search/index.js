import React, {useState} from 'react';
import {Container, TextTitle, WrapperHeader} from "./styles";
import {FlatList} from "react-native";
import TopContent from "../../components/TopContent";
import {ArrowLeft} from "react-native-iconly";
import {useNavigation} from "@react-navigation/core";
import SearchBar from "../../components/Home/SearchBar";
import SearchList from "../../components/Search/SearchList";

const SearchScreen = () => {
    const [products, setProducts] = useState([{
        id: 1,
        name: "Carrinho de Bebe Novo",
        description: "Carrinho de bebe com pouco tempo de uso, bem confortável e espaçoso",
        price: "R$ 100,00",
        allowExchange: true,
        isDonation: false,
        image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/carrinho-bebe-berco-reversivel-thor-tutti-baby_99524.jpg"
    }, {
        id: 2,
        name: "Chupeta de bebê",
        description: "Nunca utilizada!!!",
        price: "R$ 30,00",
        allowExchange: true,
        isDonation: false,
        image: "https://a-static.mlcdn.com.br/618x463/chupeta-estampada-no-2-maiores-de-6-meses-bebe-neopan-azul/confiancapresentes/9354608078/3fbcd4496a26d747dffc1fd652b9b2d8.jpg"
    }, {
        id: 3,
        name: "Fraldas novas",
        description: "Essas fraldas sobraram e estamos doando",
        price: "R$ 0,00",
        allowExchange: false,
        isDonation: true,
        image: "https://a-static.mlcdn.com.br/1500x1500/fralda-descartavel-infantil-fraldas-kisses-tam-p/gigacomercial/40b4f530872b11eab0814201ac18501e/e442d55fd9c122dc65612bd8dac0fcf1.jpg"
    }, {
        id: 4,
        name: "Berço Semi-novo",
        description: "Estou vendendo esse berço por um valor simbólico",
        price: "R$ 10,00",
        allowExchange: false,
        isDonation: false,
        image: "https://a-static.mlcdn.com.br/618x463/berco-americano-3-em-1-tuboarte/lojaoriodopeixe/1244/2360da58c92426cc08729c5f97709858.jpg"
    }, {
        id: 5,
        name: "Triciclo Novinho",
        description: "Utilizado por um tempo, mas está muito bom",
        price: "R$ 200,00",
        allowExchange: true,
        isDonation: false,
        image: "https://a-static.mlcdn.com.br/618x463/triciclo-infantil-m-patrol-baby-city-com-empurrador-maral/magazineluiza/224595500/527d5b5f6ea467600c3654b63255830a.jpg"
    }]);
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
                    <TextTitle>Pesquisar</TextTitle>
                </WrapperHeader>}
                showSecondLine={false}
            />

            <SearchBar/>

            <FlatList
                data={products}
                renderItem={({item}) => <SearchList props={item}/>}
                overScrollMode={"never"}
            >

            </FlatList>
        </Container>
    );
};

export default SearchScreen;
