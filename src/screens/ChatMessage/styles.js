import styled from "styled-components/native"

export const Layout = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #fff;
  padding-top: 28px;
`;

export const Container = styled.View`
  width: 100%;
  padding: 10px 10px 0px 10px;
  flex: 1;
  justify-content: space-between;
`;

export const Message = styled.Text`
  background-color: ${({isMe}) => isMe ? "#4f3e6d" : "#f3f5f9"};
  color: ${({isMe}) => isMe ? "#fff" : "#000"};
  padding: 14px;
  margin: ${({isMe}) => isMe ? "0 0 0 auto" : "0 auto 0 0"};
  border-radius: 10px;
  margin-bottom: 10px;
  max-width: 300px;
`;

export const WrapperBottom = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: transparent;
  margin: 10px 0;
`;

export const WrapperInput = styled.View`
  background-color: #F2F4F6;
  flex-direction: row;
  padding: 10px;
  border-radius: 20px;
  align-items: center;
  flex: 1;
`;

export const Input = styled.TextInput`
  color: #000;
  flex: 1;
`;

export const ButtonSend = styled.TouchableOpacity`
  background-color: #47a787;
  align-items: center;
  justify-content: center;
  border-radius: 500px;
  width: 35px;
  height: 35px;
  margin-left: 15px;
`;