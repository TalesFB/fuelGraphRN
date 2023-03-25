import { useContext } from "react";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { VictoryPie } from "victory-native";

import { AuthvehicleContext } from "../../context/AuthVehicleContext";

export function Resume() {
  const { vehiclesData, plateCar }: any = useContext(AuthvehicleContext);
  console.log(vehiclesData, plateCar);
  return (
    <Container>
      <Header />
    </Container>
  );
}
