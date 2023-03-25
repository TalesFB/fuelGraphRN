import { useContext } from "react";
import { Header } from "../../components/Header";
import {
  Container,
  ResumeText,
  ChartContainer,
  Divider,
  LabelCharContainer,
  Item,
  LabelItem,
  PointerGas,
  PointerAlcool,
  Label,
  Percent,
} from "./styles";
import { VictoryPie } from "victory-native";
import theme from "../../global/styles/theme";

import { AuthvehicleContext } from "../../context/AuthVehicleContext";

export function Resume() {
  const { vehiclesData, plateCar }: any = useContext(AuthvehicleContext);
  const vehicleSupplies = vehiclesData.filter((item: any) => item.id === plateCar)[0].supplies;

  const GasData = vehicleSupplies.filter((item: any) => item.type === "Gasolina");
  const AlcoolData = vehicleSupplies.filter((item: any) => item.type === "Álcool");
  const totalGas = GasData.reduce(
    (accumulator: any, currentValue: any) => accumulator + currentValue.totalValue,
    0
  );
  const totalAlcool = AlcoolData.reduce(
    (accumulator: any, currentValue: any) => accumulator + currentValue.totalValue,
    0
  );
  const dataChart = [
    { type: "Gasolina", totalValue: totalGas, color: theme.colors.red },
    { type: "Álcool", totalValue: totalAlcool, color: theme.colors.primary },
  ];

  console.log(totalGas, totalAlcool);
  const totalValue = totalGas + totalAlcool;
  const percentGas = (totalGas / totalValue) * 100;
  const percentAlcool = (totalAlcool / totalValue) * 100;

  return (
    <Container>
      <Header />
      <ResumeText>Resumo por tipo de combustível</ResumeText>
      <ChartContainer>
        <VictoryPie
          data={dataChart}
          padAngle={1}
          x="type"
          y="totalValue"
          colorScale={dataChart.map((item) => item.color)}
          innerRadius={100}
          style={{
            labels: {
              fill: theme.colors.whiteText,
              fontSize: 10,
              display: "none",
            },
          }}
          animate={{
            duration: 2000,
            easing: "bounce",
          }}
        />
      </ChartContainer>
      <Divider />
      <LabelCharContainer>
        <Item>
          <LabelItem>
            <PointerGas></PointerGas>
            <Label>Gasolina</Label>
          </LabelItem>
          <Percent>{percentGas}%</Percent>
        </Item>
        <Item>
          <LabelItem>
            <PointerAlcool></PointerAlcool>
            <Label>Álcool</Label>
          </LabelItem>
          <Percent>{percentAlcool}%</Percent>
        </Item>
      </LabelCharContainer>
    </Container>
  );
}
