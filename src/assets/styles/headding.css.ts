import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./vars.css"

export const typographyStyle = recipe ({
    base: {
        fontFamily: vars.fonts.main,
        color: vars.colors.textPrimary,
        fontWeight: "400",
        fontStretch: "normal",
        fontStyle: "normal",

    },
    variants: {
        role: {
            h1: {
                fontSize: "3.125rem",
                fontWeight: "700",
            },
            h2: {
                fontSize: "1.5rem",
                fontWeight: "700",
            }
        }

    },
})