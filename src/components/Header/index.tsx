import { useState, useContext } from "react";
import { Image } from "react-native";
import {
  HeaderContainer,
  UserWrapper,
  CarInfo,
  HeaderTextWrapper,
  Greeting,
  CarPlate,
  Plate,
  LogoutButton,
  LogoutIcon,
  Title,
} from "./styles";
import { AuthvehicleContext } from "../../context/AuthVehicleContext";

export function Header() {
  const { plateCar, setPlateCar }: any = useContext(AuthvehicleContext);

  function getTimeMessage() {
    let hours = new Date().getHours();
    if (hours <= 5) return "Boa madrugada";
    if (hours < 12) return "Bom dia";
    if (hours < 18) return "Boa tarde";
    return "Boa noite";
  }
  return (
    <HeaderContainer>
      <UserWrapper>
        <CarInfo>
          <HeaderTextWrapper>
            <Greeting>Olá, {getTimeMessage()}</Greeting>
            <CarPlate>
              Veículo: <Plate>{plateCar}</Plate>
            </CarPlate>
          </HeaderTextWrapper>
        </CarInfo>
        <LogoutButton onPress={() => setPlateCar(null)}>
          <LogoutIcon name="logout"></LogoutIcon>
          <Title>Sair</Title>
        </LogoutButton>
      </UserWrapper>
    </HeaderContainer>
  );
}
