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

export function Header() {
  return (
      <HeaderContainer>
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
      </HeaderContainer>
  );
}