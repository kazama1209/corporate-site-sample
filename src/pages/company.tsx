import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import { Container, Grid, Typography} from "@material-ui/core"

import About from "../components/company/About"
import PageTemplate from "../components/layouts/PageTemplate"
import theme from "../components/utils/theme"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem"
  }
}))

interface About {
  name: string
  founded: string
  capital: string
  ceo: string
  address: string
  service: string
  mail: string
}

const Company: React.FC = () => {
  const classes = useStyles()

  const about: About = {
    name: "ABC Company",
    founded: "2021/01/01",
    capital: "20,000,000 JPY",
    ceo: "Taro Yamada",
    address: "Tokyo Skytree 1 Chome-1-2 Oshiage, Sumida, Tokyo",
    service: "Engineering",
    mail: "abc@example.com"
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <PageTemplate title="Company | Corporate Site Sample">
          <>
            <Container maxWidth="lg" className={classes.container}>
              <Grid container justify="center">
                <Grid item>
                  <Typography variant="h1" gutterBottom>
                    Company
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="lg" className={classes.container}>
              <About
                name={about.name}
                founded={about.founded}
                capital={about.capital}
                ceo={about.ceo}
                address={about.address}
                service={about.service}
                mail={about.mail}
              />
            </Container>
          </>
        </PageTemplate>
      </ThemeProvider>
    </>
  )
}

export default Company
