
import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";

export default function Index() {
 const theme=useTheme()

  return (
    <View style={{backgroundColor:theme.colors.background}}>
      <View
        style={{
          gap: 24,
          padding:12,
        }}
      >
        <Text style={[{fontSize:36},{textAlign:"center"}, {fontWeight:"bold"},{color:theme.colors.primary}]}>Welcome again</Text>
        <Text style={[{fontSize:18},{textAlign:"center"}, {fontWeight:"semibold"},{color:theme.colors.primary}]}>How are you feeling today ?</Text>

      </View>
    </View>
  );
}
