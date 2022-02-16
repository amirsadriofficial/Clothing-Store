import React from 'react'
import Container from '@material-ui/core/Container'
import WomanSlider from '../products-slider/WomanSlider'
import ManSlider from '../products-slider/ManSlider'
import BagSlider from '../products-slider/BagSlider'
import ShoesSlider from '../products-slider/ShoesSlider'
import WatchesSlider from '../products-slider/WatchesSlider'
import Banner2 from '../banner/Banner2'
import Banner3 from '../banner/Banner3'
import Banner4 from '../banner/Banner4'
import Banner5 from '../banner/Banner5'

const ProductOverview = () => {
  return (
    <Container>
      <h2 style={{ fontSize: '36px' }}>Products Overview</h2>
      <WomanSlider />
      <Banner2 />
      <ManSlider />
      <Banner3 />
      <BagSlider />
      <Banner4 />
      <ShoesSlider />
      <Banner5 />
      <WatchesSlider />
    </Container>
  )
}

export default ProductOverview
