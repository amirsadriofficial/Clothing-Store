import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
// import Card from '../../card/Card'
import Products from '../../../utils/all-products'

const AllProducts = (filter) => {
  // const [placeholder, setPlaceholder] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(Products)
  console.log('Filter:', filter)
  const UpTo100 = Products.filter((product) => product.price < 100)
  const Above100 = Products.filter((product) => product.price > 100)
  if (filter === 'ALL') {
    setFilteredProducts(Products)
    console.log('ALL:', filteredProducts)
  }
  if (filter === 'UPTO100') {
    setFilteredProducts(UpTo100)
    console.log('Up To 100:', filteredProducts)
  }
  if (filter === 'ABOVE100') {
    setFilteredProducts(Above100)
    console.log('Above 100:', filteredProducts)
  }

  return (
    <Grid container spacing={3}>
      {/* {filteredProducts.map((product) => (
        <Card data={product} />
      ))} */}
    </Grid>
  )
}

export default AllProducts
