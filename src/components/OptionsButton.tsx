import { useAppTheme } from "@/hooks/useAppTheme";
import { router } from "expo-router";
import { SymbolView } from "expo-symbols";
import { TouchableOpacity } from "react-native";

export default function OptionsButton() {
   const { colors } = useAppTheme();
   return (
      <TouchableOpacity
         onPress={() => {
            router.push("/settings");
         }}
      >
         <SymbolView name={{ android: "more_vert" }} tintColor={colors.textPrimary} size={30} />
      </TouchableOpacity>
   );
}
