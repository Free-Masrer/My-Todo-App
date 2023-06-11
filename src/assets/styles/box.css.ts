
import { vars } from "../../assets/styles/vars.css";
import { recipe } from "@vanilla-extract/recipes";

export const selectBox = recipe({
  base: {
    borderRadius: vars.shape.default,
    border: "2px solid",
    borderColor: vars.colors.border,
    minWidth: "200px",
    maxWidth: "200px",
    userSelect: "none",
    padding: "0.5em",
    ":focus": {
      border: "2px solid",
      borderColor: vars.colors.primary,
    },
    ":active": {
      border: "2px solid",
      borderColor: vars.colors.primary,
    },
  },
  variants: {
    display: {
      flex: {
        display: "flex",
      },
      none: {
        display: "none",
      },
    },
    opasity: {
      none: {
        opacity: "0",
      },
      default: {
        opacity: "1",
      },
    },
    margin: {
      default: {
        marginLeft: "auto",
      },
    },
  },
});
