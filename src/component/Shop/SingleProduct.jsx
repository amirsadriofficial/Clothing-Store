import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
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
  labelStyle: {
    paddingLeft: '20px',
  },
  button: {
    backgroundColor: '#717fe0',
    borderRadius: '25px',
  },
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
        <Grid item xs={1}>
          <Grid item xs={12}>
            <img src={product.image} alt="" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12}>
            <img src={product.image} alt="" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12}>
            <img src={product.image} alt="" style={{ width: '100%' }} />
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <img src={product.image} alt="" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={5}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Grid container spacing={5}>
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
                  // helperText="Please select your size"
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
                  // helperText="Please select your color"
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
