import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import InitialLayout from "@/components/initialLayout";
import ClerkAndConvexProviders from "@/providers/ClerkAndConvexProviders";

export default function RootLayout() {
  return (
    <ClerkAndConvexProviders>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkAndConvexProviders>
  );
}
