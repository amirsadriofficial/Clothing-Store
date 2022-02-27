import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import pages from './Pages'
import LogoSection from './LogoSection'
import SearchProducts from './SearchProducts'
import SearchInput from './SearchInput'
import IconItems from './IconItems'
import useStyles from './Styles'

const NavBar = () => {
  const classes = useStyles()
  const location = useLocation()
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
    <>
      <AppBar position="static" color="inherit">
        <Container>
          <Toolbar disableGutters>
            <LogoSection />
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
                        'active-app-bar-menu-item'
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
                <Link
                  to={page.path}
                  className={
                    location.pathname === page.path && 'active-app-bar-link'
                  }
                >
                  <Button
                    key={page.name}
                    className={
                      location.pathname === page.path
                        ? 'active-app-bar-button'
                        : 'active-app-bar-button-hover'
                    }
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>
            <SearchInput
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setIsOpen={setIsOpen}
            />
            <IconItems />
          </Toolbar>
        </Container>
      </AppBar>
      <SearchProducts open={isOpen} data={searchTerm} />
    </>
  )
}

export default NavBar
