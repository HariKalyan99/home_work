import { COLORS } from "@/constants/theme";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1,
        backgroundColor: COLORS.background,}}>
      <Link href={"/notifications"}>Visit notification screen</Link>
    </View>
  );
}
