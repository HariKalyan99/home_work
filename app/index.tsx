import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { authStyles } from "../styles/auth.styles";

export default function Index() {
  return (
    <View style={authStyles.container}>
      <Text style={authStyles.title}>Hello my name is Harikalyan</Text>
      <TouchableOpacity onPress={() => alert("You touched me!")}>
        <Text>I Dare you touch me!</Text>
      </TouchableOpacity>
      <Pressable
        onPress={() => alert("Don't touch me, orelse you are gonna pay!")}
      >
        <Text>I Dare you touch me!</Text>
      </Pressable>

      <TouchableOpacity onPress={() => alert("Its a flower!")}>
        <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMdwQZcCWkpXBEalXsyXY0WqUMyyZfhV2Xg&s",
        }}
        style={{ width: 200, height: 200 }}
      />
      </TouchableOpacity>
    </View>
  );
}
