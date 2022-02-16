import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Popover from '@material-ui/core/Popover'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'
import Logo from '../../../assets/images/icons/logo.png'
import Products from '../../../utils/watches-products'

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
    width: '100%',
    // transition: theme.transitions.create('width'),
    // [theme.breakpoints.up('sm')]: {
    //   width: '12ch',
    //   '&:focus': {
    //     width: '20ch',
    //   },
    // },
  },
  menuStyle: {
    marginLeft: '10px',
  },
  productImage: {
    width: '50px',
    padding: '10px',
  },
  productName: {
    fontSize: '15px',
    padding: '10px',
  },
  searchBoxTitle: {
    fontSize: '15px',
    paddingTop: '15px',
    paddingLeft: '15px',
  },
  iconButtonStyle: {
    padding: '0',
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
  const location = useLocation()
  // const carts = useSelector((state) => state.cartReducer)
  // const favorites = useSelector((state) => state.favoritesReducer)
  const carts = JSON.parse(localStorage.getItem('Carts'))
  const favorites = JSON.parse(localStorage.getItem('Favorites'))
  const [searchTerm, setSearchTerm] = useState('')
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
                  <MenuItem
                    key={page.name}
                    className={
                      location.pathname === page.path && 'active-app-bar-button'
                    }
                  >
                    {page.name}
                  </MenuItem>
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
                  className={
                    location.pathname === page.path && 'active-app-bar-button'
                  }
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
                    onChange={(event) => setSearchTerm(event.target.value)}
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
                  >
                    <Typography
                      variant="h6"
                      component="h2"
                      color="primary"
                      className={classes.searchBoxTitle}
                    >
                      Recent Searches:
                    </Typography>
                    {Products.filter((product) => {
                      if (
                        searchTerm === '' &&
                        product.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return product
                      }
                      return product
                    }).map((product) => (
                      <>
                        <Grid container direction="row" alignItems="center">
                          <img
                            src={product.image}
                            alt="PRODUCT_IMAGE"
                            className={classes.productImage}
                          />
                          <Typography className={classes.productName}>
                            {product.name}
                          </Typography>
                        </Grid>
                        <Divider />
                      </>
                    ))}
                  </Popover>
                </div>
              )}
            </PopupState>
          </Box>
          <Hidden xsDown>
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
          </Hidden>
          <Hidden smUp>
            <Link to="/cart">
              <IconButton
                aria-label="delete"
                className={classes.iconButtonStyle}
              >
                <Badge
                  badgeContent={carts === null ? 0 : carts.length}
                  color="primary"
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </Hidden>
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
