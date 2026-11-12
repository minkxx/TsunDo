import { ExtendedThemeColors } from "@/theme/colors";
import { useTheme } from "@react-navigation/native";

export function useAppTheme() {
   const theme = useTheme();
   return {
      ...theme,
      colors: theme.colors as ExtendedThemeColors,
   };
}
