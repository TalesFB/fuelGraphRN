import { ScrollView } from "react-native";
import { HorizontalCard } from "../HorizontalCard";
import { Container, Divider, LabelText } from "./styles";

export function AverageList({list}:any) {
  return (
    <>
      <Container>
        <LabelText>Médias</LabelText>
        <ScrollView horizontal indicatorStyle="white">
          {list.map((item: any) => (
            <HorizontalCard key={item.id} item={item} />
          ))}
        </ScrollView>
      </Container>
      <Divider />
    </>
  );
}
