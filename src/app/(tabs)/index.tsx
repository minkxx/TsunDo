import AddNoteButton from "@/components/AddNoteButton";
import NoteCard from "@/components/NoteCard";
import OptionsButton from "@/components/OptionsButton";
import SearchButton from "@/components/SearchButton";
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
            paddingHorizontal: 15,
            backgroundColor: colors.background,
            paddingTop: insets.top + 10,
            paddingBottom: 9,
         }}
      >
         <View
            style={{
               flexDirection: "row",
               justifyContent: "flex-end",
               alignItems: "center",
               gap: 15,
               height: 40,
            }}
         >
            <SearchButton />
            <OptionsButton />
         </View>
         <Text
            style={{
               color: colors.primary,
               fontSize: 27,
               fontWeight: 600,
               marginBottom: 15,
            }}
         >
            Notes
         </Text>
         {dummy_data.length > 0 ? (
            <ScrollView
               contentContainerStyle={{ paddingBottom: 24 }}
               style={{
                  backgroundColor: colors.cardBackground,
                  borderRadius: 18,
                  padding: 15,
               }}
               showsVerticalScrollIndicator={false}
            >
               {dummy_data.map((note, index) => {
                  return (
                     <View key={note.id}>
                        <NoteCard id={note.id} title={note.title} description={note.description} />
                        {dummy_data.indexOf(note) !== dummy_data.length - 1 && (
                           <View
                              style={{
                                 height: 0.5,
                                 width: "100%",
                                 backgroundColor: colors.divider,
                                 borderRadius: 3,
                                 alignSelf: "center",
                                 marginVertical: 15,
                              }}
                           />
                        )}
                     </View>
                  );
               })}
            </ScrollView>
         ) : (
            <View
               style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <Text style={{ color: colors.textPrimary, fontWeight: "bold", fontSize: 21 }}>
                  No notes yet!!
               </Text>
            </View>
         )}
         <AddNoteButton />
      </View>
   );
}
