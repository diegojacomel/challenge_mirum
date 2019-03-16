// Scale
import { pxToRem } from '../utils/scale';

// Themes
const primaryTheme = {
    colors: {
        primary: "#54a0ff",
        danger: "#ff6b6b",
        info: "#48dbfb",
        success: "#1dd1a1",
        default: "#576574",
        white: "#ffffff",
        black: "#000000",
        greyLight: "#f2f2f2",
        greyMedium: "#999999",
        greyDark: "#333333",
        hover: {
            primary: "#1a81ff",
            danger: "#ff3333",
            info: "#05cdfa",
            success: "#159d79",
            default: "#373f49",
            white: "#f2f2f2",
            black: "#1a1a1a"
        }
    },
    spacing: {
        none: "0",
        xxs: pxToRem(3),
        xs: pxToRem(5),
        xsm: pxToRem(8),
        sm: pxToRem(10),
        md: pxToRem(15),
        lg: pxToRem(20),
        xlg: pxToRem(25),
        xg: pxToRem(30),
        xxg: pxToRem(50)
    },
    fontSize: {
        none: "0",
        xs: pxToRem(12),
        sm: pxToRem(14),
        md: pxToRem(16),
        lg: pxToRem(18),
        xg: pxToRem(20),
    },
    rounded: {
        none: "0",
        sm: "3px",
        md: "5px",
        lg: "10px",
        full: "100%"
    }
}

export {
    primaryTheme
}