import { db } from "@/db/client";
import { DarkTheme, LightTheme } from "@/theme/colors";
import { ThemeProvider } from "@react-navigation/native";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import migrations from "../../drizzle/migrations";

const migrationsWithJournal = {
   migrations: migrations.migrations,
   journal: { entries: [] },
};

export default function RootLayout() {
   const colorScheme = useColorScheme();
   const theme = colorScheme === "dark" ? DarkTheme : LightTheme;

   const { error } = useMigrations(db, migrationsWithJournal);

   if (error) return <Text>Migration failed: {error.message}</Text>;

   return (
      <ThemeProvider value={theme}>
         <SafeAreaProvider>
            <Slot />
            <StatusBar style={theme.colors.statusBarStyle} animated />
         </SafeAreaProvider>
      </ThemeProvider>
   );
}
