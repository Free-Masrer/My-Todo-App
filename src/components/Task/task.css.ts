import { style } from "@vanilla-extract/css";
import { vars } from "../../assets/styles/vars.css";
import { recipe } from "@vanilla-extract/recipes";

export const Left = style({
  display: "flex",
  flexDirection: "row",

  width: "100%",
  height: "fit-content",

  alignItems: "center",

  gap: "20px",
  padding: "10px 0",
});

export const LeftLabel = style({
  display: "grid",
  placeItems: "center",

  width: "30px",
  height: "30px",

  cursor: "pointer",
});

export const checkboxInput = style({
  display: "none",
});

export const checkboxDiv = recipe({
  base: {
    display: "grid",
    placeItems: "center",
    width: vars.size.small,
    height: vars.size.small,
    border: vars.border.presets.default,
    borderRadius: vars.shape.default,
    backgroundColor: vars.colors.darkGreySidebar,
    transition: "background-color .1s ease-in",
    transitionProperty: "opacity transform background-color",
    ":before": {
      content: "''",
      display: "inline-block",
      height: "4px",
      width: "8px",
      borderBottom: "2px solid white",
      borderLeft: "2px solid white",
      opacity: "1",
      transform: "rotate(-45deg) scale(1)",
      transition: "0.25s ease",
      transitionProperty: "transform opacity",
    },
  },

  variants: {
    opacity: {
      y: {
        ":before": {
          opacity: "1",
        },
      },
      n: {
        ":before": {
          opacity: "0",
        },
      },
    },
    transform: {
      x1: {
        ":before": {
          transform: "rotate(-45deg) scale(1)",
        },
      },
      x2: {
        ":before": {
          transform: "rotate(-45deg) scale(0)",
        },
      },
    },
    background: {
        default: {
            backgroundColor: vars.colors.darkGreySidebar,

        },
        checked: {
            backgroundColor: vars.colors.primary,
            border: "none"
            
        },
    },
  },
});

export const Right = style ({
    position: "relative",

    display: "flex",
    flexDirection: "row",

    width: "fit-content",

    whiteSpace: "nowrap",

    alignItems: "center",

    gap: "27px",
    paddingLeft: "27px",
})

export const Date = style({
        display: "grid",
        placeItems: "center",
  
        height: "30px",
  
        padding: "0 16px",
  
        borderRadius: "10px",
  
        cursor: "pointer",
  
        transition: "0.25s ease",
  
        ":hover": {
          backgroundColor: "dark",
        }
  
})