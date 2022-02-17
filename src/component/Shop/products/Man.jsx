import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '../../card/Card'
import Products from '../../../utils/men-products'

const Man = () => {
  return (
    <Grid container spacing={3}>
      {Products.map((product) => (
        <Card data={product} />
      ))}
    </Grid>
  )
}

export default Man
