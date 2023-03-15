import { ScrollView } from "react-native";
import { VerticalCard } from "../VerticalCard";
import { Container, LabelText} from "./styles";

export function SupplyList(list: any) {
  return (
    <>
    <Container
    >
      <LabelText>Listagem de abastecimentos</LabelText>
      <ScrollView>
        {/* {list?.map((item: any) => (
          <HorizontalCard item={item} />
        ))} */}
        <VerticalCard  />
      <VerticalCard  />
      <VerticalCard  />
      </ScrollView>
    </Container>
</>
  );
}
