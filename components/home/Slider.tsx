import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Paper, Typography } from "@material-ui/core"
import Carousel from "react-material-ui-carousel"

const useStyles = makeStyles(() => ({
  slider: {
    width: "100%"
  },
  media: {
    position: "relative",
    height: "300px",
    overflow: "hidden",
    padding: "20px",
    color: "white"
  },
  checkButton: {
    marginTop: "40px",
    color: "#fff",
    fontSize: "25px",
    border: "3px solid white",
    textTransform: "capitalize"
  }
}))

interface ItemProps {
  name: string
  description: string
  color: string
}

const Item = ({ name, description, color }: ItemProps) => {
  const classes = useStyles()

  return (
    <Paper
      className={classes.media}
      style={{
        backgroundColor: color
      }}
      elevation={10}
      square
    >
      <h2>{name}</h2>
      <p>{description}</p>

      <Button className={classes.checkButton}>
        Check it out!
      </Button>
    </Paper>
  )
}

const Slider = ({ items }) => {
  const classes = useStyles()

  return (
    <Carousel
      className={classes.slider}
      autoPlay={items.length > 1 ? true : false}
      animation="fade"
      navButtonsAlwaysInvisible={items.length == 1 ? true : false}
      indicators={false}
      timeout={300}
    >
      {
        items.map((item, index) =>  (
          <Item
            key={index}
            name={item.name}
            description={item.description}
            color={item.color}
          />
        ))
      }
    </Carousel>
  )
}

export default Slider
