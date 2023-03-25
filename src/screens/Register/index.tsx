import { useState, useContext } from "react";
import { RadioButton } from "react-native-paper";
import { useForm } from "react-hook-form";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { yupResolver } from '@hookform/resolvers/yup';
import uuid from 'react-native-uuid';
import * as yup from "yup";

import {
  Container,
  KeyboardAvoidingView,
  CheckContainer,
  RadioContainer,
  CheckText,
  RegisterText,
  ContainerInput,
  Button,
  TextButton,
} from "./styles";

import theme from "../../global/styles/theme";
import { Header } from "../../components/Header";
import { ControlledInput } from "../../components/ControlledInput";
import { AuthvehicleContext } from "../../context/AuthVehicleContext";

const schema = yup.object({
  amountLiters: yup.number().positive().required("Informe a quantidade de litros abastecidos"),
  litersValue: yup.number().positive().required("Informe o valor por litro de combustível"),
}).required();

type FormData = {
  amountLiters:string;
  litersValue:string;
}

export function Register() {
  const { handleNewData }: any = useContext(AuthvehicleContext);

  const { control, handleSubmit, formState:{errors} } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const [type, setType] = useState("Gasolina");

  function handleRegister(data: any) {
    const date = new Date(Date.now()).toLocaleString().split(',')[0];
    const id = uuid.v4();
    console.log({ type, date, totalValue:data.amountLiters*data.litersValue, ...data });
    handleNewData({ id, type, date, totalValue:data.amountLiters*data.litersValue, ...data });

  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Header />
        <RegisterText>Cadastro</RegisterText>
        <KeyboardAvoidingView behavior="position" enabled>
          <CheckContainer>
            <RadioButton.Group onValueChange={(type) => setType(type)} value={type}>
              <CheckText>Tipo de combustível</CheckText>
              <RadioContainer>
                <RadioButton.Item
                  position="leading"
                  label="Gasolina"
                  value="Gasolina"
                  labelStyle={{ color: "white" }}
                  color={`${theme.colors.red}`}
                  style={{ marginRight: 50 }}
                />
                <RadioButton.Item
                  position="leading"
                  label="Álcool"
                  value="Álcool"
                  labelStyle={{ color: "white" }}
                  color={`${theme.colors.primary}`}
                  style={{ paddingHorizontal: 50 }}
                />
              </RadioContainer>
            </RadioButton.Group>
          </CheckContainer>
          <ContainerInput>
            <ControlledInput
              label="Qnt. Litros"
              name="amountLiters"
              control={control}
              placeholder="Insira a quantidade de litros"
              error={errors.amountLiters}
            />
          </ContainerInput>
          <ContainerInput>
            <ControlledInput
              label="Preço/Litro"
              name="litersValue"
              control={control}
              placeholder="Insira o valor pago por litro"
              error={errors.litersValue}
            />
          </ContainerInput>
          <Button onPress={handleSubmit(handleRegister)}>
            <TextButton>Salvar</TextButton>
          </Button>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
