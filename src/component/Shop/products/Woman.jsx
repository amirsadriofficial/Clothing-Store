import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '../../card/Card'
import Placeholder from '../../placeholder/Placeholder'
import Products from '../../../utils/women-products'

const Woman = () => {
  const [placeholder, setPlaceholder] = useState(false)
  const numOfPlaceholder = []
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < Products.length; i++) {
    numOfPlaceholder.push(<Placeholder />)
  }
  setTimeout(() => {
    setPlaceholder(true)
  }, 1000)

  return (
    <Grid container spacing={3}>
      {placeholder
        ? Products.map((product) => <Card data={product} />)
        : numOfPlaceholder.map((PlaceholderItems) => PlaceholderItems)}
    </Grid>
  )
}

export default Woman
