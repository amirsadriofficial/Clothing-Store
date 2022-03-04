import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import clsx from 'clsx'
import Swal from 'sweetalert2'
import CircularProgress from '@material-ui/core/CircularProgress'
import Information from './Information'
import { mainListItems, secondaryListItems } from './ListItems'
import Chart from './Chart'
import Deposits from './Deposits'
import Orders from './Orders'
import { SIGN_OUT_SUCCESS_ACTION } from '../../../redux/account/Action'
import useStyles from './Styles'

const Profile = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const account = JSON.parse(localStorage.getItem('Account'))
  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      dispatch(SIGN_OUT_SUCCESS_ACTION())
      history.push('/')
      Swal.fire(
        `Good Bye ${account[0].firstName}!`,
        'You have successfully signed out!',
        'success'
      )
      setLoading(false)
    }, 2000)
  }
  const [open, setOpen] = useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            My Account
          </Typography>
          <Grid item xs={12} sm={4} lg={2}>
            <Link to="/" className={classes.linkButton}>
              <Button
                className={classes.button}
                fullWidth
                startIcon={<HomeOutlinedIcon />}
              >
                Back Home
              </Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            {loading === false ? (
              <Button color="secondary" onClick={handleSubmit} fullWidth>
                Sign Out
              </Button>
            ) : (
              <Button
                color="secondary"
                disabled
                onClick={handleSubmit}
                fullWidth
              >
                <CircularProgress
                  size={30}
                  className={classes.circularProgress}
                />
                Loading...
              </Button>
            )}
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Information */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Information />
              </Paper>
            </Grid>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}

export default Profile
