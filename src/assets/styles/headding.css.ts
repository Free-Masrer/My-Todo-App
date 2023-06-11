import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./vars.css";

export const typographyStyle = recipe({
  base: {
    fontFamily: vars.fonts.main,
    color: vars.colors.textPrimary,
    fontWeight: "400",
    fontStretch: "normal",
    fontStyle: "normal",
  },
  variants: {
    role: {
      h1: {
        fontSize: "3.125rem",
        fontWeight: "700",
        "@media": {
            "(max-width: 768px)": {
              fontSize: "2rem",
            },
          },
      },
      h2: {
        fontSize: "1.5rem",
        fontWeight: "700",
        "@media": {
            "(max-width: 768px)": {
              fontSize: "1rem",
            },
          },
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: "500",
        "@media": {
            "(max-width: 768px)": {
              fontSize: "1rem",
            },
          },
      },
      h4: {
        fontSize: "1.2rem",
        fontWeight: "500",
        "@media": {
            "(max-width: 768px)": {
              fontSize: "1rem",
            },
          },
      },
      lable: {
        fontSize: ".9375rem",
        "@media": {
          "(max-width: 768px)": {
            fontSize: ".8rem",
          },
        },
      },
    },
    colorVars: {
      primary: {
        color: vars.colors.textPrimary,
      },
      secondary: {
        color: vars.colors.textSecondary,
      },
      disabled: {
        color: vars.colors.disabled,
        textDecoration: "line-through",
      },
      red: {
        color: vars.colors.primary,
      },
    },
    padding: {
      default: {
        padding: "15px 0",
      },
      bottomSmall: {
        paddingBottom: "0.5rem",
      },
    },
    opasity: {
      default: {
        opacity: "1",
      },
      none: {
        opacity: "0",
      },
    },
  },
});
