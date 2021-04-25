import { GetStaticPaths, GetStaticProps } from "next"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"

import Qualifications from "../../components/recruit/Qualifications"
import { Container, Grid, Typography} from "@material-ui/core"
import PageTemplate from "../../components/layouts/PageTemplate"
import theme from "../../components/utils/theme"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem"
  },
  gridItem: {
    maxWidth: "1260px"
  }
}))

const jobs: string[] = [
  "planner", "engineer", "designer", "marketer"
]

interface JobDetail {
  image: string
  name: string
  description: string
  requiredSkills: string[]
  welcomeSkills: string[]
  idealImages: string[]
}

const jobDetails: JobDetail[] = [
  {
    image: "https://www.pakutaso.com/shared/img/thumb/MAX75_yubisasu20141025120158_TP_V.jpg",
    name: "Plannner",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    requiredSkills: [
      "Lorem ipsum dolor sit amet.",
      "Ut enim ad minim veniam.",
      "Duis aute irure dolor in reprehenderit.Duis aute irure dolor in reprehenderit."
    ],
    welcomeSkills: [
      "Lorem ipsum dolor sit amet.",
      "Ut enim ad minim veniam.",
      "Duis aute irure dolor in reprehenderit.Duis aute irure dolor in reprehenderit."
    ],
    idealImages: [
      "Lorem ipsum dolor sit amet.",
      "Ut enim ad minim veniam.",
      "Duis aute irure dolor in reprehenderit."
    ]
  },
  {
    image: "https://www.pakutaso.com/shared/img/thumb/PAK85_MBAdesagyou20140312_TP_V.jpg",
    name: "Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    requiredSkills: [
      "Lorem ipsum dolor sit amet.",
      "Ut enim ad minim veniam.",
      "Duis aute irure dolor in reprehenderit.Duis aute irure dolor in reprehenderit."
    ],
    welcomeSkills: [
      "Lorem ipsum dolor sit amet.",
      "Ut enim ad minim veniam.",
      "Duis aute irure dolor in reprehenderit.Duis aute irure dolor in reprehenderit."
    ],
    idealImages: [
      "Lorem ipsum dolor sit amet.",
      "Ut enim ad minim veniam.",
      "Duis aute irure dolor in reprehenderit."
    ]
  },
  {
    image: "https://www.pakutaso.com/shared/img/thumb/N112_nekutaiwonaosudansei_TP_V.jpg",
    name: "Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    requiredSkills: [
      "Lorem ipsum dolor sit amet.",
      "Ut enim ad minim veniam.",
      "Duis aute irure dolor in reprehenderit.Duis aute irure dolor in reprehenderit."
    ],
    welcomeSkills: [
      "Lorem ipsum dolor sit amet.",
      "Ut enim ad minim veniam.",
      "Duis aute irure dolor in reprehenderit.Duis aute irure dolor in reprehenderit."
    ],
    idealImages: [
      "Lorem ipsum dolor sit amet.",
      "Ut enim ad minim veniam.",
      "Duis aute irure dolor in reprehenderit."
    ]
  },
  {
    image: "https://www.pakutaso.com/shared/img/thumb/OOK82_gurafuwoyubisasu20131223_TP_V.jpg",
    name: "Marketer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    requiredSkills: [
      "Lorem ipsum dolor sit amet.",
      "Ut enim ad minim veniam.",
      "Duis aute irure dolor in reprehenderit.Duis aute irure dolor in reprehenderit."
    ],
    welcomeSkills: [
      "Lorem ipsum dolor sit amet.",
      "Ut enim ad minim veniam.",
      "Duis aute irure dolor in reprehenderit.Duis aute irure dolor in reprehenderit."
    ],
    idealImages: [
      "Lorem ipsum dolor sit amet.",
      "Ut enim ad minim veniam.",
      "Duis aute irure dolor in reprehenderit."
    ]
  }
]

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = jobs.map((job) => `/recruit/${job}`)

  return { 
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const jobDetail = jobDetails[jobs.indexOf(String(params.job))]

  return {
    props: { jobDetail },
    revalidate: 1
  }
}

const RecruitJob = ({ jobDetail }) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <PageTemplate title="Recruit | Corporate Site Sample">
        <>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container justify="center">
              <Grid item>
                <Typography variant="h1" gutterBottom>
                  {jobDetail.name}
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container justify="center">
              <Grid item className={classes.gridItem}>
                <img src={jobDetail.image} style={{ height: "auto", maxWidth: "100%" }} />
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container justify="center">
              <Grid item className={classes.gridItem}>
                <Typography variant="h2" gutterBottom>
                  Description
                </Typography>
                <Typography>
                  {jobDetail.description}
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="lg"className={classes.container}>
            <Grid container spacing={2}>
              <Qualifications
                requiredSkills={jobDetail.requiredSkills}
                welcomeSkills={jobDetail.welcomeSkills}
                idealImages={jobDetail.idealImages}
              />
            </Grid>
          </Container>
        </>
      </PageTemplate>
    </ThemeProvider>
  )
}

export default RecruitJob
