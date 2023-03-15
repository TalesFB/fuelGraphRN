import { Image } from "react-native";
import { AverageList } from "../../components/AverageList";
import { SupplyList } from "../../components/SupplyList";
import {
  Container,
  Header,
  UserWrapper,
  CarInfo,
  FuelImage,
  HeaderTextWrapper,
  Greeting,
  CarPlate,
  LogoutButton,
  LogoutIcon,
  Title,
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
      <Header>
        <UserWrapper>
          <CarInfo>
            <FuelImage>
              <Image source={require("../../../assets/logoSmall.png")} />
            </FuelImage>
            <HeaderTextWrapper>
              <Greeting>Olá, Bom dia</Greeting>
              <CarPlate>Veículo:</CarPlate>
            </HeaderTextWrapper>
          </CarInfo>
          <LogoutButton>
            <LogoutIcon name="logout">
            </LogoutIcon>
            <Title>Sair</Title>
          </LogoutButton>
        </UserWrapper>
      </Header>
      <AverageList list={mediumConsumptionData}/>
      <SupplyList list={supplyListData}/>
    </Container>
  );
}
