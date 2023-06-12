
import { vars } from "@assets/styles/vars.css";
import { recipe } from "@vanilla-extract/recipes";

export const selectBox = recipe({
  base: {
    borderRadius: vars.shape.default,
    border: "2px solid",
    borderColor: vars.colors.border,
    minWidth: "0px",
    maxWidth: "200px",
    height: "2.5rem",
    userSelect: "none",
    cursor: "pointer",
    transition: "width 0.5s ease-in-out",
    ":focus": {
      border: "2px solid",
      borderColor: vars.colors.primary,
    },
    ":active": {
      border: "2px solid",
      borderColor: vars.colors.primary,
    },
    ":hover": {
      border: "2px solid",
      borderColor: vars.colors.primary,
    }
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
    width: {
      none: {
        minWidth: "0px",
        width: "0"
      },
      default: {
        minWidth: "200px",
        width: "200px",
        padding: "0 0.5em",
      },
    },
    focus: {
      default: {
        border: "2px solid",
        borderColor: vars.colors.border,
      },
      active: {
        border: "2px solid",
        borderColor: vars.colors.primary,
      }
    }
  },
});
