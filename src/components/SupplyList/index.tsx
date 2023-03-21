import { FlatList, ScrollView } from "react-native";
import { VerticalCard } from "../VerticalCard";
import { Container, LabelText } from "./styles";

export function SupplyList({ list }: any) {
  return (
    <>
      <Container>
        <LabelText>Listagem de abastecimentos</LabelText>
        {/* <ScrollView indicatorStyle="white">
          {list?.map((item: any) => (
            <VerticalCard key={item.id} item={item} />
          ))}
        </ScrollView> */}
        <FlatList
          data={list}
          renderItem={({ item }: any) => <VerticalCard item={item} />}
          keyExtractor={({ index }) => index}
        />
      </Container>
    </>
  );
}
