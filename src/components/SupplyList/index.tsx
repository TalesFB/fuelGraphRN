import { ScrollView } from "react-native";
import { VerticalCard } from "../VerticalCard";
import { Container, LabelText } from "./styles";

export function SupplyList(list: any) {
  return (
    <>
      <Container>
        <LabelText>Listagem de abastecimentos</LabelText>
        <ScrollView indicatorStyle="white">
          {/* {list?.map((item: any) => (
          <HorizontalCard item={item} />
        ))} */}
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
        </ScrollView>
      </Container>
    </>
  );
}
