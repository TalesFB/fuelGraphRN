import { ScrollView, View } from "react-native";
import theme from "../../global/styles/theme";

import {
  Container,
  CardTipe,
  CardInfo,
  InfoConsumer,
  InfoCost,
  TitleOrange,
  TitleGreen,
  DateTitle,
  CardDescription,
  InfoTitle,
  ValueTitle,
  QuantityTitle,
  CardValue,
} from "./styles";
import { formatReal } from "../../../lib/utils";

export function VerticalCard({ item }: any) {
  const typeLabel: any = {
    Gasolina: <TitleOrange>{item.type}</TitleOrange>,
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
              preço/L: <ValueTitle>{formatReal(item.litersValue)}</ValueTitle>
            </InfoTitle>
          </InfoCost>
        </CardDescription>
        <CardValue>
          VALOR TOTAL: <ValueTitle>{formatReal(item.totalValue)}</ValueTitle>
        </CardValue>
      </CardInfo>
    </Container>
  );
}
