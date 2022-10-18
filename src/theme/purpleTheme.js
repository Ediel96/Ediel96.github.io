import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const purpleTheme = createTheme({
    palette:{
        primary:{
            main:'#262254'
        },
        secondary:{
            main:'#543884'
        },
        error:{
            main:red.A400
        }
    },
    typography:{
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    }
})