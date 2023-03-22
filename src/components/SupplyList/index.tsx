import { FlatList } from "react-native";
import { VerticalCard } from "../VerticalCard";
import { Container, LabelText } from "./styles";

interface ItemList {
  id: number;
  type: string;
  date: string;
  amountLiters: number;
  priceLiters: number;
  totalValue: number;
}
interface SupplyListProps {
  list: ItemList[];
}

export function SupplyList({ list }: SupplyListProps) {
  return (
    <>
      <Container>
        <LabelText>Listagem de abastecimentos</LabelText>
        <FlatList
          indicatorStyle="white"
          data={list}
          renderItem={({ item }) => <VerticalCard item={item} />}
          keyExtractor={({ id }) => String(id)}
        />
      </Container>
    </>
  );
}
