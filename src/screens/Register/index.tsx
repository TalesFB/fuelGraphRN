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

export function Register() {
  const { control, handleSubmit } = useForm();
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
                  color={`${theme.colors.blue}`}
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
            />
          </ContainerInput>
          <ContainerInput>
            <ControlledInput
              label="Preço/Litro"
              name="litersValue"
              control={control}
              placeholder="Insira o valor pago por litro"
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
