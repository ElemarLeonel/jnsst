import { createTheme } from "@mui/material";
import { green, grey } from "@mui/material/colors";

const primaryColor = grey[100];
const secondaryColor = green[800];
const textColor = grey[900];

const Theme = createTheme({
    palette: {
        primary:{
            main: primaryColor
        },
        secondary:{
            main: secondaryColor
        },
        success: {
            main: textColor
        }
    }
});

export default Theme;
