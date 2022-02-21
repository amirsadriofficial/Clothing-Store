import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '../../card/Card'
import Placeholder from '../../placeholder/Placeholder'
import Products from '../../../utils/shoes-products'

const Shoes = () => {
  const [placeholder, setPlaceholder] = useState(false)
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
        ? Products.map((product) => <Card data={product} />)
        : numOfPlaceholder.map((PlaceholderItems) => PlaceholderItems)}
    </Grid>
  )
}

export default Shoes
