import React from 'react'
import Carousel from 'react-material-ui-carousel'
import SlideOne from '../../images/slide/slide-01.jpg'

const SliderComponent = () => {
  return (
    <Carousel>
      <img src={SlideOne} alt="SlideOne" />
    </Carousel>
  )
}

export default SliderComponent
