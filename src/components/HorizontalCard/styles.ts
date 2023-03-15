import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.blue};
`;

export const InfoTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.whiteText};
`;

export const ValueTitle = styled.Text`
  font-size: ${RFValue(19)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.whiteText};
`;

export const Container = styled.View`
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  width: ${RFValue(250)};
  height: ${RFValue(140)};
  margin: 0 ${RFValue(10)}px;
  border-radius: 5%;
  margin-bottom: ${RFValue(15)}px;
`;

export const CardTipe = styled.View`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  align-items: center;
  justify-content: center;
  height: ${RFValue(60)};
`;

export const CardInfo = styled.View`
  padding: ${RFValue(15)}px ${RFValue(14)}px ${RFValue(10)}px ${RFValue(14)}px;
`;

export const InfoConsumer = styled.Text`
  flex-direction: row;
`;

export const InfoCost = styled.Text`
  flex-direction: row;
`;
