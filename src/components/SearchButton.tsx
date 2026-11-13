import { useAppTheme } from "@/hooks/useAppTheme";
import { router } from "expo-router";
import { SymbolView } from "expo-symbols";
import { TouchableOpacity } from "react-native";

export default function SearchButton() {
   const { colors } = useAppTheme();
   return (
      <TouchableOpacity
         onPress={() => {
            router.push("/search");
         }}
      >
         <SymbolView name={{ android: "search" }} tintColor={colors.textPrimary} size={30} />
      </TouchableOpacity>
   );
}
