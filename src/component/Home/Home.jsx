import React from 'react'
import PropTypes from 'prop-types'
import SliderComponent from './Slider'
import Banner from './Banner'
import ProductOverview from './ProductOverview'
import Shop from '../Shop/Shop'

const Home = () => {
  return (
    <>
      <SliderComponent />
      <Banner />
      <ProductOverview />
      <Shop />
    </>
  )
}

// Home.propTypes = { settings: PropTypes.node.isRequired }

export default Home
