import NoteCard from "@/components/NoteCard";
import { dummy_data } from "@/data";
import { useAppTheme } from "@/hooks/useAppTheme";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
   const { colors } = useAppTheme();
   const insets = useSafeAreaInsets();

   return (
      <View
         style={{
            flex: 1,
            paddingHorizontal: 18,
            backgroundColor: colors.background,
            paddingTop: insets.top + 10,
            paddingBottom: insets.bottom + 12,
         }}
      >
         <Text
            style={{
               color: colors.textPrimary,
               fontSize: 27,
               fontWeight: 600,
               marginTop: 3,
               marginBottom: 15,
            }}
         >
            TsunDo
         </Text>
         {dummy_data && (
            <ScrollView
               contentContainerStyle={{ paddingBottom: 24 }}
               style={{
                  backgroundColor: colors.cardBackground,
                  borderRadius: 18,
                  padding: 15,
               }}
               showsVerticalScrollIndicator={false}
            >
               {dummy_data.map((note) => {
                  return (
                     <View key={note.id}>
                        <NoteCard id={note.id} title={note.title} description={note.description} />
                        {dummy_data.length !== note.id && (
                           <View
                              style={{
                                 height: 0.5,
                                 width: "100%",
                                 backgroundColor: colors.divider,
                                 borderRadius: 3,
                                 alignSelf: "center",
                                 marginVertical: 12,
                              }}
                           />
                        )}
                     </View>
                  );
               })}
            </ScrollView>
         )}
      </View>
   );
}
