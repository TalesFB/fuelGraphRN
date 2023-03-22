import { ScrollView } from "react-native";
import { HorizontalCard } from "../HorizontalCard";
import { Container, Divider, LabelText } from "./styles";

interface ItemList {
  id: number;
  type: string;
  averageConsumption: number;
  custoMedium: number;
}

interface AverageListProps {
  list: ItemList[];
}

export function AverageList({ list }: AverageListProps) {
  return (
    <>
      <Container>
        <LabelText>Médias</LabelText>
        <ScrollView horizontal indicatorStyle="white">
          {list.map((item: ItemList) => (
            <HorizontalCard key={item.id} item={item} />
          ))}
        </ScrollView>
      </Container>
      <Divider />
    </>
  );
}
