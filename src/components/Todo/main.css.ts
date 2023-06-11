import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "@assets/styles/vars.css";
import { recipe } from "@vanilla-extract/recipes";

export const MainStyle = style({
  display: "flex",
  flexDirection: "column",
  width: "calc(70vw - 120px)",
  height: "calc(100vh - 80px)",
  alignItems: "center",
  "@media": {
    "(max-width: 1024px)": {
      width: "100%"
    }
  }
});

globalStyle("#tasks-area-wrapper", {
  maxWidth: "700px",
  minWidth: "420px",
  height: "100%",
  paddingBottom: "0",
});

globalStyle("#task-writer", {
  borderRadius: vars.shape.round,
  backgroundColor: vars.colors.darkGreySidebar,
  transition: "0.25s ease",
  transitionProperty: "background-color box-shadow",
  animation: "mainSlideDown 0.25s ease",
});

export const Left = style({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "100%",
  alignItems: "center",
  gap: vars.container.gap.small,
  padding: "10px 0",
});

export const LeftLabel = style({
  display: "grid",
  placeItems: "center",

  width: "30px",
  height: "30px",

  cursor: "pointer",
});

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

export const checkboxDiv = style({
  display: "grid",
  placeItems: "center",
  width: "30px",
  height: "30px",
  borderRadius: vars.shape.default,
  backgroundColor: vars.colors.darkGreySidebar,
  transform: "translateX(-35px) scale(0)",
  transition: "0.25s ease",
  transitionProperty: "opacity transform background-color",
  ":before": {
    content: "",
    display: "inline-block",
    height: "3px",
    width: "6px",
    borderRadius: "2px",
    borderBottom: "4px solid white",
    borderLeft: "4px solid white",
    opacity: "1",
    transform: "rotate(-45deg) scale(1)",
    transition: "0.25s ease",
    transitionProperty: "transform opacity",
  },
});
export const checkboxInput = style({
  display: "none",
});

export const newTodoForm = style({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  transition: "0.25s ease",
  transitionProperty: "transform",
});

export const right = style({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  height: "40px",
  width: "fit-content",
  alignItems: "center",
  gap: "12px",
  padding: "0px 12px",
  paddingRight: "40px",
  marginLeft: "12px",
  borderRadius: "10px",
  cursor: "pointer",
  opacity: 0,
  pointerEvents: "none",
  transition: "0.25s ease",
  transitionProperty: "opacity",
  ":after": {
    content: "''",
    position: "absolute",
    right: "20px",
    width: "4px",
    height: "4px",
    borderBottom: "2px solid white",
    borderLeft: "2px solid white",
    borderRadius: "1px",
    transform: "rotate(-45deg)",
    outline: "10px solid white",
  },
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

export const taskList = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "scroll",

});

export const taskContent = recipe({
  base: {
    padding: "10px 20px",
    background: vars.colors.secondary,
    borderBottom: vars.border.presets.default,
    borderLeft: vars.border.presets.default,
    borderRight: vars.border.presets.default,
    ":hover": {
        boxShadow: "0 0 8px 0 #424351",
        backgroundColor: vars.colors.secondaryHover,
        
    },
    ":first-child": {
        borderTop: vars.border.presets.default,
        borderTopLeftRadius: vars.shape.round,
        borderTopRightRadius: vars.shape.round,
    },
    ":last-child": {
        borderBottomLeftRadius: vars.shape.round,
        borderBottomRightRadius: vars.shape.round,
    },
  },
  variants: {
    background: {
        default: {
            background: vars.colors.secondary,
        },
        check: {
            background: vars.colors.disabledBorder,
        }
    }
  }
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