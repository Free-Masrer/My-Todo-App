import { style } from "@vanilla-extract/css";


export const Left = style ({
    display: "flex",
    flexDirection: "row",

    width: "100%",

    alignItems: "center",

    gap: "20px",

})

export const taskAmout = style ({
    position: "relative",
    display: "grid",
    placeItems: "center",
    minWidth: "30px",
    minHeight: "30px",
    ":hover": {
    }
})

export const rCategory = style ({
    position: "absolute",
    display: "grid",
    placeItems: "center",
    border: "none",
    outline: "none",
    opacity: "0",
    pointerEvents: "none",
    cursor: "pointer",
    transition: "0.25s ease",
    ":hover": {
        opacity: "1",
        pointerEvents: "auto",
    }
})
