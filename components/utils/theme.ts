import { createMuiTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

const black = "#212121"
const white = "#fafafa"
const blue = "#757ce8"

const theme = createMuiTheme({
  palette: {
    common: {
      black: black,
      white: white
    },
    primary: {
      main: black
    },
    secondary: {
      main: white
    },
    info: {
      main: blue
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 500,
    }
  }
})

export default theme
