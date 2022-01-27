import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import Hidden from '@material-ui/core/Hidden'
import { alpha, makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Logo from '../../images/icons/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  menuStyle: {
    marginLeft: '10px',
  },
}))

const pages = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Shop',
    path: '/shop',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

const NavBar = () => {
  const classes = useStyles()
  const [anchorElNav, setAnchorElNav] = useState(null)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static" color="inherit">
      <Container>
        <Toolbar disableGutters>
          <Hidden smDown>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: '150px', height: '50px' }}
            />
          </Hidden>
          <Hidden mdUp>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: '75px', height: '25px' }}
            />
          </Hidden>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              className={classes.menuStyle}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              // elevation={0}
              marginThreshold={0}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              PaperProps={{
                style: {
                  width: '100%',
                  maxWidth: '100%',
                  left: 0,
                  right: 0,
                },
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name}>
                  <Link to={page.path}>{page.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            className={classes.menuStyle}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={page.path}>{page.name}</Link>
              </Button>
            ))}
          </Box>
          <Box className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
          <IconButton aria-label="delete">
            <Badge badgeContent={1} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="delete">
            <Badge badgeContent={1} color="primary">
              <FavoriteBorderIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
