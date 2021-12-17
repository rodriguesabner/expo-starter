import React from 'react';
import {StyleSheet, Text} from "react-native";
import {
    Image,
    Layout,
    ProductInfo,
    ProductModel,
    ProductName,
    ProductType,
    TitleWrapper,
    WrapperProduct
} from "./styles";

const Recommendation = () => {
    return (
        <Layout>
            <TitleWrapper>
                <Text style={styles.leftText}>
                    Talvez você curta
                </Text>
            </TitleWrapper>

            <WrapperProduct>
                <Image
                    source={{uri: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT9pGvV2cHKPzemr0zr4eTNax0tnJO-BIA5jijoLwRXqej3f_oJB2C5mpWJl8Yb_3y8cCSnkNJAUA&usqp=CAc"}}/>
                <ProductInfo>
                    <ProductType>
                        Tipo: doação
                    </ProductType>
                    <ProductModel>
                        Marca: Travel System
                    </ProductModel>
                    <ProductName>
                        Travel System Anna2 - Preto
                    </ProductName>
                </ProductInfo>
            </WrapperProduct>
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

export default Recommendation;
