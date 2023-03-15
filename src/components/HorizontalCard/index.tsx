import { ScrollView, View } from "react-native";
import theme from "../../global/styles/theme";

import { Container, CardTipe, CardInfo, InfoConsumer, InfoCost, Title, InfoTitle, ValueTitle } from "./styles";

export function HorizontalCard(item: any) {
  return (
    <Container>
      <CardTipe>
        <Title>Gasolina</Title>
      </CardTipe>
      <CardInfo>
        <InfoConsumer>
          <InfoTitle>Consumo médio: <ValueTitle>R$  18,00</ValueTitle></InfoTitle>
        </InfoConsumer>
        <InfoCost>
          <InfoTitle>Custo médio/L:  <ValueTitle>R$ 18,00</ValueTitle></InfoTitle>
        </InfoCost>
      </CardInfo>
    </Container>
  );
}
