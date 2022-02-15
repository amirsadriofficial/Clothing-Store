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
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import { makeStyles } from '@material-ui/core/styles'
// import Snackbar from '@material-ui/core/Snackbar'
// import MuiAlert from '@material-ui/lab/Alert'
import Product from '../../utils/all-products'
import {
  ADD_TO_CART_ACTION,
  REMOVE_FROM_CART_ACTION,
} from '../../redux/cart/Action'
import {
  ADD_TO_FAVORITES_ACTION,
  REMOVE_FROM_FAVORITES_ACTION,
} from '../../redux/favorites/Action'

const sizes = [
  {
    value: 'None',
    label: 'Please select your size',
  },
  {
    value: 'Size Small',
    label: 'Size S',
  },
  {
    value: 'Size Medium',
    label: 'Size M',
  },
  {
    value: 'Size Large',
    label: 'Size L',
  },
  {
    value: 'Size XLarge',
    label: 'Size XL',
  },
]

const colors = [
  {
    value: 'None',
    label: 'Please select your color',
  },
  {
    value: 'Red',
    label: 'Red',
  },
  {
    value: 'Blue',
    label: 'Blue',
  },
  {
    value: 'White',
    label: 'White',
  },
  {
    value: 'Gray',
    label: 'Gray',
  },
]

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '50px',
    marginBottom: '50px',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    paddingLeft: '10px',
    paddingBottom: '25px',
  },
  productName: {
    fontSize: '35px',
    marginTop: '0px',
    marginBottom: '10px',
  },
  labelStyle: {
    paddingLeft: '10px',
  },
  button: {
    backgroundColor: '#717fe0',
    borderRadius: '25px',
  },
  imgGrid: { marginRight: '15px' },
}))

const SingleProduct = () => {
  const classes = useStyles()
  const { id } = useParams()
  const dispatch = useDispatch()
  // const favorites = useSelector((state) => state.favoritesReducer)
  // const carts = useSelector((state) => state.cartReducer)
  const product = Product.find((item) => item.id === id)
  const [num, setNum] = useState(1)
  const [cartContent, setCartContent] = useState('Add To Cart')
  const [favoritesContent, setFavoritesContent] = useState(
    <FavoriteBorderIcon />
  )
  const [size, setSize] = useState('Choose An Option')
  const [color, setColor] = useState('Choose An Option')
  const handleChangeSize = (event) => {
    setSize(event.target.value)
  }
  const handleChangeColor = (event) => {
    setColor(event.target.value)
  }
  const handleCart = (content) => {
    if (content === 'Add To Cart') {
      dispatch(ADD_TO_CART_ACTION(product))
      setCartContent('Remove From Cart')
    }
    if (content === 'Remove From Cart') {
      dispatch(REMOVE_FROM_CART_ACTION(product))
      setCartContent('Add To Cart')
    }
  }
  const handleFavorites = (content) => {
    if (content === favoritesContent) {
      dispatch(ADD_TO_FAVORITES_ACTION(product))
      setFavoritesContent(<FavoriteIcon />)
    }
    if (content === <FavoriteIcon />) {
      dispatch(REMOVE_FROM_FAVORITES_ACTION(product))
      setFavoritesContent(<FavoriteBorderIcon />)
    }
  }
  const handleChangeNumber = (type) => {
    if (type === 'more' && num < 10) {
      setNum(num + 1)
    }
    if (type === 'low' && num > 0) {
      setNum(num - 1)
    }
  }

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Hidden xsDown>
          <Grid item xs={12} sm={2} md={1}>
            <Grid item xs={12} md={12}>
              <img
                src={product.image}
                alt="product_image"
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <img
                src={product.image}
                alt="product_image"
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <img
                src={product.image}
                alt="product_image"
                style={{ width: '100%' }}
              />
            </Grid>
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9} md={5}>
          <img
            src={product.image}
            alt="product_image"
            style={{ width: '100%' }}
          />
        </Grid>
        <Hidden smUp>
          <Grid item xs={12} className={classes.flexRow}>
            <Grid item xs={3} md={12} className={classes.imgGrid}>
              <img
                src={product.image}
                alt="product_image"
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={3} md={12} className={classes.imgGrid}>
              <img
                src={product.image}
                alt="product_image"
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={3} md={12} className={classes.imgGrid}>
              <img
                src={product.image}
                alt="product_image"
                style={{ width: '100%' }}
              />
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
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  fullWidth
                  onClick={() => handleCart(cartContent)}
                >
                  {cartContent}
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.flexRow}>
              <IconButton
                aria-label="delete"
                onClick={() => handleFavorites(favoritesContent)}
              >
                {favoritesContent}
              </IconButton>
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
