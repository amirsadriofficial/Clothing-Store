import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Product from '../../utils/all-products'

const SingleProduct = () => {
  const { id } = useParams()
  const product = Product.find((item) => item.id === id)
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <p>{product.name}</p>
        </Grid>
        <Grid item xs={5}>
          <img src={product.image} alt="" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={5}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              size box
            </Grid>
            <Grid item xs={12}>
              color box
            </Grid>
            <Grid item xs={12}>
              Qty box
            </Grid>
            <Grid item xs={12}>
              add to cart box
            </Grid>
            <Grid item xs={12}>
              button box
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SingleProduct
