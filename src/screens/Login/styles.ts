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
  font-size: 15;
  font-weight: 600;
  color: #b6b6b6;
  padding-bottom: 40;
  padding-top: 10;
`;

export const LabelInput = styled.Text`
  color: #b6b6b6;
  padding: 0 14px;
`;

export const TextInput = styled.TextInput`
  color: white;
  height: 50;
  border-width: 0;
  border-radius: 4;
  background-color: #3d3d3d;
  display: flex;
  width: 345;
  margin: 5px 12px;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity`
  height: 50;
  border-width: 0;
  border-radius: 4;
  background-color: #00af1c;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 345;
  margin: 15px 12px;
  padding: 10px;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: #fafafa;
  font-size: 18;
`;

export const FooterLogin = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

export const DeveloperText = styled.Text`
  color: #ffffff;
  font-size: 10;
  font-weight: 500;
  margin-bottom: 5;
`;

export const RightsText = styled.Text`
  color: #ababab;
  font-size: 8;
`;

export const VersionText = styled.Text`
  color: #ababab;
  font-size: 6;
`;
