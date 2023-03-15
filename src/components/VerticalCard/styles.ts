import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const TitleBlue = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.blue};
`;
export const TitleGreen = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};
`;

export const DateTitle = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.whiteText};
`;

export const InfoTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.grayText};
`;

export const ValueTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.red};
`;

export const QuantityTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.whiteText};
`;

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  width: ${RFValue(324)};
  height: ${RFValue(70)};
  margin: 0 ${RFValue(10)}px;
  border-radius: 5%;
  margin-bottom: ${RFValue(15)}px;
`;

export const CardTipe = styled.View`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  align-items: center;
  justify-content: center;
  height: ${RFValue(70)}px;
  width: ${RFValue(85)}px;
  padding: 0 ${RFValue(8)}px;
`;

export const CardInfo = styled.View`
  padding: ${RFValue(12)}px ${RFValue(14)}px ${RFValue(10)}px ${RFValue(10)}px;
`;

export const CardDescription = styled.View`
  flex-direction: row;
`;

export const CardValue = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  color: ${({ theme }) => theme.colors.grayText};
  padding: ${RFValue(5)}px 0 0 0;
`;

export const InfoConsumer = styled.Text`
  flex-direction: row;
  margin-right: 10px;
`;

export const InfoCost = styled.Text`
  flex-direction: row;
`;
