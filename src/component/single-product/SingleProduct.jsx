import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import Toast from '../toast/Toast'
import Product from '../../utils/all-products'
import { sizes, colors } from './Options'
import useStyles from './Styles'
import {
  ADD_TO_CART_ACTION,
  REMOVE_FROM_CART_ACTION,
} from '../../redux/cart/Action'
import {
  ADD_TO_FAVORITES_ACTION,
  REMOVE_FROM_FAVORITES_ACTION,
} from '../../redux/favorites/Action'

const Img = ({ product }) => {
  return (
    <img src={product.image} alt="product_image" style={{ width: '100%' }} />
  )
}

const SingleProduct = () => {
  const classes = useStyles()
  const { id } = useParams()
  const dispatch = useDispatch()
  const product = Product.find((item) => item.id === id)
  const [num, setNum] = useState(1)
  const [cartStatus, setCartStatus] = useState('Removed')
  const [favoritesStatus, setFavoritesStatus] = useState('Removed')
  const [size, setSize] = useState('Choose An Option')
  const [color, setColor] = useState('Choose An Option')
  const handleChangeSize = (event) => {
    setSize(event.target.value)
  }
  const handleChangeColor = (event) => {
    setColor(event.target.value)
  }
  const handleCart = () => {
    if (cartStatus === 'Removed') {
      dispatch(ADD_TO_CART_ACTION(product))
      setCartStatus('Added')
      Toast.fire({
        animation: true,
        title: 'Product Added To Cart',
      })
    }
    if (cartStatus === 'Added') {
      dispatch(REMOVE_FROM_CART_ACTION(product))
      setCartStatus('Removed')
      Toast.fire({
        animation: true,
        title: 'Product Removed From Cart',
      })
    }
  }
  const handleFavorites = () => {
    if (favoritesStatus === 'Removed') {
      dispatch(ADD_TO_FAVORITES_ACTION(product))
      setFavoritesStatus('Added')
      Toast.fire({
        animation: true,
        title: 'Product Added To Favorites',
      })
    }
    if (favoritesStatus === 'Added') {
      dispatch(REMOVE_FROM_FAVORITES_ACTION(product))
      setFavoritesStatus('Removed')
      Toast.fire({
        animation: true,
        title: 'Product Removed From Favorites',
      })
    }
  }
  const handleChangeNumber = (type) => {
    if (type === 'more' && num < 10) {
      setNum(num + 1)
    }
    if (type === 'low' && num > 1) {
      setNum(num - 1)
    }
  }

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Hidden xsDown>
          <Grid item xs={12} sm={2} md={1}>
            <Grid item xs={12} md={12}>
              <Img product={product} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Img product={product} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Img product={product} />
            </Grid>
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9} md={5}>
          <Img product={product} />
        </Grid>
        <Hidden smUp>
          <Grid item xs={12} className={classes.flexRow}>
            <Grid item xs={3} md={12} className={classes.imgGrid}>
              <Img product={product} />
            </Grid>
            <Grid item xs={3} md={12} className={classes.imgGrid}>
              <Img product={product} />
            </Grid>
            <Grid item xs={3} md={12} className={classes.imgGrid}>
              <Img product={product} />
            </Grid>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={5}>
          <div className={classes.productInfo}>
            <h4 className={classes.productName}>{product.name}</h4>
            <p>{product.description}</p>
            <p style={{ fontSize: '25px' }}>${product.price}</p>
          </div>
          <Grid container spacing={4}>
            <Grid item xs={12} className={classes.flexRow}>
              <Grid item xs={2}>
                <p className={classes.labelStyle}>Size:</p>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  value={size}
                  onChange={handleChangeSize}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  fullWidth
                >
                  {sizes.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.flexRow}>
              <Grid item xs={2}>
                <p className={classes.labelStyle}>Color: </p>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="outlined-select-color-native"
                  select
                  value={color}
                  onChange={handleChangeColor}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  fullWidth
                >
                  {colors.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.flexRow}>
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
            <Grid item xs={12} className={classes.flexRow}>
              <Grid item xs={8}>
                {cartStatus === 'Removed' ? (
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    fullWidth
                    startIcon={<ShoppingCartIcon />}
                    onClick={handleCart}
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
                    onClick={handleCart}
                  >
                    Remove From Cart
                  </Button>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.flexRow}>
              {favoritesStatus === 'Removed' ? (
                <IconButton aria-label="delete" onClick={handleFavorites}>
                  <FavoriteBorderIcon />
                </IconButton>
              ) : (
                <IconButton aria-label="delete" onClick={handleFavorites}>
                  <FavoriteIcon />
                </IconButton>
              )}
              <IconButton aria-label="delete">
                <ShareIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SingleProduct
