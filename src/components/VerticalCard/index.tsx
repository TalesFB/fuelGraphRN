import { ScrollView, View } from "react-native";
import theme from "../../global/styles/theme";

import {
  Container,
  CardTipe,
  CardInfo,
  InfoConsumer,
  InfoCost,
  TitleBlue,
  TitleGreen,
  DateTitle,
  CardDescription,
  InfoTitle,
  ValueTitle,
  QuantityTitle,
  CardValue,
} from "./styles";

export function VerticalCard({ item }: any) {
  const typeLabel: any = {
    Gasolina: <TitleBlue>{item.type}</TitleBlue>,
    Álcool: <TitleGreen>{item.type}</TitleGreen>,
  };

  return (
    <Container>
      <CardTipe>
        {typeLabel[item.type]}
        <DateTitle>{item.date}</DateTitle>
      </CardTipe>
      <CardInfo>
        <CardDescription>
          <InfoConsumer>
            <InfoTitle>
              Quant. litros:<QuantityTitle>{item.amountLiters}</QuantityTitle>
            </InfoTitle>
          </InfoConsumer>
          <InfoCost>
            <InfoTitle>
              preço/L: <ValueTitle>R$ {item.priceLiters}</ValueTitle>
            </InfoTitle>
          </InfoCost>
        </CardDescription>
        <CardValue>
          VALOR TOTAL: <ValueTitle>R$ {item.totalValue}</ValueTitle>
        </CardValue>
      </CardInfo>
    </Container>
  );
}
