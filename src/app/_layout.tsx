import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
   const colorScheme = useColorScheme();
   const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

   return (
      <ThemeProvider value={theme}>
         <SafeAreaProvider>
            <Stack screenOptions={{ headerShown: false }}>
               <Stack.Screen name="index" options={{ title: "Home" }} />
            </Stack>
            <StatusBar style="auto" animated />
         </SafeAreaProvider>
      </ThemeProvider>
   );
}
