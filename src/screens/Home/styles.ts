import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 23px;
  color: ${({ theme }) => theme.colors.grayText};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
