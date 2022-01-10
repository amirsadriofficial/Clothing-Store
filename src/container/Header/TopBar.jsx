import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  box: {
    height: '40px',
    backgroundColor: '#222',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  color: {
    color: '#666',
  },
  // button: {
  //   border
  // },
}))

const TopBar = () => {
  const classes = useStyles()

  return (
    <Box className={classes.box}>
      <Container className={classes.flex}>
        <Grid className={classes.color}>
          Free shipping for standard order over $100
        </Grid>
        <Grid>
          <Button className={classes.color} href="#">
            Help & FAQs
          </Button>
          <Button className={classes.color} href="#">
            My Account
          </Button>
          <Button className={classes.color} href="#">
            EN
          </Button>
          <Button className={classes.color} href="#">
            USD
          </Button>
        </Grid>
      </Container>
    </Box>
  )
}

export default TopBar
