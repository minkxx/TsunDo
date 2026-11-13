import { useAppTheme } from "@/hooks/useAppTheme";
import { router } from "expo-router";
import { SymbolView } from "expo-symbols";
import { TouchableOpacity } from "react-native";

export default function AddNoteButton() {
   const { colors } = useAppTheme();
   return (
      <TouchableOpacity
         onPress={() => {
            router.push("/todo?id=new_note");
         }}
         style={{
            width: 60,
            height: 60,
            borderRadius: 12,
            backgroundColor: colors.primary,
            elevation: colors.cardElevation,
            shadowColor: "#000",
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
            size={60}
            style={{ justifyContent: "center", alignItems: "center" }}
         />
      </TouchableOpacity>
   );
}
