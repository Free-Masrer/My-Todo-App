import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./vars.css";

export const buttonStyles = recipe({
  base: {
    color: vars.controls.colors.text.primary,
    textDecoration: "none",
    border: vars.button.shape.Border,
    borderRadius: vars.shape.default,
    padding: ".7em 1em",
    boxShadow: "0 2px 4px #0000000d",
    outline: "none",
    cursor: "pointer",
    transition: "backgroundColor .3s,box-shadow .1s",
    userSelect: "none",
  },
  variants: {
    buttons: {
      primary: {
        backgroundColor: vars.colors.primary,
        ":hover": {
          boxShadow: "0 0 12px 0 #f9617b",
          backgroundColor: vars.colors.primaryHover,
        },
        ":active": {
          transform: "translateY(.5px)",
          boxShadow: "0 0 12px 0 #f9617b",
          backgroundColor: vars.colors.primaryHover,
        },
      },
      secondary: {
        backgroundColor: vars.colors.secondary,
        ":hover": {
          boxShadow: "0 0 12px 0 #f9617b",
          backgroundColor: vars.colors.secondaryHover,
        },
      },
      danger: {
        borderRadius: vars.shape.default,
        backgroundColor: vars.colors.danger,
        ":hover": {
          boxShadow: "0 0 8px 0 hsl(10 82% 43.5%);",
          backgroundColor: vars.colors.dangerHover,
        },
        ":active": {
          transform: "translateY(.5px)",
          boxShadow: "0 0 8px 0 hsl(10 82% 43.5%);",
          backgroundColor: vars.colors.dangerHover,
        },
      },
    },
    margin: {
      default: {
        margin: "0 12px",
      },
      sidebarButton: {
        margin: "12px 0",
      },
      none: {
        margin: "0 5px",
      },
    },
    padding: {
      none: {
        padding: "0",
      },
      small:{
        padding: "5px"
      },
      default: {
        padding: ".7em 1em",
      },
    },
    vars: {
      show: {
        opacity: "1",
      },
      hide: {
        opacity: "0",
      },
    },
    transition: {
      default: {
        transition: "0.25s ease",
        transitionProperty: "opacity",
      },
    },
    display: {
      default: {
        display: "flex",
      },
    },
    justifyItems: {
      center: {
        justifyItems: "center",
      },
    },
  },
});

export const checkboxStyle = recipe({
  base: {
    display: "grid",
    placeItems: "center",
    width: vars.size.small,
    height: vars.size.small,
    border: vars.border.presets.default,
    padding: "0",
    borderRadius: "4px",
    transition: "background-color .1s ease-in",
    transform: "translateX(-35px) scale(0)",
    justifyContent: "center",
    ":hover": {
      cursor: "pointer",
    },
    ":before": {
      content: "''",
      display: "inline-block",
      height: "3px",
      width: "6px",
      borderRadius: "4px",
      borderBottom: "4px solid white",
      borderLeft: "4px solid white",
      opacity: "1",
      transform: "rotate(-45deg) scale(1)",
      transition: "0.25s ease",
    },
  },
  variants: {
    checked: {
      checked: {
        backgroundColor: vars.colors.primary,
        border: "none",
        color: vars.colors.textPrimary,
      },
      unchecked: {
        border: vars.border.presets.default,
        backgroundColor: vars.colors.darkGreySidebar,
      },
    },
    span: {
      checked: {
        display: "flex",
        animation: "checkbox_indicatorAnimation__1lccjo30 .3s ease-in",
      },
      unchecked: {
        display: "none",
      },
    },
    alignItems: {
      center: {
        alignItems: vars.container.alignItems.center,
      },
      stretch: {
        alignItems: vars.container.alignItems.stretch,
      },
      end: {
        alignItems: vars.container.alignItems.end,
      },
      start: {
        alignItems: vars.container.alignItems.start,
      },
      baseline: {
        alignItems: vars.container.alignItems.baseline,
      },
    },
    opacityTransform: {
      y: {
        ":before": {
          opacity: "1",
          transform: "rotate(-45deg) scale(1)",
        },
      },
      n: {
        ":before": {
          opacity: "0",
          transform: "rotate(-45deg) scale(0)",
        },
      },
    },
  },
});
