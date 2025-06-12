import { useTheme } from "@/store/ThemeProvider";
import { createMemoryStyles } from "@/utils";
import { Image, Text, View } from "react-native";
type CardItemPropsT = {
  cardTitle: string;
  cardImageUrl: string;
};

export default function CardItem({ cardImageUrl, cardTitle }: CardItemPropsT) {
  const { theme } = useTheme();
  const styles = createMemoryStyles(theme);
  return (
    <View style={[styles.card]}>
      <Image
        style={[styles.cardImage]}
        source={{ uri: cardImageUrl }}
        resizeMode="cover"
      />{" "}
      <Text style={[styles.cardTitle]}>{cardTitle}</Text>
    </View>
  );
}
