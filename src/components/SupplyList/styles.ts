import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const LabelText = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.grayText};
  margin-left: ${RFValue(12)}px;
  margin-bottom: ${RFValue(10)}px;
`;
export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  margin-left: ${RFValue(3)}px;
`;
