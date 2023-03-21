import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const LabelText = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.grayText};
  margin-left: ${RFValue(3)}px;
  margin-bottom: ${RFValue(5)}px;
`;
export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  margin-left: ${RFValue(8)}px;
`;

export const Divider = styled.View`
  border-bottom-color: white;
  border-bottom-width: 1px;
  margin: ${RFValue(15)}px ${RFValue(15)}px;
`;
