import styled from "styled-components/native";

export const Layout = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #392D78;
`;

export const WrapperWelcome = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const AppName = styled.Text`
  font-size: 42px;
  font-weight: 700;
  color: #fff;
`;

export const WrapperButton = styled.View`
  background: #fff;
  border-radius: 5px;
  color: #000;
  min-height: 48px;
  width: 150px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;