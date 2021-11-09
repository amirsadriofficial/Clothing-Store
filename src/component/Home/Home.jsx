import React from 'react'
// import PropTypes from 'prop-types'
import SliderComponent from './Slider'
import Banner from './Banner'

const Home = () => {
  return (
    <>
      <SliderComponent />
      <Banner />
      <section className="container">
        <div>
          <h2>Product Overview</h2>
        </div>
      </section>
    </>
  )
}

// Home.propTypes = { settings: PropTypes.node.isRequired }

export default Home
