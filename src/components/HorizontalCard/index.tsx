import { Container, CardTipe, CardInfo, InfoConsumer, InfoCost, TitleOrange, TitleGreen, TitleWhite, InfoTitle, ValueTitle } from "./styles";

export function HorizontalCard({item}: any) {

  const typeLabel:any = {
  "Gasolina": <TitleOrange>{item.type}</TitleOrange>,
  "Álcool": <TitleGreen>{item.type}</TitleGreen>,
  "Média Geral": <TitleWhite>{item.type}</TitleWhite>,
}

  return (
    <Container>
      <CardTipe>
        {typeLabel[item.type]}
      </CardTipe>
      <CardInfo>
        <InfoConsumer>
          <InfoTitle>Consumo médio: <ValueTitle>{item.averageConsumption} Km/L</ValueTitle></InfoTitle>
        </InfoConsumer>
        <InfoCost>
          <InfoTitle>Custo médio/L:  <ValueTitle>R$ {item.custoMedium}/Km</ValueTitle></InfoTitle>
        </InfoCost>
      </CardInfo>
    </Container>
  );
}
