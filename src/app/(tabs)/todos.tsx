import BackButton from "@/components/BackButton";
import OptionsButton from "@/components/OptionsButton";
import SearchButton from "@/components/SearchButton";
import { useAppTheme } from "@/hooks/useAppTheme";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Todos() {
   const { colors } = useAppTheme();
   const insets = useSafeAreaInsets();

   return (
      <View
         style={{
            flex: 1,
            paddingHorizontal: 15,
            backgroundColor: colors.background,
            paddingTop: insets.top + 10,
            paddingBottom: 9,
         }}
      >
         <View
            style={{
               flexDirection: "row",
               justifyContent: "space-between",
               alignItems: "center",
               height: 40,
            }}
         >
            <BackButton />
            <View
               style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 15,
               }}
            >
               <SearchButton />
               <OptionsButton />
            </View>
         </View>
         <Text
            style={{
               color: colors.primary,
               fontSize: 27,
               fontWeight: 600,
               marginBottom: 15,
            }}
         >
            ToDos
         </Text>
      </View>
   );
}
