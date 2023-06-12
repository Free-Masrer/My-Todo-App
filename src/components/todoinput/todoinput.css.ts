import { style } from "@vanilla-extract/css";
import { vars } from "@assets/styles/vars.css";
import { recipe } from "@vanilla-extract/recipes";

export const formInput = style({
    width: "100%",
    margin: "0.5rem 0",
    borderRadius: vars.shape.default,
    border: "2px solid",
    color: vars.colors.textPrimary,
    borderColor: vars.colors.border,
    padding: "0.5em",
    outline: "none",
    height: "2.5rem",
    backgroundColor: vars.inputs.colors.background,
    transition: "border .15s,background-color .15s",
    ":focus": {
      border: "2px solid",
      borderColor: vars.colors.primary,
    },
    ":active": {
      border: "2px solid",
      borderColor: vars.colors.primary,
    },
    ":hover": {
      backgroundColor: "#282833",
    },
  });
  
  export const newTodoForm = style({
    width: "100%",
    height: "100%",
    overflow: "hidden",
    transition: "0.25s ease",
    transitionProperty: "transform",
  });

  export const selectSelector = recipe({
    base: {
      flexGrow: "1",
      width: "100%",
      padding: "0",
      gap: "0",
      justifyContent: "space-between",
      alignItems: "center",
      display: "flex",
      ":hover": {
  
      },
    },
    variants: {
      display: {
        flex: {
          display: "flex",
          opacity: "1",
        },
        none: {
          display: "none",
          opacity: "0",
        },
      },
    },
  });

  export const dropdownIconStyle = style ({
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    color: vars.colors.textPrimary,
})

export const iconStyle = style ({
    width: vars.size.small,
    height: vars.size.small,
    color: vars.colors.textSecondary,
})