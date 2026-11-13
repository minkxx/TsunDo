import BackButton from "@/components/BackButton";
import { useAppTheme } from "@/hooks/useAppTheme";
import Constants from "expo-constants";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Settings() {
   const { colors } = useAppTheme();
   const insets = useSafeAreaInsets();

   const appVersion = Constants.expoConfig?.version;

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
               alignItems: "center",
               height: 40,
               gap: 21,
               marginBottom: 15,
            }}
         >
            <BackButton />
            <Text
               style={{
                  color: colors.textTertiary,
                  fontSize: 21,
                  fontWeight: "bold",
                  marginBottom: 5,
               }}
            >
               Settings
            </Text>
         </View>
         <View style={{ gap: 9 }}>
            <View
               style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: colors.cardBackground,
                  borderColor: colors.cardBorder,
                  borderRadius: 15,
                  paddingHorizontal: 12,
                  paddingVertical: 15,
               }}
            >
               <Text style={{ color: colors.textPrimary }}>App Version</Text>
               <Text style={{ color: colors.textTertiary }}>v{appVersion}</Text>
            </View>
            <View
               style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: colors.cardBackground,
                  borderColor: colors.cardBorder,
                  borderRadius: 15,
                  paddingHorizontal: 12,
                  paddingVertical: 15,
               }}
            >
               <Text style={{ color: colors.textPrimary }}>Developer</Text>
               <Text style={{ color: colors.textTertiary }}>minkxx</Text>
            </View>
         </View>
      </View>
   );
}
