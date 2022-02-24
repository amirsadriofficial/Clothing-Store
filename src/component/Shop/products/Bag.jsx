import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '../../card/Card'
import Placeholder from '../../placeholder/Placeholder'
import Products from '../../../utils/bags-products'

const Bag = ({ filter }) => {
  const [placeholder, setPlaceholder] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(Products)
  useEffect(() => {
    if (filter === 'ALL') {
      setFilteredProducts(Products)
    } else if (filter === 'UP_TO_100') {
      const UpTo100 = Products.filter((product) => product.price < 100)
      setFilteredProducts(UpTo100)
    } else if (filter === 'ABOVE_100') {
      const Above100 = Products.filter((product) => product.price > 100)
      setFilteredProducts(Above100)
    }
  }, [filter])
  const numOfPlaceholder = []
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < Products.length; i++) {
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

export default Bag
