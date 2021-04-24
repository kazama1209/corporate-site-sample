import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import { Container, Grid, Typography} from "@material-ui/core"

import Jobs from "../components/recruit/Jobs"
import Slider from "../components/recruit/Slider"
import PageTemplate from "../components/layouts/PageTemplate"
import theme from "../components/utils/theme"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem",
    padding: "0 1rem"
  }
}))

interface Job {
  name: string
}

const Recruit: React.FC = () => {
  const classes = useStyles()

  const jobs: Job[] = [
    {
      name: "Planner"
    },
    {
      name: "Engineer"
    },
    {
      name: "Designer"
    },
    {
      name: "Manager"
    },
    {
      name: "Marketer"
    },
    {
      name: "Salesman"
    },
  ]

  const images: string[] = [
    "https://www.pakutaso.com/shared/img/thumb/OOK82_gurafuwoyubisasu20131223_TP_V.jpg",
    "https://www.pakutaso.com/shared/img/thumb/PAK85_MBAdesagyou20140312_TP_V.jpg",
    "https://www.pakutaso.com/shared/img/thumb/N112_nekutaiwonaosudansei_TP_V.jpg",
    "https://www.pakutaso.com/shared/img/thumb/MAX75_yubisasu20141025120158_TP_V.jpg"
  ]

  return (
    <>
      <ThemeProvider theme={theme}>
        <PageTemplate title="Recruit | Corporate Site Sample">
          <>
            <Container maxWidth="lg" className={classes.container}>
              <Grid container justify="center">
                <Grid item>
                  <Typography variant="h1" gutterBottom>
                    Recruit
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={2} justify="center">
                <Grid container item xs={12} spacing={2}>
                  <Jobs
                    jobs={jobs}
                  />
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="lg" className={classes.container}>
              <Slider images={images} />
            </Container>
            <Container maxWidth="lg" className={classes.container}>
              <Typography align="center">
                Please feel free to contact us.
              </Typography>
            </Container>
          </>
        </PageTemplate>
      </ThemeProvider>
    </>
  )
}

export default Recruit
