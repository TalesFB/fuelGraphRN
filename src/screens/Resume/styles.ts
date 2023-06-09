import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const ResumeText = styled.Text`
  color: ${({ theme }) => theme.colors.whiteText};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin: 30px 0 15px 20px;
`;
export const ChartContainer = styled.View``;

export const Divider = styled.View`
  border-bottom-color: white;
  border-bottom-width: 1px;
  margin: ${RFValue(15)}px ${RFValue(50)}px;
`;

export const LabelCharContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: 0 60px;
`;
export const Item = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LabelItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PointerGas = styled.View`
  height: ${RFValue(10)}px;
  width: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.orange};
  /* border-radius: 2%; */
  margin-right: 10px;
`;
export const PointerAlcool = styled.View`
  height: ${RFValue(10)}px;
  width: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  /* border-radius: 2%; */
  margin-right: 10px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.whiteText};
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Percent = styled.Text`
  color: ${({ theme }) => theme.colors.whiteText};
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const EmptyContent = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  /* justify-content: center;s */
  top: 30%;
  opacity: 0.3;
`;

export const EmptyText = styled.Text`
  font-size: ${RFValue(8)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.grayText};
`;
