import { DarkTheme, LightTheme } from "@/theme/colors";
import { ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
   const colorScheme = useColorScheme();
   const theme = colorScheme === "dark" ? DarkTheme : LightTheme;

   return (
      <ThemeProvider value={theme}>
         <SafeAreaProvider>
            <Slot />
            <StatusBar style={theme.colors.statusBarStyle} animated />
         </SafeAreaProvider>
      </ThemeProvider>
   );
}
