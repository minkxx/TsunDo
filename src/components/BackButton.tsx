import { useAppTheme } from "@/hooks/useAppTheme";
import { router } from "expo-router";
import { SymbolView } from "expo-symbols";
import { TouchableOpacity } from "react-native";

export default function BackButton() {
   const { colors } = useAppTheme();
   return (
      <TouchableOpacity
         onPress={() => {
            router.back();
         }}
      >
         <SymbolView name={{ android: "chevron_left" }} tintColor={colors.textPrimary} size={40} />
      </TouchableOpacity>
   );
}
