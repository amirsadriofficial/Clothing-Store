import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
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
// import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Popover from '@material-ui/core/Popover'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'
import Logo from '../../images/icons/logo.png'
import Products from '../../utils/watches-products'

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
  // const carts = useSelector((state) => state.cartReducer)
  // const favorites = useSelector((state) => state.favoritesReducer)
  const carts = JSON.parse(localStorage.getItem('Carts'))
  const favorites = JSON.parse(localStorage.getItem('Favorites'))
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
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                style={{ width: '150px', height: '50px' }}
              />
            </Link>
          </Hidden>
          <Hidden mdUp>
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                style={{ width: '75px', height: '25px' }}
              />
            </Link>
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
                <Link to={page.path}>
                  <MenuItem key={page.name}>{page.name}</MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            className={classes.menuStyle}
          >
            {pages.map((page) => (
              <Link to={page.path}>
                <Button
                  key={page.name}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
          <Box className={classes.search}>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
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
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...bindTrigger(popupState)}
                  />
                  <Popover
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    style={{ width: '100%' }}
                  >
                    <Grid
                      container
                      spacing={3}
                      direction="column"
                      // justifyContent="center"
                      // alignItems="center"
                    >
                      {Products.map((product) => (
                        <Grid
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <img
                            src={product.image}
                            alt="I"
                            style={{ width: '50px' }}
                          />
                          <p style={{ fontSize: '10px' }}>{product.name}</p>
                        </Grid>
                      ))}
                    </Grid>
                  </Popover>
                </div>
              )}
            </PopupState>
          </Box>
          <Link to="/cart">
            <IconButton aria-label="delete">
              <Badge
                badgeContent={carts === null ? 0 : carts.length}
                color="primary"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
          <Link to="/favorites">
            <IconButton aria-label="delete">
              <Badge
                badgeContent={favorites === null ? 0 : favorites.length}
                color="primary"
              >
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
