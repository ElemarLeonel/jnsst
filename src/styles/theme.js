import { createTheme } from "@mui/material";
import { green, grey } from "@mui/material/colors";

const primaryColor = grey[100];
const secondaryColor = green[800];
const textColor = grey[900];

const Theme = createTheme({
    palette: {
        primary:{
            light: textColor,
            main: primaryColor
        },
        secondary:{
            main: secondaryColor
        }
    },
    typography: {
        h4_title:{
            lineHeight: 1.5,
            fontSize: 28,
            fontWeight: 700
        },
        p_subtitles: {
            lineHeight: 1.5,
            fontSize: 16,
            fontWeight: 700
        }  
    }
});

export default Theme;
