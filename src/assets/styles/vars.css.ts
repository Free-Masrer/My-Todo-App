import { createGlobalTheme } from "@vanilla-extract/css";
import { fonts } from "./fonts.css";

export const vars = createGlobalTheme("#root", {
  controls: {
    colors: {
      text: {
        primary: "#ffffff",
        secondary: "#b3b4b9",
        disabled: "#c0c0c5",
      },
    },
  },
  button: {
    colors: {
      primary: "#f9617b",
      secondary: "#424351",
    },
    shape: {
      Border: "none",
    },
    size: {
      minWidth: "42px",
      height: "42px",
    },
  },
  inputs: {
    colors: {
      background: "#424351",
    },
    size: {
      height: "42px",
    },
  },
  colors: {
    primary: "#F9617B",
    primaryHover: "#fb8195",
    secondary: "#424351",
    secondaryHover: "#5b5b66",
    disabled: "#85858F",
    body: "#c0c0c5",
    textPrimary: "#ffffff",
    textSecondary: "#B3B4B9",
    border: "#4b4d5b",
    darkGreySidebar: "#333340",
    disabledBorder: "#4b4d5b;",
    errorFill: "rgba(255, 56, 36, .2)",
    alertError: "rgba(249, 97, 123, .2)",
    alertSuccess: "rgba(96, 227, 191, .2)",
    error: "#ff877b",
    danger: "hsl(10 82% 43.5%)",
    dangerHover: "hsl(10 82% 53.5%)",
  },
  fonts: {
    main: fonts.ibmPlexSans.fontFamily,
    mono: "IBM Plex Mono",
  },
  fontSize: {
    small: "12px",
    medium: "14px",
    large: "16px",
  },
  size: {
    small: "24px",
    medium: "36px",
    large: "48px",
  },
  shape: {
    default: ".3rem",
    cricle: "50%",
    round: "24px",
  },
  border: {
    presets: {
      default: "1px solid #4b4d5b",
    },
  },
  sidebar: {
    width: "220px",
    minWidth: "58px",
  },
  container: {
    gap: {
      small: "0.625rem",
      medium: "1rem",
      none: "0",
    },
    direction: {
      row: "row",
      column: "column", 
    },
    alignItems: {
      center: "center",
      stretch: "stretch",
      end: "end",
      start: "start",
      baseline: "baseline",
    }
  },
});
