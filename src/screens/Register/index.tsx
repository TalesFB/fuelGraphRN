import { Header } from "../../components/Header";
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
import { RadioButton } from "react-native-paper";
import { ControlledInput } from "../../components/ControlledInput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import theme from "../../global/styles/theme";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  amountLiters: yup.number().positive().required("Informe a quantidade de litros abastecidos"),
  litersValue: yup.number().positive().required("Informe o valor por litro de combustível"),
}).required();

type FormData = {
  amountLiters:string;
  litersValue:string;
}

export function Register() {
  const { control, handleSubmit, formState:{errors} } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const [type, setType] = useState("Gasolina");

  function handleRegister(data: any) {
    const date = new Date(Date.now()).toLocaleString().split(',')[0];
    console.log({ type, date, totalValue:data.amountLiters*data.litersValue, ...data });

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
