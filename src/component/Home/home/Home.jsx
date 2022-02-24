import React, { Suspense } from 'react'
import Slider from '../landing-slider/Slider'
import Banner1 from '../banner/Banner1'
import ProductOverview from '../product-overview/ProductOverview'

const Home = () => {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <Slider />
      <Banner1 />
      <ProductOverview />
    </Suspense>
  )
}

export default Home
