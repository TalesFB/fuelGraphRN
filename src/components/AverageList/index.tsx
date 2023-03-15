import { ScrollView, View } from "react-native";
import theme from "../../global/styles/theme";
import { HorizontalCard } from "../HorizontalCard";
import { Container, Divider, LabelText} from "./styles";

export function AverageList(list: any) {
  return (
    <>
    <Container
    >
      <LabelText>Médias</LabelText>
      <ScrollView horizontal indicatorStyle="white">
        {/* {list?.map((item: any) => (
          <HorizontalCard item={item} />
        ))} */}
        <HorizontalCard  />
      <HorizontalCard  />
      <HorizontalCard  />
      </ScrollView>
    </Container>
    <Divider />
</>
  );
}
