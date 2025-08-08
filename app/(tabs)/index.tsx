import { Link } from "expo-router";
import { View } from "react-native";
import { authStyles } from "../../styles/auth.styles";

export default function Index() {
  return (
    <View style={authStyles.container}>
      <Link href={"/notifications"}>Visit notification screen</Link>
    </View>
  );
}
