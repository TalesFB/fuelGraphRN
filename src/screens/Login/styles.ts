import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageContent = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextLogin = styled.Text`
  font-size: ${RFValue(15)}px;
  font-weight: 600;
  color: #b6b6b6;
  padding-bottom: ${RFValue(40)}px;
  padding-top: ${RFValue(15)}px;
`;

export const LabelInput = styled.Text`
  color: #b6b6b6;
  padding: 0 ${RFValue(20)}px;
`;

export const TextInput = styled.TextInput`
  color: white;
  height: ${RFValue(50)}px;
  /* border-radius: 4; */
  background-color: #3d3d3d;
  display: flex;
  width: ${RFValue(320)}px;
  margin: ${RFValue(5)}px ${RFValue(15)}px;
  padding: ${RFValue(10)}px;
`;

export const Button = styled.TouchableOpacity`
  height: ${RFValue(50)}px;
  /* border-radius: 4; */
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${RFValue(320)}px;
  margin: ${RFValue(15)}px;
  padding: ${RFValue(10)}px;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: #fafafa;
  font-size: ${RFValue(15)}px;
`;

export const FooterLogin = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: column;
  align-items: center;
  padding-bottom: ${RFValue(20)}px;
`;

export const DeveloperText = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(10)}px;
  font-weight: 500;
  margin-bottom: ${RFValue(5)}px;
`;

export const RightsText = styled.Text`
  color: #ababab;
  font-size: ${RFValue(8)}px;
`;

export const VersionText = styled.Text`
  color: #ababab;
  font-size: ${RFValue(6)}px;
`;
