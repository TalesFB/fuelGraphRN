import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const HeaderContainer = styled.View`
  width: 100%;
  height: ${RFPercentage(16)}px;
  /* align-items: center; */
  /* justify-content: center; */
`;
export const UserWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  margin-top: ${getStatusBarHeight() + RFValue(15)}px;
`;
export const CarInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const FuelImage = styled.View``;

export const HeaderTextWrapper = styled.View`
  margin-left: ${RFValue(9)}px;
`;

export const Greeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 15px;
  line-height: 22px;
`;

export const CarPlate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 14px;
`;

export const LogoutButton = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const LogoutIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 18px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grayText};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-left: ${RFValue(4)}px;
`;