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
  align-items: initial;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 20px 0 0 0;
`;
export const RadioContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 5px 20px;
`;
export const CheckText = styled.Text`
  color: ${({ theme }) => theme.colors.grayTextPlacehoder};
  margin-left: 20px;
`;
export const RegisterText = styled.Text`
  color: ${({ theme }) => theme.colors.whiteText};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin: 30px 0 15px 20px;
`;
export const ContainerInput = styled.View`
  margin: 10px 0;
`;
export const Button = styled.TouchableOpacity`
  height: 50;
  border-width: 0;
  border-radius: 4;
  background-color: #00af1c;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340;
  margin: 15px 20px;
  padding: 10px;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: #fafafa;
  font-size: 15;
`;
