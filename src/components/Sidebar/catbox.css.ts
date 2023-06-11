import { style } from "@vanilla-extract/css";
import { vars } from "../../assets/styles/vars.css";

export const RbStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "30vw",
  height: "calc(100vh - 80px)",
  minWidth: "380px",
  minHeight: "315px",
  color: vars.colors.textPrimary,
  backgroundColor: vars.colors.darkGreySidebar,
  borderRadius: "12px",
  border: "1px solid",
  borderColor: vars.colors.border,
  gap: "1rem",
  boxShadow: "0 8px 8px #0000001a",
  padding: "1.5rem",
  overflow: "scroll",
  "@media": {
    "screen and (max-width: 1024px)": {
      display: "none",
    },
  }
});

export const completeSpan = style({
    position: "relative",
    display: "grid",
    placeItems: "center",
    minWidth: "30px",
    minHeight: "30px",
    borderRadius: "10px",
    border: vars.border.presets.default,
    borderColor: vars.colors.border,
    color: vars.colors.textSecondary,
    backgroundColor: vars.colors.secondary,
});

export const horizontal = style({
  height: "1px",
  width: "100%",
});

export const separator = style ({
    backgroundColor: vars.colors.border,
    height: "1px",
    width: "100%",
})

export const progressBar = style ({
  position: "relative",
  overflow: "hidden",
  background: vars.colors.secondary,
  border: "1px solid",
  borderBlockColor: vars.colors.primary,
  color: vars.colors.primary,
  borderRadius: "99999px",
  width: "300px",
  height: "25px",
  transform: "translateZ(0)",
  "@media": {
    "(max-width: 1024px)": {
      width: "140px",
    },
  },
})

export const progressIndicator = style ({
  backgroundColor: vars.colors.primary,
  width: "0",
  height: "100%",
  transition: "width 0.5s ease-in-out",
})