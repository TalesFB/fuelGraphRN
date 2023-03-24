import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: column;
`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  background-color: #ffffff;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #dc1637;
    `};
`;

export const LabelInput = styled.Text`
  color: #b6b6b6;
  padding: 0 20px;
`;

export const InputText = styled(TextInput)<Props>`
  color: white;
  height: 50;
  border-width: 0;
  border-radius: 4;
  background-color: #3d3d3d;
  display: flex;
  width: 345;
  margin: 5px 20px;
  padding: 10px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${({ theme }) => theme.colors.whiteText};
    `};
`;
