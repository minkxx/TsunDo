import { dummy_data } from "@/data";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Todo() {
   const { colors } = useAppTheme();
   const insets = useSafeAreaInsets();
   const { id } = useLocalSearchParams();
   const data = dummy_data.find((note) => note.id === Number(id));

   return (
      <View
         style={{
            flex: 1,
            paddingHorizontal: 18,
            backgroundColor: colors.background,
            paddingTop: insets.top + 10,
            paddingBottom: insets.bottom,
         }}
      >
         <Text
            style={{
               color: colors.primary,
               fontSize: 21,
               fontWeight: 500,
               marginVertical: 3,
               textAlign: "center",
            }}
         >
            {data?.title}
         </Text>
         <ScrollView contentContainerStyle={{ marginTop: 15 }}>
            <Text style={{ color: colors.textPrimary, fontSize: 18 }}>{data?.description}</Text>
         </ScrollView>
      </View>
   );
}
