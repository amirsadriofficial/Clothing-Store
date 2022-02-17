import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '../../card/Card'
import Products from '../../../utils/watches-products'

const Watches = () => {
  return (
    <Grid container spacing={3}>
      {Products.map((product) => (
        <Card data={product} />
      ))}
    </Grid>
  )
}

export default Watches
