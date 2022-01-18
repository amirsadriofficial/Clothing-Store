import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'

const Slider = () => {
  return (
    <Carousel>
      <Slide1 />
      <Slide2 />
      <Slide3 />
    </Carousel>
  )
}

export default Slider
