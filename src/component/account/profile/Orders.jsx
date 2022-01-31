import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Title from './Title'

const createData = (id, date, product, shipTo, paymentMethod, amount) => {
  return { id, date, product, shipTo, paymentMethod, amount }
}

const rows = [
  createData(
    0,
    '11 Mar, 2019',
    'Celine Micro Belt Bag',
    'Ahar, East Azerbaijan, Iran',
    'VISA ⠀•••• 3719',
    70
  ),
  createData(
    1,
    '07 Aug, 2019',
    'Herschel Supply',
    'Ahar, East Azerbaijan, Iran',
    'VISA ⠀•••• 2574',
    130
  ),
  createData(
    2,
    '23 Jun, 2020',
    'Adidas Black Shoes',
    'Ahar, East Azerbaijan, Iran',
    'MC ⠀•••• 1253',
    95
  ),
  createData(
    3,
    '16 Sep, 2021',
    'Modern Black Watch',
    'Ahar, East Azerbaijan, Iran',
    'AMEX ⠀•••• 2000',
    220
  ),
  createData(
    4,
    '09 Dec, 2021',
    'Women Office Wear',
    'Ahar, East Azerbaijan, Iran',
    'VISA ⠀•••• 5919',
    200
  ),
]

const preventDefault = (event) => {
  event.preventDefault()
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}))

const Orders = () => {
  const classes = useStyles()
  return (
    <>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">${row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="/#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </>
  )
}

export default Orders
