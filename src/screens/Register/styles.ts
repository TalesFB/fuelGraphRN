import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RadioButton } from "react-native-paper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CheckContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  margin: ${RFValue(20)}px 0 0 0;
`;
export const RadioContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  margin: ${RFValue(5)}px ${RFValue(20)}px;
`;
export const CheckText = styled.Text`
  color: ${({ theme }) => theme.colors.grayTextPlacehoder};
  margin-left: ${RFValue(20)};
`;
export const RegisterText = styled.Text`
  color: ${({ theme }) => theme.colors.whiteText};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin: ${RFValue(30)}px 0 ${RFValue(15)}px ${RFValue(20)}px;
`;
export const ContainerInput = styled.View`
  margin: ${RFValue(10)}px 0;
`;
export const Button = styled.TouchableOpacity`
  height: ${RFValue(50)}px;
  /* border-radius: 4%; */
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: ${RFValue(345)}px; */
  margin: ${RFValue(15)}px ${RFValue(20)}px;
  padding: ${RFValue(10)}px;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: #fafafa;
  font-size: ${RFValue(15)}px;
`;
