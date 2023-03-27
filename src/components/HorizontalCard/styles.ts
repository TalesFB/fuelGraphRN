import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const TitleOrange = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.orange};
`;
export const TitleGreen = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};
`;
export const TitleWhite = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.whiteText};
`;

export const InfoTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.grayText};
`;

export const ValueTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  color: ${({ theme }) => theme.colors.whiteText};
`;

export const Container = styled.View`
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  width: ${RFValue(250)};
  height: ${RFValue(140)};
  margin: 0 ${RFValue(10)}px 0 0;
  /* border-radius: 5%; */
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
  margin-top: ${RFValue(5)}px;
`;
