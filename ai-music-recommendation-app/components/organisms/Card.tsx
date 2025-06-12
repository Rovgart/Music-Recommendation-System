import { useTheme } from "@/store/ThemeProvider";
import { createMemoryStyles } from "@/utils";
import { ScrollView, View } from "react-native";
import CardItem from "../molecules/CardItem";
interface CardI {
  id: number | string;
  url: string;
  description: string;
  title: string;
}
type CardPropsT = {
  data: CardI[];
};
export default function Card({ data }: CardPropsT) {
  const { theme } = useTheme();
  const styles = createMemoryStyles(theme);
  console.log(data);
  return (
    <View style={[styles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          gap: 14, //
        }}
        style={[
          {
            marginTop: 18,
            width: "auto",
            gap: 14,

            padding: 20,
          },
        ]}
      >
        {data?.map((item, index) => (
          <CardItem
            key={item.id || index}
            cardImageUrl={item.url}
            cardTitle={item.title}
          />
        ))}
      </ScrollView>
    </View>
  );
}
