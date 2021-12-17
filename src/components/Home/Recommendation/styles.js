import styled from "styled-components/native"

export const Layout = styled.View`
  padding: 0 20px;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
  justify-content: center;
`;

export const TitleWrapper = styled.View`
  font-size: 20px;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const WrapperProduct = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const ProductInfo = styled.View`
  flex-direction: column;
  flex-shrink: 1;
  align-items: flex-start;
  margin-left: 15px;
`;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ProductType = styled.Text`
  font-size: 12px;
  margin-bottom: 15px;
  color: #333;
  background: #F2F4F6;
  border-radius: 4px;
  padding: 10px;
`;

export const ProductName = styled.Text`
  font-size: 28px;
  font-weight: 700;
  width: 100%;
`;

export const ProductModel = styled.Text`
  font-size: 16px;
  color: #666;
`;