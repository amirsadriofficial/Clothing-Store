import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import Toast from '../toast/Toast'
import { REMOVE_FROM_FAVORITES_ACTION } from '../../redux/favorites/Action'
import {
  ADD_TO_CART_ACTION,
  REMOVE_FROM_CART_ACTION,
} from '../../redux/cart/Action'
import useStyles from './Styles'

const Favorites = () => {
  const classes = useStyles()
  const favorites = useSelector((state) => state.favoritesReducer)
  const [cartStatus, setCartStatus] = useState('Removed')
  const dispatch = useDispatch()
  const handleRemoveFromFavorites = (product) => {
    dispatch(REMOVE_FROM_FAVORITES_ACTION(product))
    Toast.fire({
      animation: true,
      title: 'Product Removed From Favorites List',
    })
  }
  const handleAddToCart = (product) => {
    if (cartStatus === 'Removed') {
      dispatch(ADD_TO_CART_ACTION(product))
      setCartStatus('Added')
      Toast.fire({
        animation: true,
        title: 'Product Added To Cart',
      })
    } else if (cartStatus === 'Added') {
      dispatch(REMOVE_FROM_CART_ACTION(product))
      setCartStatus('Removed')
      Toast.fire({
        animation: true,
        title: 'Product Removed From Cart',
      })
    }
  }

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.pageTitle}>
          <h2 className={classes.pageTitleText}>Favorites</h2>
        </Grid>
        {favorites.favorites.length > 0 ? (
          <>
            {favorites.favorites.map((product) => (
              <Grid item xs={12} md={6}>
                <Card className={classes.root}>
                  <CardActionArea className={classes.cardArea}>
                    <Grid item xs={5} sm={3}>
                      <CardMedia
                        className={classes.media}
                        image={product.image}
                        title={product.name}
                      />
                    </Grid>
                    <Grid item xs={12} style={{ marginLeft: '20px' }}>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="h2"
                          style={{ fontSize: '20px' }}
                        >
                          {product.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {product.description}
                        </Typography>
                        <Typography
                          variant="h6"
                          color="textSecondary"
                          className={classes.priceText}
                        >
                          ${product.price}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </CardActionArea>
                  <Grid container spacing={3} className={classes.cardAction}>
                    <Grid item xs={7} sm={5}>
                      {cartStatus === 'Removed' ? (
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          fullWidth
                          disabled
                          startIcon={<ShoppingCartIcon />}
                          onClick={() => handleAddToCart(product)}
                        >
                          Add To Cart
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          fullWidth
                          startIcon={<RemoveShoppingCartIcon />}
                          onClick={() => handleAddToCart(product)}
                        >
                          Remove From Cart
                        </Button>
                      )}
                    </Grid>
                    <Grid item xs={5} sm={3}>
                      <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        startIcon={<DeleteIcon />}
                        onClick={() => handleRemoveFromFavorites(product)}
                      >
                        Remove
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Button
                        color="primary"
                        fullWidth
                        endIcon={<ArrowForwardIosIcon />}
                      >
                        <Link to={`/product/${product.id}`}>See Product</Link>
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
          </>
        ) : (
          <Grid item xs={12} className={classes.EmptySection}>
            <FavoriteBorderIcon
              className="logo-animation"
              style={{ fontSize: '200px', color: 'green' }}
            />
            <p style={{ fontSize: '25px', marginTop: '50px' }}>
              Favorites is Empty
            </p>
            <Link to="/shop">
              <Button variant="outlined" color="primary" size="large" fullWidth>
                Go to Products
              </Button>
            </Link>
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default Favorites
