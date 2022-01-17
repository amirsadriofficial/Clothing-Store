import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import SlideOne from '../../images/slide/slide-01.jpg'
import SlideTwo from '../../images/slide/slide-02.jpg'
import SlideThree from '../../images/slide/slide-03.jpg'

const useStyles = makeStyles(() => ({
  responsive: {
    width: '100%',
    height: 'auto',
  },
  descriptionPosition: {
    position: 'absolute',
    bottom: '350px',
    left: '200px',
  },
  buttonStyle: {
    backgroundColor: '#717fe0',
    borderRadius: '25px',
    marginTop: '35px',
    marginBottom: '1px',
  },
}))

const SliderComponent = () => {
  const classes = useStyles()

  return (
    <Carousel autoPlay={false}>
      <div>
        <img src={SlideOne} alt="SlideOne" className={classes.responsive} />
        <Grid className={classes.descriptionPosition}>
          <h2>Woman Collection 2022</h2>
          <p>NEW SEASON</p>
          <Button
            className={clsx(classes.buttonStyle, classes.buttonResponsiveStyle)}
            size="large"
            variant="contained"
            color="primary"
          >
            Shop Now
          </Button>
        </Grid>
      </div>
      <div>
        <img src={SlideTwo} alt="SlideTwo" className={classes.responsive} />
        <div className={classes.descriptionPosition}>
          <h2>Man New-Season</h2>
          <p>JACKETS & COATS</p>
          <Button
            className={clsx(classes.buttonStyle, classes.buttonResponsiveStyle)}
            size="large"
            variant="contained"
            color="primary"
          >
            Shop Now
          </Button>
        </div>
      </div>
      <div>
        <img src={SlideThree} alt="SlideThree" className={classes.responsive} />
        <div className={classes.descriptionPosition}>
          <h2>Man Collection 2022</h2>
          <p>NEW ARRIVALS</p>
          <Button
            className={clsx(classes.buttonStyle, classes.buttonResponsiveStyle)}
            size="large"
            variant="contained"
            color="primary"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </Carousel>
  )
}

export default SliderComponent
