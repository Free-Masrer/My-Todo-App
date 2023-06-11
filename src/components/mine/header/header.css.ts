import { style } from "@vanilla-extract/css";

export const headerStyles = style({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
    height: "fit-content",
    justifyContent: "center",
    marginBottom: "30px",
    transform: "translateX(60px) translateY(0px)",
    animation: "mainHeaderSlideDown 0.25s ease"

})