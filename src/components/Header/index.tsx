import { useState, useContext } from "react";
import { Image } from "react-native";
import {
  HeaderContainer,
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
import { AuthvehicleContext } from "../../context/AuthVehicleContext";

export function Header() {
  const { plateCar, setPlateCar }: any = useContext(AuthvehicleContext);
  return (
    <HeaderContainer>
      <UserWrapper>
        <CarInfo>
          <FuelImage>
            <Image source={require("../../../assets/logoSmall.png")} />
          </FuelImage>
          <HeaderTextWrapper>
            <Greeting>Olá, Bom dia</Greeting>
            <CarPlate>Veículo:{plateCar}</CarPlate>
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
