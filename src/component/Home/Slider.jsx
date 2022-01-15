import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core/styles'
import SlideOne from '../../images/slide/slide-01.jpg'
import SlideTwo from '../../images/slide/slide-02.jpg'
import SlideThree from '../../images/slide/slide-03.jpg'

const useStyles = makeStyles(() => ({
  carousel: {
    height: '50vh',
  },
}))

const SliderComponent = () => {
  const classes = useStyles()

  return (
    <Carousel className={classes.carousel}>
      <img src={SlideOne} alt="SlideOne" />
      <img src={SlideTwo} alt="SlideOne" />
      <img src={SlideThree} alt="SlideOne" />
    </Carousel>
  )
}

export default SliderComponent
