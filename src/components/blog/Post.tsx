import { makeStyles } from "@material-ui/core/styles"
import { Container, Grid, Typography } from "@material-ui/core"

import ShareButton from "../utils/SharaButton"
import moment from "moment"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem",
    maxWidth: "800px",
    overflow: "hidden"
  }
}))

interface PostProps {
  id: string
  title: string
  publishedAt: string
  thumbnail: string
  body: HTMLElement
}

const Post = ({ id, title, publishedAt, thumbnail, body }: PostProps) => {
  const classes = useStyles()
  
  return (
    <>
      <Container className={classes.container}>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Typography variant="h1">{title}</Typography>
          </Grid>
          <Grid item>
            <Typography color="textSecondary">
              {moment(publishedAt).format("MMMM Do YYYY")}
            </Typography>
          </Grid>
          <Grid item>
            <img src={thumbnail} style={{ height: "auto", width: "100%" }} />
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.container}>
        <Grid container direction="column" alignItems="center">
          <Grid item >
            <ShareButton
              url={`https://<デプロイ後のドメイン>/blog/${id}`}
            />
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.container}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <div
              dangerouslySetInnerHTML={{
                __html: `${body}`
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Post
