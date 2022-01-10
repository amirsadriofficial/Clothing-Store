import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
// import Typography from '@material-ui/core/Typography'
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
}))

const TopBar = () => {
  const classes = useStyles()

  return (
    <Box className={classes.box}>
      <Container className={classes.flex}>
        <Grid className={classes.color}>
          Free shipping for standard order over $100
        </Grid>
        <Grid className={classes.color}>aaaaaaaa</Grid>
      </Container>
    </Box>
  )
}

export default TopBar
