import styled from "styled-components/native";

export const Layout = styled.View`
  padding: 24px;
  flex-direction: row;
  align-items: center;
`;

export const Container = styled.View`
  align-items: flex-start;
  flex-direction: column;
  flex-shrink: 1;
  margin-left: 10px;
`;

export const IsExchange = styled.Text`
  background-color: #1e1c1c;
  color: #fff;
  font-size: 10px;
  padding: 5px;
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const ProductName = styled.Text`
  font-size: 22px;
  font-weight: 700;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #999;
`;

export const Price = styled.Text`
  font-size: 24px;
  margin-top: 5px;
`;