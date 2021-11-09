import React from 'react'
// import PropTypes from 'prop-types'
import SliderComponent from './Slider'
import Banner from './Banner'
import ProductOverview from './ProductOverview'

const Home = () => {
  return (
    <>
      <SliderComponent />
      <Banner />
      <ProductOverview />
    </>
  )
}

// Home.propTypes = { settings: PropTypes.node.isRequired }

export default Home
