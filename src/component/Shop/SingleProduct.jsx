import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
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
import ShareIcon from '@material-ui/icons/Share'
import { makeStyles } from '@material-ui/core/styles'
import Product from '../../utils/all-products'

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
  const product = Product.find((item) => item.id === id)
  const [size, setSize] = useState('Choose An Option')
  const [color, setColor] = useState('Choose An Option')
  const handleChangeSize = (event) => {
    setSize(event.target.value)
  }
  const handleChangeColor = (event) => {
    setColor(event.target.value)
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
                <IconButton aria-label="delete">
                  <RemoveIcon />
                </IconButton>
                <TextField
                  id="standard-number"
                  label="Number"
                  type="number"
                  value={1}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <IconButton aria-label="delete">
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
                >
                  Add To Cart
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.flexRow}>
              <IconButton aria-label="delete">
                <FavoriteBorderIcon />
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
