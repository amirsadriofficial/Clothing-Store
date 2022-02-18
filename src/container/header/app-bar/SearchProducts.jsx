import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// import Grid from '@material-ui/core/Grid'
// import Divider from '@material-ui/core/Divider'
// import Products from '../../../utils/watches-products'
import useStyles from './Styles'

const SearchProducts = ({ open, onClose }) => {
  const classes = useStyles()
  // const { searchTerm } = data
  if (!open) return null

  return (
    <div>
      <Button onClick={onClose}>Close</Button>
      <Typography
        variant="h6"
        component="h2"
        color="primary"
        className={classes.searchBoxTitle}
      >
        Recent Searches:
      </Typography>
      {/* {Products.filter((product) => {
        if (
          searchTerm === '' &&
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return product
        }
        return product
      }).map((product) => (
        <>
          <Grid container direction="row" alignItems="center">
            <img
              src={product.image}
              alt="PRODUCT_IMAGE"
              className={classes.productImage}
            />
            <Typography className={classes.productName}>
              {product.name}
            </Typography>
          </Grid>
          <Divider />
        </>
      ))} */}
    </div>
  )
}

export default SearchProducts
