import {
   DarkTheme as NavDarkTheme,
   DefaultTheme as NavDefaultTheme,
} from "@react-navigation/native";

export const LightTheme = {
   ...NavDefaultTheme,
   dark: false,
   colors: {
      ...NavDefaultTheme.colors,

      cardBackground: "#FFFFFF",
      cardBorder: "#E0E0E0",
      cardElevation: 1,

      surface: "#FFFFFF",
      surfaceVariant: "#F5F5F5",
      surfaceContainer: "#EEEEEE",
      surfaceContainerHigh: "#E8E8E8",
      surfaceContainerHighest: "#E0E0E0",
      onSurface: "#1C1B1F",
      onSurfaceVariant: "#49454F",

      textPrimary: "#1C1B1F",
      textSecondary: "#49454F",
      textTertiary: "#79747E",
      textOnPrimary: "#FFFFFF",
      textOnSurface: "#1C1B1F",

      primary: "#208AEF",
      primaryContainer: "#D0E4FF",
      onPrimary: "#FFFFFF",
      onPrimaryContainer: "#001D3A",

      secondary: "#5D576B",
      secondaryContainer: "#E3DEF8",
      onSecondary: "#FFFFFF",
      onSecondaryContainer: "#1D192B",

      error: "#BA1A1A",
      errorContainer: "#FFDAD6",
      onError: "#FFFFFF",
      onErrorContainer: "#410002",

      success: "#2E7D32",
      successContainer: "#A5D6A7",
      onSuccess: "#FFFFFF",
      onSuccessContainer: "#0D2B0D",

      warning: "#F57F17",
      warningContainer: "#FFECB3",
      onWarning: "#1A1400",
      onWarningContainer: "#3E3400",

      outline: "#79747E",
      outlineVariant: "#CAC4D0",
      divider: "#E0E0E0",

      ripple: "#0000001A",
      hover: "#0000000D",
      focus: "#0000001F",
      press: "#0000001A",

      statusBarStyle: "dark" as const,
   },
};

export const DarkTheme = {
   ...NavDarkTheme,
   dark: true,
   colors: {
      ...NavDarkTheme.colors,

      cardBackground: "#1E1E1E",
      cardBorder: "#333333",
      cardElevation: 3,

      surface: "#1C1B1F",
      surfaceVariant: "#2D2A2E",
      surfaceContainer: "#3E3B40",
      surfaceContainerHigh: "#49454F",
      surfaceContainerHighest: "#5A565E",
      onSurface: "#E6E1E5",
      onSurfaceVariant: "#CAC4D0",

      textPrimary: "#E6E1E5",
      textSecondary: "#CAC4D0",
      textTertiary: "#938F99",
      textOnPrimary: "#00335C",
      textOnSurface: "#E6E1E5",

      primary: "#8AB4F8",
      primaryContainer: "#1A3C5E",
      onPrimary: "#00335C",
      onPrimaryContainer: "#D0E4FF",

      secondary: "#C9C1D9",
      secondaryContainer: "#433D56",
      onSecondary: "#332D41",
      onSecondaryContainer: "#E3DEF8",

      error: "#FFB4AB",
      errorContainer: "#93000A",
      onError: "#690005",
      onErrorContainer: "#FFDAD6",

      success: "#81C784",
      successContainer: "#1B5E20",
      onSuccess: "#0D2B0D",
      onSuccessContainer: "#A5D6A7",

      warning: "#FFD54F",
      warningContainer: "#795548",
      onWarning: "#1A1400",
      onWarningContainer: "#3E3400",

      outline: "#938F99",
      outlineVariant: "#49454F",
      divider: "#333333",

      ripple: "#FFFFFF1A",
      hover: "#FFFFFF0D",
      focus: "#FFFFFF1F",
      press: "#FFFFFF1A",

      statusBarStyle: "light" as const,
   },
};

export type ExtendedThemeColors = typeof LightTheme.colors;

export type ExtendedTheme = typeof LightTheme;
