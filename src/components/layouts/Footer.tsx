import { useRouter } from "next/router"

import { makeStyles, Theme } from "@material-ui/core/styles"
import { Container, Grid, Typography } from "@material-ui/core"

import { routes } from "../../data/routes"
import Link from "../utils/Link"
import SocialMedia from "../utils/SocialMedia"

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    position: "relative",
    overflow: "hidden",
    marginTop: "6em",
    padding: "2em 0 "
  },
  link: {
    fontSize: "1.25em",
    color: "#fff"
  },
  contact: {
    color: "#fff",
    fontSize: "1.5em",
    marginTop: "20px"
  },
  copylight: {
    marginTop: "15px",
    color: "#fff",
    fontSize: "1em"
  }
}))

const Footer = () => {
  const classes = useStyles()
  const path = routes
  const router = useRouter()

  return (
    <div className={classes.footer}>
      <Container maxWidth="lg">
      <Grid container spacing={3} justify="center">
          {path.map(({ name, link }) => (
            <Grid item key={link}>
              <Link href={link}>
                <Typography
                  className={classes.link}
                  style={{
                    fontWeight: router.pathname.match(link) ? "bold" : "normal",
                    borderBottom: router.pathname.match(link) && "1px solid #757ce8"
                  }}
                >
                  {name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid container direction="column" style={{ margin: "1.5em 0" }}>
          <SocialMedia />
        </Grid>
        <Grid
          item
          container
          justify="center"
        >
          <Typography className={classes.copylight}>
            &copy;{new Date().getFullYear()} Sample
          </Typography>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
