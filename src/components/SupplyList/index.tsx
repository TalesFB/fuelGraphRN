import { FlatList } from "react-native";
import { VerticalCard } from "../VerticalCard";
import { Container, LabelText, EmptyContent, EmptyText } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
  // console.log(list);
  return (
    <>
      <Container>
        <LabelText>Listagem de abastecimentos</LabelText>
        {list?.length ? (
          <FlatList
            indicatorStyle="white"
            data={list}
            renderItem={({ item }) => <VerticalCard item={item} />}
            keyExtractor={({ id }) => String(id)}
          />
        ) : (
          <EmptyContent>
            <MaterialCommunityIcons name="gas-station-off-outline" size={50} color="gray" />
            <EmptyText>Seus abastecimentos apareceram aqui</EmptyText>
          </EmptyContent>
        )}
      </Container>
    </>
  );
}
