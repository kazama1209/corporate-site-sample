import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import { Container, Grid, Typography} from "@material-ui/core"

import PageTemplate from "../components/layouts/PageTemplate"
import Form from "../components/contact/Form"
import theme from "../components/utils/theme"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem",
    padding: 0
  }
}))

const Contact: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <ThemeProvider theme={theme}>
        <PageTemplate title="Contact | Sample">
          <>
            <Container maxWidth="lg" className={classes.container}>
              <Grid container justify="center">
                <Grid item>
                  <Typography variant="h1" gutterBottom>
                    Contact
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="lg" className={classes.container}>
              <Form />
            </Container>
          </>
        </PageTemplate>
      </ThemeProvider>
    </>
  )
}

export default Contact
