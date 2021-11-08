import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // slickPrev: true,
    // slickNext: true,
  }
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>
        <div id="slideOne" className="slide-landing-page">
          <div>A</div>
        </div>
        <div id="slideTwo" className="slide-landing-page">
          <div>B</div>
        </div>
        <div id="slideThree" className="slide-landing-page">
          <div>C</div>
        </div>
      </Slider>
      <div className="container my-5 d-flex flex-row justify-content-center align-item-center">
        <div id="bannerOne" className="p-4">
          {/* <span>Womenn</span>
          <span>Spring 2018</span> */}
        </div>
        <div id="bannerTwo" className="p-4">
          {/* <span>Men</span>
          <span>Spring 2018</span> */}
        </div>
        <div id="bannerThree" className="p-4">
          {/* <span>Accessories</span>
          <span>New Trend</span> */}
        </div>
      </div>
    </>
  )
}

Home.propTypes = { settings: PropTypes.node.isRequired }

export default Home
