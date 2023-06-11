import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./vars.css"

export const containerStyles = recipe({
  base: {
    width: "100%"
  },
  variants: {
    gap: {
      small: {
        gap: vars.container.gap.small,
      },
      none: {
        gap: vars.container.gap.none,
      },
      medium: {
        gap: vars.container.gap.medium,
      },
    },
    direction: {
      row: {
        flexDirection: vars.container.direction.row,
      },
      column: {
        flexDirection: vars.container.direction.column,
      },
    },
    padding: {
      small: {
        padding: "0.5rem",
      },
      none: {
        padding: "0",
      },
      default: {
        padding: "0.5rem 1rem",
      },
      card: {
        padding: "1.5rem",
      },
      form: {
        padding: "0.5rem 0"
      }
    },
    display: {
      flex: {
        display: "flex",
      },
      inlineFlex: {
        display: "inlineFlex",
      },
    },
    background: {
      primary: {
        background: vars.colors.primary,
      },
      secondary: {
        background: vars.colors.secondary,
      },
      dark: {
        background: vars.colors.darkGreySidebar,
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
    borderRadius: {
      default: {
        borderRadius: vars.shape.default,
      },
    },
    warp: {
        default: {
            flexWrap: "wrap",
        },
    },
    border: {
        top: {
            borderTop: vars.border.presets.default,
        },
        default: {
            border: vars.border.presets.default,
        }
    },

    bkground: {
        mine: {
            background: vars.colors.darkGreySidebar,
        },
        second: {
            background: vars.colors.secondary,
        }
    }
  },
});

export const footerBox = recipe({
  base: {
    flexDirection: vars.container.direction.row,
    "@media": {
        "screen and (max-widht: 768px)": {
            flexDirection: vars.container.direction.column,
        },


    },
  },
  variants: {
    gap: {
      small: {
        gap: vars.container.gap.small,
      },
      none: {
        gap: vars.container.gap.none,
      },
      medium: {
        gap: vars.container.gap.medium,
      },
    },
    direction: {
      row: {
        flexDirection: vars.container.direction.row,
      },
      column: {
        flexDirection: vars.container.direction.column,
      },
    },
    padding: {
      small: {
        padding: "0.5rem",
      },
      none: {
        padding: "0",
      },
      default: {
        padding: "0.5rem 1rem",
      },
      card: {
        padding: "1.5rem",
      },
    },
    display: {
      flex: {
        display: "flex",
      },
      inlineFlex: {
        display: "inlineFlex",
      },
    },
    background: {
      primary: {
        background: vars.colors.primary,
      },
      secondary: {
        background: vars.colors.secondary,
      },
      dark: {
        background: vars.colors.darkGreySidebar,
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
    borderRadius: {
      default: {
        borderRadius: vars.shape.default,
      },
    },
  },
});

export const footerBoxItems = recipe({
  base: {
    width: "100%",
    height: "1rem",
    padding: "10px",
  },
  variants: {
    gap: {
      small: {
        gap: vars.container.gap.small,
      },
      none: {
        gap: vars.container.gap.none,
      },
      medium: {
        gap: vars.container.gap.medium,
      },
    },
    direction: {
      row: {
        flexDirection: vars.container.direction.row,
      },
      column: {
        flexDirection: vars.container.direction.column,
      },
    },
    padding: {
      small: {
        padding: "0.5rem",
      },
      none: {
        padding: "0",
      },
      default: {
        padding: "0.5rem 1rem",
      },
      card: {
        padding: "1.5rem",
      },
    },
    display: {
      flex: {
        display: "flex",
      },
      inlineFlex: {
        display: "inlineFlex",
      },
    },
    background: {
      primary: {
        background: vars.colors.primary,
      },
      secondary: {
        background: vars.colors.secondary,
      },
      dark: {
        background: vars.colors.darkGreySidebar,
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
    borderRadius: {
      default: {
        borderRadius: vars.shape.default,
      },
    },
    borderRight: {
        default: {
            borderRight: vars.border.presets.default,
        }
    },
  },
});
