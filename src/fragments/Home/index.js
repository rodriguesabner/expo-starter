import React from "react";
import {Container, WrapperContent} from "./styles";
import TopContent from "../../components/TopContent";
import SearchBar from "../../components/Home/SearchBar";
import Categories from "../../components/Home/Categories";
import {ScrollView} from "react-native";
import Recommendation from "../../components/Home/Recommendation";

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

                    <SearchBar/>

                    <Categories
                        title={"Categorias"}
                        additionalText={"Populares"}
                    />

                    <Recommendation/>

                    <Categories
                        title={"Doações"}
                    />

                    <Categories
                        title={"Vendas"}
                    />
                </WrapperContent>
            </ScrollView>
        </Container>
    );
}

export {HomeScreen}