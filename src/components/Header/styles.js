import styled from "styled-components/native";

export const Layout = styled.View`
  flex-direction: row;
  padding-top: 36px;
  align-items: center;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const ProfileImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 500px;
`;