import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
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
import Toast from '../toast/Toast'
import { REMOVE_FROM_FAVORITES_ACTION } from '../../redux/favorites/Action'
import { ADD_TO_CART_ACTION } from '../../redux/cart/Action'
import useStyles from './Styles'

const Favorites = () => {
  const classes = useStyles()
  const favorites = JSON.parse(localStorage.getItem('Favorites'))
  const dispatch = useDispatch()
  const handleRemoveFromFavorites = (product) => {
    dispatch(REMOVE_FROM_FAVORITES_ACTION(product))
    Toast.fire({
      animation: true,
      title: 'Product Removed From Favorites List',
    })
  }
  const handleAddToCart = (product) => {
    dispatch(ADD_TO_CART_ACTION(product))
    Toast.fire({
      animation: true,
      title: 'Product Added To Cart',
    })
  }

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.pageTitle}>
          <h2 className={classes.pageTitleText}>Favorites</h2>
        </Grid>
        {favorites.length > 0 ? (
          <>
            {favorites.map((product) => (
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
                    <Grid item xs={12}>
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
                    <Grid item xs={8} sm={4}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<ShoppingCartIcon />}
                        onClick={() => handleAddToCart(product)}
                      >
                        Add To Cart
                      </Button>
                    </Grid>
                    <Grid item xs={4} sm={4}>
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
            <FavoriteBorderIcon style={{ fontSize: '200px', color: 'green' }} />
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
