import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: '#222',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextColor: {
    color: '#b2b2b2',
  },
  border: {
    paddingRight: '15px',
    paddingLeft: '15px',
    borderLeft: '1px solid rgba(255,255,255,0.3)',
  },
  aloneBorder: {
    borderRight: '1px solid rgba(255,255,255,0.3)',
  },
  sectionSpacing: {
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  dividerStyle: {
    width: '100% !importent',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
}))

const TopBar = () => {
  const classes = useStyles()
  const account = useSelector((state) => state.accountReducer)
  console.log(account)

  return (
    <Box className={classes.box}>
      <Hidden smDown>
        <Container className={classes.flex}>
          <Grid className={classes.TextColor}>
            Free shipping for standard order over $100
          </Grid>
          <Grid className={classes.flexGrid}>
            <Grid className={classes.border}>
              {account && account.logged ? (
                <Link to="/profile">
                  <Button className={classes.TextColor}>
                    {account.firstName} {account.lastName}
                  </Button>
                </Link>
              ) : (
                <Link to="/signin">
                  <Button className={classes.TextColor}>My Account</Button>
                </Link>
              )}
            </Grid>
            <Grid className={classes.border}>
              <Button className={classes.TextColor}>USD</Button>
            </Grid>
            <Grid className={clsx(classes.border, classes.aloneBorder)}>
              <Link to="/help">
                <Button className={classes.TextColor} href="/help">
                  Help & FAQs
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Hidden>
      <Hidden mdUp>
        <Grid
          className={clsx(classes.TextColor, classes.sectionSpacing)}
          style={{ textAlign: 'center' }}
        >
          Free shipping for standard order over $100
        </Grid>
        <Divider className={classes.dividerStyle} />
        <Grid className={clsx(classes.flexGrid, classes.sectionSpacing)}>
          <Grid className={classes.border}>
            <Link to="/signin">
              <Button className={classes.TextColor} size="small">
                My Account
              </Button>
            </Link>
          </Grid>
          <Grid className={classes.border}>
            <Button className={classes.TextColor} size="small">
              USD
            </Button>
          </Grid>
          <Grid className={clsx(classes.border, classes.aloneBorder)}>
            <Link to="/help">
              <Button className={classes.TextColor} size="small">
                Help & FAQs
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Hidden>
    </Box>
  )
}

export default TopBar
