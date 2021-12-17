import React from 'react';
import {Container, Description, IsExchange, Layout, Price, ProductName} from "./styles";
import {Image} from "react-native";

const SearchList = ({props}) => {
    return (
        <Layout>
            <Image style={{width: 100, height: 100}} source={{
                uri: props.image
            }}/>
            <Container>
                <IsExchange>{props.allowExchange ? 'Aceita trocas' : 'Não aceita trocas'}</IsExchange>

                {
                    props.isDonation && <IsExchange>{props.isDonation && "Doação"}</IsExchange>
                }

                <ProductName>
                    {props.name}
                </ProductName>

                <Description>
                    {props.description}
                </Description>

                <Price>
                    {props.price}
                </Price>
            </Container>
        </Layout>
    );
};

export default SearchList;
