import { useAppTheme } from "@/hooks/useAppTheme";
import { router } from "expo-router";
import { SymbolView } from "expo-symbols";
import { TouchableOpacity } from "react-native";

export default function AddNoteButton() {
   const { colors } = useAppTheme();
   return (
      <TouchableOpacity
         onPress={() => {
            router.push("/note?id=new_note");
         }}
         style={{
            borderRadius: 40,
            backgroundColor: colors.primary,
            elevation: colors.cardElevation,
            shadowColor: colors.primary,
            shadowOffset: {
               width: 0,
               height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            position: "absolute",
            zIndex: 10,
            bottom: 40,
            right: 30,
         }}
      >
         <SymbolView
            name={{ android: "add", ios: "plus.circle" }}
            tintColor={colors.onPrimary}
            size={57}
            style={{ justifyContent: "center", alignItems: "center" }}
         />
      </TouchableOpacity>
   );
}
