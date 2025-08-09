import { COLORS } from "@/constants/theme";
import { useAuth } from "@clerk/clerk-expo";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <TouchableOpacity onPress={() => signOut()}>
        <Text style={{ color: "black" }}>Signout</Text>
      </TouchableOpacity>
    </View>
  );
}
