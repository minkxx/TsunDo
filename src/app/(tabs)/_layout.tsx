import { useAppTheme } from "@/hooks/useAppTheme";
import { Tabs } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
   const { colors } = useAppTheme();
   const insets = useSafeAreaInsets();

   return (
      <Tabs
         screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.textTertiary,
            tabBarStyle: {
               backgroundColor: colors.cardBackground,
               borderTopWidth: 1,
               borderTopColor: colors.cardBackground,
               height: insets.bottom + 65,
            },
            tabBarItemStyle: {
               paddingVertical: 4,
            },
            tabBarLabelStyle: {
               fontSize: 14,
               fontWeight: "bold",
            },
         }}
      >
         <Tabs.Screen
            name="index"
            options={{
               title: "Notes",
               tabBarIcon: ({ color, size }) => (
                  <SymbolView name={{ android: "article" }} size={size * 1.2} tintColor={color} />
               ),
            }}
         />
         <Tabs.Screen
            name="todos"
            options={{
               title: "ToDos",
               tabBarIcon: ({ color, size }) => (
                  <SymbolView name={{ android: "checklist" }} size={size * 1.2} tintColor={color} />
               ),
            }}
         />
      </Tabs>
   );
}
