import { AverageList } from "../../components/AverageList";
import { SupplyList } from "../../components/SupplyList";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { View, Text } from "react-native";

const mediumConsumptionData = [
  {
    id: 1,
    type: "Gasolina",
    averageConsumption: 18,
    custoMedium: 5.5,
  },
  {
    id: 2,
    type: "Álcool",
    averageConsumption: 18,
    custoMedium: 5.5,
  },
  {
    id: 3,
    type: "Média Geral",
    averageConsumption: 18,
    custoMedium: 5.5,
  },
];

const supplyListData = [
  {
    id: 1,
    type: "Gasolina",
    date: "00/00/0000",
    amountLiters: 100,
    priceLiters: 5.4,
    totalValue: 540,
  },
  {
    id: 2,
    type: "Álcool",
    date: "00/00/0000",
    amountLiters: 100,
    priceLiters: 5.4,
    totalValue: 540,
  },
  {
    id: 3,
    type: "Gasolina",
    date: "00/00/0000",
    amountLiters: 100,
    priceLiters: 5.4,
    totalValue: 540,
  },
  {
    id: 4,
    type: "Gasolina",
    date: "00/00/0000",
    amountLiters: 100,
    priceLiters: 5.4,
    totalValue: 540,
  },
  {
    id: 5,
    type: "Gasolina",
    date: "00/00/0000",
    amountLiters: 100,
    priceLiters: 5.4,
    totalValue: 540,
  },
  {
    id: 6,
    type: "Álcool",
    date: "00/00/0000",
    amountLiters: 100,
    priceLiters: 5.4,
    totalValue: 540,
  },
  {
    id: 7,
    type: "Álcool",
    date: "00/00/0000",
    amountLiters: 100,
    priceLiters: 5.4,
    totalValue: 540,
  },
  {
    id: 8,
    type: "Álcool",
    date: "00/00/0000",
    amountLiters: 100,
    priceLiters: 5.4,
    totalValue: 540,
  },
  {
    id: 10,
    type: "Gasolina",
    date: "00/00/0000",
    amountLiters: 100,
    priceLiters: 5.4,
    totalValue: 540,
  },
  {
    id: 11,
    type: "Álcool",
    date: "00/00/0000",
    amountLiters: 100,
    priceLiters: 5.4,
    totalValue: 540,
  },
  {
    id: 12,
    type: "Gasolina",
    date: "00/00/0000",
    amountLiters: 100,
    priceLiters: 5.4,
    totalValue: 540,
  },
  {
    id: 13,
    type: "Gasolina",
    date: "00/00/0000",
    amountLiters: 100,
    priceLiters: 5.4,
    totalValue: 540,
  },
  {
    id: 14,
    type: "Gasolina",
    date: "00/00/0000",
    amountLiters: 100,
    priceLiters: 5.4,
    totalValue: 540,
  },
  {
    id: 15,
    type: "Álcool",
    date: "00/00/0000",
    amountLiters: 100,
    priceLiters: 5.4,
    totalValue: 540,
  },
  {
    id: 16,
    type: "Álcool",
    date: "00/00/0000",
    amountLiters: 100,
    priceLiters: 5.4,
    totalValue: 540,
  },
  {
    id: 17,
    type: "Álcool",
    date: "00/00/0000",
    amountLiters: 100,
    priceLiters: 5.4,
    totalValue: 540,
  },
];

export function Home() {
  return (
    <Container>
      <Header />
      <AverageList list={mediumConsumptionData} />
      <SupplyList list={supplyListData} />
    </Container>
  );
}
