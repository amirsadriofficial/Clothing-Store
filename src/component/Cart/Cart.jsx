import React, { useState } from 'react'
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
import TextField from '@material-ui/core/TextField'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Toast from '../toast/Toast'
import { REMOVE_FROM_CART_ACTION } from '../../redux/cart/Action'
import { ADD_TO_FAVORITES_ACTION } from '../../redux/favorites/Action'
import useStyles from './Styles'

const Cart = () => {
  const classes = useStyles()
  const [num, setNum] = useState(1)
  const carts = JSON.parse(localStorage.getItem('Carts'))
  const dispatch = useDispatch()
  const handleRemoveFromCart = (product) => {
    dispatch(REMOVE_FROM_CART_ACTION(product))
    Toast.fire({
      animation: true,
      title: 'Product Removed From Cart List',
    })
  }
  const handleAddToFavorites = (product) => {
    dispatch(ADD_TO_FAVORITES_ACTION(product))
    Toast.fire({
      animation: true,
      title: 'Product Added To Favorites',
    })
  }
  const handleChangeNumber = (type) => {
    if (type === 'more' && num < 10) {
      setNum(num + 1)
    }
    if (type === 'low' && num > 1) {
      setNum(num - 1)
    }
  }
  let totalPrice = 0
  carts.map((product) => {
    totalPrice += product.price
    return totalPrice
  })

  return (
    <Container className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.pageTitle}>
          <h2 className={classes.pageTitleText}>Cart</h2>
        </Grid>
        {carts.length > 0 ? (
          <>
            <Grid item xs={12} md={7}>
              {carts.map((product) => (
                <Grid
                  item
                  xs={12}
                  style={{ marginBottom: '10px' }}
                  key={product.id}
                >
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
                    <Grid container spacing={3} className={classes.cardAction}>
                      <Grid item xs={8} sm={4} lg={4}>
                        <ButtonGroup
                          color="primary"
                          aria-label="outlined primary button group"
                        >
                          <IconButton
                            aria-label="delete"
                            onClick={() => handleChangeNumber('low')}
                          >
                            <RemoveIcon />
                          </IconButton>
                          <TextField
                            id="standard-number"
                            label="Number"
                            type="number"
                            value={num}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                          <IconButton
                            aria-label="delete"
                            onClick={() => handleChangeNumber('more')}
                          >
                            <AddIcon />
                          </IconButton>
                        </ButtonGroup>
                      </Grid>
                      <Grid item xs={4} sm={3} lg={2}>
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
                      <Grid item xs={12} sm={5} lg={4}>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          startIcon={<FavoriteBorderIcon />}
                          onClick={() => handleAddToFavorites(product)}
                        >
                          Add To Favorites
                        </Button>
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
                  Subtotal: <span>${totalPrice}</span>
                </p>
                <p>
                  Product Discounts: <span style={{ color: 'red' }}>$0</span>
                </p>
              </div>
              <p style={{ fontSize: '25px' }}>
                Total: <span>${totalPrice}</span>
              </p>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                className={classes.button}
              >
                Proceed To Checkout
              </Button>
            </Grid>
          </>
        ) : (
          <Grid item xs={12} className={classes.EmptySection}>
            <AddShoppingCartIcon
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
