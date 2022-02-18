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
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import Logo from '../../../assets/images/icons/logo.png'
import useStyles from './Styles'
import pages from './Pages'
import SearchProducts from './SearchProducts'

const NavBar = () => {
  const classes = useStyles()
  const location = useLocation()
  // const carts = useSelector((state) => state.cartReducer)
  // const favorites = useSelector((state) => state.favoritesReducer)
  const carts = JSON.parse(localStorage.getItem('Carts'))
  const favorites = JSON.parse(localStorage.getItem('Favorites'))
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [anchorElNav, setAnchorElNav] = useState(null)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <div className={classes.appbarWrapper}>
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
                        location.pathname === page.path &&
                        'active-app-bar-button'
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
              <div className={classes.searchIcon}>
                {searchTerm === '' ? (
                  <SearchIcon />
                ) : (
                  <CloseIcon onClick={() => searchTerm} />
                )}
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(event) => setSearchTerm(event.target.value)}
                onClick={() => setIsOpen(true)}
              />
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
      <SearchProducts
        open={isOpen}
        data={searchTerm}
        onClose={() => setIsOpen(false)}
      />
    </div>
  )
}

export default NavBar
