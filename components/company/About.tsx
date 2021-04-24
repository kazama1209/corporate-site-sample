import { makeStyles, Theme } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    minWidth: 650
  }
}))

const createData = (key: string, value: string) => {
  return { key, value }
}

interface AboutProps {
  name: string
  founded: string
  capital: string
  ceo: string
  address: string
  service: string
  mail: string
}

const About = ({ name, founded, capital, ceo, address, service, mail }: AboutProps) => {
  const classes = useStyles()

  const rows = [
    createData("Name", name),
    createData("Founded", founded),
    createData("Capital", capital),
    createData("CEO", ceo),
    createData("Address", address),
    createData("Service", service),
    createData("Mail", mail),
  ]

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.key}>
              <TableCell component="th" scope="row" style={{ fontWeight: "bold"}}>
                {row.key}
              </TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default About
