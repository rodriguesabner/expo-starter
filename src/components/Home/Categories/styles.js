import styled from "styled-components/native"

export const Layout = styled.View`
  flex-direction: column;
  margin-top: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;

export const TitleWrapper = styled.View`
  font-size: 20px;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const WrapperCategory = styled.View`
  padding: 24px;
  min-width: 150px;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const WrapperCircle = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ImageCategory = styled.Image`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transform: translate(-20px, -30px);
  width: 150px;
  height: 150px;
`;

export const CircleContent = styled.View`
  border-radius: 500px;
  background: ${props => props.background};
  width: 60px;
  height: 60px;
  margin: 10px auto;
  justify-content: center;
  opacity: .3;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #000;
`;

export const CounterTitle = styled.Text`
  font-size: 14px;
  color: #333;
  text-align: center;
`;