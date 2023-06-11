import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "./assets/styles/vars.css";
import { fonts } from "./assets/styles/fonts.css";


globalStyle("#root", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: vars.colors.secondary,
  border: vars.border.presets.default,
  borderRadius: vars.shape.default,
  textAlign: "center",
  maxWidth: "1280px",
  margin: "0 auto",
  fontFamily: fonts.ibmPlexSans.fontFamily,
});

globalStyle("html", {
  height: "100%",
  overflowX: "hidden",
})

export const toDoList = style({
  minWidth: "380px",
  minHeight: "315px",
  color: vars.colors.textPrimary,
  backgroundColor: vars.colors.darkGreySidebar,
  borderRadius: "12px",
  border: "1px solid",
  borderColor: vars.colors.border,
  boxShadow: "0 8px 8px #0000001a",
  padding: "10px",
});

export const mainApp = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: vars.colors.secondary,
  height: "100%",
  flexWrap: "wrap",
});

globalStyle("h3", {
  color: vars.colors.textPrimary,
});
