import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '../../card/Card'
import Placeholder from '../../placeholder/Placeholder'
import Products from '../../../utils/all-products'

const AllProducts = (filter) => {
  const [placeholder, setPlaceholder] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(Products)
  const UpTo100 = Products.filter((product) => product.price < 100)
  const Above100 = Products.filter((product) => product.price > 100)
  console.log('Filter:', filter)
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
  const numOfPlaceholder = []
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < filteredProducts.length; i++) {
    numOfPlaceholder.push(<Placeholder />)
  }
  setTimeout(() => {
    setPlaceholder(true)
  }, 500)

  return (
    <Grid container spacing={3}>
      {placeholder
        ? filteredProducts.map((product) => <Card data={product} />)
        : numOfPlaceholder.map((PlaceholderItems) => PlaceholderItems)}
    </Grid>
  )
}

export default AllProducts
