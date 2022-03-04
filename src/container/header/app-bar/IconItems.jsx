import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Hidden from '@material-ui/core/Hidden'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import useStyles from './Styles'

const IconItems = () => {
  const classes = useStyles()
  const carts = useSelector((state) => state.cartReducer)
  const favorites = useSelector((state) => state.favoritesReducer)

  return (
    <>
      <Hidden xsDown>
        <Link to="/cart">
          <IconButton aria-label="delete">
            <Badge
              badgeContent={carts === null ? 0 : carts.carts.length}
              color="primary"
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
      </Hidden>
      <Hidden smUp>
        <Link to="/cart">
          <IconButton aria-label="delete" className={classes.iconButtonStyle}>
            <Badge
              badgeContent={carts === null ? 0 : carts.carts.length}
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
            badgeContent={favorites === null ? 0 : favorites.favorites.length}
            color="primary"
          >
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
      </Link>
    </>
  )
}

export default IconItems
