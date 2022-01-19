import React from 'react'
import Container from '@material-ui/core/Container'
import WomanSlider from './products-slider/WomanSlider'
import ManSlider from './products-slider/ManSlider'
import BagSlider from './products-slider/BagSlider'
import ShoesSlider from './products-slider/ShoesSlider'
import WatchesSlider from './products-slider/WatchesSlider'

const ProductOverview = () => {
  return (
    <Container>
      <h2 style={{ fontSize: '36px' }}>Products Overview</h2>
      <WomanSlider />
      <ManSlider />
      <BagSlider />
      <ShoesSlider />
      <WatchesSlider />
    </Container>
  )
}

export default ProductOverview
