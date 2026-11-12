import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
   const { colors } = useTheme();
   const insets = useSafeAreaInsets();

   return (
      <View
         style={[
            styles.container,
            {
               backgroundColor: colors.background,
               paddingTop: insets.top + 10,
               paddingBottom: insets.bottom,
            },
         ]}
      >
         <Text style={{ color: colors.text, fontSize: 18 }}>Hello! World.</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
   },
});
