import { AverageList } from "../../components/AverageList";
import { SupplyList } from "../../components/SupplyList";
import { Header } from "../../components/Header";
import {
  Container,
} from "./styles";

const mediumConsumptionData = [
  {
    id:1,
    type:"Gasolina",
    averageConsumption:18,
    custoMedium:5.50,
  },
  {
    id:2,
    type:"Álcool",
    averageConsumption:18,
    custoMedium:5.50,
  },
  {
    id:3,
    type:"Média Geral",
    averageConsumption:18,
    custoMedium:5.50,
  }
]

const supplyListData = [
  {
    type:"Gasolina",
    date:"00/00/0000",
    amountLiters:100,
    priceLiters:5.40,
    totalValue: 540,
  },
  {
    type:"Álcool",
    date:"00/00/0000",
    amountLiters:100,
    priceLiters:5.40,
    totalValue: 540,
  },
  {
    type:"Gasolina",
    date:"00/00/0000",
    amountLiters:100,
    priceLiters:5.40,
    totalValue: 540,
  },
  {
    type:"Gasolina",
    date:"00/00/0000",
    amountLiters:100,
    priceLiters:5.40,
    totalValue: 540,
  },
  {
    type:"Gasolina",
    date:"00/00/0000",
    amountLiters:100,
    priceLiters:5.40,
    totalValue: 540,
  },
  {
    type:"Álcool",
    date:"00/00/0000",
    amountLiters:100,
    priceLiters:5.40,
    totalValue: 540,
  },
  {
    type:"Álcool",
    date:"00/00/0000",
    amountLiters:100,
    priceLiters:5.40,
    totalValue: 540,
  },
  {
    type:"Álcool",
    date:"00/00/0000",
    amountLiters:100,
    priceLiters:5.40,
    totalValue: 540,
  },
  {
    type:"Gasolina",
    date:"00/00/0000",
    amountLiters:100,
    priceLiters:5.40,
    totalValue: 540,
  },
  {
    type:"Álcool",
    date:"00/00/0000",
    amountLiters:100,
    priceLiters:5.40,
    totalValue: 540,
  },
  {
    type:"Gasolina",
    date:"00/00/0000",
    amountLiters:100,
    priceLiters:5.40,
    totalValue: 540,
  },
  {
    type:"Gasolina",
    date:"00/00/0000",
    amountLiters:100,
    priceLiters:5.40,
    totalValue: 540,
  },
  {
    type:"Gasolina",
    date:"00/00/0000",
    amountLiters:100,
    priceLiters:5.40,
    totalValue: 540,
  },
  {
    type:"Álcool",
    date:"00/00/0000",
    amountLiters:100,
    priceLiters:5.40,
    totalValue: 540,
  },
  {
    type:"Álcool",
    date:"00/00/0000",
    amountLiters:100,
    priceLiters:5.40,
    totalValue: 540,
  },
  {
    type:"Álcool",
    date:"00/00/0000",
    amountLiters:100,
    priceLiters:5.40,
    totalValue: 540,
  },

]

export function Home() {
  return (
    <Container>
      <Header/>
      <AverageList list={mediumConsumptionData}/>
      <SupplyList list={supplyListData}/>
    </Container>
  );
}
