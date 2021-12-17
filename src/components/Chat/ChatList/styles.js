import styled from "styled-components/native";

export const Layout = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const WrapperMessage = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const WrapperPerson = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 500px;
  margin-right: 10px;
`;

export const Username = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

export const LastMessage = styled.Text`
color: #666;
`;