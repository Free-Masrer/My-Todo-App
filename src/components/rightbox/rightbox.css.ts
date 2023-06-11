import { style } from "@vanilla-extract/css";
import { vars } from "../../assets/styles/vars.css";

export const RbStyle = style ({
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
    padding: "10px",
    overflow: "scroll",
})

