import React from 'react'
// import PropTypes from 'prop-types'
import Slider from './slider/Slider'
import Banner from './Banner'
import ProductOverview from './ProductOverview'

const Home = () => {
  return (
    <>
      <Slider />
      <Banner />
      <ProductOverview />
    </>
  )
}

// Home.propTypes = { settings: PropTypes.node.isRequired }

export default Home
