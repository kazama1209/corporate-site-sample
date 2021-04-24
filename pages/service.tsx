import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import { Container, Grid, Typography} from "@material-ui/core"

import Features from "../components/service/Features"
import PageTemplate from "../components/layouts/PageTemplate"
import theme from "../components/utils/theme"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem"
  }
}))

interface Feature {
  title: string
  description: string
}

const Service: React.FC = () => {
  const classes = useStyles()

  const features: Feature[] = [
    {
      title: "Feature1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Feature2",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Feature3",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ]

  return (
    <>
      <ThemeProvider theme={theme}>
        <PageTemplate title="Service | Corporate Site Sample">
          <>
            <Container maxWidth="lg"className={classes.container}>
              <Grid container justify="center">
                <Grid item>
                  <Typography variant="h1" gutterBottom>
                    Service
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="lg" className={classes.container}>
              { features.map((feature, index) => (
                  <Features
                    key={index}
                    title={feature.title}
                    description={feature.description}
                  />
                ))
              }
            </Container>
          </>
        </PageTemplate>
      </ThemeProvider>
    </>
  )
}

export default Service
