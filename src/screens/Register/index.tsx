import { Header } from "../../components/Header";
import { Container } from "./styles";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export function Register() {
  return (
    <Container>
      <Header />
      {/* <Text>Tipo de combustível</Text>
      <TextInput placeholder="Tipo de combustível" placeholderTextColor={"#7E7E7E"} />
      <Text>Qtd. Litros</Text>
      <TextInput placeholder="Insira aquantidade de litros" placeholderTextColor={"#7E7E7E"} />
      <Text>Valor</Text>
      <TextInput placeholder="Insira o valor pago" placeholderTextColor={"#7E7E7E"} />
      <TouchableOpacity>
        <Text>Entrar</Text>
      </TouchableOpacity> */}
    </Container>
  );
}
