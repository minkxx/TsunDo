import { DarkTheme, LightTheme } from "@/theme/colors";
import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
   const colorScheme = useColorScheme();
   const theme = colorScheme === "dark" ? DarkTheme : LightTheme;

   return (
      <ThemeProvider value={theme}>
         <SafeAreaProvider>
            <Stack screenOptions={{ headerShown: false }}>
               <Stack.Screen name="index" />
               <Stack.Screen
                  name="todo"
                  options={{ presentation: "transparentModal", animation: "slide_from_right" }}
               />
            </Stack>
            <StatusBar style={theme.colors.statusBarStyle} animated />
         </SafeAreaProvider>
      </ThemeProvider>
   );
}
