import React from 'react'
// import PropTypes from 'prop-types'
import Slider from './landing-slider/Slider'
import Banner1 from './banner/Banner1'
import ProductOverview from './ProductOverview'

const Home = () => {
  return (
    <>
      <Slider />
      <Banner1 />
      <ProductOverview />
    </>
  )
}

// Home.propTypes = { settings: PropTypes.node.isRequired }

export default Home
