import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const HeaderContainer = styled.View`
  width: 100%;
  height: ${RFPercentage(15)}px;
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

export const HeaderTextWrapper = styled.View`
  margin-left: ${RFValue(5)}px;
`;

export const Greeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  color: ${({ theme }) => theme.colors.whiteText};
  font-size: 15px;
  line-height: 22px;
`;

export const CarPlate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 14px;
`;
export const Plate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  color: ${({ theme }) => theme.colors.whiteText};
  font-size: 14px;
`;

export const LogoutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
export const LogoutIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.whiteText};
  font-size: 18px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.whiteText};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-left: ${RFValue(4)}px;
`;
