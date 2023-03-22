import React, { useState } from "react";
import { Image, TouchableWithoutFeedback, Keyboard } from "react-native";

import {
  Container,
  KeyboardAvoidingView,
  ImageContent,
  TextLogin,
  LabelInput,
  TextInput,
  Button,
  TextButton,
  FooterLogin,
  DeveloperText,
  RightsText,
  VersionText,
} from "./styles";

interface LoginProps {
  handlePlate: (plate: any) => {};
}

export function Login({ handlePlate }: any) {
  const [plate, setPlate] = useState("");
  //   console.log(plate);
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container>
          <KeyboardAvoidingView behavior="position" enabled>
            <ImageContent>
              <Image source={require("../../../assets/logo.png")} />
              <TextLogin>Olá, seja bem vindo(a) ao FUEL GRAPH</TextLogin>
            </ImageContent>

            <LabelInput>Placa do veículo</LabelInput>
            <TextInput
              placeholder="Insira a placa do veículo"
              placeholderTextColor={"#7E7E7E"}
              onChangeText={(text) => setPlate(text)}
            />
            <Button onPress={() => handlePlate(plate)}>
              <TextButton>Entrar</TextButton>
            </Button>
          </KeyboardAvoidingView>
        </Container>
      </TouchableWithoutFeedback>
      <FooterLogin>
        <DeveloperText>Desenvolvido por: Tales Ferreira</DeveloperText>
        <RightsText>2023 - Todos os Direitos Reservados</RightsText>
        <VersionText>Versão 1.0.1</VersionText>
      </FooterLogin>
    </>
  );
}
