import { style } from "@vanilla-extract/css";
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
  },
  variants: {},
});

export const select = recipe({
  base: {
    position: "absolute",
    zIndex: "1",
    marginTop: "12.1rem",
    marginLeft: "-0.7rem",
    minWidth: "225px",
    maxHeight: "400px",
    background: vars.colors.darkGreySidebar,

    overflow: "scroll",

    border: "1px solid",
    borderRadius: vars.shape.default,
    borderColor: vars.colors.border,
    boxShadow: "0px 0px 16px 4px rgba(0, 0, 0, 0.1)",
    "::-webkit-scrollbar": {
      width: "0",
      height: "0",
    },
  },
  variants: {
    visibility: {
      visible: {
        visibility: "visible",
      },
      hidden: {
        visibility: "hidden",
      },
    },

    animation: {
      isSelect: {
        animation: "selectFadeIn 0.25s ease",
      },
      isNot: {
        animation: "0.25s ease",
      },
    },
  },
});

export const listItemUl = style({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "fit-content",

  padding: "10px",
  listStyle: "none",
});

export const listItem = recipe({
  base: {
    color: vars.colors.textPrimary,
    textAlign: "center",
    padding: "0.5em 1em",
    outline: "none",
    border: "0",
    borderColor: vars.colors.border,
    borderBottom: "1px solid",
    borderBottomColor: vars.colors.border,
    backgroundColor: vars.colors.secondary,
    cursor: "pointer",
    borderRight: "1px solid",
    borderRightColor: vars.colors.border,
    borderLeft: "1px solid",
    borderLeftColor: vars.colors.border,
    transition:
      "background-color .15s ease-in-out,border-color .15 ease-in-out",
    ":first-child": {
      borderTopLeftRadius: vars.shape.default,
      borderTopRightRadius: vars.shape.default,
      borderTop: "1px solid",
      borderTopColor: vars.colors.border,
    },
    ":last-child": {
      borderBottomLeftRadius: vars.shape.default,
      borderBottomRightRadius: vars.shape.default,
    },
    ":focus": {
      backgroundColor: vars.colors.secondaryHover,
    },
  },
  variants: {
    background: {
      active: {
        backgroundColor: vars.colors.primary,
        ":hover": {
            backgroundColor: vars.colors.primaryHover,
          },
      },
      default: {
        backgroundColor: vars.colors.secondary,
        ":hover": {
            backgroundColor: vars.colors.secondaryHover,
          },
      },
    },
  },
});
