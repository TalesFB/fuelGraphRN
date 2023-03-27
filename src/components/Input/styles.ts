import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: column;
`;

export const IconContainer = styled.View<Props>`
  height: ${RFValue(56)}px;
  width: ${RFValue(55)}px;
  justify-content: center;
  align-items: center;
  margin-right: ${RFValue(2)}px;
  background-color: #ffffff;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: ${RFValue(2)}px;
      border-bottom-color: #dc1637;
    `};
`;

export const LabelInput = styled.Text`
  color: #b6b6b6;
  padding: 0 ${RFValue(20)}px;
`;

export const InputText = styled(TextInput)<Props>`
  color: white;
  height: ${RFValue(50)}px;
  border-width: 0;
  /* border-radius: 4; */
  background-color: #3d3d3d;
  display: flex;
  width: ${RFValue(340)}px;
  margin: ${RFValue(5)}px ${RFValue(20)}px;
  padding: ${RFValue(10)}px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${({ theme }) => theme.colors.whiteText};
    `};
`;
