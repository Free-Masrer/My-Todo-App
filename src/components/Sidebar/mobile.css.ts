import { vars } from "../../assets/styles/vars.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const mobileSidebarStyle = recipe({
  base: {
    position: "absolute",
    right: "0",
    top: "0",
    height: "100%",
    transition: "width .4s ease-in",
    willChange: "width",
    overflowX: "hidden",
    overflowY: "auto",
    whiteSpace: "nowrap",
    backgroundColor: vars.colors.darkGreySidebar,
  },
  variants: {
    vars: {
      open: {
        width: vars.sidebar.width,
      },
      close: {
        width: "0",
      },
    },
  },
});

export const hamburger = recipe({
  base: {
    position: "absolute",
    right: "0",
    top: "0",
    padding: "1rem",
    transition: "margin-right .4s ease-in",
    willChange: "margin-right",
    overflowX: "hidden",
    overflowY: "auto",
    whiteSpace: "nowrap",
  },
  variants: {
    vars: {
      open: {
        marginRight: "220px",
      },
      close: {
        marginRight: "0",
      },
    },
  },
});
