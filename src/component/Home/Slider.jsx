import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
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
  )
}

Slider.propTypes = { settings: PropTypes.node.isRequired }

export default SliderComponent
