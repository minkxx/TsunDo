import { useAppTheme } from "@/hooks/useAppTheme";
import { Link } from "expo-router";
import { Pressable, Text } from "react-native";

interface NoteCardProps {
   id: number;
   title: string;
   description: string;
}

export default function NoteCard({ id, title, description }: NoteCardProps) {
   const { colors } = useAppTheme();

   return (
      <>
         <Link href={{ pathname: "/todo", params: { id } }} key={id} asChild>
            <Pressable>
               <Text
                  style={{
                     color: colors.textPrimary,
                     fontSize: 16,
                     fontWeight: 500,
                     marginBottom: 3,
                  }}
               >
                  {title}
               </Text>
               <Text style={{ color: colors.textTertiary, fontSize: 14 }} numberOfLines={1}>
                  {description}
               </Text>
            </Pressable>
         </Link>
      </>
   );
}
