import React, { useState } from "react"

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"

import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Slide from "@material-ui/core/Slide"
import { TransitionProps } from "@material-ui/core/transitions"

import { createContact } from "../../lib/api"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface CompletionDialogProps {
  open: boolean
  handleClose: VoidFunction
}

const CompletionDialog = ({ open, handleClose}: CompletionDialogProps) => {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>
          Thank you for contacting us !
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please wait a couple of days for our reply.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      padding: "1rem 4rem"
    },
    header: {
      marginTop: "1.5rem"
    },
    submitBtn: {
      margin: theme.spacing(2),
      textTransform: "none"
    }
  })
)

const Form = () => {
  const classes = useStyles()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [body, setBody] = useState("")
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const data: {} = {
      name: name,
      email: email,
      body: body
    }

    createContact(data)
    .then(() => {
      handleOpen()
      setName("")
      setEmail("")
      setBody("")
    })
    .catch((err) => console.log(err))
  }

  return (
    <>
      <Container fixed>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Card className={classes.card}>
            <CardContent>
              <TextField
                required
                label="Name"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              />
              <TextField
                required
                fullWidth
                label="Email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
              <TextField
                required
                fullWidth
                label="Body"
                multiline
                rows={10}
                value={body}
                variant="outlined"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBody(e.target.value)}
                style={{ marginTop: "2rem"}}
              />
            </CardContent>
            <Box p={1} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="default"
                disabled={!name || !email || !body ? true : false}
                className={classes.submitBtn}
                onClick={handleSubmit}
              >
                Send
              </Button>
            </Box>
          </Card>
        </form>
        <CompletionDialog
          open={open}
          handleClose={handleClose}
        />
      </Container>
    </>
  )
}

export default Form
