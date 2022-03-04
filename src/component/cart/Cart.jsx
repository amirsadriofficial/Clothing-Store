import React, { useState, useEffect } from 'react'
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
import TextField from '@material-ui/core/TextField'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Toast from '../toast/Toast'
import { REMOVE_FROM_CART_ACTION } from '../../redux/cart/Action'
import {
  ADD_TO_FAVORITES_ACTION,
  REMOVE_FROM_FAVORITES_ACTION,
} from '../../redux/favorites/Action'
import AllProducts from '../../utils/all-products'
import useStyles from './Styles'

const Cart = () => {
  const classes = useStyles()
  const carts = useSelector((state) => state.cartReducer)
  const [favoritesStatus, setFavoritesStatus] = useState('Removed')
  const dispatch = useDispatch()
  const handleRemoveFromCart = (product) => {
    dispatch(REMOVE_FROM_CART_ACTION(product))
    Toast.fire({
      animation: true,
      title: 'Product Removed From Cart List',
    })
  }
  const handleAddToFavorites = (product) => {
    if (favoritesStatus === 'Removed') {
      dispatch(ADD_TO_FAVORITES_ACTION(product))
      setFavoritesStatus('Added')
      Toast.fire({
        animation: true,
        title: 'Product Added To Favorites',
      })
    } else if (favoritesStatus === 'Added') {
      dispatch(REMOVE_FROM_FAVORITES_ACTION(product))
      setFavoritesStatus('Removed')
      Toast.fire({
        animation: true,
        title: 'Product Removed From Favorites',
      })
    }
  }
  const [state, setState] = useState({ currentProducts: [] })
  useEffect(() => {
    const SelectedProductsID = carts.carts
    if (Array.isArray(SelectedProductsID) && SelectedProductsID.length > 0) {
      const SelectedProducts = []
      SelectedProductsID.filter((product) =>
        AllProducts.filter((obj) =>
          obj.id === product.id
            ? SelectedProducts.push({ ...obj, ...{ quantity: 1 } })
            : null
        )
      )
      setState({ ...state, currentProducts: SelectedProducts })
    } else {
      setState({ ...state, currentProducts: SelectedProductsID })
    }
  }, [carts])
  const onHandleQuantity = (product, action) => {
    const s = state.currentProducts
    const i = product
    if (action === 'increase' && i.quantity < 10) {
      i.quantity += 1
    }
    if (action === 'decrease' && i.quantity > 1) {
      i.quantity -= 1
    }
    s.filter((obj) =>
      obj.id === i.id ? Object.assign(obj, { quantity: i.quantity }) : null
    )
    setState({ ...state, currentProducts: s })
  }
  const { currentProducts } = state
  let total = 0
  // eslint-disable-next-line no-return-assign
  currentProducts.filter((obj) => (total += obj.quantity * obj.price))

  return (
    <Container className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.pageTitle}>
          <h2 className={classes.pageTitleText}>Cart</h2>
        </Grid>
        {currentProducts.length > 0 ? (
          <>
            <Grid item xs={12} md={7}>
              {currentProducts.map((product) => (
                <Grid
                  item
                  xs={12}
                  style={{ marginBottom: '10px' }}
                  key={product.id}
                >
                  <Card className={classes.root}>
                    <Link to={`/product/${product.id}`}>
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
                              style={{ fontSize: '24px' }}
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
                    </Link>
                    <Grid container spacing={3} className={classes.cardAction}>
                      <Grid item xs={7} sm={4} lg={4}>
                        <ButtonGroup
                          color="primary"
                          aria-label="outlined primary button group"
                        >
                          <IconButton
                            aria-label="delete"
                            onClick={() =>
                              onHandleQuantity(product, 'decrease')
                            }
                          >
                            <RemoveIcon />
                          </IconButton>
                          <TextField
                            id="standard-number"
                            label="Number"
                            type="number"
                            value={product.quantity}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                          <IconButton
                            aria-label="delete"
                            onClick={() =>
                              onHandleQuantity(product, 'increase')
                            }
                          >
                            <AddIcon />
                          </IconButton>
                        </ButtonGroup>
                      </Grid>
                      <Grid item xs={5} sm={3} lg={3}>
                        <Button
                          variant="contained"
                          color="secondary"
                          fullWidth
                          startIcon={<DeleteIcon />}
                          onClick={() => handleRemoveFromCart(product)}
                        >
                          Remove
                        </Button>
                      </Grid>
                      <Grid item xs={12} sm={5} lg={5}>
                        {favoritesStatus === 'Removed' ? (
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            startIcon={<FavoriteBorderIcon />}
                            disabled
                            onClick={() => handleAddToFavorites(product)}
                          >
                            Add To Favorites
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            startIcon={<FavoriteIcon />}
                            onClick={() => handleAddToFavorites(product)}
                          >
                            Remove From Favorites
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12} sm={6} md={5} className={classes.cartTotalBox}>
              <h5 style={{ fontSize: '35px', margin: '10px' }}>Cart Totals</h5>
              <div className={classes.cartTotalInfo}>
                <p>
                  Subtotal: <span>${total}</span>
                </p>
                <p>
                  Product Discounts: <span style={{ color: 'red' }}>$0</span>
                </p>
              </div>
              <p style={{ fontSize: '25px' }}>
                Total: <span>${total}</span>
              </p>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                className={classes.checkoutButton}
              >
                Proceed To Checkout
              </Button>
            </Grid>
          </>
        ) : (
          <Grid item xs={12} className={classes.EmptySection}>
            <AddShoppingCartIcon
              className="logo-animation"
              style={{ fontSize: '200px', color: 'green' }}
            />
            <p style={{ fontSize: '25px', marginTop: '50px' }}>Cart is Empty</p>
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

export default Cart
