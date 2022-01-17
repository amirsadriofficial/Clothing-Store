import React from 'react'
// import PropTypes from 'prop-types'
import Slider from './slider/Slider'
import Banner from './Banner'
import ProductOverview from './ProductOverview'
import Shop from '../Shop/Shop'

const Home = () => {
  return (
    <>
      <Slider />
      <Banner />
      <ProductOverview />
      <Shop />
    </>
  )
}

// Home.propTypes = { settings: PropTypes.node.isRequired }

export default Home
