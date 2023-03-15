import { ScrollView, View } from "react-native";
import theme from "../../global/styles/theme";

import {
  Container,
  CardTipe,
  CardInfo,
  InfoConsumer,
  InfoCost,
  TypeTitle,
  DateTitle,
  CardDescription,
  InfoTitle,
  ValueTitle,
  CardValue,
} from "./styles";

export function VerticalCard(item: any) {
  return (
    <Container>
      <CardTipe>
        <TypeTitle>Gasolina</TypeTitle>
        <DateTitle>00/00/0000</DateTitle>
      </CardTipe>
      <CardInfo>
        <CardDescription>
          <InfoConsumer>
            <InfoTitle>
             Quant. litros:<ValueTitle>12</ValueTitle>
            </InfoTitle>
          </InfoConsumer>
          <InfoCost>
            <InfoTitle>
              preço/L: R$ <ValueTitle>18,00</ValueTitle>
            </InfoTitle>
          </InfoCost>
        </CardDescription>
        <CardValue>VALOR TOTAL: R$ <ValueTitle>18,00</ValueTitle></CardValue>
      </CardInfo>
    </Container>
  );
}
