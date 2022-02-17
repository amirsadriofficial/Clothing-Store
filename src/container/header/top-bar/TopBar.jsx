import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import clsx from 'clsx'
import useStyles from './Styles'

const TopBar = () => {
  const classes = useStyles()
  const account = JSON.parse(localStorage.getItem('Account'))

  return (
    <Box className={classes.box}>
      <Hidden smDown>
        <Container className={classes.flex}>
          <Grid className={classes.TextDifferentColor}>
            Free shipping for standard order over $100
          </Grid>
          <Grid className={classes.flexGrid}>
            <Grid className={classes.border}>
              {account && account[0].logged ? (
                <Link to="/profile">
                  <Button className={classes.account}>
                    {account[0].firstName} {account[0].lastName}
                  </Button>
                </Link>
              ) : (
                <Link to="/signin">
                  <Button className={classes.TextColor}>My Account</Button>
                </Link>
              )}
            </Grid>
            <Grid className={classes.border}>
              {account && account[0].logged ? (
                <Button className={classes.account}>
                  ${account[0].deposit}.00
                </Button>
              ) : (
                <Button className={classes.TextColor} size="small">
                  USD
                </Button>
              )}
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
          className={clsx(classes.TextDifferentColor, classes.sectionSpacing)}
          style={{ textAlign: 'center' }}
        >
          Free shipping for standard order over $100
        </Grid>
        <Divider className={classes.dividerStyle} />
        <Grid className={clsx(classes.flexGrid, classes.sectionSpacing)}>
          <Grid className={classes.border}>
            {account && account[0].logged ? (
              <Link to="/profile">
                <Button className={classes.account}>
                  {account[0].firstName} {account[0].lastName}
                </Button>
              </Link>
            ) : (
              <Link to="/signin">
                <Button className={classes.TextColor} size="small">
                  My Account
                </Button>
              </Link>
            )}
          </Grid>
          <Grid className={classes.border}>
            {account && account[0].logged ? (
              <Button className={classes.account}>
                ${account[0].deposit}.00
              </Button>
            ) : (
              <Button className={classes.TextColor} size="small">
                USD
              </Button>
            )}
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
