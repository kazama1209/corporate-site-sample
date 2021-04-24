import React from "react"

import { makeStyles, Theme } from "@material-ui/core/styles"
import { Grid, Paper } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: "1rem",
    height: "100%",
    textAlign: "center",
    color: theme.palette.text.secondary
  },
}))

interface JobProps {
  name: string
}

const Job = ({ name }: JobProps) => {
  const classes = useStyles()

  return (
    <Grid item xs={6}>
      <Paper className={classes.paper}>{name}</Paper>
    </Grid>
  )
}

const Jobs = ({ jobs }) => {

  return (
    <>
      { jobs.map((job, index) => (
          <Job
            key={index}
            name={job.name}
          />
        ))
      }
    </>
  )
}

export default Jobs
